import { useParams } from "react-router-dom";

export default function Characters() {
  let {characterId} = useParams();
  return (
    <div id="contact">
        character {characterId}
    </div>
  );
}

