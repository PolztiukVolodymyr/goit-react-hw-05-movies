import { NavLink } from 'react-router-dom';
import css from "./Navigation.module.css";

export default function Navigation() {
    return (
        <nav className={css.HeaderNav}>
            <div>
                <NavLink to="/" className={css.navLink}>Home</NavLink>
                <NavLink to="/movies" className={css.navLink}>Movies</NavLink>
            </div>
        </nav>
    );
};