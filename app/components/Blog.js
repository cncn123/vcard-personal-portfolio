export default function Blog({ t }) {
  return (
    <article className="page-section">
      <header>
        <h2 className="article-title">{t.blogTitle}</h2>
      </header>

      <section className="blog-posts">
        <ul className="blog-posts-list">
          {t.posts.map((post) => (
            <li key={post.title} className="blog-post-item">
              <a href="#">
                <figure className="blog-banner-box">
                  <img src={post.img} alt="" loading="lazy" />
                </figure>
                <div className="blog-content">
                  <div className="blog-meta">
                    <p className="blog-category">{t.blogCat}</p>
                    <span className="dot" />
                    <time dateTime={post.dateTime}>{post.date}</time>
                  </div>
                  <h3 className="blog-item-title">{post.title}</h3>
                  <p className="blog-text">{post.excerpt}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
