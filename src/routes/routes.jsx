import { Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Results } from "../pages/Results";

const routes = (
  <>
    <Route path="/" element={<Home />} />
    <Route path="/country" element={<Results />} />
  </>
);

export default routes;
