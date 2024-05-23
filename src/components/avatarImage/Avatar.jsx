import Image from 'next/image';
import React from 'react';
import styles from './avatar.module.css';

const getAvatar = (id) => {
  return `https://i.pravatar.cc/150?u=${id}`;
};

const Avatar = async({ slug }) => {
  const avatar = getAvatar(slug);
  return (
    <Image
      src={avatar || '/noavatar.png'}
      alt=''
      width={50}
      height={50}
      className={styles.avatar}
    />
  );
};

export default Avatar;
