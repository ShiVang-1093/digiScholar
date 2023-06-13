import React from "react";
import "./Card.css";
// import "typeface-montserrat";

export default function Card(prop) {
  console.log("props ; ", prop);
  const isOddId = prop.data.id % 2 === 1;
  const flexDirection = isOddId ? "row" : "row-reverse";
  // const pointsArray = prop.data.points.split("\n");

  return (
    <div className="Card-main" style={{ flexDirection }}>
      <img className="card-image" src={prop.data.image} alt="Error" />
      <div className="card-point">
        <div className="title">{prop.data.name.toUpperCase()}</div>
        <div className="card-content">
          <p>{prop.data.content}</p>
        </div>
        <div className="text-center">
          <a href={prop.data.scholarshipLink} className="visit-button">
            Visit Scholarship
          </a>
        </div>
      </div>
    </div>
  );
}
