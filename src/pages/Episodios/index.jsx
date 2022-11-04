import BannerEpisodios from 'components/BannerEpisodios';
import CardEpisode from 'components/Episode';
import React, { useState, useEffect } from 'react';
import styles from './Episodes.module.css';

function Episodios() {

  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    fetch('https://www.breakingbadapi.com/api/episodes?series=Breaking+Bad')
      .then((response) => response.json())
      .then((data) => {
        setEpisodes(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      <BannerEpisodios />
      <h1 className={styles.titulo}>
        Lista de episódios da série
      </h1>
      <div className={styles.card}>
        {episodes.map((episode) => <CardEpisode episode={episode} />)}
      </div>
    </>
  );
};

export default Episodios;