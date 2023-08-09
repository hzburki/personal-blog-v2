import React from 'react';

interface SectionTitleProps {
  text: string;
  size: 'h2' | 'h3';
  textPosition?: 'text-left' | 'text-right' | 'text-center';
}

export default function SectionTitle(props: SectionTitleProps) {
  const { text, size, textPosition = 'text-left' } = props;

  if (size === 'h2') {
    return (
      <h2 className={`text-3xl font-semibold text-gray-800 ${textPosition}`}>
        {text}
      </h2>
    );
  }

  return (
    <h3 className={`text-2xl font-semibold text-gray-800 ${textPosition}`}>
      {text}
    </h3>
  );
}
