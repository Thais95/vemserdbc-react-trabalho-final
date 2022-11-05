import React, { useState, useEffect } from 'react';
import styles from './Home.module.css';
import Banner from 'components/Banner';

function Home() {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch('https://www.breakingbadapi.com/api/characters?limit=12&offset=12?category=Breaking+Bad')
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
            <h2 className={styles.homeTitle}>Conheça melhor sobre os principais personagens da série!</h2>
            <div className={styles.postContainer}>
                {characters.map((character) => {
                    return (<div className={styles.post}>
                        <img
                            className={styles.capa}
                            src={character.img}
                            alt='Imagem do Post'
                        />
                        <h2 className={styles.titulo}>{character.name}</h2>
                    </div>
                    );
                })}
            </div>
        </>
    );
};

export default Home;