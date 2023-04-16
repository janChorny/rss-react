import React, { ChangeEvent } from 'react';
import './SearchInput.css';
import { useAppDispatch } from '../../../store/store';
import { useSelector } from 'react-redux';
import { getSearchValue, saveSearchResults } from '../../../store/reducer/searchSlice';

export function SearchInput() {
  const getValue = useSelector(getSearchValue);
  const [searchValue, setSearchValue] = React.useState(getValue);
  const dispatch = useAppDispatch();

  const handleFormSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    dispatch(saveSearchResults(searchValue));
  };

  const changeInputValue = (event: ChangeEvent<HTMLInputElement>) =>
    setSearchValue(event.currentTarget.value);

  return (
    <div className="search__input-container">
      <form className="search__form" onSubmit={handleFormSubmit}>
        <input
          className="search__input-text"
          type="search"
          placeholder="Input value"
          value={searchValue}
          onChange={changeInputValue}
        />
        <button className="search__button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}
