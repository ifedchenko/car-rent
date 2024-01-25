import CarList from '../../components/CarList/CarList';
import CarFilter from '../../components/CarFilter/CarFilter';
import { useEffect, useState } from 'react';
import { fetchCars } from '../../helpers/fetchCars';
import Button from '@mui/material/Button';

const Catalog = () => {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 10;

  const loadMoreCars = async () => {
    try {
      const newCars = await fetchCars('advert', page, limit);
      setCars(prevCars => [...prevCars, ...newCars]);
      setPage(prevPage => prevPage + 1);
    } catch (error) {
      console.error('Failed to load more cars:', error);
    }
  };

  useEffect(() => {
    async function fetchSearchCars() {
      try {
        const data = await fetchCars('advert', page, limit);
        setCars(data);
        setFilteredCars(data);
        setPage(prevPage => prevPage + 1);
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
      <Button
        sx={{
          fontFamily: 'Manrope',
          fontSize: 14,
          fontWeight: 600,
          paddingTop: 2.06,
          paddingBottom: 2.06,
          paddingLeft: 5.5,
          paddingRight: 5.5,
        }}
        variant="contained"
        onClick={loadMoreCars}
      >
        Search
      </Button>
    </section>
  );
};

export default Catalog;
