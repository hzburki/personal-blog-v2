import Link from 'next/link';
import Image from 'next/image';
import { format, parseISO } from 'date-fns';
import { Post } from 'contentlayer/generated';

function PostCard(post: Post) {
  return (
    <div className='flex flex-col items-start justify-center gap-2 py-8 '>
      <h2 className='mb-1 text-xl'>
        <Link
          href={post.url}
          className='text-blue-700 hover:text-blue-900 dark:text-blue-400'
        >
          {post.title}
        </Link>
      </h2>

      <div className='flex w-full'>
        <Image
          src={`${post.image}`}
          alt={post.title}
          width={450}
          height={100}
          className='rounded-lg shadow'
        />

        <div className='flex flex-col justify-center px-4'>
          <time
            dateTime={post.date}
            className='mb-2 block text-xs text-gray-600'
          >
            {format(parseISO(post.date), 'LLLL d, yyyy')}
          </time>

          <div
            className='prose text-sm [&>*:last-child]:mb-0 [&>*]:mb-3'
            dangerouslySetInnerHTML={{ __html: post.description.html }}
          />
        </div>
      </div>
    </div>
  );
}

export default PostCard;
