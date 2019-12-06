import React, { useEffect, useState } from 'react';
import { useKeyDown } from 'hooks/use-keydown';
import { variables } from 'styles/variables';
import { GridOverlay } from './GridOverlay';

const UENO_DEVTOOLS_VISIBLE = '_uenoDevtoolsVisible';

export const Devtools = () => {
  const [isVisible, setVisible] = useState(false);
  const keys = useKeyDown();

  const handleToggle = value => {
    setVisible(value);
    localStorage.setItem(UENO_DEVTOOLS_VISIBLE, JSON.stringify(value));
  };

  useEffect(() => {
    if (keys.includes(17) && keys.includes(75)) {
      handleToggle(!isVisible);
    }
  }, [keys]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    const item = localStorage.getItem(UENO_DEVTOOLS_VISIBLE);
    if (item) {
      handleToggle(JSON.parse(item));
    }
  }, []);

  return (
    <GridOverlay button={isVisible} columns={variables.gridColumnCount} />
  );
};
