import CarList from '../../components/CarList/CarList';
import { Puff } from 'react-loader-spinner';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import { fetchCars } from '../../helpers/fetchCars';

const Favorite = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [cars, setCars] = useState([]);
  const [favoriteCars, setFavoriteCars] = useState([]);

  useEffect(() => {
    async function fetchSearchCars() {
      try {
        setIsLoading(true);
        const data = await fetchCars('adverts');
        setCars(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchSearchCars();
  }, []);

  useEffect(() => {
    const favoriteStorageCarsRaw = localStorage.getItem('favoriteCars');
    const favoriteStorageCars = favoriteStorageCarsRaw ? JSON.parse(favoriteStorageCarsRaw) : {};
    const favoriteCarsIDs = Object.keys(favoriteStorageCars).map(Number);
    const filteredFavoriteCars = cars.filter(car => favoriteCarsIDs.includes(car.id));
    setFavoriteCars(filteredFavoriteCars);
  }, [cars, favoriteCars]);

  return (
    <section className="container">
      {isLoading ? (
        <Box
          sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}
        >
          <Puff loading={isLoading} size={100} color="#1976d2" />
        </Box>
      ) : (
        <>
          <CarList cars={favoriteCars} />
        </>
      )}
    </section>
  );
};

export default Favorite;
