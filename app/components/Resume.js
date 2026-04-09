import { Briefcase, GraduationCap } from "lucide-react";

export default function Resume({ t }) {
  return (
    <article className="page-section">
      <header>
        <h2 className="article-title">{t.resumeTitle}</h2>
      </header>

      {/* Certifications Timeline */}
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box"><GraduationCap size={18} /></div>
          <h3>{t.certsTitle}</h3>
        </div>
        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="timeline-item-title">{t.certsItemTitle}</h4>
            <span className="timeline-span">{t.certsSpan}</span>
            <p className="timeline-text">{t.certsText}</p>
          </li>
        </ol>
      </section>

      {/* Experience Timeline */}
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box"><Briefcase size={18} /></div>
          <h3>{t.expTitle}</h3>
        </div>
        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="timeline-item-title">{t.expItemTitle}</h4>
            <span className="timeline-span">{t.expSpan}</span>
            <p className="timeline-text">{t.expText}</p>
          </li>
        </ol>
      </section>

      {/* Skills */}
      <section className="skill">
        <h3 className="section-title">{t.skillsTitle}</h3>
        <ul className="skills-list content-card">
          {t.skills.map((sk) => (
            <li key={sk.name} className="skills-item">
              <div className="skill-title-wrapper">
                <h5>{sk.name}</h5>
                <data value={sk.pct}>{sk.pct}%</data>
              </div>
              <div className="skill-progress-bg">
                <div
                  className="skill-progress-fill"
                  style={{ width: `${sk.pct}%` }}
                />
              </div>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
