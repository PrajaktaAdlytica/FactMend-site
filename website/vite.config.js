import { defineConfig } from "vite";
import fs from "node:fs/promises";
import path from "node:path";
export default defineConfig({
  plugins: [
    {
      name: "prerendered-preview-routes",
      configurePreviewServer(server) {
        const output = path.resolve(
          server.config.root,
          server.config.build.outDir,
        );
        server.middlewares.use(async (req, res, next) => {
          const route = new URL(req.url, "http://localhost").pathname;
          if (!/^\/[a-z0-9/-]*$/i.test(route)) return next();
          let filename = path.join(output, route, "index.html");
          let status = 200;
          try {
            await fs.access(filename);
          } catch {
            filename = path.join(output, "404.html");
            status = 404;
          }
          try {
            const html = await fs.readFile(filename, "utf8");
            res.statusCode = status;
            res.setHeader("Content-Type", "text/html; charset=utf-8");
            res.setHeader("Cache-Control", "no-cache");
            res.end(html);
          } catch {
            next();
          }
        });
      },
    },
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (
            id.includes("/node_modules/gsap/") ||
            id.includes("/node_modules/lenis/")
          )
            return "motion";
          if (
            id.includes("/node_modules/react") ||
            id.includes("/node_modules/scheduler/")
          )
            return "framework";
        },
      },
    },
  },
});
