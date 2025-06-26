import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

interface ArticleCard3Props {
  image: string;
  category: string;
  title: string;
  shortdescription: string;
}

const ArticleCard3: React.FC<ArticleCard3Props> = ({
  image,
  category,
  title,
  shortdescription,
}) => {
  return (
    <div className="ArticleCard3-container container p-0 mb-4">
      {/* Image */}
      <img
        src={image}
        alt={title}
        className=" w-100 mb-3 ArticleCard3-image"
      />

      {/* Category */}
      <p className="text-uppercase text-muted fw-semibold mb-1">{category}</p>

      {/* Title */}
      <h3 className="fw-bold mb-2 ArticleCard3-title">{title}</h3>

      {/* Author */}
      <p className="text-uppercase text-muted fw-semibold mb-2">Reporter</p>

      {/* Descriptions */}
      <hr className="my-2" />
      <p className="mb-1 ArticleCard3-desc">{shortdescription}</p>
    </div>
  );
};

export default ArticleCard3;
