import { useFetch } from '../hooks/useApi';
import type { NewsItem, PaginatedResponse } from '../types';
import './shared.css';
import './News.css';

const categories = ['All', 'Achievement', 'Research', 'Global', 'Events', 'Academic'];

export default function News() {
  const { data: res, loading } = useFetch<PaginatedResponse<NewsItem>>('/news');
  const news = res?.data;

  return (
    <main>
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="container page-hero-content">
          <span className="section-label" style={{ color: 'var(--accent-light)' }}>News & Events</span>
          <h1 className="page-hero-title">Latest from UGCSL</h1>
          <p>Stay updated with the latest news, events, and achievements from our campus community.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="news-categories">
            {categories.map((c) => (
              <button key={c} className="filter-tab">{c}</button>
            ))}
          </div>

          {loading ? (
            <div className="spinner" />
          ) : (
            <div className="news-grid">
              {news?.map((item: NewsItem, i: number) => (
                <article key={item._id} className={`news-article card ${i === 0 ? 'featured' : ''}`}>
                  <div className="news-article-img">
                    <span>{item.category[0]}</span>
                    <div className="news-article-cat">{item.category}</div>
                  </div>
                  <div className="news-article-body">
                    <h3>{item.title}</h3>
                    <p>{item.excerpt}</p>
                    <div className="news-article-footer">
                      <span>{new Date(item.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                      <a href="#">Read More →</a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
