import styles from './BannerEpisodios.module.css';
import bannerImage from 'assets/banner2.jpg';

const BannerEpisodios = () => {
    return (
        <>
            <div className={styles.banner}>
                <div className={styles.apresentacao}>
                    <span className={styles.subtitulo}>Conheça melhor sobre</span>
                    <h1 className={styles.titulo}>
                        Breaking Bad
                    </h1>

                    <p className={styles.paragrafo}>
                        A série possui um total de sessenta e dois episódios divididos em cinco temporadas. Foi transmitida de 20 de janeiro de 2008 a 29 de setembro de 2013. Cada episódio possui em média 45 minutos de duração.
                    </p>
                </div>
                <div className={styles.imagens}>
                    <img
                        className={styles.bannerImage}
                        src={bannerImage}
                        alt="Walter White and Jesse Pinkman" />
                </div>
            </div>
        </>
    )
}

export default BannerEpisodios;