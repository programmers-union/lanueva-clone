import ArticlePreview from "./components/ArticlePreview";
import ArticleCard2 from "./ArticleCard2";
import ArticleCard3 from "./components/ArticleCard3";
import businessData from "../../public/data/business.json";
import politicsData from "../../public/data/politics.json";
import scienceData from "../../public/data/science.json";
import healthData from "../../public/data/health.json";
import sportsData from "../../public/data/sports.json";
import ArticleCard4 from "./components/ArticleCard4";

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
              />
            </div>
            <div>
              <ArticleCard2
                image={businessData[2].image}
                title={businessData[2].title}
                category={businessData[2].category}
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
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3">
            <ArticleCard2
              image={scienceData[1].image}
              title={scienceData[1].title}
              category={scienceData[1].category}
              fontSize="1.10rem"
            />
          </div>
          <div className="col-lg-3">
            <ArticleCard2
              image={scienceData[0].image}
              title={scienceData[0].title}
              category={scienceData[0].category}
              fontSize="1.10rem"
            />
          </div>
          <div className="col-lg-3">
            <ArticleCard2
              image={scienceData[2].image}
              title={scienceData[2].title}
              category={scienceData[2].category}
              fontSize="1.10rem"
            />
          </div>
          <div className="col-lg-3">
            <ArticleCard2
              image={scienceData[3].image}
              title={scienceData[3].title}
              category={scienceData[3].category}
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
              fontSize="1.10rem"
            />
          </div>
          <div className="col-lg-4">
            <ArticleCard2
              image={healthData[0].image}
              title={healthData[0].title}
              category={healthData[0].category}
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
              fontSize="1.10rem"
            />
          </div>
          <div className="col-lg-4">
            <ArticleCard2
              image={sportsData[1].image}
              title={sportsData[1].title}
              category={sportsData[1].category}
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
              fontSize="1.10rem"
            />
          </div>
          <div className="col-lg-4">
            <ArticleCard2
              image={politicsData[1].image}
              title={politicsData[1].title}
              category={politicsData[1].category}
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
            />
          </div>
          <div className="col-lg-6">
             <ArticleCard4
        image={politicsData[2].image}  // Place this in public/images/
        category={politicsData[2].category}
        title={politicsData[2].title}
        author="Reporter"
      />
       <ArticleCard4
        image={politicsData[4].image}  // Place this in public/images/
        category={politicsData[4].category}
        title={politicsData[4].title}
        author="Reporter"
      />
       <ArticleCard4
        image={politicsData[3].image} // Place this in public/images/
        category={politicsData[3].category}
        title={politicsData[3].title}
        author="Reporter"
      />
          </div>
        </div>
                <div className="row py-5">
          <div className="col-lg-4">
            <ArticleCard2
              image={scienceData[1].image}
              title={scienceData[1].title}
              category={scienceData[1].category}
              fontSize="1.10rem"
            />
          </div>
          <div className="col-lg-4">
            <ArticleCard2
              image={scienceData[0].image}
              title={scienceData[0].title}
              category={scienceData[0].category}
              fontSize="1.10rem"
            />
          </div>
          <div className="col-lg-4">
            <ArticleCard2
              image={scienceData[2].image}
              title={scienceData[2].title}
              category={scienceData[2].category}
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
              fontSize="1.10rem"
            />
          </div>
          <div className="col-lg-4">
            <ArticleCard2
              image={sportsData[1].image}
              title={sportsData[1].title}
              category={sportsData[1].category}
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
              fontSize="1.10rem"
            />
          </div>
          <div className="col-lg-4">
            <ArticleCard2
              image={healthData[0].image}
              title={healthData[0].title}
              category={healthData[0].category}
              fontSize="1.10rem"
            />
          </div>
        </div>
        
      </div>
    </div>
  );
}
