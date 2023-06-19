import { InputPictureInterface } from 'models/models';
import React from 'react';

export function InputPicture({ error, register }: InputPictureInterface) {
  return (
    <div className="form__picture form-block">
      <input className="form__picture--input form-input" type="file" {...register} />
      {error && (
        <span className="form__picture--span error-span">Error. Check selected picture</span>
      )}
    </div>
  );
}
