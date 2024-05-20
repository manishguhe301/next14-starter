import React from 'react';
import Links from './links/Links';
import styles from './navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';

const NavBar = () => {
  return (
    <div className={styles.container}>
      <Link href='/'>
        <Image
          src='/logo.png'
          alt='logo'
          className={styles.logo}
          width={100}
          height={100}
        />
      </Link>
      <div>
        <Links />
      </div>
    </div>
  );
};

export default NavBar;
