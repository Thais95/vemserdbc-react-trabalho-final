import React, { useState, useEffect } from 'react';
import styles from './About.module.css';

function About() {

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
      <div className={styles.postContainer}>
        {characters.map((character) => {
          return (<div className={styles.post}>
            <img
              className={styles.capa}
              src={character.img}
              alt='Imagem do Post'
            />
            <h2 className={styles.titulo}>{character.name}</h2>
            <p className={styles.texto}>Apelido: <span className={styles.nickname}>{character.nickname}</span></p>
            <p className={styles.texto}>Encenado por: <span className={styles.ator}>{character.portrayed}</span></p>
          </div>
          );
        })}
      </div>
    </>
  );
};

export default About;