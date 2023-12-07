import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button } from '@mui/material';
import css from './CarItem.module.css';

const CarItem = ({ car }) => {
  const address = car.address;
  const addressParts = address.split(', ');
  const city = addressParts[1];
  const country = addressParts[2];

  return (
    <li className={css.catalogCarsItem} key={car.id}>
      <Card sx={{ boxShadow: 'none', width: 274 }}>
        <CardMedia
          sx={{
            position: 'relative',
            width: 274,
            height: 268,
            borderRadius: 4,
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background:
                'linear-gradient(180deg, rgba(18, 20, 23, 0.50) 2.5%, rgba(18, 20, 23, 0.00) 41.07%)',
              zIndex: 2,
            },
          }}
          component="img"
          image={car.img}
          title={car.make}
        />
        <div className={css.catalogCarsItemDetails}>
          <div className={css.catalogCarsItemInfo}>
            <p className={css.carInfo}>{car.make}</p>
            <p className={css.modelInfo}>
              {car.model}, {car.year}
            </p>
          </div>
          <div className={css.catalogCarsIntro}>{car.rentalPrice}</div>
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
            {car.rentalCompany}
            <span></span>|<span></span>
            Premium
          </p>

          <p className={css.catalogCarsItemDetailsMore}>
            {car.type}
            <span></span>|<span></span>
            {car.model}
            <span></span>|<span></span>
            {car.mileage}
            <span></span>|<span></span>
            {car.accessories[0]}
          </p>
        </CardContent>
      </Card>
      <Button className={css.button} variant="contained">
        Learn More
      </Button>
    </li>
  );
};

export default CarItem;
