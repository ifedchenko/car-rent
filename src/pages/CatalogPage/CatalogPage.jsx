import CarList from '../../components/CarList/CarList';
// import CarFilter from '../../components/CarFilter.CarFilter';
import { useEffect, useState } from 'react';
import { fetchCars } from '../../helpers/fetchCars';
// import { useSearchParams, useLocation } from 'react-router-dom';
import css from './CatalogPage.module.css';

const Catalog = () => {
  const [cars, setCars] = useState([]);
  // const [filter, setFilter] = useState('');
  useEffect(() => {
    async function fetchSearchCars() {
      try {
        const data = await fetchCars('/advert');
        setCars(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchSearchCars();
  }, []);

  return (
    <section className={css.catalogPage}>
      {/* <SearchBar onSubmit={onSubmit} />
        {cars && <CarList cars={cars} prevLocation={location} />} */}
      <CarList cars={cars} />
    </section>
  );
};

export default Catalog;
