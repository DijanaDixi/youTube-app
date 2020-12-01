/* eslint-disable react/prop-types */
import React, { useState } from "react";
import styles from "../Search/Search.module.css";

function Search({ handleFormSubmit }) {
  const [value, getValue] = useState("");

  const handleChange = (event) => {
    getValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleFormSubmit(value);
  };
  return (
    <>
      <div className={`row ${styles.logo}`}>
        <div className="col-md-2">
            <img
             className={styles.imgLogo}
              src="https://ucarecdn.com/3360c17f-9a61-402b-9529-c0d514c75ed5/yt_logo_rgb_light.png"
              alt=""
            />
      
        </div>
        <div className="col-md-10">
          <form className="form-inline" onSubmit={handleSubmit}>
            <input
              className="form-control  mt-2 w-100 h-25"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={value}
              onChange={handleChange}
            />
          </form>
        </div>
      </div>
    </>
  );
}
export default Search;
