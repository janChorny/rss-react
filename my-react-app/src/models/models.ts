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
  // status: string;
  // category: string;
  // imageUrl: string;
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
}
