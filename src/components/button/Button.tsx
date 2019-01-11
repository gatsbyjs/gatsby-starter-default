import React from 'react';
import { Link } from 'gatsby';
import s from './Button.scss';

interface IButtonProps {
  to?: string;
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}

export class Button extends React.PureComponent<IButtonProps> {

  render() {
    const {
      to,
      children,
      className,
      disabled,
      secondary,
      block,
      ...rest // tslint:disable-line
    } = this.props;

    const passProps = { ...rest };

    const isLink = (typeof to !== 'undefined');
    const isExternal = isLink && /^((https?:)?\/\/|[0-9a-zA-Z]+:)/.test(to || '');

    // Extend className of the rest
    passProps.className = s(s.button, className, { disabled, secondary, block });
    passProps.disabled = disabled;

    // http, https, //, mailto, etc.
    if (isExternal) {
      return <a target="_blank" rel="noopener noreferrer" href={to} {...passProps}>{children}</a>;
    }

    // Everything else
    if (isLink) {
      return <Link to={to || '#'} {...passProps}>{children}</Link>;
    }

    // Default
    return <button {...passProps}>{children}</button>;
  }
}
