"use client";
import { useState } from "react";
import { ChevronDown, Eye } from "lucide-react";
import Image from "next/image";

const FILTERS = ["all", "web design", "applications", "web development"];
const FILTER_KEYS = ["filterAll", "filterWebDesign", "filterApps", "filterWebDev"];

export default function Portfolio({ t }) {
  const [active, setActive] = useState("all");
  const [selectOpen, setSelectOpen] = useState(false);

  const visible = t.projects.filter(
    (p) => active === "all" || p.cat === active
  );

  const activeLabel = active === "all"
    ? t.filterAll
    : t.catLabels[active];

  return (
    <article className="page-section">
      <header>
        <h2 className="article-title">{t.portfolioTitle}</h2>
      </header>

      {/* Desktop filter buttons */}
      <ul className="filter-list">
        {FILTERS.map((f, i) => (
          <li key={f} className="filter-item">
            <button
              type="button"
              className={`filter-btn${active === f ? " active" : ""}`}
              onClick={() => setActive(f)}
            >
              {t[FILTER_KEYS[i]]}
            </button>
          </li>
        ))}
      </ul>

      {/* Mobile select */}
      <div className="filter-select-box">
        <button
          type="button"
          className={`filter-select${selectOpen ? " active" : ""}`}
          onClick={() => setSelectOpen((v) => !v)}
        >
          <span className="select-value">{activeLabel}</span>
          <ChevronDown size={16} />
        </button>

        {selectOpen && (
          <ul className="select-list">
            {FILTERS.map((f, i) => (
              <li key={f} className="select-item">
                <button
                  type="button"
                  onClick={() => { setActive(f); setSelectOpen(false); }}
                  className={active === f ? "active" : ""}
                >
                  {t[FILTER_KEYS[i]]}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Project grid */}
      <ul className="project-list">
        {visible.map((p) => (
          <li key={p.title} className="project-item">
            <a href="#">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <Eye size={18} />
                </div>
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  sizes="(max-width: 580px) 100vw, (max-width: 900px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
              </figure>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-category">{t.catLabels[p.cat]}</p>
            </a>
          </li>
        ))}
      </ul>
    </article>
  );
}
