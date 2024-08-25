import type { NextPage } from "next";

import { ColorSpan } from "../../styles/LayoutStyles";
import { IncidentSpan } from "../../styles/CommonStyles";

export const IncidentDetailItem: NextPage = ({ isDetail = true }) => {
  return (
    <>
      <h3>March 27, 2024</h3>
      <hr style={{ backgroundColor: "#383838" }} />
          <div style={{fontSize:"18px" , lineHeight:"27px"}}>
            Elevated /transactions/get and /transactions/recurring/get errors
          </div>
          <p>
            <ColorSpan>Mar 27, 00:56 UTC</ColorSpan>
          </p>
          <IncidentSpan><span style={{color:"#7ED1FF"}}>Resolved</span> - This incident has been resolved.</IncidentSpan>
          <p>
            <ColorSpan>Mar 27, 00:56 UTC</ColorSpan>
          </p>
          <IncidentSpan><span style={{color:"#DE7FFF"}} >Monitoring</span>  - This issue has been mitigated.</IncidentSpan>
          <IncidentSpan>We are closely monitoring our systems as we recover.</IncidentSpan>
      <ColorSpan>No incidents reported today.</ColorSpan>
    </>
  );
};
