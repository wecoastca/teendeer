import React from 'react';
import AppPageHeader from '../../components/AppPageHeader/AppPageHeader';
import UserSearch from '../../features/user/UserSearch';

const Search = () => {
  return (
    <React.Fragment>
      <AppPageHeader title="Поиск талантов" />
      <UserSearch />
    </React.Fragment>
  );
};

export default Search;
