import React from "react";
import { useParams } from "react-router-dom";
import CenterToolbar from "./centertoolbar";

export default function CenterHomePage(props) {
  let { center } = useParams();
  let { centers } = props;

  return (
    <div>
      <CenterToolbar centers={centers} />
      <h3>This is the {center} page</h3>
    </div>
  );
}
