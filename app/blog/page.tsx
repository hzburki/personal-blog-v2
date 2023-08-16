import { compareDesc } from 'date-fns';
import { allPosts } from 'contentlayer/generated';

import PostCard from '@/components/post-card.comp';
import PageTitle from '@/components/typography/page-title.comp';
import Divider from '@/components/divider.comp';

export default function Blog() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <div className='py-8'>
      <PageTitle text='My Blog' />

      <Divider height='h-20' />

      {posts.map((post, index) => (
        <PostCard key={index} {...post} />
      ))}
    </div>
  );
}
