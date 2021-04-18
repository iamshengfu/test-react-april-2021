import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <Link to='/'>
        {' '}
        <h2 className='nav'>2. Modified Version</h2>{' '}
      </Link>
      <Link to='/appmock'>
        {' '}
        <h2 className='nav'>3. App with Mockjs</h2>{' '}
      </Link>

      <style jsx='true'>{`
        .nav {
          margin-right: 2em;
          margin-left: 1em;
          font-color: blue;
        }
      `}</style>
    </div>
  );
};

export default Navbar;
