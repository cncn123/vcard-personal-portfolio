"use client";
import { useState } from "react";
import { Send } from "lucide-react";

export default function Contact({ t }) {
  const [fields, setFields] = useState({ name: "", email: "", message: "" });

  const valid =
    fields.name.trim() !== "" &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email) &&
    fields.message.trim() !== "";

  const update = (k) => (e) => setFields((f) => ({ ...f, [k]: e.target.value }));

  return (
    <article className="page-section">
      <header>
        <h2 className="article-title">{t.contactTitle}</h2>
      </header>

      {/* Map */}
      <section className="mapbox">
        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59049.07528271423!2d114.11714604999999!3d22.3506272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34040639f7117743%3A0xe91e1f0346da931c!2sHong%20Kong!5e0!3m2!1szh-CN!2shk!4v1618839890541!5m2!1szh-CN!2shk"
            width="400"
            height="300"
            loading="lazy"
            title={t.mapTitle}
            style={{ border: 0 }}
            allowFullScreen
          />
        </figure>
      </section>

      {/* Form */}
      <section className="contact-form">
        <h3 className="section-title">{t.formTitle}</h3>

        <form
          className="form"
          onSubmit={(e) => e.preventDefault()}
          noValidate
        >
          <div className="input-wrapper">
            <input
              type="text"
              name="fullname"
              className="form-input"
              placeholder={t.phName}
              value={fields.name}
              onChange={update("name")}
              required
            />
            <input
              type="email"
              name="email"
              className="form-input"
              placeholder={t.phEmail}
              value={fields.email}
              onChange={update("email")}
              required
            />
          </div>

          <textarea
            name="message"
            className="form-input"
            placeholder={t.phMsg}
            value={fields.message}
            onChange={update("message")}
            required
          />

          <button
            type="submit"
            className="form-btn"
            disabled={!valid}
          >
            <Send size={16} />
            <span>{t.sendBtn}</span>
          </button>
        </form>
      </section>
    </article>
  );
}
