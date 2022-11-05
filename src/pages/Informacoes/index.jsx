import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
const Informacoes = () => {
    const [searchParams] = useSearchParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        getCharacter();
    }, []);

    const getCharacter = () => {
        const charId = searchParams.get('id');
        fetch(`https://www.breakingbadapi.com/api/characters/${charId}`)
            .then((response) => response.json())
            .then((data) => {
                if (data.length > 0) {
                    setCharacter(data[0]);
                }
            })
            .catch((err) => {
                console.log(err.message);
            });
    }
    return (
        <>
        {character?
        <main>
            <img src={character.img} height='200px'></img>
            <p>{character.name}</p>
            <p>{character.occupation && character.occupation.length > 0?character.occupation.join(', '):''}</p>
            
        </main>:<></>}
        </>
    )
}



export default Informacoes