import React from 'react';

interface PageTitleProps {
  text: string;
  textPosition?: 'text-left' | 'text-right' | 'text-center';
}

export default function PageTitle(props: PageTitleProps) {
  const { text, textPosition = 'text-center' } = props;

  return (
    <h1 className={`text-4xl font-semibold text-gray-800 ${textPosition}`}>
      {text}
    </h1>
  );
}
