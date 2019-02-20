import React from 'react';
import './Layout.css';

type GridTrack =
  | {
      lineName?: string;
      trackSize: string;
    }
  | string;

interface Props {
  rows: GridTrack[];
  columns: GridTrack[];
}

const convertGridTrackToString = (tracks: GridTrack[]) => {
  let stringTrack = ``;
  tracks.forEach(track => {
    if (typeof track === 'object') {
      stringTrack += `${track.lineName ? `[${track.lineName}] ` : ``}${
        track.trackSize
      } `;
    } else {
      stringTrack += `${track} `;
    }
  });
  return stringTrack.trim();
};

const Grid: React.SFC<Props> = props => {
  const { children, rows, columns } = props;
  const gridTemplateRows = convertGridTrackToString(rows);
  const gridTemplateColumns = convertGridTrackToString(columns);
  const grid = `${gridTemplateRows} / ${gridTemplateColumns}`;
  return (
    <div className="orion-grid" style={{ grid }}>
      {children}
    </div>
  );
};

export default Grid;
