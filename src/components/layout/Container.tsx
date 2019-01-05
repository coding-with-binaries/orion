import React from 'react';

interface Props {
  style?: React.CSSProperties;
  className?: string;
}

const Container: React.SFC<Props> = props => {
  const { style, className, children } = props;

  const classNames = `orion-container ${className ? className : ''}`;

  return (
    <div className={classNames} style={style}>
      {children}
    </div>
  );
};

export default Container;
