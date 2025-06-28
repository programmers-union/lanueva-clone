import React, { useMemo } from 'react';

interface DetailComponentProps {
  title: string;
  shortDescription: string;
  description: string;          // full HTML string or markdown‑to‑HTML
  category: string;
  image?: string;
  imageCaption?: string;
  author?: string;
  publishedAt?: string;         // ISO string; falls back to today
  readingWpm?: number;          // words‑per‑minute to calc read time
}

const DetailComponent: React.FC<DetailComponentProps> = ({
  title,
  shortDescription,
  description,
  category,
  image = '/placeholder.jpg',
  imageCaption,
  author = 'News Desk',
  publishedAt,
  readingWpm = 225,
}) => {
  /** fallback to current date in US long‑form style */
  const date = new Date(publishedAt ?? Date.now()).toLocaleDateString(
    'en-US',
    { year: 'numeric', month: 'long', day: 'numeric' }
  );

  /** quick client‑side read‑time calculation */
  const readTime = useMemo(() => {
    const words = description.replace(/<[^>]+>/g, '').split(/\s+/).length;
    return Math.max(1, Math.round(words / readingWpm));
  }, [description, readingWpm]);

  return (
    <article className="detail-component py-5">
      <div className="container-lg">
        <header className="mb-4 text-center text-lg-start">
          {/* category */}
          <span
            className="badge rounded-pill bg-primary fw-semibold small px-3 py-2"
            aria-label={`Category: ${category}`}
          >
            {category}
          </span>

          {/* title */}
          <h1 className="fw-bold display-5 mt-3 mb-2">{title}</h1>

          {/* dek / sub‑headline */}
          <p className="lead text-muted mb-3">{shortDescription}</p>

          {/* meta */}
          <ul className="list-inline small text-muted mb-0">
            <li className="list-inline-item me-3">
              <i className="bi bi-person-fill me-1" aria-hidden />
              {author}
            </li>
            <li className="list-inline-item me-3">
              <i className="bi bi-calendar-event me-1" aria-hidden />
              {date}
            </li>
            <li className="list-inline-item">
              <i className="bi bi-clock me-1" aria-hidden />
              {readTime}‑min read
            </li>
          </ul>
        </header>

        {/* hero image */}
        {image && (
          <figure className="position-relative overflow-hidden rounded shadow-sm mb-4">
            <img
              src={image}
              alt={title}
              className="w-100 img-fluid"
              style={{ objectFit: 'cover', maxHeight: '520px' }}
            />
            {imageCaption && (
              <figcaption className="figure-caption fst-italic pt-2 text-center text-muted small">
                {imageCaption}
              </figcaption>
            )}
          </figure>
        )}

        {/* share buttons (swap icons/platforms as you like) */}
        <div className="d-flex gap-2 mb-4">
          <a
            className="btn btn-outline-secondary btn-sm"
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
              typeof window !== 'undefined' ? window.location.href : ''
            )}&text=${encodeURIComponent(title)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-twitter me-1" aria-hidden />Tweet
          </a>
          <a
            className="btn btn-outline-secondary btn-sm"
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
              typeof window !== 'undefined' ? window.location.href : ''
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-facebook me-1" aria-hidden />Share
          </a>
        </div>

        {/* article body */}
        <section
          className="detail-component__content fs-5 lh-lg"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </article>
  );
};

export default DetailComponent;
