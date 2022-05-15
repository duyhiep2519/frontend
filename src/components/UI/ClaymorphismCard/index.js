import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import { Link } from 'react-router-dom';

function ClaymorphismCard({ imgUrl, title, subTitle, to }) {
  return (
    <div className="claymorphismCard">
      <Link to={to}>
        <div className="clay__img">
          <img src={imgUrl} alt="communicateImg" />
        </div>
        <div className="clay__content">
          <h3>
            {title} <br />
            <span>{subTitle}</span>
          </h3>
        </div>
      </Link>
    </div>
  );
}

ClaymorphismCard.propTypes = {
  imgUrl: PropTypes.string,
  title: PropTypes.string,
  to: PropTypes.string,
  subTitle: PropTypes.string,
};

ClaymorphismCard.defaultProps = {
  imgUrl: '',
  title: '',
  to: '',
  subTitle: '',
};

export default ClaymorphismCard;
