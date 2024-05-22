import Image from 'next/image';
import styles from './singlePost.module.css';
import Postuser from '@/components/postuser/Postuser';
import { Suspense } from 'react';
import { getPost } from '../../../../lib/data';

// const getSinglePost = async (id) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
//   if (!res.ok) {
//     throw new Error('Failed to fetch data');
//   }
//   return res.json();
// };

const PostPage = async ({ params }) => {
  // fetch with an api
  // const post = await getSinglePost(params.slug);

  // fetch without an api
  const post = await getPost(params.slug);
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src='/post.jpeg' alt='' fill className={styles.img} />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post?.title}</h1>
        <div className={styles.detail}>
          <Image
            src='/post.jpeg'
            alt=''
            width={50}
            height={50}
            className={styles.avatar}
          />
          {post && (
            <Suspense fallback={<div>Loading...</div>}>
              <Postuser id={post.userId} />
            </Suspense>
          )}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2022</span>
          </div>
        </div>
        <div className={styles.content}>{post?.body}</div>
      </div>
    </div>
  );
};

export default PostPage;
