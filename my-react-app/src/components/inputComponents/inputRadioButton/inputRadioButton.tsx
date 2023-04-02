import { InputPaymentInterface } from 'models/models';
import React from 'react';

export function InputRadioButton({ register, error }: InputPaymentInterface) {
  return (
    <div className="form__payment form-block">
      Payment options:
      <label className="form__payment--label form-label" htmlFor="form__cash-pay">
        <input
          className="form__payment--input form-input"
          type="radio"
          id="form__cash-pay"
          value="cash"
          {...register}
        />
        Cash
      </label>
      <label className="form__payment--label form-label" htmlFor="form__card-pay">
        <input
          className="form__payment--input form-input"
          type="radio"
          id="form__card-pay"
          value="card"
          {...register}
        />
        Card
      </label>
      {error && <span className="form__payment--span error-span">Error. Select any option</span>}
    </div>
  );
}
