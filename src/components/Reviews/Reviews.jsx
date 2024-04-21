import React from "react";
import StarRating from "../StarsRating/StarsRating";
import css from "./Reviews.module.css";

export default function Reviews({ kamps, rating }) {
  const firstInitial = kamps.reviews[0].reviewer_name.charAt(0).toUpperCase();

  return (
    <div>
      <ul className={css.reviewContainer}>
        {kamps.reviews.map((review, index) => (
          <li key={index}>
            <div className={css.reviewItem}>
              <div className={css.reviewerRate}>
                <div className={css.firstInitialCover}>
                  <h2 className={css.firstInitial}>{firstInitial}</h2>
                </div>
                <div className={css.reviewerNameAndStars}>
                  <h3> {review.reviewer_name}</h3>
                  <div>
                    <StarRating rating={review.reviewer_rating} />
                  </div>
                </div>
              </div>

              <p className={css.reviewComment}>{review.comment}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
