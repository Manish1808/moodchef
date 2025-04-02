import React, { useState } from 'react';
import './css/Explore.css';
import Header from './Header';
import Footer from './Footer';
import { FaSearch } from 'react-icons/fa'; // Importing the search icon from react-icons

const Explore = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);

  // Sample food items for search
const foodData = [
    "Apple",
    "Banana",
    "Carrot",
    "Tomato",
    "Potato",
    "Lettuce",
    "Cucumber",
    "Strawberry",
    "Pineapple",
    "Avocado",
    "Broccoli",
    "Spinach",
    "Onion",
    "Garlic",
    "Mango"
];

const handleSearch = () => {
    if (searchTerm) {
        const filteredResults = foodData.filter(item =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setResults(filteredResults);
    } else {
        setResults([]);
    }
};

    return (
    <>
    <Header/>
    <div className="explore-container">
        <h1>Explore Food Items</h1>
        <div className="search-bar">
        <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for food..."
        />
        <button className="search-icon" onClick={handleSearch}>
            <FaSearch />
        </button>
        </div>
        <div className="results">
        {results.length > 0 ? (
            results.map((result, index) => (
            <div key={index} className="result-item">
                {result}
            </div>
            ))
        ) : (
            <p>No results found.</p>
        )}
        </div>
    </div>
    <Footer/>
    </>
    );
};

export default Explore;
