import { FormCards, FormInput, PageTitleProps } from 'models/models';
import React, { Component } from 'react';
import './FormsPage.css';
import { SimpleForm } from '../../components/simpleForm/simpleForm';
import { FormCard } from '../../components/formCard/FormCard';

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
      <div>
        <h1 className="page-header">Form page</h1>
        <SimpleForm addCard={this.addNewCard} />
        <div>
          {cards.map((card) => {
            return <FormCard key={card.id} card={{ ...card }} />;
          })}
        </div>
      </div>
    );
  }
}
