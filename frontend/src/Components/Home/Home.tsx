import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

interface HomeProps {
  // Define any props you want to pass to the Home component
}

const Home: React.FC<HomeProps> = (props) => {
  return (
    <div className="card">
      <div className="content">
        <h1>Robin's </h1>
        <p>
          Her kan du se min ønskeliste til jul. Etter xx.xx.xx kommer ikke jeg
          til å se på siden, så reserver/fjern/velg i vei uten at jeg får nyss i
          det!
        </p>
        <Link to="/wishlist">
          <button className="button-30">Gå til ønskeliste</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
