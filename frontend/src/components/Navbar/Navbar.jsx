import React from 'react';
import { Link } from 'react-router-dom';

// Importing USER_TYPES and CURRENT_USER_TYPE from AppRouter
import { USER_TYPES, CURRENT_USER_TYPE } from '../../AppRouter'; // Adjust the path accordingly

const Navbar = () => {
    return (
        <>
          <nav className="d-flex justify-content-around my-5">
            <Link to={"/"}>Home</Link>
            <Link to={"/login"}>Login</Link>
            {CURRENT_USER_TYPE === USER_TYPES.REG_USER ||
            CURRENT_USER_TYPE === USER_TYPES.ADMIN ? (
              <>
                <Link to={"/user"}>User</Link>
                <Link to={"/userprofile"}>UserProfile</Link>
              </>
            ) : null}
            {CURRENT_USER_TYPE === USER_TYPES.ADMIN ? (
              <>
                <Link to={"/admin"}>Admin</Link>
              </>
            ) : null}
          </nav>
        </>
      );
}

export default Navbar;
