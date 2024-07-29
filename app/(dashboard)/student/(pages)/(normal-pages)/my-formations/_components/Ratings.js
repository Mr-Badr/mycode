import React, { Fragment } from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const Ratings = ({ rating, size }) => {
  rating = Math.abs(rating);
  let integer = Math.floor(rating);
  let decimal = rating - integer;
  let starsize = size ? size : '0.875rem';

  const PrintFilledStar = (repeatValue) => {
    const stars = [];
    for (let i = 1; i <= repeatValue; i++) {
      stars.push(<FaStar key={i} size={starsize} />);
    }
    return stars;
  };

  const PrintHalfStar = (repeatValue) => {
    return repeatValue > 0 ? (
      <FaStarHalfAlt size={starsize} />
    ) : (
      ''
    );
  };

  const PrintBlankStar = (repeatValue) => {
    const blankstars = [];
    for (let i = 1; i <= repeatValue; i++) {
      blankstars.push(<FaRegStar key={i} size={starsize} />);
    }
    return blankstars;
  };

  return (
    <Fragment>
      {PrintFilledStar(integer)}
      {PrintHalfStar(decimal)}
      {PrintBlankStar(5 - integer - (decimal > 0 ? 1 : 0))}
    </Fragment>
  );
};

export default Ratings;
