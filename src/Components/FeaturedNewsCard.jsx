import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import './FeaturedNewsCard.css'

function FeaturedNewsCard() {
  const [card1, setCard1] = useState([
    {
      cardImg:
        "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/FeaturedNews-Card1-2x?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=624&hei=266&qlt=94&fit=constrain",
      cardTitle: "Microsoft Ignite",
      cardText:
        "Explore the latest Azure innovations, learn from experts, level up your skillset, and expand your network.",
        buttonText:"Learn more"
    },
    {
      cardImg:
        "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/FeaturedNews-Card2-2x?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=624&hei=268&qlt=95&fit=constrain",
      cardTitle: "Discover the latest AI innovations",
      cardText:
        "Deliver intelligent solutions and differentiate your business with cutting-edge AI—explore the latest AI tools and features from Azure.",
        buttonText:"See the latest announcements"
      },
    {
      cardImg:
        "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/FeaturedNews-Card3-2x?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=833&hei=358&qlt=85&fit=constrain",
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
          <img className="cardImage" src={display.cardImg} />
          <Card.Body>
            <Card.Title>{display.cardTitle}</Card.Title>
            <Card.Text>{display.cardText}</Card.Text>
            <Button variant="primary">&rarr;</Button>{display.buttonText}
          </Card.Body>
        </Card>
      ))}
      
    </div>
  );
}

export default FeaturedNewsCard;
