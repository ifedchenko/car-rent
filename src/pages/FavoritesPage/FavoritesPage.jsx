import CarList from '../../components/CarList/CarList';
import { useEffect, useState } from 'react';
import { fetchCars } from '../../helpers/fetchCars';

const Favorite = () => {
  const [cars, setCars] = useState([]);
  const [favoriteCars, setFavoriteCars] = useState([]);

  useEffect(() => {
    async function fetchSearchCars() {
      try {
        const data = await fetchCars('adverts');
        setCars(data);
      } catch (error) {
        console.error(error);
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
  }, [cars]);

  return (
    <section className="container">
      <CarList cars={favoriteCars} />
    </section>
  );
};

export default Favorite;
