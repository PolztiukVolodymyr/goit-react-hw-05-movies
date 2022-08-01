import { NavLink } from 'react-router-dom';
import css from "./Navigation.module.css";

export default function Navigation() {
    return (
        <nav className={css.HeaderNav}>
            
            <NavLink to="/"
                className={({ isActive }) =>
                    isActive
                        ? `${css.active}`
                        : `${css.inactive}`} > Home
            </NavLink>
                
            <NavLink to="/movies"
                className={({ isActive }) =>
                    isActive
                        ? `${css.active}`
                        : `${css.inactive}`} > Movies
            </NavLink>
           
        </nav>
    );
};

   