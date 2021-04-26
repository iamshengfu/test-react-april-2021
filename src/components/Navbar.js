import React from 'react';
// import { Link, Redirect } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <a href='/?page=modifiedapp'>Movie App</a>
        </li>
        <li>
          <a href='/?page=appmock'>Comment App</a>
        </li>
      </ul>

      <style jsx='true'>{`
        .nav {
          font-color: blue;
        }
        li {
          font-size: 1.5em;
          margin-bottom: 1em;
        }
      `}</style>
    </div>
  );
};

export default Navbar;
