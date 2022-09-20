import { useParams } from "react-router-dom";

export default function Weapons() {
  let {weaponId} = useParams();
  return (
    <div id="contact">
        weapon {weaponId}
    </div>
  );
}

