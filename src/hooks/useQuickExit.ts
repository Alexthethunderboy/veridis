'use client';

import { useEffect, useState } from 'react';

export function useQuickExit(targetUrl: string = 'https://www.google.com') {
  const [escCount, setEscCount] = useState(0);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setEscCount((prev) => {
          const newCount = prev + 1;
          if (newCount >= 3) {
            // Trigger Quick Exit
            window.location.replace(targetUrl);
            return 0; // Reset just in case, though we're navigating away
          }
          return newCount;
        });

        // Reset the counter if the user doesn't press Esc again within 1 second
        const timeout = setTimeout(() => {
          setEscCount(0);
        }, 1000);

        return () => clearTimeout(timeout);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [targetUrl]);

  const triggerQuickExit = () => {
    window.location.replace(targetUrl);
  };

  return { triggerQuickExit };
}
