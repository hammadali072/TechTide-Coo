import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import LandingPage from "./pages/landing-page";

const routePlaceholders = [
  "/about",
  "/company-profile",
  "/services",
  "/products",
  "/blog",
  "/career",
  "/contact",
  "/signin",
  "/privacy-policy",
  "/terms-of-service",
  "/cookie-policy",
];

function PlaceholderPage() {
  const { pathname } = useLocation();
  const title = pathname.slice(1).replaceAll("-", " ") || "page";

  return (
    <main className="container flex min-h-screen items-center py-32">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">TechTide</p>
        <h1 className="heading-h1 mt-5 capitalize">{title}</h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-black/60">This page is part of the planned site structure and will be composed from dedicated sections.</p>
      </div>
    </main>
  );
}

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Routes>
      <Route index element={<LandingPage />} />
      <Route path="/services/:slug" element={<PlaceholderPage />} />
      <Route path="/blog/:slug" element={<PlaceholderPage />} />
      {routePlaceholders.map((path) => (
        <Route key={path} path={path} element={<PlaceholderPage />} />
      ))}
      <Route path="*" element={<PlaceholderPage />} />
    </Routes>
  );
}

export default App;
