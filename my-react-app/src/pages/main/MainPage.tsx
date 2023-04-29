import { SearchInput } from '../../components/inputComponents/searchInput/SearchInput';
import React, { useEffect } from 'react';
import './MainPage.css';
import { PageTitleProps, Result } from 'models/models';
import { Preloader } from '../../components/preloader/Preloader';
import { useGetCharactersQuery } from '../../store/api/api';
import { Card } from '../../components/card/Card';
import { useSelector } from 'react-redux';
import { getSearchValue } from '../../store/reducer/searchSlice';

export function MainPage(props: PageTitleProps) {
  const search = useSelector(getSearchValue);
  const { data: cards, error, isLoading } = useGetCharactersQuery({ search });

  useEffect(() => {
    props.setTitle('Main page');
  });

  return (
    <div>
      <h1 className="page-header">Main page</h1>
      <SearchInput />
      {error && <div className="main-page__error">An error occurred!</div>}
      {isLoading && (
        <div className="main-preloader">
          {' '}
          <Preloader />
        </div>
      )}
      {cards ? (
        <div className="cards-container">
          {cards.map((card: Result) => (
            <Card key={card.id} card={card} />
          ))}
        </div>
      ) : (
        <div className="not-found">No such characters found</div>
      )}
    </div>
  );
}
