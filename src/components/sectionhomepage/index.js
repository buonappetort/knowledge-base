import React from "react";
import { useParams } from "react-router-dom";

export default function SectionHomePage(props) {
  let { section } = useParams();

  return (
    <div>
      <h3>This is the {section} page</h3>
    </div>
  );
}
