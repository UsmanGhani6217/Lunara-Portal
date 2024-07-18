import type { NextPage } from "next";

import { ColorSpan, Line, IncidentDetails } from "../../styles/LayoutStyles";
import { IncidentSpan } from "../../styles/CommonStyles";

export const IncidentDetailItem: NextPage = ({ isDetail = true }) => {
  return (
    <>
      <IncidentDetails>
        <ColorSpan>Mar 27, 00:56 UTC</ColorSpan>
        <IncidentSpan color="#24a0ed">
          <span className="span">Resolved</span> - This incident has been resolved.
        </IncidentSpan>
      </IncidentDetails>
      <IncidentDetails>
        <ColorSpan>Mar 27, 00:53 UTC</ColorSpan>
        <IncidentSpan color="#bf40bf">
          <span className="span">Monitoring </span> - This issue has been mitigated.
        </IncidentSpan>
      </IncidentDetails>
      <IncidentDetails>
        <ColorSpan>Mar 27, 00:49 UTC</ColorSpan>
        <IncidentSpan color="#bf40bf">
          Identified - /transactions/get and/transactions/recurring/get requests are experiencing elevated error rates.{" "}
          {"\n"}
          We are actively investigating and working to mitigate this issue.
        </IncidentSpan>
      </IncidentDetails>
    </>
  );
};
