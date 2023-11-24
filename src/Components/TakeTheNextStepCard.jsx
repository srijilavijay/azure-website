import React from "react";
import { Button, Card } from "react-bootstrap";
import './TakeTheNextStepCard.css'
import './FeaturedNewsCard.css'

function TakeTheNextStepCard({ cardDetails }) {
  return (
    <div className="TakeTheNextStepCard">
      {cardDetails.map((display) => (
        <Card className="cardStyl">
          <img className="cardImage" src={display.ImgUrl} />
          <Card.Body>
            <Card.Title>{display.Title}</Card.Title>
            <Card.Text>{display.Text}</Card.Text>
            <Button className="Cbtn">&rarr;</Button>
            {display.BtnText}
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default TakeTheNextStepCard;
