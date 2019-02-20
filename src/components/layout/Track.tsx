import React from 'react';

interface BasicTrack {
  start: string;
}

interface TrackWithEnd extends BasicTrack {
  end: string;
}

interface TrackWithSpan extends BasicTrack {
  span: string;
}

type Track = TrackWithEnd | TrackWithSpan;

interface Props {
  column: Track;
  row: Track;
}

const convertTrackToString = (track: Track) =>
  `${track.start} / ${'span' in track ? `span ${track.span}` : `${track.end}`}`;

const Track: React.SFC<Props> = props => {
  const { children, column, row } = props;
  const gridColumn = convertTrackToString(column);
  const gridRow = convertTrackToString(row);
  return <div style={{ gridColumn, gridRow }}>{children}</div>;
};

export default Track;
