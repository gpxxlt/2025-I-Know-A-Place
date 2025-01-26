import cn from 'classnames';
import styles from './About.module.css';

function About() {
    return (
        <>
            <section className={cn(styles.block, styles.header)}>
                <h1 className={styles.title}>
                    About
                </h1>
                <p className={styles.text}>
                    I Know A Place is a joint venture by TEDxCMU Innovation and TEDxCMU Salon.
                </p>
            </section>
            <section className={styles.block}>
                <h2 className={styles.title}>
                    Salon
                </h2>
                <p className={styles.text}>
                    TEDxCMU Salon is a tight-knit team that uplifts student voices and strengthens our Carnegie Mellon community through self-curated events, projects, and gatherings outside of the annual TEDx mainstage conference. We strive for relevance to our current collective moment and impact on community. Feel free to engage with our past events, including Black Academics Matter, via <a href='https://www.tedxcmu.org/'>tedxcmu.org</a>.
                </p>
            </section>
            <section className={styles.block}>
                <h2 className={styles.title}>
                    Innovation
                </h2>
                <p className={styles.text}>
                    The TEDxCMU Innovation team creates interactive experiences for the TEDxCMU board and its events. We spearhead challenging and creative projects, using technology to deliver impactful solutions. Past projects include our TEDxCMU mobile app, virtual platforms for our main events, and an LED matrix. We also curate local innovators for the annual TEDxCMU Innovation Expo in the Spring to accompany our main event. Feel free to check out some of our past projects on <a href='https://github.com/TEDxCMU'>our Github</a>.
                </p>
            </section>
        </>
    )
}

export default About;
