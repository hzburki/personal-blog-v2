import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import Divider from '@/components/divider.comp';
import BlogCard from '@/components/blog-card.comp';
import PageTitle from '@/components/typography/page-title.comp';

// Todo: Make this logic re-usable. Its also used in the blog list page
const getPostMetaData = () => {
  // for reference: https://stackoverflow.com/questions/74924100/vercel-error-enoent-no-such-file-or-directory
  const folder = path.join(process.cwd(), 'posts');
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
      tags,
      date,
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
    <div className='w-full py-8'>
      <PageTitle text='My Blog' />

      <Divider height='h-20' />

      {postList.map((postInfo) => (
        <BlogCard key={postInfo.slug} post={postInfo} />
      ))}
    </div>
  );
}
