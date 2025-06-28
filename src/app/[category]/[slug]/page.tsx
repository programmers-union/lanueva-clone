import politicsData from '../../../../public/data/politics.json';
import businessData from '../../../../public/data/business.json';
import technologyData from '../../../../public/data/technology.json';
import sportsData from '../../../../public/data/sports.json';
import scienceData from '../../../../public/data/science.json';
import healthData from '../../../../public/data/health.json';
import DetailComponent from '@/app/components/DetailComponent';


type Article = {
  category: string;
  title: string;
  shortdescription: string;
  description: string;
  image: string;
  slug: string;
};

interface PageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

// Generate static parameters for all articles across all categories
export async function generateStaticParams() {
  const allData = [
    { category: 'politics', articles: politicsData },
    { category: 'business', articles: businessData },
    { category: 'technology', articles: technologyData },
    { category: 'sports', articles: sportsData },
    { category: 'science', articles: scienceData },
    { category: 'health', articles: healthData },
  ];

  const params: { category: string; slug: string }[] = [];

  allData.forEach(({ category, articles }) => {
    articles.forEach((article: Article) => {
      params.push({
        category: category,
        slug: article.slug,
      });
    });
  });

  return params;
}


export default async function DetailPage({params}:PageProps){
    const {category,slug}=await params;
    let filteredArticles:Article[]=[];

     switch (category) {
    case 'technology':
      filteredArticles = technologyData;
      break;
    case 'sports':
      filteredArticles = sportsData;
      break;
    case 'business':
      filteredArticles = businessData;
      break;
    case 'health':
      filteredArticles = healthData;
      break;
    case 'science':
      filteredArticles = scienceData;
      break;
    case 'politics':
      filteredArticles = politicsData;
      break;
    default:
      break;
  }

  const article = filteredArticles.find((item) => item.slug === slug);

  if (!article) {
    return <div className="p-4">No article found for slug: {slug}</div>;
  }
  return (
    <DetailComponent
    title={article.title}
      description={article.description}
      shortDescription={article.shortdescription}
      category={article.category}
      image={article.image}
    />
)

}


