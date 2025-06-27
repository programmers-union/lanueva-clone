import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface ArticleCard4Props {
  image: string;
  category: string;
  title: string;
  author: string;
}

const ArticleCard4: React.FC<ArticleCard4Props> = ({
  image,
  category,
  title,
  author,
}) => {
  return (
    <div className="ArticleCard4-container row g-3 align-items-start mb-3">
      {/* Image column */}
      <div className="col-4 position-relative">
        <img src={image} alt={title} className="img-fluid rounded ArticleCard4-image" />
        <span className="ArticleCard4-play-icon">&#9658;</span>
      </div>

      {/* Text column */}
      <div className="col-8">
        <p className="text-uppercase text-muted fw-semibold mb-1 ArticleCard4-category">{category}</p>
        <h6 className="fw-bold mb-2 ArticleCard4-title">{title}</h6>
        <p className="text-uppercase text-muted fw-semibold ArticleCard4-author">{author}</p>
      </div>
    </div>
  );
};

export default ArticleCard4;
