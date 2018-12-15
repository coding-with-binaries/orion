import React from 'react';
import './Card.css';

type Props = {
  onClick?: () => void;
} & Partial<DefaultProps>;

type DefaultProps = Readonly<typeof defaultProps>;

const defaultProps = {
  clickable: true as boolean
};

const Card: React.SFC<Props> = props => {
  const { clickable, children, onClick } = props;
  return (
    <div
      className={`orion-card${clickable ? ' clickable' : ''}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

Card.defaultProps = defaultProps;

export default Card;
