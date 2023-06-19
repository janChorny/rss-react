import { FormInput, PageTitleProps } from 'models/models';
import React from 'react';
import './FormsPage.css';
import { SimpleForm } from '../../components/simpleForm/simpleForm';
import { FormCard } from '../../components/formCard/FormCard';

export function FormsPage(props: PageTitleProps) {
  React.useEffect(() => {
    props.setTitle('Forms page');
  });

  const [cards, setCards] = React.useState<FormInput[]>([]);

  const addNewCard = (newCard: FormInput) => {
    setCards([...cards, newCard]);
  };

  return (
    <div className="form-page">
      <h1 className="page-header">Forms page</h1>
      <div className="form-container">
        <SimpleForm addCard={addNewCard} />
      </div>
      <div className="card-container">
        {cards.map((card) => {
          return <FormCard key={card.id} card={{ ...card }} />;
        })}
      </div>
    </div>
  );
}
