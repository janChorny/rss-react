import { InputAdditionalServiceInterface } from 'models/models';
import React from 'react';

export function InputCheckbox({ register }: InputAdditionalServiceInterface) {
  return (
    <div className="form__additional form-block">
      Additional options:
      <label className="form__additional--label form-label" htmlFor="form__package">
        <input
          className="form__additional--input form-input"
          type="checkbox"
          id="form__package"
          {...register}
        />
        Package
      </label>
      <label className="form__additional form-label" htmlFor="form__delivery">
        <input
          className="form__additional--input form-input"
          type="checkbox"
          id="form__delivery"
          {...register}
        />
        Delivery
      </label>
      <label className="form__additional form-label" htmlFor="form__transfer">
        <input
          className="form__additional--input form-input"
          type="checkbox"
          id="form__transfer"
          {...register}
        />
        Transfer
      </label>
    </div>
  );
}
