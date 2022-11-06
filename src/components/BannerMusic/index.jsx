import styles from './BannerMusic.module.css';
import bannerImage4 from 'assets/banner.jpg';

function BannerMusic() {
    return (
        <>
            <div className={styles.banner}>
                <div className={styles.apresentacao}>
                    <span className={styles.subtitulo}>Conheça melhor sobre</span>
                    <h1 className={styles.titulo}>
                        Breaking Bad
                    </h1>

                    <p className={styles.paragrafo}>
                        Breaking Bad tem também uma curiosa trilha sonora. Com forte influência de música espanhola, muito pelos cartéis mexicanos e proximidade com a fronteira, os produtores souberam escolher diversas músicas que acabaram se encaixando perfeitamente com os episódios.
                    </p>
                </div>
                <div className={styles.imagens}>
                    <img
                        className={styles.bannerImage}
                        src={bannerImage4}
                        alt="Walter White and Jesse Pinkman" />
                </div>
            </div>
        </>
    )
}

export default BannerMusic;