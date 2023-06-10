import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Blog.css";
import dummyData from "./DummyAPI";

function Blog() {
  const { id } = useParams();
  // console.log(id);
  const [post, setPost] = useState();

  const getPost = async () => {
    const res = await fetch(`http://localhost:5000/blog/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log("Data is : ", data);
    setPost(data.blog);
  }
  useEffect(() => {
    getPost();
  }, []);
  if (!post) {
    return <h2>Loading...</h2>;
  }

  const { title, image, content, createdAt, updatedAt } = post;
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

export default Blog;



