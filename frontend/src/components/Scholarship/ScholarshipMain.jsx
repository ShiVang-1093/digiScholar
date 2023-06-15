import React, { useState, useEffect } from "react";
import Card from "./Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./ScholarshipMain.css";

export default function ScholarshipMain() {
    const [searchTerm, setSearchTerm] = useState("");
    const [sortBy, setSortBy] = useState("default");
    const [availability, setAvailability] = useState("all");
    const [sortedData, setSortedData] = useState([]);
    const [data, setData] = useState([]);

    const getScholarshipData = async () => {
        try {
            const response = await fetch("http://localhost:5000/scholarship");
            const responseData = await response.json();
            console.log("Scholarships: ", responseData);
            setData(responseData.scholarships);
        } catch (error) {
            console.error("Error fetching scholarship data:", error);
        }
    };

    useEffect(() => {
        getScholarshipData();
    }, []);

    useEffect(() => {
        if (data.length > 0) {
            let filteredData = [...data];

            if (searchTerm) {
                filteredData = filteredData.filter(
                    (scholarship) =>
                        scholarship.name
                            .toLowerCase()
                            .includes(searchTerm.toLowerCase()) ||
                        scholarship.description
                            .toLowerCase()
                            .includes(searchTerm.toLowerCase())
                );
            }

            if (availability !== "all") {
                const currentDate = new Date().getTime();
                filteredData = filteredData.filter((scholarship) => {
                    const scholarshipDeadline = new Date(
                        scholarship.deadline
                    ).getTime();
                    if (availability === "available") {
                        return scholarshipDeadline >= currentDate;
                    } else if (availability === "closed") {
                        return scholarshipDeadline < currentDate;
                    }
                    return true;
                });
            }

            if (sortBy === "AtoZ") {
                filteredData.sort((a, b) => {
                    if (a.name && b.name) {
                        return a.name.localeCompare(b.name);
                    }
                    return 0;
                });
            } else if (sortBy === "ZtoA") {
                filteredData.sort((a, b) => {
                    if (a.name && b.name) {
                        return b.name.localeCompare(a.name);
                    }
                    return 0;
                });
            }
            setSortedData(filteredData);
        }
    }, [data, searchTerm, sortBy, availability]);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSortBy = (event) => {
        setSortBy(event.target.value);
    };

    const handleAvailability = (event) => {
        setAvailability(event.target.value);
    };

    const renderCards = () => {
        if (!sortedData) {
            return <h2>Loading...</h2>;
        }

        if (sortedData.length === 0) {
            return <h2>No scholarships found.</h2>;
        }
        return (
            <div className="data-main d-flex flex-column">
                {sortedData.map((scholarship) => (
                    <Card data={scholarship} key={scholarship._id} />
                ))}
            </div>
        );
    };

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
                    {/* <FontAwesomeIcon icon={faSearch} className="search-icon" /> */}
                    <input
                        type="search-bar"
                        value={searchTerm}
                        placeholder="Search for a Scholarship"
                        className="search-bar"
                        onChange={handleSearch}
                    />
                </div>
            </div>
            {renderCards()}
        </>
    );
}

