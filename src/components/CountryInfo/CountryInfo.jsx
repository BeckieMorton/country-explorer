import React, { useState } from "react";

export const CountryInfo = ({ countryName }) => {
  // https://raw.githubusercontent.com/factbook/factbook.json/master/europe/gm.json
  const [gecCodes, setGecCodes] = useState("");

  //function to convert the country name into the gec code
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./data/gec-codes.json");
        const data = await response.json();
        setGecCodes(data);
      } catch (error) {
        console.error("Error fetching json file", error);
      }
    };

    if (gecCodes.length > 0) {
      const foundCountry = gecCodes.find(
        (country) => country.country.toLowerCase() === countryName.toLowerCase()
      );

      if (foundCountry) {
        console.log("Country found:", foundCountry);
        const realname = foundCountry.twocode;
        setNewCountryCode(realname);
      } else {
        console.log("Country not found");
      }
    }

    fetchData();
  }, [code]);

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
