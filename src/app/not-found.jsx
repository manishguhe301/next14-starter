import Link from 'next/link';
import React from 'react';

const NotFound = () => {
  return (
    <div>
      <h1>Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <p>Please check the URL and try again.</p>
      <p>If the problem persists, please contact support.</p>
      <p>Thank you.</p>
      <p>- The Team</p>
      <Link href='/'>Back to Home</Link>
    </div>
  );
};

export default NotFound;
