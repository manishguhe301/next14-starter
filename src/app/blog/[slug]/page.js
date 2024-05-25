import Image from 'next/image';
import styles from './singlePost.module.css';
import Postuser from '@/components/postuser/Postuser';
import { Suspense } from 'react';
import { getPost } from '../../../../lib/data';
import Avatar from '@/components/avatarImage/Avatar';

const getSinglePost = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/blog/${slug}`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
};

export const generateMetadata = async ({ params }) => {
  const { slug } = params;
  const post = await getPost(slug);

  return {
    title: post?.title,
    description: post?.title,
  };
};

const PostPage = async ({ params }) => {
  // fetch with an api
  const post = await getSinglePost(params.slug);

  // fetch without an api
  // const post = await getPost(params.slug);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        {post?.post.img ? (
          <Image src={post?.post.img} alt='' fill className={styles.img} />
        ) : (
          <Image src='/post.jpeg' alt='' fill className={styles.img} />
        )}
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post?.post.title}</h1>
        <div className={styles.detail}>
          <Avatar />
          {/* {post && (
            <Suspense fallback={<div>Loading...</div>}>
              <Postuser post={post} />
            </Suspense>
          )} */}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              {post?.post.createdAt.toString().slice(0, 10)}
            </span>
          </div>
        </div>
        <div className={styles.content}>{post?.post.desc}</div>
      </div>
    </div>
  );
};

export default PostPage;
