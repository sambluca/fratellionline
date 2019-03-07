import React from "react";
import Title from "../title";
import OpeningPrice from "../opening-price";

const Home = props => {
  return (
    <div>
      <Title title="Home" />
      <OpeningPrice />
    </div>
  );
};
Home.displayName = "Home";

export default Home;
