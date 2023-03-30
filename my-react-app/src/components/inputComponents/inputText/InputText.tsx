import { InputTextInterface } from 'models/models';
import React from 'react';

export function InputText({ valid, inputRef }: InputTextInterface) {
  return (
    <div className="form__title form-block">
      <label className="form__title--label form-label" htmlFor="form__title-input">
        Title:
      </label>
      <input
        className="form__title--input form-input"
        type="text"
        id="form__title-input"
        ref={inputRef}
        placeholder="title"
        autoComplete="off"
      />
      {!valid && <span className="form__title--span error-span">Error! Min 4 letters</span>}
    </div>
  );
}
