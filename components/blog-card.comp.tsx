import Link from 'next/link';
import Image from 'next/image';

import { humanReadableDate } from '@/utils/date.utils';

interface BlogCardProps {
  post: {
    title: string;
    description: string;
    date: string;
    url: string;
    image: string;
  };
}

function BlogCard({ post }: BlogCardProps) {
  return (
    <Link
      href={post.url}
      className='group flex justify-center gap-2 border-b-2 border-dashed py-8 last:border-0'
    >
      <div className='flex w-full flex-col items-center lg:flex-row'>
        <Image
          alt={post.title}
          width={450}
          height={100}
          src={`${post.image}`}
          className='mb-2 shadow transition-shadow duration-200 group-hover:shadow-xl sm:rounded-lg lg:mb-0'
        />

        <div className='flex flex-col items-center justify-center px-4 lg:items-start'>
          <h2 className='mb-1 text-xl font-bold text-gray-800'>{post.title}</h2>

          <time
            dateTime={post.date}
            className='mb-2 block text-xs text-gray-600'
          >
            {humanReadableDate(post.date)}
          </time>

          <div className='prose-sm md:prose [&>*:last-child]:mb-0 [&>*]:mb-3'>
            {post.description}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default BlogCard;
