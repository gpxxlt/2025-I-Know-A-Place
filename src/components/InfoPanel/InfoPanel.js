import styles from './InfoPanel.module.css';

function InfoPanel() {
    return (
        <section className={styles.container}>
            <p className={styles.title}><span className={styles.span}>I KNOW A PLACE</span></p>
            <p className={styles.body}>
                An exploration of memory and space dedicated to Carnegie Mellon's cultural diversity. We all know a place and know it very well. To get started, click on a marker for a story. If you'd like to share, click any place and make it yours.
            </p>
        </section>
    )
}

export default InfoPanel;
