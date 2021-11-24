import React from "react";
import PropTypes from "prop-types";
import s from './CardNews.module.css';
import { Link } from "react-router-dom";
import classNames from "classnames";

export default function CardNews({
  id,
  title,
  publishDate,
}) {
  return (
    <div className={classNames(s.cardNews, 'relative bg-white rounded mb-6 xl:mb-0 shadow-lg')}>
      <Link to={`/news-page/${id}`} target="_blank" className={s.link}>
        <div className={s.publishDate}>{publishDate}</div>
        <h4 className={s.title}>{title}</h4>
      </Link>
    </div>
  );
}

CardNews.defaultProps = {
  id: "0",
  title: "this is news",
  publishDate: "04.15.2021",
};

CardNews.propTypes = {
  id: PropTypes.string,
  imgSrc: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  publishDate: PropTypes.string,
};
