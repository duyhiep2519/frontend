import CorrectWordData from 'components/PlayGames/CorrectWord/data';
import useCloseNavigation from 'hooks/useCloseNavigation';
import useTitle from 'hooks/useTitle';
import React from 'react';

function CorrectWordPage() {
  // eslint-disable-next-line quotes
  useTitle("Game hãy chọn từ đúng (Let's choose the correct word)");
  useCloseNavigation();
  return <CorrectWordData />;
}

export default CorrectWordPage;
