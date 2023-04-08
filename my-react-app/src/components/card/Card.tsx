import React from 'react';
import './Card.css';
import { MainCardInput } from 'models/models';

export function Card(props: MainCardInput) {
  const { name, status, species, type, gender, image } = props.card;
  const [showFullCard, setShowFullCard] = React.useState(false);
  const [hideFullCard, setHideFullCard] = React.useState(false);
  return (
    <>
      <div
        className="card"
        onClick={() => {
          setShowFullCard(true);
          setHideFullCard(false);
        }}
      >
        <img className="card-img" src={image} alt={name} />
        <div className="card-name">{name}</div>
      </div>
      {showFullCard && !hideFullCard && (
        <div className="popup">
          <div className="popup__body">
            <div className="popup__content">
              <div className="popup__container">
                <div className="popup__description">
                  <div
                    className="popup__close"
                    onClick={() => {
                      setHideFullCard(true);
                      setShowFullCard(false);
                    }}
                  >
                    X
                  </div>
                  <img className="card-img" src={image} alt={name} />
                  <div className="card-name">{name}</div>
                  <div>{gender}</div>
                  <div>{species}</div>
                  <div>{status}</div>
                  <div>{type}</div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="popup__overlay"
            onClick={() => {
              setHideFullCard(true);
              setShowFullCard(false);
            }}
          ></div>
        </div>
      )}
    </>
  );
}
