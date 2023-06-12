import React, { useState, useEffect } from "react";
import sch from "./Scholarship_API";
import Card from "./Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./ScholarshipMain.css";

export default function ScholarshipMain() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [availability, setAvailability] = useState("all");
  const [sortedData, setSortedData] = useState([]);
  
  const filteredData = sch.filter((data) => {
    if (
      (data.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        data.content.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (availability === "all" || data.availability === availability)
    ) {
      return true;
    }
    return false;
  });

  useEffect(() => {
    setSortedData([...sch]);
  }, []);

  useEffect(() => {
    if (sortBy === "AtoZ") {
      const sortedDataByTitle = [...filteredData].sort((a, b) =>
        a.title.localeCompare(b.title)
      );
      setSortedData(sortedDataByTitle);
    } else if (sortBy === "ZtoA") {
      const sortedDataByTitle = [...filteredData].sort((a, b) =>
        b.title.localeCompare(a.title)
      );
      setSortedData(sortedDataByTitle);
    } else {
      setSortedData([...filteredData]);
    }
  }, [sortBy, filteredData]);

  

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSortBy = (event) => {
    setSortBy(event.target.value);
  };

  const handleAvailability = (event) => {
    setAvailability(event.target.value);
  };

  const d = sortedData.map((data) => (
    <div className="data-main" key={data.id}>
      <Card data={data} />
    </div>
  ));

  return (
    <>
      <div className="ScholarshipMain">
        <img
          className="main-image"
          src="./Images/image 5.png"
          alt="Error"
          srcSet=""
        />
      </div>
      <br />
      <br />
      <br />
      <div className="all-func">
        <div className="sort-container">
          <label htmlFor="sort-select">Sort By:</label>
          <select
            id="sort-select"
            className="sort-select"
            value={sortBy}
            onChange={handleSortBy}
          >
            <option value="default">Default</option>
            <option value="AtoZ">A to Z</option>
            <option value="ZtoA">Z to A</option>
          </select>
        </div>
        <div className="availability-container">
          <label htmlFor="availability-select">Availability:</label>
          <select
            id="availability-select"
            className="availability-select"
            value={availability}
            onChange={handleAvailability}
          >
            <option value="all">All</option>
            <option value="available">Available</option>
            <option value="closed">Closed</option>
          </select>
        </div>
        <div className="s-bar">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input
            type="search-bar"
            value={searchTerm}
            placeholder="Search for a Scholarship"
            className="search-bar"
            onChange={handleSearch}
          />
        </div>
      </div>
      {d}
    </>
  );
}
