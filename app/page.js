"use client";
import { useEffect, useMemo, useState } from "react";
import { COPY } from "./lib/copy";
import Sidebar from "./components/Sidebar";
import Navbar  from "./components/Navbar";
import About   from "./components/About";
import Resume  from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Blog    from "./components/Blog";
import Contact from "./components/Contact";

export default function HomePage() {
  const [locale,     setLocale]     = useState("zh-CN");
  const [theme,      setTheme]      = useState("dark");
  const [activePage, setActivePage] = useState("about");

  /* 从 localStorage 恢复偏好 */
  useEffect(() => {
    const sl = localStorage.getItem("locale");
    const st = localStorage.getItem("theme");
    if (sl === "zh-CN" || sl === "zh-TW") setLocale(sl);
    if (st === "dark" || st === "light") {
      setTheme(st);
    } else if (window.matchMedia?.("(prefers-color-scheme: light)").matches) {
      setTheme("light");
    }
  }, []);

  /* 同步 data-theme 到 <html> */
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  /* 同步 lang / locale */
  useEffect(() => {
    const t = COPY[locale];
    document.documentElement.lang = t.htmlLang;
    document.title = t.metaTitle;
    localStorage.setItem("locale", locale);
  }, [locale]);

  const t = useMemo(() => COPY[locale], [locale]);

  return (
    <div className="layout">
      <Sidebar t={t} />

      <div className="main-content">
        <Navbar
          t={t}
          activePage={activePage}
          setActivePage={setActivePage}
          locale={locale}
          setLocale={setLocale}
          theme={theme}
          setTheme={setTheme}
        />

        {activePage === "about"     && <About     t={t} />}
        {activePage === "resume"    && <Resume    t={t} />}
        {activePage === "portfolio" && <Portfolio t={t} />}
        {activePage === "blog"      && <Blog      t={t} />}
        {activePage === "contact"   && <Contact   t={t} />}
      </div>
    </div>
  );
}
