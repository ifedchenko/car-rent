import React from 'react';
import css from './HomePage.module.css';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

export default function Home() {
  return (
    <section className={css.welcome}>
      <div className={css.homePage}>
        <h1 className={css.title}>
          Welcome <br></br>to Car Rental Service!
        </h1>
        <p className={css.intro}>
          Your journey to discovering the most budget-friendly and convenient car hire starts here.
          With an immense array of cars ranging from plush luxury to economic utility, our services
          are curated to cater to all your automotive rental needs. We're committed to providing
          excellent customer service and the most seamless car rental experience. Whether you need a
          ride for your exciting road trip, looking for a convenient means for your business travel,
          or planning that family vacation, our extensive fleet is at your disposal. We pride
          ourselves on making car renting a hassle-free process, ensuring that your journey begins
          the moment you choose us. Embark on an unforgettable journey today with our reliable,
          convenient, and budget-friendly car rental service.
        </p>
        <Link className={css.button} to="/catalog">
          <Button variant="contained">Book now!</Button>
        </Link>
        <ul className={css.parnersList}>
          <li className={css.parnersListItem}>
            <img
              src="https://static.brandirectory.com/logos/ente001_enterprise.png"
              alt="enterprise"
              width="50"
            />
          </li>
          <li className={css.parnersListItem}>
            <img
              src="https://static.brandirectory.com/logos/herz002_hertz_logo_black.png"
              alt="Hertz"
              width="50"
            />
          </li>
          <li className={css.parnersListItem}>
            <img
              src="https://static.brandirectory.com/logos/avis002_avis.png"
              alt="Avis"
              width="50"
            />
          </li>
          <li className={css.parnersListItem}>
            <img
              src="https://static.brandirectory.com/logos/eurr002_europcar.jpg"
              alt="Europcar"
              width="50"
            />
          </li>
          <li className={css.parnersListItem}>
            <img
              src="https://static.brandirectory.com/logos/sixt002_2cebdb1b_45ac_42bb_ad16_50ff53fdb09a.png"
              alt="Sixt"
              width="50"
            />
          </li>
          <li className={css.parnersListItem}>
            <img
              src="https://static.brandirectory.com/logos/budt002_budget_logosvg.png"
              alt="Budget"
              width="50"
            />
          </li>
          <li className={css.parnersListItem}>
            <img
              src="https://static.brandirectory.com/logos/natl006_national_car_rental.png"
              alt="National Car Rental"
              width="50"
            />
          </li>
          <li className={css.parnersListItem}>
            <img
              src="https://static.brandirectory.com/logos/alar001_alamo_rent_a_car.png"
              alt="Alamo"
              width="50"
            />
          </li>
          <li className={css.parnersListItem}>
            <img
              src="https://static.brandirectory.com/logos/mots007_motus.jpg"
              alt="Motus"
              width="50"
            />
          </li>
          <li className={css.parnersListItem}>
            <img
              src="https://static.brandirectory.com/logos/locr001_download_4.png"
              alt="Localiza"
              width="50"
            />
          </li>
        </ul>
      </div>
    </section>
  );
}
