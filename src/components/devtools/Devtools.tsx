import React from 'react';
import { GridOverlay } from './GridOverlay';
import { GsapTools } from './GsapTools';

const LOCAL_STORAGE_KEY_VISIBLE = '_devtoolsVisible';

export class Devtools extends React.PureComponent {

  state = {
    visible: localStorage.getItem(LOCAL_STORAGE_KEY_VISIBLE) === 'true',
  }

  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDown, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown, false);
  }

  onKeyDown = (e: KeyboardEvent) => {
    if (e.ctrlKey && e.keyCode === 75) {
      this.onToggleDisplay();
    }
  }

  onToggleDisplay = () => {
    const { visible } = this.state;
    this.setState({ visible: !visible });
    localStorage.setItem(LOCAL_STORAGE_KEY_VISIBLE, String(!visible));
  }

  render() {
    const { visible } = this.state;

    if (!visible && process.env.NODE_ENV !== 'development') {
      return null;
    }

    return (
      <>
        <GridOverlay button={visible} columns={12} />
        <GsapTools button={visible} />
      </>
    );
  }
}
