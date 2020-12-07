import React from "react";
import PropTypes from "prop-types";
import styles from "../Search/Search.module.css";

function Search({ handleValue }) {
  const handleChange = (event) => {
    event.preventDefault();
    handleValue(event.target.value);
  };

  return (
    <>
      <div className={`row ${styles.logo}`}>
        <div className={styles.holder}>
          <img
            className={styles.imgLogo}
            src="https://ucarecdn.com/3360c17f-9a61-402b-9529-c0d514c75ed5/yt_logo_rgb_light.png"
            alt=""
          />
        </div>
        <div className={styles.input}>
          <input
            className="form-control mt-2 h-25"
            type="search"
            placeholder="Search"
            aria-label="Search"
            // value={value}
            onChange={handleChange}
          />
        </div>
      </div>
    </>
  );
}

Search.propTypes = {
  handleValue: PropTypes.func,
};
export default Search;
