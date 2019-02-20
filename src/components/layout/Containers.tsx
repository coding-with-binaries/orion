import React from 'react';
import './Layout.css';

export const RootContainer: React.SFC = props => {
  const { children } = props;
  return <div className="orion-root-container">{children}</div>;
};
