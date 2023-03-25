import { FormProps, FormValidState } from 'models/models';
import React from 'react';
import { validateDate, validateText } from '../../utils/FormsValidation';

export class SimpleForm extends React.Component<FormProps, FormValidState> {
  formRef: React.RefObject<HTMLFormElement> = React.createRef();
  inputTitleRef: React.RefObject<HTMLInputElement> = React.createRef();
  inputDateRef: React.RefObject<HTMLInputElement> = React.createRef();

  constructor(props: FormProps) {
    super(props);
    this.state = {
      inputTitleValid: true,
      inputDateValid: true,
      statusValid: false,
    };
  }

  checkFormFields() {
    const titleValid = validateText(this.inputTitleRef?.current?.value ?? '');
    const dateValid = validateDate(this.inputDateRef.current?.value ?? '');
    this.setState({ inputTitleValid: titleValid });
    this.setState({ inputDateValid: dateValid });
    if (titleValid && dateValid) {
      this.setState({ statusValid: true });
      return true;
    }
    return false;
  }

  formSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const checkedForm = this.checkFormFields();
    if (!checkedForm) return;

    const newCardTitle = this.inputTitleRef.current?.value ?? '';
    const newCardDate = this.inputDateRef.current?.value ?? '';
    const newCard = {
      id: Date.now(),
      title: newCardTitle,
      date: newCardDate,
    };

    this.props.addCard(newCard);
  };

  render() {
    const { inputTitleValid, inputDateValid } = this.state;
    return (
      <form onSubmit={this.formSubmit} ref={this.formRef}>
        <div>
          <label htmlFor="form__title">
            Title: {!inputTitleValid && <span>Error! Min 4 letters</span>}
          </label>
          <input
            type="text"
            id="form-title"
            ref={this.inputTitleRef}
            placeholder="title"
            autoComplete="off"
          />
        </div>
        <div>
          <label htmlFor="form__date">
            Date: {!inputDateValid && <span>Error! No future date is allowed</span>}
          </label>
          <input
            type="text"
            id="form__date"
            ref={this.inputDateRef}
            placeholder="day.month.year"
            autoComplete="off"
          />
        </div>
        <button type="submit">Add new card</button>
      </form>
    );
  }
}
