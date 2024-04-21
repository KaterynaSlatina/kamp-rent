import React from "react";
import css from "./Features.module.css";
import svg from "../../icons/icons.svg";

export default function Features({ kamps }) {
  return (
    <div>
      <div>
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
              <use href={`${svg}#icon-ac`}></use>
            </svg>
            {kamps.details.airConditioner > 0 ? "AC" : null}
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
            {kamps.details.kitchen > 0 ? "Kitchen" : null}
          </li>
          <li className={css.featureItem}>
            <svg className={css.svgCard}>
              <use href={`${svg}#icon-bed`}></use>
            </svg>
            {kamps.details.beds} beds
          </li>
          {kamps.details.CD > 0 ? (
            <li className={css.featureItem}>
              <svg className={css.svgCard}>
                <use href={`${svg}#icon-cd`}></use>
              </svg>
              {kamps.details.CD} CD
            </li>
          ) : null}
          {kamps.details.TV > 0 ? (
            <li className={css.featureItem}>
              <svg className={css.svgCard}>
                <use href={`${svg}#icon-tv`}></use>
              </svg>
              {kamps.details.TV > 0 ? "TV" : null}
            </li>
          ) : null}
          <li className={css.featureItem}>
            <svg className={css.svgCard}>
              <use href={`${svg}#icon-radio`}></use>
            </svg>
            {kamps.details.radio > 0 ? "Radio" : null}
          </li>
          <li className={css.featureItem}>
            <svg className={css.svgCard}>
              <use href={`${svg}#icon-hob`}></use>
            </svg>
            {kamps.details.hob} hob
          </li>
          {kamps.details.shower > 0 ? (
            <li className={css.featureItem}>
              <svg className={css.svgCard}>
                <use href={`${svg}#icon-shower`}></use>
              </svg>
              {kamps.details.shower > 0 ? "shower" : null}
            </li>
          ) : null}
          {kamps.details.toilet > 0 ? (
            <li className={css.featureItem}>
              <svg className={css.svgCard}>
                <use href={`${svg}#icon-paper`}></use>
              </svg>
              {kamps.details.toilet > 0 ? "toilet" : null}
            </li>
          ) : null}
          {kamps.details.freezer > 0 ? (
            <li className={css.featureItem}>
              <svg className={css.svgCard}>
                <use href={`${svg}#icon-freezer`}></use>
              </svg>
              {kamps.details.freezer > 0 ? "freezer" : null}
            </li>
          ) : null}
          {kamps.details.hob > 0 ? (
            <li className={css.featureItem}>
              <svg className={css.svgCard}>
                <use href={`${svg}#icon-hob`}></use>
              </svg>
              {kamps.details.hob} hob
            </li>
          ) : null}
          {kamps.details.microwave > 0 ? (
            <li className={css.featureItem}>
              <svg className={css.svgCard}>
                <use href={`${svg}#icon-hob`}></use>
              </svg>
              {kamps.details.microwave > 0 ? "microwave" : null}
            </li>
          ) : null}
          {kamps.details.gas > 0 ? (
            <li className={css.featureItem}>
              <svg className={css.svgCard}>
                <use href={`${svg}#icon-hob`}></use>
              </svg>
              {kamps.details.gas}
            </li>
          ) : null}
          {kamps.details.water > 0 ? (
            <li className={css.featureItem}>
              <svg className={css.svgCard}>
                <use href={`${svg}#icon-water`}></use>
              </svg>
              {kamps.details.water}
            </li>
          ) : null}
        </ul>
      </div>

      <div>
        <h3 className={css.vehicleDetailsTittle}>Vehicle details</h3>

        <ul className={css.vehicleDetailsList}>
          <li className={css.vehicleDetailsItem}>
            <p>Form</p>
            <p>{kamps.form}</p>
          </li>

          <li className={css.vehicleDetailsItem}>
            <p>Length</p>
            <p>{kamps.length}</p>
          </li>

          <li className={css.vehicleDetailsItem}>
            <p>Width</p>
            <p>{kamps.width}</p>
          </li>

          <li className={css.vehicleDetailsItem}>
            <p>Height</p>
            <p>{kamps.height}</p>
          </li>

          <li className={css.vehicleDetailsItem}>
            <p>Tank</p>
            <p>{kamps.tank}</p>
          </li>
          <li className={css.vehicleDetailsItem}>
            <p>Consumption</p>
            <p>{kamps.consumption}</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
