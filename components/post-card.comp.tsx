import Link from 'next/link';
import Image from 'next/image';

function PostCard({ post }: any) {
  return (
    <Link
      href={post.url}
      className='group flex flex-col items-start justify-center gap-2 border-b-2 border-dashed py-8 last:border-0'
    >
      <div className='flex w-full'>
        <Image
          alt={post.title}
          width={450}
          height={100}
          src={`${post.image}`}
          className='rounded-lg shadow transition-shadow duration-200 group-hover:shadow-xl'
        />

        <div className='flex flex-col justify-center px-4'>
          <h2 className='mb-1 text-xl font-bold text-gray-800'>{post.title}</h2>

          <time
            dateTime={post.date}
            className='mb-2 block text-xs text-gray-600'
          >
            {post.date}
          </time>

          <div className='prose [&>*:last-child]:mb-0 [&>*]:mb-3'>
            {post.description}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
