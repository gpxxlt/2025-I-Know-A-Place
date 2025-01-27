import styles from './Header.module.css';

function Header({setAbout}) {
    return (
        <nav className={styles.container}>

            <img className={styles.logo} src="/tedx-logo.svg" alt="TEDxCMU Logo" onClick={()=>setAbout(false)}/>
            <div className={styles.link} onClick={()=>setAbout(true)}>
                ABOUT
            </div>
        </nav>
    )
}

export default Header;
