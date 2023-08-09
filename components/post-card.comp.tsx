import Link from 'next/link';
import Image from 'next/image';
import { format, parseISO } from 'date-fns';
import { Post } from 'contentlayer/generated';

function PostCard(post: Post) {
  return (
    <Link
      href={post.url}
      className='group flex flex-col items-start justify-center gap-2 border-b-2 border-dashed py-8 last:border-0'
    >
      <h2 className='mb-1 text-xl font-bold text-gray-800'>{post.title}</h2>

      <div className='flex w-full'>
        <Image
          src={`${post.image}`}
          alt={post.title}
          width={450}
          height={100}
          className='rounded-lg shadow grayscale group-hover:grayscale-0 group-active:grayscale-0'
        />

        <div className='flex flex-col justify-center px-4'>
          <time
            dateTime={post.date}
            className='mb-2 block text-xs text-gray-600'
          >
            {format(parseISO(post.date), 'LLLL d, yyyy')}
          </time>

          <div
            className='prose [&>*:last-child]:mb-0 [&>*]:mb-3'
            dangerouslySetInnerHTML={{ __html: post.description.html }}
          />
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
