import ArticlePreview from "./components/ArticlePreview";
import ArticleCard2 from "./ArticleCard2";
import ArticleCard3 from "./components/ArticleCard3";
import businessData from "../../public/data/business.json";
import politicsData from "../../public/data/politics.json";
import scienceData from "../../public/data/science.json";
import healthData from "../../public/data/health.json";
import sportsData from "../../public/data/sports.json";
import ArticleCard4 from "./components/ArticleCard4";
import technologyData from "../../public/data/technology.json";

export default function Home() {
  return (
    <div className="container ">
      <div className=" with100">
        <div className=" py-4 containerWidth">
          <div className="col-lg-4">
            <div>
              <ArticlePreview
                title={businessData[3].title}
                shortdescription={businessData[3].shortdescription}
                slug={businessData[3].slug}
                category={businessData[3].category}
              />
            </div>
            <div>
              <ArticleCard2
                image={businessData[2].image}
                title={businessData[2].title}
                category={businessData[2].category}
                slug={businessData[2].slug}
                fontSize="1.30rem"
              />
            </div>
          </div>
          <div className="col-lg-8">
            <ArticleCard3
              image={politicsData[0].image}
              category={politicsData[0].category}
              title={politicsData[0].title}
              shortdescription={politicsData[0].shortdescription}
              slug={politicsData[0].slug}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3">
            <ArticleCard2
              image={scienceData[1].image}
              title={scienceData[1].title}
              category={scienceData[1].category}
              slug={scienceData[1].slug}
              fontSize="1.10rem"
            />
          </div>
          <div className="col-lg-3">
            <ArticleCard2
              image={scienceData[0].image}
              title={scienceData[0].title}
              category={scienceData[0].category}
              slug={scienceData[0].category}
              fontSize="1.10rem"
            />
          </div>
          <div className="col-lg-3">
            <ArticleCard2
              image={scienceData[2].image}
              title={scienceData[2].title}
              category={scienceData[2].category}
              slug={scienceData[2].category}
              fontSize="1.10rem"
            />
          </div>
          <div className="col-lg-3">
            <ArticleCard2
              image={scienceData[3].image}
              title={scienceData[3].title}
              category={scienceData[3].category}
              slug={scienceData[3].slug}
              fontSize="1.10rem"
            />
          </div>
        </div>

        <div className="row py-5">
          <div className="col-lg-4">
            <ArticleCard2
              image={healthData[1].image}
              title={healthData[1].title}
              category={healthData[1].category}
              slug={healthData[1].category}
              fontSize="1.10rem"
            />
          </div>
          <div className="col-lg-4">
            <ArticleCard2
              image={healthData[0].image}
              title={healthData[0].title}
              category={healthData[0].category}
              slug={healthData[0].slug}
              fontSize="1.10rem"
            />
          </div>
        </div>
        <div className="row py-5">
          <div className="col-lg-4">
            <ArticleCard2
              image={sportsData[0].image}
              title={sportsData[0].title}
              category={sportsData[0].category}
              slug={sportsData[0].category}
              fontSize="1.10rem"
            />
          </div>
          <div className="col-lg-4">
            <ArticleCard2
              image={sportsData[1].image}
              title={sportsData[1].title}
              category={sportsData[1].category}
              slug={sportsData[1].category}
              fontSize="1.10rem"
            />
          </div>
        </div>
        <div className="row py-5">
          <div className="col-lg-4">
            <ArticleCard2
              image={politicsData[3].image}
              title={politicsData[3].title}
              category={politicsData[3].category}
              slug={politicsData[3].slug}
              fontSize="1.10rem"
            />
          </div>
          <div className="col-lg-4">
            <ArticleCard2
              image={politicsData[1].image}
              title={politicsData[1].title}
              category={politicsData[1].category}
              slug={politicsData[1].slug}
              fontSize="1.10rem"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <ArticleCard3
              image={politicsData[5].image}
              category={politicsData[5].category}
              title={politicsData[5].title}
              shortdescription={politicsData[5].shortdescription}
              slug={politicsData[5].slug}
            />
          </div>
          <div className="col-lg-6">
            <ArticleCard4
              image={politicsData[2].image} // Place this in public/images/
              category={politicsData[2].category}
              title={politicsData[2].title}
              slug={politicsData[2].slug}
              author="Reporter"
            />
            <ArticleCard4
              image={politicsData[4].image} // Place this in public/images/
              category={politicsData[4].category}
              title={politicsData[4].title}
              slug={politicsData[4].slug}
              author="Reporter"
            />
            <ArticleCard4
              image={politicsData[6].image} // Place this in public/images/
              category={politicsData[6].category}
              title={politicsData[6].title}
              slug={politicsData[6].slug}
              author="Reporter"
            />
          </div>
        </div>
        <div className="row py-5">
          <div className="col-lg-4">
            <ArticleCard2
              image={scienceData[6].image}
              title={scienceData[6].title}
              category={scienceData[6].category}
              slug={scienceData[6].slug}
              fontSize="1.10rem"
            />
          </div>
          <div className="col-lg-4">
            <ArticleCard2
              image={scienceData[4].image}
              title={scienceData[4].title}
              category={scienceData[4].category}
              slug={scienceData[4].slug}
              fontSize="1.10rem"
            />
          </div>
          <div className="col-lg-4">
            <ArticleCard2
              image={scienceData[5].image}
              title={scienceData[5].title}
              category={scienceData[5].category}
              slug={scienceData[4].slug}
              fontSize="1.10rem"
            />
          </div>
        </div>

        <div className="row py-5">
          <div className="col-lg-4">
            <ArticleCard2
              image={businessData[4].image}
              title={businessData[4].title}
              category={businessData[4].category}
              slug={businessData[4].slug}
              fontSize="1.10rem"
            />
          </div>
          <div className="col-lg-4">
            <ArticleCard2
              image={businessData[5].image}
              title={businessData[5].title}
              category={businessData[5].category}
              slug={businessData[5].category}
              fontSize="1.10rem"
            />
          </div>
        </div>
        <div className="row py-5">
          <div className="col-lg-4">
            <ArticleCard2
              image={businessData[6].image}
              title={businessData[6].title}
              category={businessData[6].category}
              slug={businessData[6].category}
              fontSize="1.10rem"
            />
          </div>
          <div className="col-lg-4">
            <ArticleCard2
              image={businessData[7].image}
              title={businessData[7].title}
              category={businessData[7].category}
              slug={businessData[7].slug}
              fontSize="1.10rem"
            />
          </div>
        </div>
                  <div className="col-lg-12 border-black border-bottom">
            <h2>Politics</h2>
          </div>
        <div className="row py-3">
          <div className="col-lg-6">
            <ArticleCard3
              image={politicsData[8].image}
              category={politicsData[8].category}
              title={politicsData[8].title}
              shortdescription={politicsData[8].shortdescription}
              slug={politicsData[8].slug}
            />
          </div>
          <div className="col-lg-6">
            <ArticleCard4
              image={politicsData[2].image} // Place this in public/images/
              category={politicsData[2].category}
              title={politicsData[2].title}
              slug={politicsData[2].slug}
              author="Reporter"
            />
            <ArticleCard4
              image={politicsData[4].image} // Place this in public/images/
              category={politicsData[4].category}
              title={politicsData[4].title}
              slug={politicsData[4].slug}
              author="Reporter"
            />
            <ArticleCard4
              image={politicsData[6].image} // Place this in public/images/
              category={politicsData[6].category}
              title={politicsData[6].title}
              slug={politicsData[6].slug}
              author="Reporter"
            />
          </div>
        </div>
        
                  <div className="col-lg-12 border-black border-bottom">
            <h2>Technology</h2>
          </div>
        <div className="col-lg-8 py-3">
          <ArticleCard3
            image={technologyData[0].image}
            category={technologyData[0].category}
            title={technologyData[0].title}
            shortdescription={technologyData[0].shortdescription}
            slug={technologyData[0].slug}
          />
                  <div className="row py-5">
          <div className="col-lg-4">
            <ArticleCard2
              image={technologyData[1].image}
              title={technologyData[1].title}
              category={technologyData[1].category}
              slug={technologyData[1].slug}
              fontSize="1.10rem"
            />
          </div>
          <div className="col-lg-4">
            <ArticleCard2
              image={technologyData[2].image}
              title={technologyData[2].title}
              category={technologyData[2].category}
              slug={technologyData[2].slug}
              fontSize="1.10rem"
            />
          </div>
                    <div className="col-lg-4">
            <ArticleCard2
              image={technologyData[3].image}
              title={technologyData[3].title}
              category={technologyData[3].category}
              slug={technologyData[3].slug}
              fontSize="1.10rem"
            />
          </div>
        </div>
        </div>
         <div className="row">
          <div className="col-lg-12 border-black border-bottom">
            <h2>science</h2>
          </div>
         </div>
                 <div className="row py-4">
          <div className="col-lg-3">
            <ArticleCard2
              image={scienceData[1].image}
              title={scienceData[1].title}
              category={scienceData[1].category}
              slug={scienceData[1].slug}
              fontSize="1.10rem"
            />
          </div>
          <div className="col-lg-3">
            <ArticleCard2
              image={scienceData[0].image}
              title={scienceData[0].title}
              category={scienceData[0].category}
              slug={scienceData[0].slug}
              fontSize="1.10rem"
            />
          </div>
          <div className="col-lg-3">
            <ArticleCard2
              image={scienceData[2].image}
              title={scienceData[2].title}
              category={scienceData[2].category}
              slug={scienceData[2].slug}
              fontSize="1.10rem"
            />
          </div>
          <div className="col-lg-3">
            <ArticleCard2
              image={scienceData[3].image}
              title={scienceData[3].title}
              category={scienceData[3].category}
              slug={scienceData[3].slug}
              fontSize="1.10rem"
            />
          </div>
        </div>
                  <div className="col-lg-12 border-black border-bottom">
            <h2>Sports</h2>
          </div>
        <div className="col-lg-8 py-3">
          <ArticleCard3
            image={sportsData[2].image}
            category={sportsData[2].category}
            title={sportsData[2].title}
            shortdescription={sportsData[2].shortdescription}
            slug={sportsData[2].slug}
          />
                  <div className="row py-5">
          <div className="col-lg-4">
            <ArticleCard2
              image={sportsData[1].image}
              title={sportsData[1].title}
              category={sportsData[1].category}
              slug={sportsData[1].category}
              fontSize="1.10rem"
            />
          </div>
          <div className="col-lg-4">
            <ArticleCard2
              image={sportsData[0].image}
              title={sportsData[0].title}
              category={sportsData[0].category}
              slug={sportsData[0].category}
              fontSize="1.10rem"
            />
          </div>
                    <div className="col-lg-4">
            <ArticleCard2
              image={technologyData[3].image}
              title={technologyData[3].title}
              category={technologyData[3].category}
              slug={technologyData[3].slug}
              fontSize="1.10rem"
            />
          </div>
        </div>
        </div>

      </div>
    </div>
  );
}
