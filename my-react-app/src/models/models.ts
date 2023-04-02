import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

export interface ProductModel {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: RatingModel;
}

export interface RatingModel {
  rate: number;
  count: number;
}

export interface ProductProps {
  product: ProductModel;
}

export interface PageTitleProps {
  setTitle: (namePage: string) => void;
}

export interface GeneralState {
  pageTitle: string;
}

export interface FormInput {
  id?: number;
  title: string;
  date: string;
  country: string;
  additional: boolean;
  pay: string;
  profilePicture: string;
}

export interface FormCardState {
  title: string;
  date: string;
  country: string;
  additional: boolean;
  pay: string;
  profilePictureUrl: FileList;
}

export interface FormCardInput {
  card: FormInput;
}

export interface FormCards {
  cards: FormInput[];
}

export type FormProps = {
  addCard: (newCard: FormInput) => void;
};

export interface FormValidState {
  inputTitleValid: boolean;
  inputDateValid: boolean;
  inputCountryValid: boolean;
  inputPackageValid: boolean;
  inputTransferValid: boolean;
  inputDeliveryValid: boolean;
  inputPayValid: boolean;
  formValid: boolean;
  inputPictureValid: boolean;
  inputPictureUrl: string;
}

export interface InputDateInterface {
  register: UseFormRegisterReturn<'date'>;
  error: FieldError | undefined;
}

export interface InputTextInterface {
  register: UseFormRegisterReturn<'title'>;
  error: FieldError | undefined;
}

export interface InputSelectInterface {
  register: UseFormRegisterReturn<'country'>;
  error: FieldError | undefined;
}

export interface InputAdditionalServiceInterface {
  register: UseFormRegisterReturn<'additional'>;
}

export interface InputPaymentInterface {
  register: UseFormRegisterReturn<'pay'>;
  error: FieldError | undefined;
}

export interface InputPictureInterface {
  register: UseFormRegisterReturn<'profilePictureUrl'>;
  error: FieldError | undefined;
}
