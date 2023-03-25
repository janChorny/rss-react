import { FormProps, FormValidState } from 'models/models';
import React from 'react';
import { validateText } from '../../utils/FormsValidation';

export class SimpleForm extends React.Component<FormProps, FormValidState> {
  formRef: React.RefObject<HTMLFormElement> = React.createRef();
  inputTitleRef: React.RefObject<HTMLInputElement> = React.createRef();

  constructor(props: FormProps) {
    super(props);
    this.state = {
      inputTitleValid: true,
      statusValid: false,
    };
  }

  checkFormFields() {
    const titleValid = validateText(this.inputTitleRef?.current?.value ?? '');
    this.setState({ inputTitleValid: titleValid });
    if (titleValid) {
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
    const newCard = {
      id: Date.now(),
      title: newCardTitle,
    };

    this.props.addCard(newCard);
  };

  render() {
    const { inputTitleValid } = this.state;
    return (
      <form onSubmit={this.formSubmit} ref={this.formRef}>
        <div>
          <label htmlFor="form-title">
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
        <button type="submit">Add new card</button>
      </form>
    );
  }
}
