import React, { useState, useEffect } from "react";
import Details from "./Details";

export const CountryInfo = ({ countryName }) => {
  // https://raw.githubusercontent.com/factbook/factbook.json/master/europe/gm.json
  const [gecCodes, setGecCodes] = useState("");
  const [countryCode, setCountryCode] = useState("");

  //get gec code jason file and put it into useState variable
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./data/gec-codes.json");
        const data = await response.json();
        setGecCodes(data);
        console.log(`this is in gecCodes`, gecCodes);
      } catch (error) {
        console.error("Error fetching json file", error);
      }
    };

    fetchData();
  }, [countryName]);

  // Function to find the GEC-Code for a given countryName
  function findGecCode(countryName, gecCodes) {
    const lowerCaseCountryName = countryName.toLowerCase();
    for (let i = 0; i < gecCodes.length; i++) {
      if (gecCodes[i].country.toLowerCase() === lowerCaseCountryName) {
        return gecCodes[i]["GEC-code"];
      }
    }
    return null; // Return null if no match is found
  }

  // Get the GEC-Code for the given countryName
  let gecCode = findGecCode(countryName, gecCodes);

  if (gecCode !== null) {
    console.log(`The GEC-Code for ${countryName} is ${gecCode}`);
  } else {
    console.log(`No GEC-Code found for ${countryName}`);
  }

  return (
    <div>
      <p>Country Info</p>

      {countryName ? (
        <p>Details for {countryName}</p>
      ) : (
        <p>No country selected</p>
      )}
      <Details gecCode={gecCode} />
    </div>
  );
};
