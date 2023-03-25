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
    this.onAddCard = this.onAddCard.bind(this);
  }

  componentDidMount() {
    this.props.setTitle('Forms page');
  }

  onAddCard = (newProduct: FormInput) => {
    const { cards } = this.state;
    const newProducts = [...cards, newProduct];

    this.setState({
      cards: newProducts,
    });
  };

  render() {
    const { cards } = this.state;
    return (
      <div className="form-page">
        <h3>Form page</h3>
        <SimpleForm addCard={this.onAddCard} />
        <div className="form-cards-container">
          {cards.length ? (
            cards.map((card) => {
              return <FormCard key={card.id} card={{ ...card }} />;
            })
          ) : (
            <div>No products...</div>
          )}
        </div>
      </div>
    );
  }
}
