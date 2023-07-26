import { useEffect, useState } from 'react';

type DelayedActionCallback<T> = (value: T) => void;

function useDelayedAction<T>(
  initialState: T,
  delay: number,
  callback: DelayedActionCallback<T>
): [T, (newValue: T) => void] {
  const [state, setState] = useState<T>(initialState);
  const [isActionDelayed, setIsActionDelayed] = useState<boolean>(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (isActionDelayed) {
      // Trigger the callback after the specified delay
      timeoutId = setTimeout(() => {
        callback(state);
        setIsActionDelayed(false);
      }, delay);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [state, delay, callback, isActionDelayed]);

  const updateState = (newValue: T) => {
    setState(newValue);
    setIsActionDelayed(true);
  };

  return [state, updateState];
}

export default useDelayedAction;
