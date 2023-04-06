import { Result } from 'models/models';

export function CardList(props: Result) {
  return (
    <div className="cards-container">
      <div className="cards-wrapper">
        <img src={props.product.image} alt={props.product.title} className="product-image" />
      </div>
      <p className="product-text">{props.product.title}</p>
      <span className="product-price">{props.product.price}$</span>
    </div>
  );
}
