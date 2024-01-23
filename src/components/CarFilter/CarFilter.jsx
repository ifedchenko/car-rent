// import React, { useState } from 'react';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import css from './CarFilter.module.css';

const Filter = ({ cars }) => {
  const [carBrand, setCarBrand] = useState('');
  const [carPrice, setCarPrice] = useState('');
  const [mileageFrom, setMileageFrom] = useState('');
  const [mileageTo, setMileageTo] = useState('');

  const handleChangeModel = event => {
    setCarBrand(event.target.value);
  };

  const handleChangePrice = event => {
    setCarPrice(event.target.value);
  };

  const handleChangeMileageFrom = event => {
    setMileageFrom(event.target.value);
  };

  const handleChangeMileageTo = event => {
    setMileageTo(event.target.value);
  };

  const carBrands = cars
    .filter((car, index, allcars) => allcars.findIndex(model => model.make === car.make) === index)
    .map(car => car.make)
    .sort();

  const carPrices = cars
    .filter(
      (car, index, allcars) =>
        allcars.findIndex(price => price.rentalPrice === car.rentalPrice) === index
    )
    .map(car => parseFloat(car.rentalPrice.slice(1)))
    .sort((a, b) => a - b);

  return (
    <div className={css.carFilter}>
      <Box sx={{ minWidth: 120, fontFamily: 'Manrope' }}>
        <Typography
          sx={{ fontWeight: 500, fontFamily: 'Manrope', fontSize: 14, marginBottom: 1 }}
          variant="h6"
          className={css.carBrandTitle}
        >
          Car brand
        </Typography>
        <FormControl
          sx={{
            width: 224,
            color: '#121417',
            backgroundColor: '#F7F7FB',
          }}
        >
          <InputLabel
            sx={{
              width: 224,
              fontSize: 18,
              color: '#121417',
            }}
            id="input-car-brand-label"
          >
            select car
          </InputLabel>
          <Select
            labelId="input-car-brand-label"
            id="input-car-brand"
            value={carBrand}
            label="select car"
            onChange={handleChangeModel}
          >
            <MenuItem value="">
              <em>Clear Selection</em>
            </MenuItem>
            {carBrands.map(brand => (
              <MenuItem key={brand} value={brand}>
                {brand}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ minWidth: 120 }}>
        <Typography
          sx={{
            fontWeight: 500,
            fontFamily: 'Manrope',
            fontSize: 14,
            marginBottom: 1,
          }}
          variant="h6"
          className={css.carBrandTitle}
        >
          Price/ 1 hour
        </Typography>
        <FormControl
          sx={{ width: 125, fontFamily: 'Manrope', color: '#121417', backgroundColor: '#F7F7FB' }}
        >
          <InputLabel
            sx={{ width: 224, fontFamily: 'Manrope', color: '#121417' }}
            id="input-car-price-label"
          >
            To $
          </InputLabel>
          <Select
            labelId="input-car-price-label"
            id="input-car-price"
            value={carPrice}
            label="price"
            onChange={handleChangePrice}
          >
            <MenuItem value="">
              <em>Clear Selection</em>
            </MenuItem>
            {carPrices.map((price, index) => (
              <MenuItem key={index} value={price}>
                {price}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ minWidth: 120 }}>
        <Typography
          sx={{
            fontWeight: 500,
            fontFamily: 'Manrope',
            fontSize: 14,
            marginBottom: 1,
          }}
          variant="h6"
          className={css.carBrandTitle}
        >
          Car mileage / km
        </Typography>
        <TextField
          sx={{ width: 160, backgroundColor: '#F7F7FB' }}
          id="mileage-from"
          label="From"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          sx={{ width: 160, backgroundColor: '#F7F7FB', marginLeft: -0.1 }}
          id="mileage-to"
          label="To"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Box>
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
      >
        Search
      </Button>
    </div>
  );
};

export default Filter;
