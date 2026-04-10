"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  BrainCircuit,
  Code2,
  Database,
  Shield,
  ShieldCheck,
  TrendingUp,
  BadgeCheck,
  Quote,
  X,
} from "lucide-react";

const SERVICE_ICONS = [BrainCircuit, Code2, Database, Shield];

export default function About({ t }) {
  const [modal, setModal] = useState(null);
  const closeBtnRef = useRef(null);
  const lastFocusRef = useRef(null);

  const HIGHLIGHT_ICONS = {
    governance: ShieldCheck,
    impact: TrendingUp,
  };

  useEffect(() => {
    if (!modal) return;
    lastFocusRef.current = document.activeElement;
    closeBtnRef.current?.focus();

    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        setModal(null);
        return;
      }

      if (e.key === "Tab") {
        const root = document.querySelector("[data-modal-root]");
        if (!root) return;
        const focusables = root.querySelectorAll(
          'button,[href],input,select,textarea,[tabindex]:not([tabindex=\"-1\"])'
        );
        if (!focusables.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [modal]);

  useEffect(() => {
    if (modal) return;
    const prev = lastFocusRef.current;
    if (prev && typeof prev.focus === "function") prev.focus();
  }, [modal]);

  return (
    <article className="page-section">
      <header>
        <h2 className="article-title">{t.aboutTitle}</h2>
      </header>

      {/* About text */}
      <section className="about-text">
        <p>{t.aboutP1}</p>
        <p>{t.aboutP2}</p>
        <p>{t.aboutP5}</p>
      </section>

      {/* Services */}
      <section className="service">
        <h3 className="section-title">{t.serviceTitle}</h3>
        <ul className="service-list">
          {t.services.map((svc, i) => {
            const Icon = SERVICE_ICONS[i];
            return (
              <li key={svc.title} className="service-item">
                <div className="service-icon-box">
                  <Icon size={32} />
                </div>
                <div className="service-content-box">
                  <h4 className="service-item-title">{svc.title}</h4>
                  <p className="service-item-text">{svc.desc}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </section>

      {/* Highlights / Testimonials */}
      <section className="testimonials">
        <h3 className="section-title">{t.highlightsTitle}</h3>
        <ul className="testimonials-list">
          {t.highlights.map((h) => (
            <li key={h.name} className="testimonials-item">
              <div
                className="content-card"
                role="button"
                tabIndex={0}
                onClick={() => setModal(h)}
                onKeyDown={(e) => e.key === "Enter" && setModal(h)}
              >
                <figure className="testimonials-avatar-box">
                  {h.avatar ? (
                    <Image src={h.avatar} alt="" width={60} height={60} />
                  ) : (
                    (() => {
                      const Icon = HIGHLIGHT_ICONS[h.icon] ?? Quote;
                      return (
                        <div className="testimonials-avatar-icon" aria-hidden="true">
                          <Icon size={26} />
                        </div>
                      );
                    })()
                  )}
                </figure>
                <h4 className="testimonials-item-title">{h.name}</h4>
                <div className="testimonials-text">
                  <p>{h.text}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Modal */}
      {modal && (
        <div className="modal-overlay" onClick={() => setModal(null)} aria-hidden="true">
          <section
            className="testimonials-modal"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={modal.name}
            data-modal-root
          >
            <button
              className="modal-close-btn"
              type="button"
              onClick={() => setModal(null)}
              aria-label="关闭"
              ref={closeBtnRef}
            >
              <X size={20} />
            </button>
            <div className="modal-img-wrapper">
              <figure className="modal-avatar-box">
                {modal.avatar ? (
                  <Image src={modal.avatar} alt="" width={80} height={80} />
                ) : (
                  (() => {
                    const Icon = HIGHLIGHT_ICONS[modal.icon] ?? Quote;
                    return (
                      <div className="modal-avatar-icon" aria-hidden="true">
                        <Icon size={34} />
                      </div>
                    );
                  })()
                )}
              </figure>
              <Quote size={28} className="modal-quote-icon" />
            </div>
            <div className="modal-content">
              <h4 className="modal-title">{modal.name}</h4>
              <p>{modal.text}</p>
            </div>
          </section>
        </div>
      )}

      {/* Certificates showcase */}
      <section className="certs-showcase">
        <h3 className="section-title">{t.certShowcaseTitle ?? t.certsTitle}</h3>
        <ul className="certs-list">
          {(t.certShowcase ?? []).map((label) => (
            <li key={label} className="certs-item">
              <span className="certs-item-icon" aria-hidden="true">
                <BadgeCheck size={16} />
              </span>
              <span className="certs-item-label">{label}</span>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
