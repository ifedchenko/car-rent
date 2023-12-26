import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import css from './Modal.module.css';

const Modal = ({ car, city, country, setIsModalOpen }) => {
  if (!car) {
    return null;
  }

  const {
    id,

    img,
    make,
    model,
    year,
    fuelConsumption,
    engineSize,
    description,
    rentalPrice,
    type,
    mileage,
    accessories,
    functionalities,
    rentalConditions,
  } = car;

  const accessoriesData = accessories;
  const functionalitiesData = functionalities;
  const combinedList = accessoriesData.concat(functionalitiesData);

  const rentalConditionData = rentalConditions.split('\n');

  return ReactDOM.createPortal(
    <div className={css.overlay} role="dialog" aria-modal="true">
      <div className={css.modal}>
        <Card sx={{ boxShadow: 'none', width: 461 }}>
          <CardMedia
            sx={{
              position: 'relative',
              height: 248,
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
            image={img}
            title={make}
            alt={`Image of ${make}`}
          />
          <div className={css.modalCarsItemDetails}>
            <div className={css.modalCarsItemInfo}>
              <p className={css.modalCarInfo}>{make}</p>
              <p className={css.modalModelInfo}>
                {model}
                <span>,</span>
              </p>
              <p className={css.modalCarInfoYear}>{year}</p>
            </div>
          </div>
          <CardContent
            sx={{
              margin: 0,
              padding: 0,
            }}
          >
            <div className={css.modalCarsItemDetails}>
              <p className={css.modalCarsItemDetailsMore}>
                {city}
                <span></span>|<span></span>
                {country}
                <span></span>|<span></span>
                Id:{id}
                <span></span>|<span></span>
                Year:{year}
                <span></span>|<span></span>
                Type:{type}
              </p>

              <p className={css.modalCarsItemDetailsMore}>
                Fuel Consumption:{fuelConsumption}
                <span></span>|<span></span>
                Engine Size: {engineSize}
              </p>
            </div>
            <p className={css.modalCarsItemDescription}>{description}</p>
            <div className={css.modalCarsItemAccesoriesDetails}>
              <p className={css.modalCarsItemAccesories}>Accessories and functionalities:</p>
              <ul className={css.modalAccesoriesList}>
                {combinedList.map((item, index) => (
                  <li key={index}>
                    {item}
                    {index !== combinedList.length - 1 && <span>|</span>}
                  </li>
                ))}
              </ul>
            </div>
            <div className={css.modalCarsRentalConditions}>
              <p className={css.modalRentalConditionsTitle}>Rental Conditions:</p>
              <ul className={css.modalRentalConditionsList}>
                {rentalConditionData.map(detail => (
                  <li
                    className={css.modalRentalConditionsListItem}
                    key={detail}
                    dangerouslySetInnerHTML={{
                      __html: detail.replace(/(\d+)/g, (match, number) => `<span>${number}</span>`),
                    }}
                  ></li>
                ))}
                <li className={css.modalRentalConditionsListItem}>
                  Mileage: <span>{mileage}</span>
                </li>
                <li className={css.modalRentalConditionsListItem}>
                  Price:<span>{rentalPrice}</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Button
          variant="contained"
          onClick={() => setIsModalOpen(false)}
          className={css.rentCarButton}
          style={{ float: 'left' }}
        >
          Rental Car
        </Button>
        {/* <Button variant="contained" onClick={() => setIsModalOpen(false)} className={css.button}>
          Close
        </Button> */}
      </div>
    </div>,
    document.getElementById('modal')
  );
};

export default Modal;
