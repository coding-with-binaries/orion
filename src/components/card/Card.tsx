import React, { memo, SFC } from 'react';

interface Props {
  type?: 'clickable';
}

const Card: SFC<Props> = props => {
  return <div>Card</div>;
};

export default memo(Card);
