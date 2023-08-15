import React from 'react';
import Image from 'next/image';

interface BlogImageProps {
  src: string;
  alt?: string;
}

export default function BlogImage({ src, alt = '' }: BlogImageProps) {
  return <Image src={src} alt={alt} />;
}
