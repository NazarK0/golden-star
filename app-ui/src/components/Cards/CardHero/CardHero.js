import React from "react";
import PropTypes from "prop-types";
import s from './CardHero.module.css';
import { Link } from "react-router-dom";
import classNames from "classnames";

export default function CardHero({
  id,
  imgSrc,
  name,
  isPosthumously,
  nominationDate,
}) {
  return (
    <div className={classNames(s.cardHero, 'relative flex flex-col break-words bg-white rounded mb-6 xl:mb-0 shadow-lg')}>
      <Link to={`/hero-page/${id}`} target="_blank">
        <img className={s.image} src={require(imgSrc).default} alt={name} />
        <div className={s.nominationDate}>{nominationDate}</div>
        <div className='flex flex-col items-center'>
          <h4 className={s.name}>{name}</h4>
          {isPosthumously &&
            <div className={s.posthumouslyBlock}>posthumously</div>
          }
        </div>
      </Link>
    </div>
  );
}

CardHero.defaultProps = {
  id: "0",
  imgSrc: "./assets/img/test-user.png",
  name: "Ван Дорн",
  isPosthumously: false,
  nominationDate: "04.15.2021",
};

CardHero.propTypes = {
  id: PropTypes.string,
  imgSrc: PropTypes.string,
  name: PropTypes.string,
  isPosthumously: PropTypes.bool,
  nominationDate: PropTypes.string,
};
