import React from "react";
import "./Globe.css";
import { Button } from "react-bootstrap";

function Globe() {
  return (
    <div className="globeImage">
      <div className="globeText">
      <h3>Azure global infrastructure</h3>
      <p>
        Go beyond the limits of on-premises datacenters with more regions than
        any other provider.
      </p>
      <Button className="Globe-btn">Explore the Globe</Button>
      </div>
    </div>
  );
}

export default Globe;
