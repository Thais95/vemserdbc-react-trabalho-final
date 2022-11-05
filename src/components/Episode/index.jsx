import styles from './Episode.module.css';

const CardEpisode = ({ episode }) => {


    return (
        <>
            <main className={styles.card}>
                <div className={styles.info}>
                    <p className={styles.titulo}>{episode.title}</p>
                    <p className={styles.texto}><span className={styles.episodio}>Episódio:</span> {episode.episode}</p>
                    <p className={styles.texto}><span className={styles.episodio}>Temporada:</span> {episode.season}</p>
                    <p className={styles.texto}><span className={styles.episodio}>Estreia:</span> {episode.air_date}</p>
                    <p className={styles.texto}><span className={styles.episodio}>Personagens:</span> {episode.characters.join(", ")}</p>
                </div>
            </main>
        </>
    );
}


export default CardEpisode;