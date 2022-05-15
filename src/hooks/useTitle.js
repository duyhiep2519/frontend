import { useEffect } from 'react';

// set title for component
function useTitle(title = 'English App', isOverride = false) {
  useEffect(() => {
    if (isOverride) {
      document.title = title;
    } else {
      document.title =
        title !== 'English App' ? `${title} - English App` : title;
    }
  }, []);

  return null;
}

export default useTitle;
