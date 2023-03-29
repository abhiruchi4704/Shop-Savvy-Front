import React from "react";
import Products from "./Products";

const Home = () => {
  return (
    <div className="hero">
      <div className="card text-bg-dark border-0">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Audio/UnrecHeros/Unred499/Under_499_Tallhero_3000x1200._CB636198859_.jpg"
          className="card-img"
          alt="Background"
          height="350px"
        />
      </div>
      <Products/>
    </div>
  );
};

export default Home;
