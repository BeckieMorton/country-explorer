import { useState, useEffect } from "react";

export default function Details({ gecCode }) {
  // https://raw.githubusercontent.com/factbook/factbook.json/master/europe/gm.json

  const code = { gecCode };

  //fetch info from API

  const [countryDetails, setCountryDetails] = useState("");

  useEffect(() => {
    const fetchCountryDetails = async () => {
      const countryAPI = `https://raw.githubusercontent.com/factbook/factbook.json/master/europe/${code}.json`;

      try {
        const response = await fetch(countryAPI);

        if (response.ok) {
          const json = await response.json();
          setCountryDetails(json);
        } else {
          console.log(`Invalid response for country gec code ${gecCode}`);
        }
      } catch (error) {
        console.log("Error fetching country data:", error);
      }
      console.log(`this is in country details:`, countryDetails);
    };

    fetchCountryDetails();
  }, [gecCode]);
  return (
    <div>
      <h3>Details</h3>
      <p>{gecCode}</p>
    </div>
  );
}
