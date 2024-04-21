import React, { useState } from "react";
import css from "./KampCard.module.css";
import Modal from "../Modal/Modal";
import svg from "../../icons/icons.svg";
import KampDetails from "../KampsDetails/KampDetails";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../../redux/favoritesSlice";
import { selectFavoriteKamp } from "../../redux/selectors";

export default function KampCard({ kamps }) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isKampInFavorites, setIsKampInFavorites] = useState(false);
  const favorites = useSelector(selectFavoriteKamp);
  console.log(favorites);

  const dispatch = useDispatch();

  const toggleFavorites = () => {
    const isKampInFavorites = favorites.some(
      (favorite) => favorite._id === kamps._id
    );
    if (isKampInFavorites) {
      dispatch(removeFavorite(kamps));
    } else {
      dispatch(addFavorite(kamps));
    }
    setIsKampInFavorites(!isKampInFavorites);
  };

  const location = kamps.location;
  const parts = location.split(", ");
  const formattedLocation = parts.reverse().join(", ");
  console.log(formattedLocation);

  return (
    <div className={css.kampCardWrapper}>
      <div>
        <img
          className={css.kampImg}
          src={kamps.gallery[0]}
          alt="img"
          width="290"
          height="310"
        />
      </div>
      <div className={css.kampDesc}>
        <div>
          <div className={css.titleCardContainer}>
            <h2>{kamps.name}</h2>
            <div className={css.priceAndFav}>
              <b className={css.kampPrice}>€{kamps.price}</b>
              <button className={css.btnHeart} onClick={toggleFavorites}>
                {isKampInFavorites ? (
                  <svg className={css.svgFavorite}>
                    <use href={`${svg}#icon-redHeart`}></use>
                  </svg>
                ) : (
                  <svg className={css.svgFavorite}>
                    <use href={`${svg}#icon-heart`}></use>
                  </svg>
                )}
              </button>
            </div>
          </div>
          <ul className={css.ratingContainer}>
            <li className={css.ratingBlock}>
              <svg className={css.svgReviewAndLocation}>
                <use href={`${svg}#icon-star`}></use>
              </svg>
              <p className={css.ratingAndReviews}>
                {kamps.rating}({kamps.reviews.length} Reviews)
              </p>
            </li>
            <li className={css.ratingBlock}>
              <svg className={css.svgReviewAndLocation}>
                <use href={`${svg}#icon-map`}></use>
              </svg>
              <p>{formattedLocation}</p>
            </li>
          </ul>
        </div>

        <div>
          <p className={css.kampDescription}>{kamps.description}</p>
        </div>

        <ul className={css.featureList}>
          <li className={css.featureItem}>
            <svg className={css.svgCard}>
              <use href={`${svg}#icon-adults`}></use>
            </svg>
            {kamps.adults} adults
          </li>
          <li className={css.featureItem}>
            <svg className={css.svgCard}>
              <use href={`${svg}#icon-transmission`}></use>
            </svg>
            {kamps.transmission}
          </li>
          <li className={css.featureItem}>
            <svg className={css.svgCard}>
              <use href={`${svg}#icon-petrol`}></use>
            </svg>
            {kamps.engine}
          </li>
          <li className={css.featureItem}>
            <svg className={css.svgCard}>
              <use href={`${svg}#icon-kitchen`}></use>
            </svg>
            {kamps.details.kitchen > 0 ? "Kitchen" : null}{" "}
          </li>
          <li className={css.featureItem}>
            <svg className={css.svgCard}>
              <use href={`${svg}#icon-bed`}></use>
            </svg>
            {kamps.details.beds} beds
          </li>
          <li className={css.featureItem}>
            <svg className={css.svgCard}>
              <use href={`${svg}#icon-ac`}></use>
            </svg>
            {kamps.details.airConditioner > 0 ? "AC" : null}
          </li>
        </ul>

        <button
          className={css.btnShowMore}
          onClick={() => setIsOpenModal(true)}
        >
          Show more
        </button>
        <Modal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)}>
          <KampDetails kamps={kamps} />
        </Modal>
      </div>
    </div>
  );
}
