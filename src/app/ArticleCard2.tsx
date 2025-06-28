import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';


interface ArticleCard2Props {
  image: string;
  title: string;
  category:string;
  fontSize?: string;
  slug:string

}

const ArticleCard2: React.FC<ArticleCard2Props> = ({
  image,
  title,
  category,
  fontSize = "1.5rem",
  slug
 
}) => {
  return (
    <Link href={`/${category.toLowerCase()}/${slug}`} className='text-decoration-none text-reset'>
    <div className="ArticleCard2-container container p-0">
      <img src={image} alt={title} className="img-fluid w-100 ArticleCard2-image mb-3" />

      <p className="ArticleCard2-location text-uppercase text-muted fw-semibold mb-1">{category}</p>

      <h2 className="ArticleCard2-title fw-bold mb-2" style={{fontSize}}>{title}</h2>

      <p className="ArticleCard2-author text-uppercase text-muted fw-semibold">Reporter</p>
    </div>
    </Link>
  );
};

export default ArticleCard2;
