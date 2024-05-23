import React from 'react';
import styles from './postuser.module.css';
import { getUser } from '../../../lib/data';

// const getSingleUser = async (id) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
//   if (!res.ok) {
//     throw new Error('Failed to fetch data');
//   }
//   return res.json();
// };
const Postuser = async ({ post }) => {
  // const user = await getSingleUser(id);

  const user = await getUser(post.userid);

  return (
    <div className={styles.container}>
      <span className={styles.title}>Author</span>
      <span className={styles.userName}>{user?.username}</span>
    </div>
  );
};

export default Postuser;
