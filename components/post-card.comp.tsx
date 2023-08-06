import Link from 'next/link';
import { format, parseISO } from 'date-fns';
import { Post } from 'contentlayer/generated';
import Image from 'next/image';

function PostCard(post: Post) {
  console.log({ image: post.image });

  return (
    <div className='mb-8'>
      <h2 className='mb-1 text-xl'>
        <Link
          href={post.url}
          className='text-blue-700 hover:text-blue-900 dark:text-blue-400'
        >
          {post.title}
        </Link>
      </h2>

      <Image src={`${post.image}`} alt={post.title} width={500} height={300} />

      <time dateTime={post.date} className='mb-2 block text-xs text-gray-600'>
        {format(parseISO(post.date), 'LLLL d, yyyy')}
      </time>

      <div
        className='text-sm [&>*:last-child]:mb-0 [&>*]:mb-3'
        dangerouslySetInnerHTML={{ __html: post.description.html }}
      />
    </div>
  );
}

export default PostCard;
