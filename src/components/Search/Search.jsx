import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Search.module.css";

export const Search = () => {
  const [chosenCountry, setChosenCountry] = useState("");
  const navigate = useNavigate();

  // Function to focus on the input element
  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleButtonClick = () => {
    navigate(`/country`, {
      state: { countryName: chosenCountry },
    });
  };

  return (
    <div className={styles.container}>
      <h3>Discover Country Facts of the World</h3>
      <div className={styles.box}>
        <label>Enter Country: </label>
        <input
          className={styles.searchInput}
          type="text"
          id="myInput"
          placeholder="Search"
          value={chosenCountry}
          onChange={(e) => setChosenCountry(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleButtonClick();
            }
          }}
        />
        <button onClick={handleButtonClick} className={styles.searchButton}>
          search
        </button>
      </div>
    </div>
  );
};
