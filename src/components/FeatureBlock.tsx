import React from "react";
import { FeaturedTypes } from "../Types/aboutPageTypes";

interface Props {
  data:FeaturedTypes
}


const FeatureBlock: React.FC<Props> = ({data}) => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6">
            <h4 className="section-title">{data.feature_block.preTitle}</h4>
            <h1 className="display-5 mb-4">{data.feature_block.title}</h1>
            <p className="mb-4">{data.feature_block.first_paragraph}</p>
            <div className="row g-4">
              {data.feature_block.usp_items.map((item) => (
               <div key={item.id} className="col-12">
               <div className="d-flex align-items-start">
                 <img className="flex-shrink-0" src={item.icon} alt={item.title} />
                 <div className="ms-4">
                   <h3>{item.title}</h3>
                   <p className="mb-0">{item.content}</p>
                 </div>
               </div>
             </div>
              
              ))}
             
            </div>
          </div>
          <div className="col-lg-6">
            <div className="feature-img">
              <img className="img-fluid" src={data.feature_block.image_two} alt={data.feature_block.title} />
              <img className="img-fluid" src={data.feature_block.image_one} alt={data.feature_block.title} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureBlock;
