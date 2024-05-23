import Image from 'next/image';
import styles from './singlePost.module.css';
import Postuser from '@/components/postuser/Postuser';
import { Suspense } from 'react';
import { getPost } from '../../../../lib/data';
import Avatar from '@/components/avatarImage/Avatar';

// const getSinglePost = async (id) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
//   if (!res.ok) {
//     throw new Error('Failed to fetch data');
//   }
//   return res.json();
// };

const PostPage = async ({ params }) => {
  // fetch with an api
  const post = await getPost(params.slug);

  // fetch without an api
  // const post = await getPost(params.slug);

  return (
    <div className={styles.container}>
      {post.img && (
        <div className={styles.imgContainer}>
          <Image src={post.img} alt='' fill className={styles.img} />
        </div>
      )}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post?.title}</h1>
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
              {post.createdAt.toString().slice(4, 16)}
            </span>
          </div>
        </div>
        <div className={styles.content}>{post?.desc}</div>
      </div>
    </div>
  );
};

export default PostPage;
