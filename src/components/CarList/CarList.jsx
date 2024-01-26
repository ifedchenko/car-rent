import React from 'react';
import CarItem from '../CarItem/CarItem';
import css from './CarList.module.css';

const CarList = ({ cars }) => {
  return (
    <div className={css.carList}>
      <ul className={css.catalogCarsList}>
        {cars?.map(car => (
          <CarItem key={car.id} car={car} />
        ))}
      </ul>
    </div>
  );
};

export default CarList;
