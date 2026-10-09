import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { modules, pages, resources } from "./data";
import { Header, Footer, Motion } from "./components";
import Home from "./Home";
import { Products, ProductPage } from "./Products";
import {
  GeneralPage,
  Pricing,
  Resources,
  Article,
  Legal,
  NotFound,
} from "./Pages";
import { Assessment, SignIn, Demo } from "./Flows";
import { MotionProvider } from "./MotionContext";
export default function App() {
  return (
    <MotionProvider>
      <Site />
    </MotionProvider>
  );
}
function Site() {
  const { pathname } = useLocation();
  return (
    <>
      <Header />
      <main id="main" tabIndex="-1" key={pathname}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          {modules.map((m) => (
            <Route
              key={m.id}
              path={"/products/" + m.slug}
              element={<ProductPage module={m} />}
            />
          ))}
          {Object.keys(pages).map((path) => (
            <Route
              key={path}
              path={path}
              element={<GeneralPage path={path} />}
            />
          ))}
          <Route path="/pricing" element={<Pricing />} />
          {["/assessment", "/request-demo"].map((path) => (
            <Route key={path} path={path} element={<Assessment />} />
          ))}
          <Route path="/contact" element={<Assessment contact />} />
          <Route path="/resources" element={<Resources />} />
          {resources.map((r) => (
            <Route
              key={r.slug}
              path={"/resources/" + r.slug}
              element={<Article slug={r.slug} />}
            />
          ))}
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/reset-password" element={<SignIn recovery />} />
          <Route path="/legal/privacy" element={<Legal type="privacy" />} />
          <Route path="/legal/terms" element={<Legal type="terms" />} />
          <Route path="/privacy" element={<Legal type="privacy" />} />
          <Route path="/terms" element={<Legal type="terms" />} />
          <Route path="/demo/*" element={<Demo />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <Motion />
    </>
  );
}
