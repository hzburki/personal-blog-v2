import fs from 'fs';
import matter from 'gray-matter';

import Divider from '@/components/divider.comp';
import PostCard from '@/components/post-card.comp';
import PageTitle from '@/components/typography/page-title.comp';

const getPostMetaData = () => {
  const folder = 'posts/';
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith('.md'));

  const posts = markdownPosts.map((post) => {
    const fileContent = fs.readFileSync(`${folder}/${post}`, 'utf8');
    const frontMatter = matter(fileContent);
    const slug = post.replace('.md', '');

    const { date, tags, title, image, status, categories, description } =
      frontMatter.data;

    return {
      slug,
      date,
      tags,
      title,
      image,
      status,
      categories,
      description,
      url: `/blog/${slug}`,
    };
  });

  return posts;
};

export default function Blog() {
  const postList = getPostMetaData();

  return (
    <div className='py-8'>
      <PageTitle text='My Blog' />

      <Divider height='h-20' />

      {postList.map((postInfo) => (
        <PostCard key={postInfo.slug} post={postInfo} />
      ))}
    </div>
  );
}
