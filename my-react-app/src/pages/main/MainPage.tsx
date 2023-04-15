import { SearchInput } from '../../components/inputComponents/searchInput/SearchInput';
import React, { useEffect } from 'react';
import './MainPage.css';
import { PageTitleProps, Result } from 'models/models';
import { Preloader } from '../../components/preloader/Preloader';
import { getCharacters } from '../../utils/api';
import { Card } from '../../components/card/Card';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { saveSearchResults } from '../../store/reducer/searchSlice';

export function MainPage(props: PageTitleProps) {
  const searchCards = useSelector<RootState, string>((state) => state.searchReducer.searchValue);
  const [searchValue, setSearchValue] = React.useState(searchCards);
  const [cards, setCards] = React.useState<Result[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    props.setTitle('Main page');
  });

  useEffect(() => {
    setIsLoading(true);

    const getSearchedCharacters = async () => {
      try {
        const receivedCharacters = await getCharacters(searchValue);
        dispatch(saveSearchResults(searchValue));
        setCards(receivedCharacters);
        setIsLoading(false);
        setError('');
      } catch (err) {
        setIsLoading(false);
        setError('Could not fetch the data');
      }
    };

    setTimeout(() => {
      getSearchedCharacters();
    }, 2000);
  }, [dispatch, searchValue]);

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
      {cards ? (
        <div className="cards-container">
          {cards.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </div>
      ) : (
        <div className="not-found">No such characters found</div>
      )}
    </div>
  );
}
