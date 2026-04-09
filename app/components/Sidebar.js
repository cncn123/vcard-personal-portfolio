"use client";
import { useState } from "react";
import Image from "next/image";
import {
  Camera,
  ChevronDown,
  ChevronUp,
  Code2,
  Globe,
  Link2,
  Mail,
  MapPin,
  Smartphone,
} from "lucide-react";

export default function Sidebar({ t }) {
  const [open, setOpen] = useState(false);

  return (
    <aside className={`sidebar${open ? " sidebar--open" : ""}`}>
      <div className="sidebar__info">
        <figure className="avatar-box">
          <Image
            src="/my-avatar.png"
            alt={t.nameDisplay}
            width={80}
            height={80}
            priority
          />
        </figure>

        <div className="info-content">
          <h1 className="sidebar__name">{t.nameDisplay}</h1>
          <p className="sidebar__role">{t.jobTitle}</p>
        </div>

        <button
          className="sidebar__toggle"
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
        >
          <span>{t.showContacts}</span>
          {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
      </div>

      <div className="sidebar__more">
        <div className="separator" />

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box"><Mail size={18} /></div>
            <div className="contact-info">
              <p className="contact-title">{t.contactEmail}</p>
              <a href="mailto:contact@example.com" className="contact-link">
                contact@example.com
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box"><Smartphone size={18} /></div>
            <div className="contact-info">
              <p className="contact-title">{t.contactPhone}</p>
              <a href="tel:+85200000000" className="contact-link">
                +852 · 请更新号码
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box"><MapPin size={18} /></div>
            <div className="contact-info">
              <p className="contact-title">{t.contactLocation}</p>
              <address>{t.contactAddress}</address>
            </div>
          </li>
        </ul>

        <div className="separator" />

        <ul className="social-list">
          <li>
            <a href="#" className="social-link" aria-label="GitHub">
              <Code2 size={18} />
            </a>
          </li>
          <li>
            <a href="#" className="social-link" aria-label="LinkedIn">
              <Link2 size={18} />
            </a>
          </li>
          <li>
            <a href="#" className="social-link" aria-label="Website">
              <Globe size={18} />
            </a>
          </li>
          <li>
            <a href="#" className="social-link" aria-label="Photos">
              <Camera size={18} />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}
