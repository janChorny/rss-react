import { InputPaymentInterface } from 'models/models';
import React from 'react';

export function InputRadioButton({ valid, cashPayRef, cardPayRef }: InputPaymentInterface) {
  return (
    <div className="form__payment form-block">
      Payment options:
      <label className="form__payment--label form-label" htmlFor="form__cash-pay">
        <input
          className="form__payment--input form-input"
          type="radio"
          id="form__cash-pay"
          value="cash"
          name="pay"
          ref={cashPayRef}
        />
        Cash
      </label>
      <label className="form__payment--label form-label" htmlFor="form__card-pay">
        <input
          className="form__payment--input form-input"
          type="radio"
          id="form__card-pay"
          value="card"
          name="pay"
          ref={cardPayRef}
        />
        Card
      </label>
      {!valid && <span className="form__payment--span error-span">Error. Select any option</span>}
    </div>
  );
}
