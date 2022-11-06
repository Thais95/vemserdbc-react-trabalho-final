import React, { useState, useEffect } from 'react';
import styles from './Home.module.css';
import Banner from 'components/Banner';

function Home() {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch('https://www.breakingbadapi.com/api/characters?limit=10&offset=10?category=Breaking+Bad')
            .then((response) => response.json())
            .then((data) => {
                setCharacters(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    return (
        <>
            <Banner />
            <h2 className={styles.homeTitle}>Saiba mais sobre </h2>
            <h3 className={styles.homeTitle2}>alguns personagens</h3>
            <div className={styles.postContainer}>

                {characters.map((character) => {
                    return (

                        <div className={styles.post}>
                            <div key={character.name} className={styles.cardBanner}>
                                <img
                                    className={styles.capa}
                                    src={`./assets/${character.char_id}.png`}
                                    alt={`Foto de ${character.name}`}
                                />
                            </div>
                            <div key={character.chara_id} className={styles.cardInfo}>
                                <h2 className={styles.titulo}>{character.name}</h2>

                                <div className={styles.cardText}>
                                    <p className={styles.texto}> Apelido:
                                        <span className={styles.span}> {character.nickname} </span>
                                    </p>
                                </div>

                                <div className={styles.cardText}>
                                    <p className={styles.texto}> Encenado por:
                                        <span className={styles.span}> {character.portrayed} </span>
                                    </p>
                                </div>

                                <div className={styles.cardText}>
                                    <p className={styles.texto}> Ocupações na série:
                                        <span className={styles.span}> {character.occupation.join(', ')} </span>
                                    </p>
                                </div>

                            </div>
                        </div>

                    );
                })}

            </div>
        </>
    );
};

export default Home;