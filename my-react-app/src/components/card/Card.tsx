import React from 'react';
import './Card.css';
import { MainCardInput } from 'models/models';

export function Card(props: MainCardInput) {
  const { name, status, species, type, gender, origin, location, image, episode, url, created } =
    props.card;
  return (
    <div className="card">
      <img className="card-img" src={image} alt={name} />
      <div className="card-name">{name}</div>
      {/* <div>{created}</div>
      <div>{episode}</div>
      <div>{gender}</div>
      <div>{image}</div>
      <div>{location.name}</div>
      <div>{location.url}</div>
      <div>{origin.name}</div>
      <div>{origin.url}</div>
      <div>{species}</div>
      <div>{status}</div>
      <div>{type}</div>
      <div>{url}</div> */}
    </div>
  );
}
