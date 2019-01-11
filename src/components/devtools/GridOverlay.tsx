import React from 'react';
import s from './GridOverlay.scss';

const LOCAL_STORAGE_KEY_HORIZONTAL = '_devtoolsHorizontalGridVisible';
const LOCAL_STORAGE_KEY_VERTICAL = '_devtoolsVerticalGridVisible';

interface IProps {
  columns: number;
  baseline: number;
  button: boolean;
}

interface IState {
  isHorizontalVisible: boolean;
  isVerticalVisible: boolean;
}

/**
 * Grid Overlay component
 */
export class GridOverlay extends React.Component<IProps, IState> {

  static defaultProps = {
    columns: 12,
    baseline: 16,
    button: false,
  };

  ref: React.RefObject<HTMLDivElement> = React.createRef();

  state = {
    isHorizontalVisible: false,
    isVerticalVisible: false,
  };

  /**
   * Fired when component is mounted on the client
   * Should setup the grid overlay correctly.
   * @return {void}
   */
  componentDidMount() {
    this.setup();

    document.addEventListener('keydown', this.onKeyDown);
  }

  /**
   * Remove the key event.
   * @return {void}
   */
  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown);
  }

  /**
   * Fired column count is changed on the fly.
   * Re-initialize the component.
   * @param {object} Properties
   * @return {void}
   */
  componentWillReceiveProps(props: IProps) {
    this.setup(props);
  }

  /**
   * Let's display the grid with the same shortcut as Sketch.
   * Because why not
   * @return {void}
   */
  onKeyDown = (e: KeyboardEvent) => {
    if (e.ctrlKey && e.keyCode === 76) {
      this.onToggleVertical();
    }
  }

  /**
   * Fired when the horizontal grid is meant to be toggled.
   * @return {void}
   */
  onToggleHorizontal = () => {
    localStorage.setItem(LOCAL_STORAGE_KEY_HORIZONTAL, String(!this.state.isHorizontalVisible));
    this.setState({
      isHorizontalVisible: !this.state.isHorizontalVisible,
    });
  }

  /**
   * Fired when the vertical grid is meant to be toggled.
   * @return {void}
   */
  onToggleVertical = () => {
    localStorage.setItem(LOCAL_STORAGE_KEY_VERTICAL, String(!this.state.isVerticalVisible));
    this.setState({
      isVerticalVisible: !this.state.isVerticalVisible,
    });
  }

  /**
   * Setup will set correct column count and check if it should be visible or not.
   * @param {object} Properties, if other than this.props
   * @return {void}
   */
  setup(props = this.props) {
    const { columns, baseline } = props;

    const isHorizontalVisible = (localStorage.getItem(LOCAL_STORAGE_KEY_HORIZONTAL) === 'true');
    const isVerticalVisible = (localStorage.getItem(LOCAL_STORAGE_KEY_VERTICAL) === 'true');

    this.setState({
      isVerticalVisible,
      isHorizontalVisible,
    });

    if (this.ref.current) {
      this.ref.current.style.setProperty('--grid-column-count', String(columns));
      this.ref.current.style.setProperty('--grid-baseline', `${baseline}px`);
      this.ref.current.style.setProperty('--grid-baseline-calc', String(baseline));
    }
  }

  /**
   * Render the grid and button to toggle
   * @return {Component}
   */
  render() {
    const { columns, button } = this.props;
    const verticalIsVisible = this.state.isVerticalVisible;
    const horizontalIsVisible = this.state.isHorizontalVisible;

    return (
      <div
        className={s('grid', { horizontalIsVisible }, { verticalIsVisible })}
        ref={this.ref}
      >
        <div className={s.grid__container}>
          <div className={s.grid__row} data-columns={columns}>
            {Array(columns).fill(0).map((_, i) => (
              <div key={`grid_column_${i}`} className={s.grid__column}>
                <div className={s.grid__visualize} />
              </div>
            ))}
          </div>
        </div>

        {button ? [
          <button key="v" className={s('grid__button', { verticalIsVisible })} onClick={this.onToggleVertical}>
            <svg className={s.grid__button__svg} width="14px" height="14px" viewBox="0 0 14 14">
              <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <rect x="0" y="0" width="2" height="14" />
                <rect x="4" y="0" width="2" height="14" />
                <rect x="8" y="0" width="2" height="14" />
                <rect x="12" y="0" width="2" height="14" />
              </g>
            </svg>
          </button>,
          <button key="h" className={s('grid__button', { horizontalIsVisible })} onClick={this.onToggleHorizontal}>
            <svg className={s.grid__button__svg} width="14px" height="14px" viewBox="0 0 14 14">
              <g
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
                transform="translate(7.000000, 7.000000) rotate(-270.000000) translate(-7.000000, -7.000000)"
              >
                <rect x="0" y="0" width="2" height="14" />
                <rect x="4" y="0" width="2" height="14" />
                <rect x="8" y="0" width="2" height="14" />
                <rect x="12" y="0" width="2" height="14" />
              </g>
            </svg>
          </button>,
        ] : null}
      </div>
    );
  }
}
