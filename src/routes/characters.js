import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
export default function Characters() {
  let {characterSlug} = useParams();
  return (
    <div id="contact">
        <Link to={"../characters/aloy"}>{"aloy"}</Link>
        character {characterSlug}
    </div>
  );
}

