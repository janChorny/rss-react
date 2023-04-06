import React, { ChangeEvent, useEffect } from 'react';
import './SearchInput.css';
import { SearchInputInterface } from 'models/models';

export function SearchInput(props: SearchInputInterface) {
  const [searchValue, setSearchValue] = React.useState(localStorage.getItem('searchValue') ?? '');
  const searchValueRef = React.useRef<string>();

  useEffect(() => {
    searchValueRef.current = searchValue;
  }, [searchValue]);

  useEffect(() => {
    return () => {
      localStorage.setItem('searchValue', searchValueRef.current || '');
    };
  }, []);

  const changeState = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleFormSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    localStorage.setItem('searchValue', searchValueRef.current || '');
    props.setInputValue(searchValue);
  };

  return (
    <div className="search__input-container">
      <form onSubmit={handleFormSubmit}>
        <input
          className="search__input-text"
          type="search"
          placeholder="Input value"
          value={searchValue}
          onChange={changeState}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
