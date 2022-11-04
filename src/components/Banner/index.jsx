import styles from './Banner.module.css';
import bannerImage from 'assets/banner.jpg';

function Banner() {
    return(
        <>
            <div className={styles.banner}>
                <div className={styles.apresentacao}>
                    <span className={styles.subtitulo}>Conheça melhor sobre</span>
                    <h1 className={styles.titulo}>
                    Breaking Bad
                    </h1>

                    <p className={styles.paragrafo}>
                    A história passa em torno de Walter White, um professor de química descontente com seu estado atual de vida, que após ser diagnosticado com um câncer de pulmão inoperável, passa a fabricar e vender metanfetamina com um ex-aluno para garantir o futuro de sua família.
                    </p>
                </div>
                <div className={styles.imagens}>
                    <img 
                        className={styles.bannerImage}
                        src={bannerImage}
                        alt="Walter White and Jesse Pinkman"  />
                </div>
            </div>
        </>
    )
}

export default Banner;