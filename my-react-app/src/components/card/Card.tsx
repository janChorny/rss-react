import React from 'react';
import './Card.css';
import { MainCardInput } from 'models/models';

export function Card(props: MainCardInput) {
  const { name, status, species, type, gender, image, episode } = props.card;
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
                <div
                  className="popup__close"
                  onClick={() => {
                    setHideFullCard(true);
                    setShowFullCard(false);
                  }}
                >
                  <div className="popup__close-icon">&#10006;</div>
                </div>
                <div className="popup__description">
                  <img className="popup__card-img" src={image} alt={name} />
                  <div className="popup__card-name">{name}</div>
                  <div className="popup__card-gender">{gender}</div>
                  <div className="popup__card-species">{species}</div>
                  <div className="popup__card-status">{status}</div>
                  <div className="popup__card-type">{type}</div>
                  <div className="popup__card-overview">
                    <div>Appears on episode:</div>
                    <div>{episode.map((el) => el.split('/').pop()).join(' ')}</div>
                  </div>
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
