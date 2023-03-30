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
  pack: boolean;
  transfer: boolean;
  delivery: boolean;
  pay: string;
  profilePicture: string;
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
  valid: boolean;
  inputRef: React.RefObject<HTMLInputElement>;
}

export interface InputTextInterface {
  valid: boolean;
  inputRef: React.RefObject<HTMLInputElement>;
}

export interface InputSelectInterface {
  valid: boolean;
  inputRef: React.RefObject<HTMLSelectElement>;
}

export interface InputAdditionalServiceInterface {
  packageRef: React.RefObject<HTMLInputElement>;
  transferRef: React.RefObject<HTMLInputElement>;
  deliveryRef: React.RefObject<HTMLInputElement>;
}

export interface InputPaymentInterface {
  valid: boolean;
  cashPayRef: React.RefObject<HTMLInputElement>;
  cardPayRef: React.RefObject<HTMLInputElement>;
}

export interface InputPictureInterface {
  valid: boolean;
  inputRef: React.RefObject<HTMLInputElement>;
}
