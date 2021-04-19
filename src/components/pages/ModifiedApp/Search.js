import React, { useState, useRef, useEffect } from 'react';

const Search = ({ search }) => {
  const [searchValue, setSearchValue] = useState('');

  const inputRef = useRef();

  useEffect(() => {
    // inputRef.current.focus();
  }, []);

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  };

  const resetInputField = () => {
    setSearchValue('');
  };

  const callSearchFunction = (e) => {
    e.preventDefault();
    search(searchValue);
    resetInputField();
  };

  return (
    <form className='search'>
      <input ref={inputRef} value={searchValue} onChange={handleSearchInputChanges} type='text' />

      <input onClick={callSearchFunction} type='submit' value='SEARCH' />
    </form>
  );
};

export default Search;
