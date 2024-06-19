import { useLocation } from "react-router-dom";

import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { CountryInfo } from "../components/CountryInfo/CountryInfo";

export const Results = () => {
  const location = useLocation();
  const { countryName } = location.state || {};
  return (
    <div>
      <Header />
      {/* <CountryInfo /> */}
      {countryName ? (
        <p>Details for {countryName}</p>
      ) : (
        <p>No country selected</p>
      )}
      <Footer />
    </div>
  );
};
