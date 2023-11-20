import { NavLink, useLocation } from 'react-router-dom';
import { AppBar, Button } from '@mui/material';
import css from './AppBar.module.css';

export const AppBarX = () => {
  const location = useLocation();

  return (
    <AppBar className={css.header}>
      <nav className={css.navLinks}>
        <NavLink
          className={`${css.link} ${location.pathname === '/' ? css.currentPage : ''}`}
          to="/"
        >
          <Button variant="contained">Home</Button>
        </NavLink>
        <NavLink
          className={`${css.link} ${location.pathname === '/catalog' ? css.currentPage : ''}`}
          to="/catalog"
        >
          <Button className={css.button} variant="contained">
            Catalog
          </Button>
        </NavLink>
        <NavLink
          className={`${css.link} ${location.pathname === '/favorites' ? css.currentPage : ''}`}
          to="/favorites"
        >
          <Button className={css.button} variant="contained">
            Favorites
          </Button>
        </NavLink>
      </nav>
    </AppBar>
  );
};
