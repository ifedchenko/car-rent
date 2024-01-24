import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button } from '@mui/material';
import { createPortal } from 'react-dom';
import Modal from '../Modal/Modal';
import css from './CarItem.module.css';
import sprite from '.././../images/sprite.svg';

const CarItem = ({ car, index }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFavorite, setIsFavorite] = React.useState(() => {
    const favoriteCars = JSON.parse(localStorage.getItem('favoriteCars')) || {};
    return !!favoriteCars[car.id];
  });

  const toggleFavoriteStatus = () => {
    const newFavoriteStatus = !isFavorite;
    setIsFavorite(newFavoriteStatus);

    const favoriteCars = JSON.parse(localStorage.getItem('favoriteCars')) || {};
    if (newFavoriteStatus) {
      favoriteCars[car.id] = true;
    } else {
      delete favoriteCars[car.id];
    }
    localStorage.setItem('favoriteCars', JSON.stringify(favoriteCars));
  };

  const {
    address,
    img,
    make,
    model,
    year,
    rentalPrice,
    rentalCompany,
    type,
    mileage,
    accessories,
  } = car;

  const addressParts = address.split(', ');
  let city = '';
  let country = '';

  if (addressParts.length >= 3) {
    city = addressParts[1];
    country = addressParts[2];
  }

  // const address = car.address;
  // const addressParts = address.split(', ');
  // const city = addressParts[1];
  // const country = addressParts[2];

  return (
    // <li className={css.catalogCarsItem} key={id} car={car}>
    <li className={css.catalogCarsItem} key={index}>
      {/* <li className={css.catalogCarsItem}> */}
      <Card sx={{ boxShadow: 'none', width: 274 }}>
        <button
          className={css.carItemHeartButton}
          type="button"
          aria-label="Toggle favorite"
          onClick={toggleFavoriteStatus}
        >
          <svg
            className={css.heartSvg}
            style={{
              fill: isFavorite ? '#3470FF' : 'none',
              stroke: isFavorite ? '#3470FF' : '#ffffffcc',
            }}
            aria-hidden="true"
          >
            <use href={sprite + '#icon-heart'}></use>
          </svg>
        </button>
        <CardMedia
          sx={{
            position: 'relative',
            width: 274,
            height: 268,
            borderRadius: 4,
            '&::before': {
              content: '""',
              position: 'absolute',
              borderRadius: 4,
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background:
                'linear-gradient(180deg, rgba(18, 20, 23, 0.50) 2.5%, rgba(18, 20, 23, 0.00) 41.07%)',
              zIndex: 2,
            },
          }}
          // component="img"
          image={img}
          title={make}
          alt={`Image of ${make}`}
        />
        <div className={css.catalogCarsItemDetails}>
          <div className={css.catalogCarsItemInfo}>
            <p className={css.carInfo}>{make}</p>
            <p className={css.modelInfo}>{model}, </p>
            <p className={css.carInfoYear}>{year}</p>
          </div>
          <div className={css.catalogCarsIntro}>{rentalPrice}</div>
        </div>
        <CardContent
          sx={{
            margin: 0,
            padding: 0,
          }}
        >
          <p className={css.catalogCarsItemDetailsMore}>
            {city}
            <span></span>|<span></span>
            {country}
            <span></span>|<span></span>
            {rentalCompany}
            <span></span>|<span></span>
            Premium
          </p>

          <p className={css.catalogCarsItemDetailsMore}>
            {type}
            <span></span>|<span></span>
            {model}
            <span></span>|<span></span>
            {mileage}
            <span></span>|<span></span>
            {accessories[0]}
          </p>
        </CardContent>
      </Card>
      <Button className={css.button} variant="contained" onClick={() => setIsModalOpen(true)}>
        Learn More
      </Button>
      {isModalOpen &&
        document.getElementById('modal') &&
        createPortal(
          <Modal car={car} city={city} country={country} setIsModalOpen={setIsModalOpen} />,
          document.getElementById('modal')
        )}
    </li>
  );
};

export default CarItem;
