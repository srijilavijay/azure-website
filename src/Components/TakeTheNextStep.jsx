import React, { useState } from "react";
import "./TakeTheNextStep.css";
import TakeTheNextStepCard from "./TakeTheNextStepCard";
import { Container } from "react-bootstrap";

function TakeTheNextStep() {
  const [cardData, setCardData] = useState([
    {
      ImgUrl: "./NextSteps-Icon-01-Keyboards.png",
      Title: "Start building on Azure free",
      Text: "Get free services and a $200 credit to explore Azure for up to 30 days.",
      BtnText: "Try Azure for free",
    },
    {
      imgUrl: "./NextSteps-Icon-02-Person.png",
      Title: "Connect with a sales specialist",
      Text: "Chat with or call a sales specialist for personalized guidance.",
      BtnText: "Get in Touch",
    },
    {
      imgUrl: "./NextSteps-Icon-03-LearningApp.png",
      Title: "New to Azure? Learn at your own pace",
      Text: "Learn cloud computing basics with self-paced modules on Microsoft Learn.",
      BtnText: "Get Started",
    },
  ]);
  return (
    <div className="TakeTheNextStep">
      <Container>
        <h3 style={{ textAlign: "center",padding:"50px" }}>Take The Next Step</h3>
        <TakeTheNextStepCard cardDetails={cardData} />
      </Container>
    </div>
  );
}

export default TakeTheNextStep;
