import { Link } from "react-router";

import styles from './NavBar.module.css';
import logo from '../../img/costs_logo.png';
import { Container } from "./Container";

export const NavBar = () => {
    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to={'/'}>
                    <img src={logo} alt="logopitipo do site" />

                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/projects">Projetos</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/contact">Contato</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/company">Company</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    );
}
