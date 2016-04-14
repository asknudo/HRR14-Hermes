import React from 'react';
import { Input } from 'react-bootstrap';

const SearchBar = (props) => {
  return (
    <form>
      <Input type="text" label="Text" placeholder="Search Events Here" />
    </form>
  );

}

export default SearchBar;