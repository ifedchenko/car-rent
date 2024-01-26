import CarList from '../../components/CarList/CarList';
import CarFilter from '../../components/CarFilter/CarFilter';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Puff } from 'react-loader-spinner';
import { useEffect, useState } from 'react';
import { fetchPaginatedCars, fetchCars } from '../../helpers/fetchCars';

const Catalog = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 10;

  const loadMoreCars = async () => {
    try {
      const newCars = await fetchPaginatedCars('adverts', page, limit);
      setFilteredCars(prevCars => [...prevCars, ...newCars]);
      setPage(prevPage => prevPage + 1);
    } catch (error) {
      console.error('Failed to load more cars:', error);
    }
  };

  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);

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
      } finally {
        if (isMounted) {
          setIsLoading(false);
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
      {isLoading ? (
        <Box
          sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}
        >
          <Puff loading={isLoading} size={100} color="#1976d2" />
        </Box>
      ) : (
        <>
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
        </>
      )}
    </section>
  );
};
export default Catalog;
