import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import './FeaturedNewsCard.css'

function FeaturedNewsCard() {
  const [card1, setCard1] = useState([
    {
      cardImg:
        "./FeaturedNews-Card1-2x.avif",
      cardTitle: "Microsoft Ignite",
      cardText:
        "Explore the latest Azure innovations, learn from experts, level up your skillset, and expand your network.",
        buttonText:"Learn more"
    },
    {
      cardImg:
        "./FeaturedNews-Card2-2x.avif",
      cardTitle: "Discover the latest AI innovations",
      cardText:
        "Deliver intelligent solutions and differentiate your business with cutting-edge AI—explore the latest AI tools and features from Azure.",
        buttonText:"See the latest announcements"
      },
    {
      cardImg:
        "./FeaturedNews-Card3-2x.avif",
      cardTitle: "Optimize operations in the cloud",
      cardText:
        "Seamlessly migrate your mission-critical workloads and deliver cloud agility anywhere with the newest infrastructure capabilities.",
        buttonText:"Read the blog"
      },
  ]);
  return (
    <div className="featuredCardStyle">
      {card1.map((display) =>(
        <Card className="cardStyle">
          <img className="cardImg" src={display.cardImg} />
          <Card.Body className="Cbody">
            <Card.Title >{display.cardTitle}</Card.Title>
            <Card.Text>{display.cardText}</Card.Text>
            <Button className="Cbtn">&rarr;</Button>{display.buttonText}
          </Card.Body>
        </Card>
      ))}
      
    </div>
  );
}

export default FeaturedNewsCard;
