import { compareDesc } from "date-fns";
import { allPosts } from "contentlayer/generated";

import PostCard from "@/components/post-card.comp";

export default function Blog() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <div className="py-8">
      <h1 className="mb-8 text-center text-2xl font-black">My Blogs</h1>

      {posts.map((post, index) => (
        <PostCard key={index} {...post} />
      ))}
    </div>
  );
}
