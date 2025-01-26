import { Link } from 'react-router-dom';

import styles from './Header.module.css';

function Header() {
    return (
        <nav className={styles.container}>
            <Link to="/">
                <img className={styles.logo} src="/tedx-logo.svg" alt="TEDxCMU Logo" />
            </Link>
            <Link className={styles.link} to="/about">
                ABOUT
            </Link>
        </nav>
    )
}

export default Header;
