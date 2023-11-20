import React from 'react';
import css from './HomePage.module.css';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

export default function Home() {
  return (
    <section className={css.welcome}>
      <div className={css.homePage}>
        <h1 className={css.title}>
          Welcome <br></br>Car Rental Service!
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
      </div>
    </section>
  );
}
