import { SearchInput } from '../../components/inputComponents/searchInput/SearchInput';
import React, { useEffect } from 'react';
import { Products } from '../../components/products/Products';
import './MainPage.css';
import { PageTitleProps, Result } from 'models/models';
import { baseApi } from '../../utils/constants';
import { Preloader } from '../../components/preloader/Preloader';

export function MainPage(props: PageTitleProps) {
  const [searchValue, setSearchValue] = React.useState(localStorage.getItem('searchValue') ?? '');
  const [cards, setCards] = React.useState<Result[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  useEffect(() => {
    props.setTitle('Main page');
  });

  useEffect(() => {
    setTimeout(() => {
      fetch(baseApi)
        .then((res) => {
          if (!res.ok) {
            throw new Error('Could not fetch the data');
          }
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setCards(data.results);
          setIsLoading(false);
          setError(null);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err.message);
        });
    }, 3000);
  }, []);

  return (
    <div>
      <h1 className="page-header">Main page</h1>
      <SearchInput setInputValue={setSearchValue} />
      {error && <div>{error}</div>}
      {isLoading && (
        <div className="main-preloader">
          {' '}
          <Preloader />
        </div>
      )}
      {/* <Products /> */}
      {cards && (
        <div>
          {cards.map((item) => (
            <div key={item.id}>
              <div>{item.created}</div>
              <div>{item.episode}</div>
              <div>{item.gender}</div>
              <div>{item.image}</div>
              <div>{item.location.name}</div>
              <div>{item.location.url}</div>
              <div>{item.name}</div>
              <div>{item.origin.name}</div>
              <div>{item.origin.url}</div>
              <div>{item.species}</div>
              <div>{item.status}</div>
              <div>{item.type}</div>
              <div>{item.url}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
