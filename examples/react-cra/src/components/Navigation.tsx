import React from 'react';
import { NavLink } from 'react-router-dom';

import { Search } from './Search';

export const Navigation = () => {
  return (
    <nav className="topnav">
      {/* @ts-ignore */}
      <NavLink to="/swaggermen-project">Swaggermen Project</NavLink>
      {/* @ts-ignore */}
      <NavLink to="/zoom-api">Zoom API</NavLink>
      <Search projectIds={['cHJqOjYwNjYx']} />
    </nav>
  );
};
