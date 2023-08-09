import React from 'react';

interface DividerProps {
  height?: 'h-10' | 'h-20' | 'h-40' | 'h-60' | 'h-80';
}

export default function Divider(props: DividerProps) {
  const { height = 'h-20' } = props;

  return <div className={height} />;
}
