import React from 'react';
import './Card.css';

export const CardHeader: React.SFC = ({ children }) => (
  <div className="card-header">{children}</div>
);

export const CardBody: React.SFC = ({ children }) => (
  <div className="card-body">{children}</div>
);

export const CardFooter: React.SFC = ({ children }) => (
  <div className="card-footer">{children}</div>
);
