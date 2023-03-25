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
  id: number;
  title: string;
  date: string;
  status: string;
  category: string;
  imageUrl: string;
}

export interface FormCard {
  card: FormInput;
}

export interface FormPageState {
  cards: FormInput[];
}

export type FormProps = {
  addCard: (newCard: FormCard) => void;
};
