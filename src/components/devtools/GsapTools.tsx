import React from 'react';
import s from './GsapTools.scss';

const GsapDevTools = require('gsap-tools').default;
const LOCAL_STORAGE_GSAPTOOLS = '_devtoolsGsapToolsVisible';

export class GsapTools extends React.Component<{ button: boolean }> {

  state = {
    visible: false,
  }

  onToggleGsapTools = () => {
    const { visible } = this.state;
    this.setState({ visible: !visible });
    localStorage.setItem(LOCAL_STORAGE_GSAPTOOLS, String(!visible));
  }

  render() {
    const { visible } = this.state;
    const { button } = this.props;

    return (
      <>
        {button && (
          <button className={s(s.button, { visible })} onClick={this.onToggleGsapTools}>
            GSAP
          </button>
        )}
        <GsapDevTools
          onClick={this.onToggleGsapTools}
          isVisible={visible}
          isFixed
        />
      </>
    );
  }
}
