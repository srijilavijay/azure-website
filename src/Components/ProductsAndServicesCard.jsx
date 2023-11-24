import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import "./ProductsAndServicesCard.css";

function ProductsAndServicesCard() {
  const [first, setfirst] = useState([
    {
      ImageUrl: "./ai_studio_icon.svg",
      Title: "Azure AI Studio",
      Details:
        "Build, evaluate, and deploy generative AI solutions and custom copilots.",
      LinkName: "Explore the product",
    },
    {
      ImageUrl: "./ai_service_icon.svg",
      Title: "Azure OpenAI Service",
      Details:
        "Apply advanced coding and language models to a variety of use cases.",
      LinkName: "Explore the product",
    },
    {
      ImageUrl: "./Fabric.svg",
      Title: "Microsoft Fabric",
      Details:
        "Bring data and analytics services together on an AI-powered platform.",
      LinkName: "Explore the product",
    },
    {
      ImageUrl: "./Cosmos DB.svg",
      Title: "Azure Cosmos DB",
      Details: "Build or modernize scalable, high-performance apps. ",
      LinkName: "Explore the product",
    },
    {
      ImageUrl: "./MLMachineLearningServiceWorkspaces.svg",
      Title: "Azure Machine Learning",
      Details: "Build, train, and deploy machine learning models.",
      LinkName: "Explore the product",
    },
    {
      ImageUrl: "./KubernetesServices.svg",
      Title: "Azure Kubernetes Service (AKS)",
      Details: "Build and scale apps with managed Kubernetes.",
      LinkName: "Explore the product",
    },
  ]);
  return (
    <div className="Wrapper">
      <div className="Ldiv">
        <h4>Microsoft Copilot for Azure</h4>
        <h6>
          Manage and operate your environment from cloud to edge with Copilot.
        </h6>
        <Button>Explore the Product</Button>
      </div>
      <div className="Rdiv">
        {first.map((display) => (
          <Card style={{ width: "18rem", borderRadius: "2rem" }}>
            <img
              src={display.ImageUrl}
              style={{
                border: "1px solid gray",
                borderRadius: "0.5rem",
                margin: "10px",
                padding: "0.6rem",
                height: "4rem",
                width: "4rem",
              }}
            />
            <Card.Body>
              <Card.Title>{display.Title}</Card.Title>
              <Card.Text>{display.Details}</Card.Text>
              <br />
              <a href="#">{display.LinkName}</a>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default ProductsAndServicesCard;
