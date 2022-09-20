import { useParams } from "react-router-dom";

export default function Nations() {
  let {nationId} = useParams();
  return (
    <div id="contact">
        nation {nationId}
    </div>
  );
}

