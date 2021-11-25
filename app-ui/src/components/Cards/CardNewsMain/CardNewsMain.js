import React from "react";
import PropTypes from "prop-types";
import s from './CardNewsMain.module.css';
import { Link } from "react-router-dom";
import classNames from "classnames";

export default function CardNewsMain({
  id,
  imgSrc,
  title,
  description,
  publishDate,
}) {
  return (
    <div className={classNames(s.cardNewsMain, 'relative flex flex-col break-words bg-white rounded mb-6 xl:mb-0 shadow-lg')}>
      <Link to={`/mainNews-page/${id}`} target="_blank">
        <img className={s.image} src={require('assets/img/test-news.jpg').default} alt={title} />
        <div className={s.publishDate}>{publishDate}</div>
        <div className='flex flex-col items-center'>
          <h4 className={s.title}>{title}</h4>
          <p className={s.description}>{description}</p>
        </div>
      </Link>
    </div>
  );
}

CardNewsMain.defaultProps = {
  id: "0",
  imgSrc: '',
  title: "this is news",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  publishDate: "04.15.2021",
};

CardNewsMain.propTypes = {
  id: PropTypes.string,
  imgSrc: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  publishDate: PropTypes.string,
};
