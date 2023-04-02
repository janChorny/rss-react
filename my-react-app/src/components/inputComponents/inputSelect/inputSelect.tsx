import { InputSelectInterface } from 'models/models';
import React from 'react';

export function InputSelect({ register, error }: InputSelectInterface) {
  return (
    <div className="form__country form-block">
      <label className="form__country--label form-label" htmlFor="form__country">
        Country:
      </label>
      <select
        className="form__country--select form-select"
        id="form__country"
        {...register}
        defaultValue=""
      >
        <option className="form__country--option" disabled></option>
        <option className="form__country--option" value="USA">
          USA
        </option>
        <option className="form__country--option" value="Canada">
          Canada
        </option>
        <option className="form__country--option" value="Mexico">
          Mexico
        </option>
        <option className="form__country--option" value="Germany">
          Germany
        </option>
      </select>
      {error && <span className="form__country--span error-span">Error! No country selected</span>}
    </div>
  );
}
