import React from 'react';

import LoginGoogle from './Google';

function SocialNetworkLogin() {
  return (
    <div
      className="d-flex flex-center "
      style={{ margin: '0 -0.8rem', width: '100%' }}>
      <LoginGoogle />
    </div>
  );
}

export default SocialNetworkLogin;
