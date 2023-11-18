import React from "react";
import "./Banner.css";
import { Button } from "react-bootstrap";

function Banner() {
  return (
    <div className="bannerStyle">
      <img
        className="bannerImg"
        src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Mobile-Hero-Nov_New?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=360&hei=202&qlt=95&fmt=png-alpha&fit=constrain"
        alt=""
      />
      <div className="bannerText">
        <h1>Learn, connect, and explore</h1>
        <p>
          Envision and build the next generation of apps with the latest
          technologies announced at Microsoft Ignite. Pay-as-you-go or try Azure
          free for up to 30 days. There’s no upfront commitment—cancel anytime.
        </p>
        <Button className="getStarted">Get started</Button>&nbsp;&nbsp;
        <Button className="tryAzure">Try Azure for free</Button>
      </div>
    </div>
  );
}

export default Banner;
