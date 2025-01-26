import { Link } from 'react-router-dom';

import styles from './Footer.module.css';

function Footer() {
    return (
        <footer className={styles.container}>
            <p className={styles.text}>
                Made by&nbsp;
                <a className={styles.link} href="https://www.tedxcmu.org/" target="_blank" rel="noreferrer noopener">
                    TEDxCMU
                </a>
            </p>
            <p className={styles.text}>
                <Link className={styles.link} to="/login">
                    Admin
                </Link>
            </p>
        </footer>
    )
}

export default Footer;
