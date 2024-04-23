import React, { useEffect, useState } from "react";
import '../../public/SearchBar.css';

// Passing a parameter from an outerscope to a function in the inner scope
function SearchBar({ onSearch }) {
    // Local state to store the search term
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = event => {
        setSearchTerm(event.target.value)
    };

    // Send search term to parent component
    const handleSubmit = event => {
        event.preventDefault();
        onSearch(searchTerm);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <div className="search-box">
                <input className="search-input"
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleChange}
                />
                <button className="search-btn" type="submit">
                    <i className="bi bi-search"></i>
                </button>
                </div>
            </form>
        </div>
        
    );
}

export default SearchBar;