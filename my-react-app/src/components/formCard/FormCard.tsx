import { FormCardInput } from 'models/models';
import React, { Component } from 'react';
import './FormCard.css';

export class FormCard extends Component<FormCardInput> {
  constructor(props: FormCardInput) {
    super(props);
  }

  render() {
    const { title, date, country, pack, delivery, transfer, pay, profilePicture } = this.props.card;

    return (
      <div className="form-card">
        <div className="form-card__container">
          <h3 className="form-card__title">Name: {title}</h3>
          <div className="form-card__date">Date: {date}</div>
          <div className="form-card__country">Country: {country}</div>
          <div className="form-card__additional">
            Options:
            {pack && <span> pack</span>}
            {delivery && <span> delivery</span>}
            {transfer && <span> transfer</span>}
          </div>
          <div className="form-card__pay">Pay: {pay}</div>
          <div className="form-card__image-container">
            <img
              className="form-card__image"
              src={profilePicture}
              alt={profilePicture.slice(
                profilePicture.lastIndexOf('/') + 1,
                profilePicture.lastIndexOf('.')
              )}
            />
          </div>
        </div>
      </div>
    );
  }
}
