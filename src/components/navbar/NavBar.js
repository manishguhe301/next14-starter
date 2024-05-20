import React from 'react';
import Links from './links/Links';
import styles from './navbar.module.css';
import Image from 'next/image';

const NavBar = () => {
  return (
    <div className={styles.container}>
      <div>
        <Image
          src='/logo.png'
          alt='logo'
          className={styles.logo}
          width={100}
          height={100}
        />
      </div>
      <div>
        <Links />
      </div>
    </div>
  );
};

export default NavBar;
