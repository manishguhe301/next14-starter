'use client';
import React, { useState } from 'react';
import styles from './links.module.css';
import NavLink from './navLink/NavLink';
import Image from 'next/image';
import { handleLogout } from '../../../../lib/action';

const links = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'About',
    path: '/about',
  },
  {
    title: 'Contact',
    path: '/contact',
  },
  {
    title: 'Blog',
    path: '/blog',
  },
];

const Links = ({ session }) => {
  const [open, setOpen] = useState(false);
  const isAdmin = true;
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
        {session?.user ? (
          <>
            {session?.user?.isAdmin && (
              <NavLink link={{ title: 'Admin', path: '/admin' }} />
            )}
            <form action={handleLogout}>
              <button className={styles.logout}>Logout</button>
            </form>
          </>
        ) : (
          <NavLink link={{ title: 'Login', path: '/login' }} />
        )}
      </div>
      <Image
        className={styles.menuButton}
        src='/menu.png'
        alt=''
        width={30}
        height={30}
        onClick={() => setOpen((prev) => !prev)}
      />{' '}
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink link={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
