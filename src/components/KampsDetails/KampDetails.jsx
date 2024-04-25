import React, { useState } from "react";
import css from "./KampDetails.module.css";
import svg from "../../icons/icons.svg";
import Features from "../Features/Features";
import Reviews from "../Reviews/Reviews";

export default function KampDetails({ kamps }) {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };
  //
  const location = kamps.location;
  const parts = location.split(", ");
  const formattedLocation = parts.reverse().join(", ");
  console.log(formattedLocation);

  return (
    <div className={css.detailsContainer}>
      <div>
        <div className={css.detailsTitleContainer}>
          <h2>{kamps.name}</h2>

          <ul className={css.detailsRatingAndLocation}>
            <li className={css.detailsRatings}>
              <svg className={css.svgReviewAndLocation}>
                <use href={`${svg}#icon-star`}></use>
              </svg>
              <p className={css.ratingAndReviews}>
                {kamps.rating}({kamps.reviews.length} Reviews)
              </p>
            </li>

            <li className={css.detailsRatings}>
              <svg className={css.svgReviewAndLocation}>
                <use href={`${svg}#icon-map`}></use>
              </svg>
              <p>{formattedLocation}</p>
            </li>
          </ul>
          <b className={css.kampPrice}>€{kamps.price}</b>
        </div>
      </div>
      <ul className={css.detailsImg}>
        <li>
          <img
            className={css.kampImg}
            src={kamps.gallery[0]}
            alt="img"
            width="290"
            height="310"
          />
        </li>
        <li>
          <img
            className={css.kampImg}
            src={kamps.gallery[1]}
            alt="img"
            width="290"
            height="310"
          />
        </li>
        <li>
          <img
            className={css.kampImg}
            src={kamps.gallery[2]}
            alt="img"
            width="290"
            height="310"
          />
        </li>
      </ul>

      <div className={css.kampDescription}>
        <p>{kamps.description}</p>
      </div>

      <div className={css.buttonsModal}>
        <button
          onClick={() => handleButtonClick("Features")}
          className={
            activeButton === "Features" ? "btnFeatures active" : "btnFeatures"
          }
        >
          Features
        </button>
        <button
          onClick={() => handleButtonClick("Reviews")}
          className={
            activeButton === "Reviews" ? "btnReviews  active" : "btnReviews"
          }
        >
          Reviews
        </button>
      </div>

      {activeButton === "Features" && <Features kamps={kamps} />}
      {activeButton === "Reviews" && <Reviews kamps={kamps} />}

      <div></div>
    </div>
  );
}
