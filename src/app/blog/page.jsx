import PostCard from '@/components/postCard/PostCard';
import styles from './blog.module.css';
import { getPosts } from '../../../lib/data';

const getData = async () => {
  const res = await fetch('http://localhost:3000/api/blog');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
};

export const metadata = {
  title: 'Blog Page',
  description: 'Blog Page',
};

const BlogPage = async () => {
  // fetch with an api
  const posts = await getData();

  // fetch without an api
  // const posts = await getPosts();
  return (
    <div className={styles.container}>
      {posts?.posts.map((post) => (
        <div className={styles.post} key={post.title}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
