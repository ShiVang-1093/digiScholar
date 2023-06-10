import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Singleblog.css";
import dummyData from "./DummyAPI";

function Singleblog() {
  const { id } = useParams();
  // console.log(id);
  const [post, setPost] = useState(dummyData);

  if (!post) {
    return <h2>Loading...</h2>;
  }

  const { title, image, content, createdAt,updatedAt } = post;
  // const pointsArray = points.split("\n");

  return (
    <div>
    <div className="Singleblog">
      <h2 className="Author-name">"{title.toUpperCase()}"</h2>
      <div className="singlepost">
        <img className="Author-image" src={image} alt={"Error"} />
        <p className="content">{content}</p>
      </div>
      {/* <ul className="ulitems">
        {pointsArray.map((point) => (
          <li className="listitems" key={id}>
            <p className="point">{point}</p>
          </li>
        ))}
      </ul> */}
      {/* <div className="conc">
        <h3 className="conclusion-heading">Conclusion:</h3>
        <p className="conclusion">{conclusion}</p>
      </div> */}
    </div>
    </div>
  );
}

export default Singleblog;



