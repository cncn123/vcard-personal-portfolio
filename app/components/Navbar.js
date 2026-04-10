"use client";
import { Languages, Moon, Sun } from "lucide-react";

const PAGES = ["about", "resume", "portfolio", "blog"];
const NAV_KEYS = ["navAbout", "navResume", "navPortfolio", "navBlog"];

export default function Navbar({ t, activePage, setActivePage, locale, setLocale, theme, setTheme }) {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        {PAGES.map((page, i) => (
          <li key={page} className="navbar__item">
            <button
              type="button"
              className={`navbar__link${activePage === page ? " active" : ""}`}
              onClick={() => { setActivePage(page); window.scrollTo(0, 0); }}
            >
              {t[NAV_KEYS[i]]}
            </button>
          </li>
        ))}

        <li className="navbar__item navbar__actions">
          <button
            type="button"
            className="navbar__link navbar__lang"
            onClick={() => setLocale(locale === "zh-CN" ? "zh-TW" : "zh-CN")}
            aria-label="切换语言"
          >
            <Languages size={14} />
            {t.langToggle}
          </button>

          <button
            type="button"
            className="navbar__link navbar__theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="切换主题"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </li>
      </ul>
    </nav>
  );
}
