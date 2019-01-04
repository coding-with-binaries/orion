import React from 'react';
import './Button.css';

type Props = {
  style?: React.CSSProperties;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
} & Partial<DefaultProps>;

type DefaultProps = Readonly<typeof defaultProps>;

const defaultProps = {
  family: 'solid' as 'solid' | 'outline' | 'link',
  htmlType: 'button' as 'button' | 'reset' | 'submit',
  type: 'info' as 'info' | 'success' | 'warning' | 'error',
  size: 'md' as 'sm' | 'md' | 'lg',
  disabled: false as boolean
};

const Button: React.SFC<Props> = props => {
  const {
    family,
    type,
    htmlType,
    size,
    disabled,
    style,
    children,
    onClick
  } = props;

  const className = `orion-btn ${family} ${type} ${size} ${
    disabled ? 'disabled' : ''
  }`;
  return (
    <button
      className={className}
      disabled={disabled}
      onClick={onClick}
      type={htmlType}
      style={style}>
      {children}
    </button>
  );
};

Button.defaultProps = defaultProps;

export default Button;
