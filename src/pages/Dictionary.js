import DictionaryData from 'components/Dictionary/data';
import useCloseNavigation from 'hooks/useCloseNavigation';
import useTitle from 'hooks/useTitle';
import PropTypes from 'prop-types';
import React from 'react';

function DictionaryPage({ isTOEIC }) {
  useTitle(isTOEIC ? 'Từ vựng TOEIC' : 'Từ điển');
  useCloseNavigation();

  return (
    <div className="container">
      <DictionaryData isTOEIC={isTOEIC} />
    </div>
  );
}

DictionaryPage.propTypes = {
  isTOEIC: PropTypes.bool,
};

DictionaryPage.defaultProps = {
  isTOEIC: false,
};

export default DictionaryPage;
