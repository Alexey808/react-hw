import React, {useCallback} from 'react';

export const useEnterKey = (callback: () => void) => {
  return useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        callback();
      }
    },
    [callback]
  );
}
