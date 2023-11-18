import React from "react";
import "./GetMoreValue.css";

function GetMoreValue() {
  return (
    <div className="getMoreStyle">
      <div className="getMoreContent">
        <h2>Get more value from your cloud investments</h2>
        <div className="banner">
          <div className="demo">
            <img src="./building.png" alt="" />
            <p>
              16%: average savings of direct infrastructure-related costs with
              Azure1.
            </p>
          </div>
          <div className="demo">
            <img src="./datagram.png" alt="" />
            <p>
              37%: average three-year cost savings when you run equivalent
              workloads on Azure2.
            </p>
          </div>
          <div className="demo">
            <img src="./datapoints.png" alt="" />
            <p>
              54%: potential total cost of ownership savings on Azure versus
              running on-premises3.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetMoreValue;
