import CarList from '../../components/CarList/CarList';
import CarFilter from '../../components/CarFilter/CarFilter';
import { useEffect, useState } from 'react';
import { fetchPaginatedCars, fetchCars } from '../../helpers/fetchCars';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const Catalog = () => {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 8;

  const loadMoreCars = async () => {
    try {
      const newCars = await fetchPaginatedCars('adverts', page, limit);
      // setCars(prevCars => [...prevCars, ...newCars]);
      setFilteredCars(prevCars => [...prevCars, ...newCars]);
      setPage(prevPage => prevPage + 1);
    } catch (error) {
      console.error('Failed to load more cars:', error);
    }
  };

  useEffect(() => {
    let isMounted = true;
    async function fetchSearchCars() {
      try {
        const data = await fetchPaginatedCars('adverts', page, limit);
        const allCars = await fetchCars('adverts');
        setCars(allCars);
        setFilteredCars(data);
        setPage(prevPage => prevPage + 1);
      } catch (error) {
        if (isMounted) {
          console.error(error);
        }
      }
    }

    fetchSearchCars();

    return () => {
      isMounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="container">
      <CarFilter setFilteredCars={setFilteredCars} cars={cars} />
      <CarList cars={filteredCars} />
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          sx={{
            fontFamily: 'Manrope',
            fontSize: 14,
            fontWeight: 600,
            marginTop: 10,
          }}
          variant="contained"
          onClick={loadMoreCars}
        >
          Load more
        </Button>
      </Box>
    </section>
  );
};

export default Catalog;
