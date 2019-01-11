import React from 'react';
import { Container } from 'components/container/Container';
import s from './Segment.scss';

interface ISegmentProps {
  children?: React.ReactNode;
  container?: boolean;
}

export class Segment extends React.PureComponent<ISegmentProps> {

  static defaultProps = {
    container: true,
  };

  public render() {
    const {
      children,
      container,
    } = this.props;

    const content = container ? <Container>{children}</Container> : children;

    return (
      <section className={s.segment}>
        {content}
      </section>
    );
  }
}
