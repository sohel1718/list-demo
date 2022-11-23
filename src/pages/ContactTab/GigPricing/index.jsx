import React from "react";
import GigBox from "./GigBox";

const GigPricing = () => {
  return (
    <div className={"gigPricing_section"}>
      <div className={"box gigPricing-box-1"}>
        <div className={"price"}>Price</div>
        <div>Delivery Time</div>
        <div className={"offer"}>Details you are offering</div>
        <div className={"revisions"}>Revisions</div>
      </div>
      <div className={"gigPricing_section_pricing"}>
        <GigBox />
        <GigBox />
        <GigBox />
      </div>
    </div>
  );
};
export default GigPricing;
