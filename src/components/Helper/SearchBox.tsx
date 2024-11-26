import React from "react";
import { FaSearch } from "react-icons/fa";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import "./style.css/SearchBox.css";

const SearchBox = () => {
  return (
    <div className="search-box">
      <div className="search-box-input-container">
        <input
          type="text"
          placeholder="Enter an address, city or ZIP to Buy"
          className="search-box-input"
        />
        <div className="advanced-options">
          <div className="advanced-hidden-lg">
            <HiAdjustmentsHorizontal className="advanced-icon" />
            <p className="advanced-text">Advanced</p>
          </div>
          <div className="search-button">
            <FaSearch />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
