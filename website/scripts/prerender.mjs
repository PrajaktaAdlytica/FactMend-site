import { createServer } from "vite";
import fs from "node:fs/promises";
import path from "node:path";
import React from "react";
import { renderToString } from "react-dom/server";
import { MemoryRouter } from "react-router-dom";
const server = await createServer({
  server: { middlewareMode: true },
  appType: "custom",
});
try {
  const { default: App } = await server.ssrLoadModule("/src/App.jsx");
  const { siteRoutes, titleFor, pages, modules, resources } =
    await server.ssrLoadModule("/src/data.js");
  const template = await fs.readFile("dist/index.html", "utf8");
  if (!template.includes('<div id="root"></div>'))
    throw new Error(
      "Run vite build before prerendering to obtain a fresh HTML template.",
    );
  for (const route of [...siteRoutes, "/404"]) {
    const body = renderToString(
      React.createElement(
        MemoryRouter,
        { initialEntries: [route] },
        React.createElement(App),
      ),
    );
    const description =
      pages[route]?.lead ||
      modules.find((m) => route.endsWith(m.slug))?.description ||
      resources.find((r) => route.endsWith(r.slug))?.description ||
      "Factmend connects scope, source history, retention and erasure evidence around persistent assistant memory.";
    const escaped = description
      .replaceAll("&", "&amp;")
      .replaceAll('"', "&quot;");
    let html = template
      .replace('<div id="root"></div>', `<div id="root">${body}</div>`)
      .replace(
        /<title>.*?<\/title>/,
        `<title>${titleFor(route)} — Factmend</title>`,
      )
      .replace(
        /(<meta property="og:title" content=")[^"]*/,
        `$1${titleFor(route)} — Factmend`,
      );
    html = html
      .replace(/(<meta name="description" content=")[^"]*/, `$1${escaped}`)
      .replace(
        /(<meta property="og:description" content=")[^"]*/,
        `$1${escaped}`,
      );
    if (
      route.startsWith("/demo") ||
      ["/sign-in", "/reset-password", "/404"].includes(route)
    )
      html = html.replace(
        "</head>",
        '<meta name="robots" content="noindex,follow"/></head>',
      );
    if (process.env.SITE_URL) {
      const base = process.env.SITE_URL.replace(/\/$/, "");
      html = html
        .replace(
          "</head>",
          `<link rel="canonical" href="${base}${route}"/></head>`,
        )
        .replace(
          'content="/assets/social/factmend-open-graph.png"',
          `content="${base}/assets/social/factmend-open-graph.png"`,
        );
    }
    const filename =
      route === "/"
        ? "dist/index.html"
        : route === "/404"
          ? "dist/404.html"
          : path.join("dist", route, "index.html");
    await fs.mkdir(path.dirname(filename), { recursive: true });
    await fs.writeFile(filename, html);
  }
  if (process.env.SITE_URL)
    await fs.writeFile(
      "dist/sitemap.xml",
      `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${siteRoutes.map((r) => `<url><loc>${process.env.SITE_URL.replace(/\/$/, "")}${r === "/" ? "/" : r}</loc></url>`).join("")}</urlset>`,
    );
  await fs.writeFile(
    "dist/robots.txt",
    "User-agent: *\nAllow: /\n" +
      (process.env.SITE_URL
        ? "Sitemap: " +
          process.env.SITE_URL.replace(/\/$/, "") +
          "/sitemap.xml\n"
        : ""),
  );
  console.log(`Prerendered ${siteRoutes.length} routes and custom 404.`);
} finally {
  await server.close();
}
