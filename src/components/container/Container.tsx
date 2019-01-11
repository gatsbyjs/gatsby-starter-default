import React from 'react';
import s from './Container.scss';

interface IContainerProps {
  children?: React.ReactNode;
}

export class Container extends React.PureComponent<IContainerProps> {
  public render() {
    return (
      <section className={s.container}>
        {this.props.children}
      </section>
    );
  }
}
