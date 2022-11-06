import BannerMusic from 'components/BannerMusic';
import styles from './Music.module.css';


function Music() {

    return (
        <>
            <BannerMusic />
            <h2 className={styles.musicTitle}>Que tal ouvir a</h2>
            <h3 className={styles.musicTitle2}>Trilha Sonora?</h3>
            <div className={styles.musicPlayer}>
            <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DX4r0lAfpJQo3?utm_source=generator&theme=0" width="100%" height="520" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
        </>
    )
}

export default Music;