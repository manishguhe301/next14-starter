import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './notFound.module.css';

const NotFound = () => {
  return (
    <div className={styles.container}>
      <Image
        src='/notFound.svg'
        alt=''
        width={300}
        height={300}
        className={styles.notFoundImg}
      />
        <Link href='/' className={styles.link}>
        Back to{' '}
          Home
        </Link>
    </div>
  );
};

export default NotFound;
