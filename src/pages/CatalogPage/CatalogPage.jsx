import CarList from '../../components/CarList/CarList';
import CarFilter from '../../components/CarFilter/CarFilter';
import { useEffect, useState } from 'react';
import { fetchCars } from '../../helpers/fetchCars';

const Catalog = () => {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);

  useEffect(() => {
    async function fetchSearchCars() {
      try {
        const data = await fetchCars('/advert');
        setCars(data);
        setFilteredCars(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchSearchCars();
  }, []);

  return (
    <section className="container">
      <CarFilter setFilteredCars={setFilteredCars} cars={cars} />
      <CarList cars={filteredCars} />
    </section>
  );
};

export default Catalog;
