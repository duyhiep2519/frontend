import { useEffect } from 'react';

function useCloseNavigation() {
  useEffect(() => {
    document.getElementById('MyNav').style.display = 'none';
    return () => {
      document.getElementById('MyNav')?.removeAttribute('style');
    };
  }, []);

  return null;
}

export default useCloseNavigation;
