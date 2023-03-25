import { FormCardInput } from 'models/models';
import React, { Component } from 'react';

export class FormCard extends Component<FormCardInput> {
  constructor(props: FormCardInput) {
    super(props);
  }

  render() {
    const { title, date, country, pack, delivery, transfer } = this.props.card;

    return (
      <div>
        <div>
          <h3>{title}</h3>
          <div>{date}</div>
          <div>{country}</div>
          <div>
            {pack && <span>pack</span>}
            {delivery && <span>delivery</span>}
            {transfer && <span>transfer</span>}
          </div>
        </div>
      </div>
    );
  }
}
