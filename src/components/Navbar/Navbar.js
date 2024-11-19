import React, { useState, useContext } from "react";
import "./Navbar.css";
import { display, down } from "../../assets/images"; 
import { GroupingContext } from "../../contexts/GroupingContext";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { groupBy, sortBy, updateGrouping, updateSorting } = useContext(GroupingContext);


  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-dropdown">
          {/* Main Dropdown Button */}
          <button
            className="dropdown-btn"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <span>
              <img src={display} alt="Display icon" />
            </span>{" "}
            Display{" "}
            <span>
              <img src={down} alt="Dropdown arrow" />
            </span>
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <div className="dropdown-section">
                <label>Grouping</label>
                <select
                  value={groupBy}
                  onChange={(e) => {
                    updateGrouping(e.target.value);
                    setIsDropdownOpen(false);
                  }}
                  className="dropdown-select"
                >
                  <option value="status">Status</option>
                  <option value="userId">User</option>
                  <option value="priority">Priority</option>
                </select>
              </div>

              <div className="dropdown-section">
                <label>Ordering</label>
                <select
                  value={sortBy}
                  onChange={(e) => {
                    updateSorting(e.target.value);
                    setIsDropdownOpen(false);
                  }}
                  className="dropdown-select"
                >
                  <option value="priority">Priority</option>
                  <option value="title">Title</option>
                </select>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
