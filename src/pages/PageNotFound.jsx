import React from 'react'
import { NavLink } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div className="d-flex vh-100 bg-black text-white justify-content-center align-items-center text-center">
          <div className="fade-in">
            <h1 className="display-1 fw-bold text-sky animate-bounce">404</h1>
            <h2 className="h3 fw-semibold">Page Not Found</h2>
            <p className="text-light mt-3">
              Oops! The page you're looking for doesn't exist.
            </p>
            <NavLink to="/" className="btn btn-light mt-4 px-4  fw-bold">
              Go Back Home
            </NavLink>
          </div>
        </div>
      );
}

export default PageNotFound