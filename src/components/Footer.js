import React from 'react';
import { Link } from 'react-router-dom';

const Footer = ({ prevPage, prevRoute, nextPage, nextRoute }) => {
  return (
    <footer className="p-2">
      <div className="flex">
        <div className='flex-grow'>
          {prevRoute && (
            <Link to={prevRoute} className="flex items-center">
              <span className="mr-2">&larr;</span>
              <span>{prevPage}</span>
            </Link>
          )}
        </div>

        <div className='flex-grow flex justify-end'>
          {nextRoute && (
            <Link to={nextRoute} className="flex items-center">
              <span>{nextPage}</span>
              <span className="ml-2">&rarr;</span>
            </Link>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
