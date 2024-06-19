import React from "react";

export const CountryInfo = ({ countryName }) => {
  // https://raw.githubusercontent.com/factbook/factbook.json/master/europe/gm.json
  return (
    <div>
      <p>Country Info</p>

      {countryName ? (
        <p>Details for {countryName}</p>
      ) : (
        <p>No country selected</p>
      )}
    </div>
  );
};
