import { FormProps, FormValidState } from 'models/models';
import React from 'react';
import {
  validateCountry,
  validateDate,
  validatePayment,
  validatePicture,
  validateText,
} from '../../utils/FormsValidation';
import './simpleForm.css';
import { InputDate } from '../inputComponents/inputDate/InputDate';
import { InputText } from '../inputComponents/inputText/InputText';
import { InputSelect } from '../inputComponents/inputSelect/inputSelect';
import { InputCheckbox } from '../inputComponents/inputCheckbox/InputCheckbox';
import { InputRadioButton } from '../inputComponents/inputRadioButton/inputRadioButton';
import { InputPicture } from '../inputComponents/inputPicture/InputPicture';

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
  inputPictureRef: React.RefObject<HTMLInputElement> = React.createRef();

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
      inputPictureValid: true,
      inputPictureUrl: '',
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
    if (this.inputPictureRef.current) {
      this.inputPictureRef.current.value = '';
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
    const pictureValid = validatePicture(this.inputPictureRef?.current?.value ?? '');
    this.setState({ inputTitleValid: titleValid });
    this.setState({ inputDateValid: dateValid });
    this.setState({ inputCountryValid: countryValid });
    this.setState({ inputPackageValid: packageValid });
    this.setState({ inputDeliveryValid: deliveryValid });
    this.setState({ inputTransferValid: transferValid });
    this.setState({ inputPayValid: payValid });
    this.setState({ inputPictureValid: pictureValid });
    if (titleValid && dateValid && countryValid && payValid && pictureValid) {
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
    const newCardPicture = this.inputPictureRef.current?.files?.[0];
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
      profilePicture: (newCardPicture && URL.createObjectURL(newCardPicture)) ?? '',
    };

    this.props.addCard(newCard);
    this.clearFormInputs();
  };

  render() {
    const {
      inputTitleValid,
      inputDateValid,
      inputCountryValid,
      inputPayValid,
      inputPictureValid,
      formValid,
    } = this.state;
    return (
      <form className="form" onSubmit={this.formSubmit} ref={this.formRef}>
        <InputText valid={inputTitleValid} inputRef={this.inputTitleRef} />
        <InputDate valid={inputDateValid} inputRef={this.inputDateRef} />
        <InputSelect valid={inputCountryValid} inputRef={this.inputCountryRef} />
        <InputCheckbox
          packageRef={this.inputPackageRef}
          transferRef={this.inputTransferRef}
          deliveryRef={this.inputDeliveryRef}
        />
        <InputRadioButton
          valid={inputPayValid}
          cardPayRef={this.inputCardPayRef}
          cashPayRef={this.inputCashPayRef}
        />
        <InputPicture valid={inputPictureValid} inputRef={this.inputPictureRef} />
        <button className="form__button" type="submit">
          Add new card
        </button>
        {formValid && <span className="form__submit--span message-span">Data has been saved</span>}
      </form>
    );
  }
}
