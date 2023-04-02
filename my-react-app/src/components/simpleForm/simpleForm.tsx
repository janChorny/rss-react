import { FormCardState, FormProps } from 'models/models';
import React from 'react';
import { validateCountry, validateDate, validateText } from '../../utils/FormsValidation';
import './simpleForm.css';
import { InputDate } from '../inputComponents/inputDate/InputDate';
import { InputText } from '../inputComponents/inputText/InputText';
import { InputSelect } from '../inputComponents/inputSelect/inputSelect';
import { InputCheckbox } from '../inputComponents/inputCheckbox/InputCheckbox';
import { InputRadioButton } from '../inputComponents/inputRadioButton/inputRadioButton';
import { InputPicture } from '../inputComponents/inputPicture/InputPicture';
import { useForm } from 'react-hook-form';

export function SimpleForm(props: FormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormCardState>({ reValidateMode: 'onSubmit' });

  const [statusValid, setStatusValid] = React.useState(false);

  const onSubmit = (data: FormCardState) => {
    setStatusValid(true);
    props.addCard({
      id: Date.now(),
      title: data.title,
      date: data.date,
      country: data.country,
      additional: data.additional,
      pay: data.pay,
      profilePicture: URL.createObjectURL(data.profilePictureUrl[0]),
    });
    reset();
    setTimeout(() => {
      setStatusValid(false);
    }, 3000);
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <InputText
        error={errors.title}
        register={register('title', {
          required: true,
          validate: {
            validate: (text) => validateText(text),
          },
        })}
      />
      <InputDate
        error={errors.date}
        register={register('date', {
          required: true,
          validate: {
            validate: (date) => validateDate(date),
          },
        })}
      />
      <InputSelect
        error={errors.country}
        register={register('country', {
          required: true,
          validate: {
            validate: (country) => validateCountry(country),
          },
        })}
      />
      <InputCheckbox register={register('additional')} />
      <InputRadioButton
        error={errors.pay}
        register={register('pay', {
          required: true,
        })}
      />
      <InputPicture
        error={errors.profilePictureUrl}
        register={register('profilePictureUrl', { required: 'true' })}
      />
      <button className="form__button" type="submit">
        Add new card
      </button>
      {statusValid && <span className="form__submit--span message-span">Data has been saved</span>}
    </form>
  );
}
