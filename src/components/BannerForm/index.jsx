import styles from './BannerForm.module.css';
import bannerImage3 from 'assets/banner3.jpg';

const BannerForm = () => {
    return (
        <>
            <div className={styles.banner}>
                <div className={styles.apresentacao}>
                    <span className={styles.subtitulo}>Conheça melhor sobre</span>
                    <h1 className={styles.titulo}>
                        Breaking Bad
                    </h1>

                    <p className={styles.paragrafo}>
                        Um dos shows mais premiados e aclamados de todos os tempos, Breaking Bad foi transmitido entre 2008 e 2013, mas teve tamanha repercussão e fãs tão fervorosos, que posteriormente ganhou dois spin-offs: uma série chamada Better Call Saul, e um filme batizado de El Camino.
                    </p>
                </div>
                <div className={styles.imagens}>
                    <img
                        className={styles.bannerImage}
                        src={bannerImage3}
                        alt="Walter White and Jesse Pinkman" />
                </div>
            </div>
        </>
    )
}

export default BannerForm;