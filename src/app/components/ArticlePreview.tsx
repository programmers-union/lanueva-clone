import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

interface ArticlePreviewProps {
  title: string;
  shortdescription: string;
}

const ArticlePreview: React.FC<ArticlePreviewProps> = ({
  title,
  shortdescription,
}) => {
  return (
    <div className="ArticlePreview-container container py-4">
      {/* Location */}
      <p className="ArticlePreview-location text-uppercase text-muted fw-semibold mb-2">
        US
      </p>

      {/* Title */}
      <h1 className="ArticlePreview-title fw-bold mb-3">
        {title}
        {/* <span className="ArticlePreview-highlight"> {highlight}</span> */}
      </h1>

      {/* Author */}
      <p className="ArticlePreview-author text-uppercase text-muted fw-semibold mb-2">
        Reporter
      </p>

      {/* Summary */}
      <p className="ArticlePreview-summary border-start ps-3 mt-3">
        {shortdescription}
      </p>
    </div>
  );
};

export default ArticlePreview;
