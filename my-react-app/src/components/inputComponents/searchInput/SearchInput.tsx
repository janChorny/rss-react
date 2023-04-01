import React, { ChangeEvent, useEffect } from 'react';
import './SearchInput.css';

export function SearchInput() {
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

  return (
    <div className="search__input-container">
      <input
        className="search__input-text"
        type="search"
        placeholder="Input value"
        value={searchValue}
        onChange={changeState}
      />
    </div>
  );
}
