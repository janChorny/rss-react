import { FormProps, FormValidState } from 'models/models';
import React from 'react';
import {
  validateCountry,
  validateDate,
  validatePayment,
  validateText,
} from '../../utils/FormsValidation';

export class SimpleForm extends React.Component<FormProps, FormValidState> {
  formRef: React.RefObject<HTMLFormElement> = React.createRef();
  inputTitleRef: React.RefObject<HTMLInputElement> = React.createRef();
  inputDateRef: React.RefObject<HTMLInputElement> = React.createRef();
  inputCountryRef: React.RefObject<HTMLSelectElement> = React.createRef();
  inputPackageRef: React.RefObject<HTMLInputElement> = React.createRef();
  inputTransferRef: React.RefObject<HTMLInputElement> = React.createRef();
  inputDeliveryRef: React.RefObject<HTMLInputElement> = React.createRef();
  inputCashPayRef: React.RefObject<HTMLInputElement> = React.createRef();
  inputCardPayRef: React.RefObject<HTMLInputElement> = React.createRef();

  constructor(props: FormProps) {
    super(props);
    this.state = {
      inputTitleValid: true,
      inputDateValid: true,
      inputCountryValid: true,
      inputPackageValid: true,
      inputTransferValid: true,
      inputDeliveryValid: true,
      inputPayValid: true,
      formValid: false,
    };
  }

  clearFormInputs() {
    if (this.inputTitleRef.current) {
      this.inputTitleRef.current.value = '';
    }
    if (this.inputDateRef.current) {
      this.inputDateRef.current.value = '';
    }
    if (this.inputCountryRef.current) {
      this.inputCountryRef.current.value = '';
    }
    if (this.inputPackageRef.current) {
      this.inputPackageRef.current.checked = false;
    }
    if (this.inputDeliveryRef.current) {
      this.inputDeliveryRef.current.checked = false;
    }
    if (this.inputTransferRef.current) {
      this.inputTransferRef.current.checked = false;
    }
    if (this.inputCashPayRef.current) {
      this.inputCashPayRef.current.checked = false;
    }
    if (this.inputCardPayRef.current) {
      this.inputCardPayRef.current.checked = false;
    }
  }

  checkFormFields() {
    const titleValid = validateText(this.inputTitleRef?.current?.value ?? '');
    const dateValid = validateDate(this.inputDateRef.current?.value ?? '');
    const countryValid = validateCountry(this.inputCountryRef.current?.value ?? '');
    const packageValid = this.inputPackageRef.current?.checked ?? false;
    const deliveryValid = this.inputDeliveryRef.current?.checked ?? false;
    const transferValid = this.inputTransferRef.current?.checked ?? false;
    const payValid = validatePayment(this.inputCashPayRef, this.inputCardPayRef);
    this.setState({ inputTitleValid: titleValid });
    this.setState({ inputDateValid: dateValid });
    this.setState({ inputCountryValid: countryValid });
    this.setState({ inputPackageValid: packageValid });
    this.setState({ inputDeliveryValid: deliveryValid });
    this.setState({ inputTransferValid: transferValid });
    this.setState({ inputPayValid: payValid });
    if (titleValid && dateValid && countryValid && payValid) {
      this.setState({ formValid: true });
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
    const newCardCountry = this.inputCountryRef.current?.value ?? '';
    const newCardPackage = this.inputPackageRef.current?.checked ?? false;
    const newCardDelivery = this.inputDeliveryRef.current?.checked ?? false;
    const newCardTransfer = this.inputTransferRef.current?.checked ?? false;
    const newCardCashPay = this.inputCashPayRef.current?.checked;
    const newCardCardPay = this.inputCardPayRef.current?.checked;
    let newCardPay = '';
    if (newCardCashPay && !newCardCardPay && this.inputCashPayRef.current) {
      newCardPay = this.inputCashPayRef.current?.value;
    } else if (!newCardCashPay && newCardCardPay && this.inputCardPayRef.current) {
      newCardPay = this.inputCardPayRef.current?.value;
    }

    const newCard = {
      id: Date.now(),
      title: newCardTitle,
      date: newCardDate,
      country: newCardCountry,
      pack: newCardPackage,
      delivery: newCardDelivery,
      transfer: newCardTransfer,
      pay: newCardPay,
    };

    this.props.addCard(newCard);
    this.clearFormInputs();
  };

  render() {
    const { inputTitleValid, inputDateValid, inputCountryValid, inputPayValid, formValid } =
      this.state;
    return (
      <form onSubmit={this.formSubmit} ref={this.formRef}>
        <div>
          <label htmlFor="form__title">
            Title: {!inputTitleValid && <span>Error! Min 4 letters</span>}
          </label>
          <input
            type="text"
            id="form__title"
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
        <div>
          <label htmlFor="form__country">
            Country: {!inputCountryValid && <span>Error! No country selected</span>}
          </label>
          <select id="form__country" ref={this.inputCountryRef} defaultValue="">
            <option disabled></option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="Mexico">Mexico</option>
            <option value="Germany">Germany</option>
          </select>
        </div>
        <div>
          Additional options:
          <label htmlFor="form__package">
            <input type="checkbox" id="form__package" ref={this.inputPackageRef} />
            Package
          </label>
          <label htmlFor="form__delivery">
            <input type="checkbox" id="form__delivery" ref={this.inputDeliveryRef} />
            Delivery
          </label>
          <label htmlFor="form__transfer">
            <input type="checkbox" id="form__transfer" ref={this.inputTransferRef} />
            Transfer
          </label>
        </div>
        <div>
          Payment options:
          <label htmlFor="form__cash-pay">
            <input
              type="radio"
              id="form__cash-pay"
              value="cash"
              name="pay"
              ref={this.inputCashPayRef}
            />
            Cash
          </label>
          <label htmlFor="form__card-pay">
            <input
              type="radio"
              id="form__card-pay"
              value="card"
              name="cay"
              ref={this.inputCardPayRef}
            />
            Card
          </label>
          {!inputPayValid && <span>Error. Select any option</span>}
        </div>
        <button type="submit">Add new card</button>
        {formValid && <span>Data has been saved</span>}
      </form>
    );
  }
}
