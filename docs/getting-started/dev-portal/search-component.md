# Swaggermen Dev Portal Search

Once you've [installed](https://github.com/usalko/swaaggermen) the `swaggermen-dev-portal` package, use the `Search` component to offer an autocomplete search.

## Usage in React

If you'd like to use this for React then use the `Search` React component. Here is an example of one way to implement it:

<!-- title: Search.tsx -->

```jsx
import type { NodeSearchResult } from '@swaggermen/swaggermen-dev-portal';
import { Search as SwaggermenSearch, useGetNodes, useGetWorkspace } from '@swaggermen/swaggermen-dev-portal';
import * as React from 'react';

export type SearchProps = {
  projectIds: string[];
};

export const Search = ({ projectIds }: SearchProps) => {
  const [search, setSearch] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const { data } = useGetNodes({
    search,
    projectIds,
  });
  const { data: workspace } = useGetWorkspace({
    projectIds,
  });

  const handleClose = () => {
    setOpen(false);
    setSearch('');
  };

  const handleClick = (data: NodeSearchResult) => {
    window.location.href = `https://${workspace?.workspace.slug}.swaggermen.io/docs/${data.project_slug}${data.uri}`;
  };

  return (
    <>
      <input placeholder="Search..." style={{ color: 'white' }} onFocus={() => setOpen(true)} />
      <SwaggermenSearch
        search={search}
        onSearch={setSearch}
        onClick={handleClick}
        onClose={handleClose}
        isOpen={open}
        searchResults={data}
      />
    </>
  );
};
```

Here's an example of what that would look like in a website's navigation bar. All you'll need to include is any collection of `projectIds` that the search should traverse.

<!-- title: Navigation.tsx -->
```jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

import { Search } from './Search';

export const Navigation = () => {
  return (
    <nav className="topnav">
      <NavLink to="/swaggermen-project">Swaggermen Project</NavLink>
      <NavLink to="/zoom-api">Zoom API</NavLink>
      <Search projectIds={['cHJqOjYwNjYx']} />
    </nav>
  );
};
```
 

