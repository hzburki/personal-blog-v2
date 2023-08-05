import React from 'react';

interface ParagraphProps {
  text: string;
}

export default function Paragraph(props: ParagraphProps) {
  const { text } = props;

  return <p className='text-lg text-gray-800'>{text}</p>;
}
