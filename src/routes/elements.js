import { useParams } from "react-router-dom";

export default function Elements() {
  let {elementId} = useParams();
  return (
    <div id="contact">
        Element {elementId}
    </div>
  );
}

