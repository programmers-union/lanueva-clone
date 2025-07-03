import politicsData from "../../../public/data/politics.json";
import businessData from "../../../public/data/business.json";
import technologyData from "../../../public/data/technology.json";
import sportsData from "../../../public/data/sports.json";
import scienceData from "../../../public/data/science.json";
import healthData from "../../../public/data/health.json";
import ArticleCard2 from "../ArticleCard2";
import NewsBus from "../components/NewsBus";

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
  }>;
}

export async function generateStaticParams() {
  return [
    { category: "politics" },
    { category: "business" },
    { category: "technology" },
    { category: "sports" },
    { category: "science" },
    { category: "health" },
  ];
}

export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params;
  let filteredArticles: Article[] = scienceData;

  switch (category) {
    case "technology":
      filteredArticles = technologyData;
      break;
    case "sports":
      filteredArticles = sportsData;
      break;
    case "business":
      filteredArticles = businessData;
      break;
    case "health":
      filteredArticles = healthData;
      break;
    case "science":
      filteredArticles = scienceData;
      break;
    case "politics":
      filteredArticles = politicsData;
      break;

    default:
      break;
  }
  if (!filteredArticles.length) {
    return (
      <div className="p-4">No articles found for category: {category}</div>
    );
  }
  return (
    <div>
      <div className="container">
        <div className="with100">
          <h1 className="border-bottom">{category}</h1>
          <div className="py-4 border-black border-bottom">
            <ArticleCard2
              image={filteredArticles[2].image}
              title={filteredArticles[2].title}
              category={filteredArticles[2].category}
              slug={filteredArticles[2].slug}
              fontSize="2rem"
            />
          </div>
          <div className="row py-4">
            <div className="col-lg-3">
              <ArticleCard2
                image={filteredArticles[6].image}
                title={filteredArticles[6].title}
                category={filteredArticles[6].category}
                slug={filteredArticles[6].slug}
                fontSize="1.30rem"
              />
            </div>
            <div className="col-lg-3">
              <ArticleCard2
                image={filteredArticles[4].image}
                title={filteredArticles[4].title}
                category={filteredArticles[4].category}
                slug={filteredArticles[4].slug}
                fontSize="1.30rem"
              />
            </div>
            <div className="col-lg-3">
              <ArticleCard2
                image={filteredArticles[5].image}
                title={filteredArticles[5].title}
                category={filteredArticles[5].category}
                slug={filteredArticles[5].slug}
                fontSize="1.30rem"
              />
            </div>
          </div>
          <div className="row py-4">
            <div className="col-lg-3">
              <ArticleCard2
                image={filteredArticles[7].image}
                title={filteredArticles[7].title}
                category={filteredArticles[7].category}
                slug={filteredArticles[7].slug}
                fontSize="1.30rem"
              />
            </div>
            <div className="col-lg-3">
              <ArticleCard2
                image={filteredArticles[8].image}
                title={filteredArticles[8].title}
                category={filteredArticles[8].category}
                slug={filteredArticles[8].slug}
                fontSize="1.30rem"
              />
            </div>
            <div className="col-lg-3">
              <ArticleCard2
                image={filteredArticles[9].image}
                title={filteredArticles[9].title}
                category={filteredArticles[9].category}
                slug={filteredArticles[9].slug}
                fontSize="1.30rem"
              />
            </div>
          </div>
          <div className="col-lg-8">
            <NewsBus
              title={filteredArticles[0].title}
              shortdescription={filteredArticles[0].shortdescription}
              isPremium={true}
              imageUrl={filteredArticles[0].image}
              category={filteredArticles[0].category}
              tagLink={`/articles/${filteredArticles[0].slug}`}
              tagText="Read More"
              slug={filteredArticles[0].slug}
            />
          </div>
          <div className="col-lg-8">
            <NewsBus
              title={filteredArticles[1].title}
              shortdescription={filteredArticles[1].shortdescription}
              isPremium={true}
              imageUrl={filteredArticles[1].image}
              category={filteredArticles[1].category}
              tagLink={`/articles/${filteredArticles[1].slug}`}
              tagText="Read More"
              slug={filteredArticles[1].slug}
            />
          </div>
          <div className="col-lg-8">
            <NewsBus
              title={filteredArticles[10].title}
              shortdescription={filteredArticles[0].shortdescription}
              isPremium={true}
              imageUrl={filteredArticles[10].image}
              category={filteredArticles[0].category}
              tagLink={`/articles/${filteredArticles[10].slug}`}
              tagText="Read More"
              slug={filteredArticles[10].slug}
            />
          </div>
          <h1 className="border-bottom">Trending</h1>

          <div className="row">
            <div className="col-lg-4"></div>
            <div className="col-lg-8">
              <div className="row">
                <div className="col-lg-8">
                  <ArticleCard2
                    image={filteredArticles[11].image}
                    title={filteredArticles[11].title}
                    category={filteredArticles[11].category}
                    slug={filteredArticles[11].slug}
                    fontSize="1.30rem"
                  />
                </div>
                <div className="col-lg-4">
                     <ArticleCard2
                image={filteredArticles[12].image}
                title={filteredArticles[12].title}
                category={filteredArticles[12].category}
                slug={filteredArticles[12].slug}
                fontSize="1.30rem"
              />
                </div>
              </div>
            </div>
            <div className="row">
                <div className="col-lg-4">

                </div>
                <div className="col-lg-8">
                    <div className="row">
                        <div className="col-lg-4">
                             <ArticleCard2
                image={filteredArticles[13].image}
                title={filteredArticles[13].title}
                category={filteredArticles[13].category}
                slug={filteredArticles[13].slug}
                fontSize="1.30rem"
              />
                        </div>
                                                <div className="col-lg-4">
                             <ArticleCard2
                image={filteredArticles[14].image}
                title={filteredArticles[14].title}
                category={filteredArticles[14].category}
                slug={filteredArticles[14].slug}
                fontSize="1.30rem"
              />
                        </div>
                                                <div className="col-lg-4">
                             <ArticleCard2
                image={filteredArticles[15].image}
                title={filteredArticles[15].title}
                category={filteredArticles[15].category}
                slug={filteredArticles[15].slug}
                fontSize="1.30rem"            
              />
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
