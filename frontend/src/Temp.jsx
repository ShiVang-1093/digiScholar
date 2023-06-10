import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
// import axios from "axios";
import getPostById from "./DummyAPI";
import "./Temp.css";    

function Temp() {

  const [myData, setMyData] = useState([]);

  useEffect(() => {
    setMyData(getPostById);
  }, []);


  return (
    <div className="main-post">
      <div className="head">
        <h1>See Our Blogs</h1>
        <h3>
          Stay current with all the latest scholarships , applications and more.
        </h3>
      </div>
      <div className="grid">
        {myData.map((post) => {
          const { id, image, content, title, createdAt, updatedAt } = post;
          return (
            <div className="card" key={id}>
              <img className="temp-image" src={image} alt={"Error"} />
                <p>"{content}"</p>
              <Link to={`/post/${id}`} className="link">
                <span className="postAuthor">{title}</span>
              </Link><br /><br />
              {/* <span className="createdAt">CreatedAt :{createdAt}</span> */}
              {/* <span className="updatedAt">UpdatedAt :{updatedAt}</span> */}
            </div>
          );
        })}
      </div>
    </div>
    
  );
}

export default Temp;


