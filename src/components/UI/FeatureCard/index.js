import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import { Link } from 'react-router-dom';

function FeatureCard({ imgUrl, title, subTitle, to }) {
  return (
    <div className="card">
      <div
        className="card-image"
        style={{
          backgroundImage: `url(${imgUrl})`,
        }}></div>
      <div className="card-text">
        <h2>{title}</h2>
        <p>{subTitle}</p>
      </div>
    </div>
  );
}

FeatureCard.propTypes = {
  imgUrl: PropTypes.string,
  title: PropTypes.string,
  to: PropTypes.string,
  subTitle: PropTypes.string,
};

FeatureCard.defaultProps = {
  imgUrl: '',
  title: '',
  to: '',
  subTitle: '',
};

export default FeatureCard;
