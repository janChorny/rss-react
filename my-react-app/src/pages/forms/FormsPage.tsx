import { FormCards, FormInput, PageTitleProps } from 'models/models';
import React, { Component } from 'react';
import './FormsPage.css';
import { FormCard } from '../../components/formCard/FormCard';
import { SimpleForm } from '../../components/simpleForm/simpleForm';

export class FormsPage extends Component<PageTitleProps, FormCards> {
  constructor(props: PageTitleProps) {
    super(props);
    this.state = {
      cards: [],
    };
    this.addNewCard = this.addNewCard.bind(this);
  }

  componentDidMount() {
    this.props.setTitle('Forms page');
  }

  addNewCard = (newCard: FormInput) => {
    this.setState((cardsContainer) => ({
      cards: [...cardsContainer.cards, newCard],
    }));
  };

  render() {
    const { cards } = this.state;
    return (
      <div className="form-page">
        <h1 className="page-header">Form page</h1>
        <div className="form-container">
          <SimpleForm addCard={this.addNewCard} />
        </div>
        <div className="card-container">
          {cards.map((card) => {
            return <FormCard key={card.id} card={{ ...card }} />;
          })}
        </div>
      </div>
    );
  }
}
