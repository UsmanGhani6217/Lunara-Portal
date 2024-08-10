import type { NextPage } from "next";

import { ColorSpan } from "../../styles/LayoutStyles";
import { IncidentSpan } from "../../styles/CommonStyles";

export const IncidentDetailItem: NextPage = ({ isDetail = true }) => {
  return (
    <>
      <h3>March 27, 2024</h3>
      <hr style={{ backgroundColor: "#383838" }} />
          <h6>
            Elevated /transactions/get and /transactions/recurring/get errors
          </h6>
          <p>
            <ColorSpan>Mar 27, 00:56 UTC</ColorSpan>
          </p>
          <IncidentSpan>Resolved - This incident has been resolved.</IncidentSpan>
          <p>
            <ColorSpan>Mar 27, 00:56 UTC</ColorSpan>
          </p>
          <IncidentSpan>Monitoring  - This issue has been mitigated.</IncidentSpan>
          <IncidentSpan>We are closely monitoring our systems as we recover.</IncidentSpan>
      <ColorSpan>No incidents reported today.</ColorSpan>
    </>
  );
};
