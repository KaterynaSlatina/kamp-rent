import React from "react";
import { useSelector } from "react-redux";
import { selectFavoriteKamp } from "../../redux/selectors";
import svg from "../../icons/icons.svg";
import css from "./FavoriteList.module.css";
import { removeFavorite } from "../../redux/favoritesSlice";

export default function FavoriteList() {
  const favorites = useSelector(selectFavoriteKamp);

  return (
    <div>
      <ul>
        {favorites.length > 0
          ? favorites.map((product) => (
              <li className={css.favoriteContainer} key={product._id}>
                <div className={css.FavNameAndRemove}>
                  <h2>{product.name}</h2>
                  <button
                    type="button"
                    className={css.favBtnRemove}
                    onClick={() => removeFavorite(product)}
                  >
                    Remove
                  </button>
                </div>
                <b className={css.kampPrice}>€{product.price}</b>
                <div className={css.favLocation}>
                  <svg className={css.svgReviewAndLocation}>
                    <use href={`${svg}#icon-map`}></use>
                  </svg>
                  <p>{product.location}</p>
                </div>

                <div className={css.favImgAndFeatures}>
                  <div>
                    <img
                      className={css.kampImg}
                      src={product.gallery[0]}
                      alt="img"
                      width="290"
                      height="310"
                    />
                  </div>

                  <ul className={css.featureList}>
                    <li className={css.featureItem}>
                      <svg className={css.svgCard}>
                        <use href={`${svg}#icon-adults`}></use>
                      </svg>
                      {product.adults} adults
                    </li>
                    <li className={css.featureItem}>
                      <svg className={css.svgCard}>
                        <use href={`${svg}#icon-transmission`}></use>
                      </svg>
                      {product.transmission}
                    </li>
                    <li className={css.featureItem}>
                      <svg className={css.svgCard}>
                        <use href={`${svg}#icon-petrol`}></use>
                      </svg>
                      {product.engine}
                    </li>
                    <li className={css.featureItem}>
                      <svg className={css.svgCard}>
                        <use href={`${svg}#icon-kitchen`}></use>
                      </svg>
                      {product.details.kitchen > 0 ? "Kitchen" : null}{" "}
                    </li>
                    <li className={css.featureItem}>
                      <svg className={css.svgCard}>
                        <use href={`${svg}#icon-bed`}></use>
                      </svg>
                      {product.details.beds} beds
                    </li>
                    <li className={css.featureItem}>
                      <svg className={css.svgCard}>
                        <use href={`${svg}#icon-ac`}></use>
                      </svg>
                      {product.details.airConditioner > 0 ? "AC" : null}
                    </li>
                  </ul>
                </div>
              </li>
            ))
          : "You don't have any favorites yet"}
      </ul>
    </div>
  );
}
