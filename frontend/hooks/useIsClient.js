import { useEffect, useState } from 'react';

export const useIsClient = (refresh) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    typeof window === 'undefined' ? setIsClient(false) : setIsClient(true);

    return () => setIsClient(false);
  }, [refresh]);

  return isClient;
};
