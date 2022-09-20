import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

export default function CharacterSelection() {
    const [characterListData, setCharacterListData] = useState();
    useEffect(() => {
        axios.get('https://api.genshin.dev/characters')
            .then((res) => {
                // console.log(res.data);
                setCharacterListData(res.data);
            })
    }, []);
    const characterList = 
    !characterListData
    ?null
    :characterListData.map((character) => 
    <li key={character}>
        <Link to={character}>{character}</Link>
    </li>
    );

    return (
        <div id="contact">
            <ul>
                {characterList}
            </ul>
        </div>
    );
}

