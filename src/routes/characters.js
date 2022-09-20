import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';

export default function Characters() {
  let { characterSlug } = useParams();
  const [characterData, setCharacterData] = useState();
  useEffect(() => {
    axios.get('https://api.genshin.dev/characters/' + characterSlug)
      .then((res) => {
        // console.log(res.data);
        setCharacterData(res.data);
      })
  }, []);
  // console.log(characterData);
  return (
    <div id="contact">
      <Link to={"../characters"}>Character Selection</Link>
      {characterData ?
        <>
          <h2>{characterData.name}</h2>
          <h3>{characterData.title}</h3>
          <img src={"https://api.genshin.dev/characters/"+characterSlug+"/icon"}></img>
          <p>{characterData.description}</p>
          <div>Vision {characterData.vision}</div>
        </>
        :
        null}

    </div>
  );
}

