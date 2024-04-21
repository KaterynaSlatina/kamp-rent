export default function StarRating({ rating }) {
  const whiteStars = 5 - rating;
  const yellowStars = rating;

  const grayStar = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="#cccccc"
      width="16px"
      height="16px"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  );

  const yellowStar = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="#ffd700"
      width="16px"
      height="16px"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  );

  return (
    <div>
      {[...Array(yellowStars)].map((_, index) => (
        <span key={index}>{yellowStar}</span>
      ))}
      {[...Array(whiteStars)].map((_, index) => (
        <span key={index}>{grayStar}</span>
      ))}
    </div>
  );
}
