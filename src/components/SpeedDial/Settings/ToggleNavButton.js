import React, { useEffect, useState } from 'react';

function ToggleNavButton() {
  const [isActive, setIsActive] = useState(false);

  // get status navigation
  useEffect(() => {
    const nav = document.getElementById('MyNav');
    nav && nav.style?.display === 'none'
      ? setIsActive(true)
      : setIsActive(false);
  }, []);

  useEffect(() => {
    const nav = document.getElementById('MyNav');
    if (nav) {
      if (isActive) {
        nav.style.display = 'none';
      } else {
        nav.style.display = 'block';
      }
    }
  }, [isActive]);

  return (
    <div
      className={`My-switch ${isActive ? 'active' : ''}`}
      onClick={() => setIsActive(!isActive)}
    />
  );
}

export default ToggleNavButton;