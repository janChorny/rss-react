import { FormInput, PageTitleProps } from 'models/models';
import React from 'react';
import './FormsPage.css';
import { SimpleForm } from '../../components/simpleForm/simpleForm';
import { FormCard } from '../../components/formCard/FormCard';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { saveFormCards } from '../../store/reducer/formSlice';

export function FormsPage(props: PageTitleProps) {
  const dispatch = useDispatch();
  const formCards = useSelector((state: RootState) => state.formReducer);

  React.useEffect(() => {
    props.setTitle('Forms page');
  });

  const addNewCard = (newCard: FormInput) => {
    dispatch(saveFormCards(newCard));
  };

  return (
    <div className="form-page">
      <h1 className="page-header">Forms page</h1>
      <div className="form-container">
        <SimpleForm addCard={addNewCard} />
      </div>
      <div className="card-container">
        {formCards.map((card) => {
          return <FormCard key={card.id} card={{ ...card }} />;
        })}
      </div>
    </div>
  );
}
