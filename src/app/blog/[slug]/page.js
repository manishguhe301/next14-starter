import Image from 'next/image';
import styles from './singlePost.module.css';
import Postuser from '@/components/postuser/Postuser';
import { Suspense } from 'react';
import { getPost } from '../../../../lib/data';
import Avatar from '@/components/avatarImage/Avatar';

const getSinglePost = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
};

const PostPage = async ({ params }) => {
  // fetch with an api
  const post = await getSinglePost(params.slug);

  // fetch without an api
  // const post = await getPost(params.slug);

  const randomDate = new Date(
    Math.floor(Math.random() * (2024 - 1970 + 1)) + 1970,
    Math.floor(Math.random() * 12),
    Math.floor(Math.random() * 28)
  );

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src='/post.jpeg' alt='' fill className={styles.img} />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post?.title}</h1>
        <div className={styles.detail}>
          <Avatar slug={params.slug} />
          {post && (
            <Suspense fallback={<div>Loading...</div>}>
              <Postuser id={post.userId} />
            </Suspense>
          )}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              {randomDate.toDateString()}
            </span>
          </div>
        </div>
        <div className={styles.content}>{post?.body}</div>
      </div>
    </div>
  );
};

export default PostPage;
