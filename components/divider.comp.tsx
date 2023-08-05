import React from 'react';

interface DividerProps {
  height?: number;
}

export default function Divider(props: DividerProps) {
  const { height = 20 } = props;

  return <div className={`h-${height}`} />;
}
