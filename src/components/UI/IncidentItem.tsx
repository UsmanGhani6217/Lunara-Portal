import type { NextPage } from "next";

import { ColorSpan } from "../../styles/LayoutStyles";
export const IncidentItem: NextPage = ({isDetail= true}) => {
  return (
    <>
      <h3>March 27, 2024</h3>
      <hr style={{ backgroundColor: "#383838" }} />
      <ColorSpan>No incidents reported today.</ColorSpan>
    </>
  );
};
