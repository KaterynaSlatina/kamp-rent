import React from "react";
import camper from "../../img/Camper.jpeg";
import css from "./Home.module.css";

export default function Home() {
  return (
    <div>
      <div className={css.home}>
        <div className={css.heroText}>
          <h1>Rent the campervan of your dreams</h1>
          <p>Go on exciting journeys with us!</p>
        </div>
        <div className={css.heroImg}>
          <img src={camper} alt="camper" />
        </div>
      </div>
    </div>
  );
}
