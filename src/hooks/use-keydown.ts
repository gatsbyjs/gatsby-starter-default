import * as React from 'react';

/**
 * Custom hooks that return the keys that are pressed on the keyboard
 */
export const useKeyDown = () => {
  const [keys, setKeys] = React.useState<number[]>([]);

  const handleKeyDown = ({ keyCode }: KeyboardEvent) => {
    if (keys.includes(keyCode)) {
      return;
    }

    setKeys([...keys, keyCode]);
  };

  const handleKeyUp = ({ keyCode }: KeyboardEvent) => {
    const d = keys.indexOf(keyCode, 0);

    setKeys([...keys.slice(0, d), ...keys.slice(d + 1)]);
  };

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyDown, false);
    document.addEventListener('keyup', handleKeyUp, false);

    return () => {
      document.removeEventListener('keydown', handleKeyDown, false);
      document.removeEventListener('keyup', handleKeyUp, false);
    };
  }, [keys]);

  return keys;
};
