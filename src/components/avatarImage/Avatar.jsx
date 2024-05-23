import Image from 'next/image';
import React from 'react';
import styles from './avatar.module.css';

const Avatar = async () => {
  return (
    <Image
      src={'/noavatar.png'}
      alt=''
      width={50}
      height={50}
      className={styles.avatar}
    />
  );
};

export default Avatar;
