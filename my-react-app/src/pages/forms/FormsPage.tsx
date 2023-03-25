import { FormInput, FormPageState, PageTitleProps } from 'models/models';
import React, { Component } from 'react';
import './FormsPage.css';
import { SimpleForm } from '../../components/simpleForm/simpleForm';

export class FormsPage extends Component<PageTitleProps, FormPageState> {
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

  onAddCard(newCard: FormInput) {
    this.setState((prevState) => ({
      cards: [...prevState.cards, newCard],
    }));
  }

  render() {
    return (
      <div>
        <h1 className="page-header">Forms page</h1>
        <SimpleForm addCard={this.onAddCard} />
      </div>
    );
  }
}
