import React from "react";
import { PageBannerTypes } from "../Types/aboutPageTypes";



interface Props {
   data:PageBannerTypes

}


const AboutBlock: React.FC<Props> = ({data}) => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
            <div className="about-img">
              <img className="img-fluid" src={data.about_block.image_one} alt={data.about_block.title} />
              <img className="img-fluid" src={data.about_block.image_two} alt={data.about_block.title} />
            </div>
          </div>
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
            <h4 className="section-title">{data.about_block.preTitle}</h4>
            <h1 className="display-5 mb-4">{data.about_block.title}</h1>
            <p>{data.about_block.first_paragraph}</p>
            <p className="mb-4">{data.about_block.second_paragraph}</p>
            <div className="d-flex align-items-center mb-5">
              <div
                className="d-flex flex-shrink-0 align-items-center justify-content-center border border-5 border-primary"
                style={{ width: "120px", height: "120px" }}
              >
                <h1 className="display-1 mb-n2" data-toggle="counter-up">
                  {data.about_block.years}
                </h1>
              </div>
              <div className="ps-4">
                <h3>{data.about_block.slogan}</h3>
              </div>
            </div>
            <a className="btn btn-primary py-3 px-5" href="">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBlock;
