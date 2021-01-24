import { useEffect, useState } from "react"

export const useComponentDidMount = (callback) => {
  // eslint-disable-next-line
  useEffect(callback);
}

export const useKeyListener = (callback, keys) => {
  const [keyPressed, setKeyPressed] = useState(false);
  
  const handleKeyUp = ({ key }) => {
    if (keys.indexOf(key) !== -1) setKeyPressed(false)
  };

  const handleKeyDown = ({ key }) => {
    if (keys.indexOf(key) !== -1) setKeyPressed(true);
  }

  useEffect(() => {
    if(keyPressed) {
      setKeyPressed(false);
      callback();
    }
  }, [keyPressed, callback]);

  useComponentDidMount(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  });
}