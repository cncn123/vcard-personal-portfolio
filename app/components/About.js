"use client";
import { useState } from "react";
import {
  BrainCircuit,
  Code2,
  Database,
  Shield,
  Quote,
  X,
} from "lucide-react";

const SERVICE_ICONS = [BrainCircuit, Code2, Database, Shield];
const PARTNER_LOGOS = [
  "/logo-1-color.png",
  "/logo-2-color.png",
  "/logo-3-color.png",
  "/logo-4-color.png",
  "/logo-5-color.png",
  "/logo-6-color.png",
];

export default function About({ t }) {
  const [modal, setModal] = useState(null);

  return (
    <article className="page-section">
      <header>
        <h2 className="article-title">{t.aboutTitle}</h2>
      </header>

      {/* About text */}
      <section className="about-text">
        <p>{t.aboutP1}</p>
        <p>{t.aboutP2}</p>
        <p>{t.aboutP3}</p>
        <p>{t.aboutP4}</p>
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
                  <img src={h.avatar} alt="" width={60} height={60} />
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
        <div className="modal-overlay" onClick={() => setModal(null)}>
          <section
            className="testimonials-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close-btn"
              type="button"
              onClick={() => setModal(null)}
              aria-label="关闭"
            >
              <X size={20} />
            </button>
            <div className="modal-img-wrapper">
              <figure className="modal-avatar-box">
                <img src={modal.avatar} alt="" width={80} height={80} />
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

      {/* Partners */}
      <section className="clients">
        <h3 className="section-title">{t.partnersTitle}</h3>
        <ul className="clients-list">
          {PARTNER_LOGOS.map((src, i) => (
            <li key={i} className="clients-item">
              <a href="#">
                <img src={src} alt="" />
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
