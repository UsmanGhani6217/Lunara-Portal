
import { NextPage } from "next";
import IncidentItem from "./IncidentItem";
import { IncidentDetailItem } from "./IncidentDetailItem";
import { IncidentsWrapper } from "@/styles/CommonStyles";

const IncidentsHistory: NextPage = () => {
  return (
    <IncidentsWrapper>
        <IncidentItem title="March 28, 2024" colorSpanText="No incidents reported today." />
        <IncidentItem
          title="March 27, 2024"
          colorSpanText="Elevated /transactions/get and /transactions/recurring/get errors."
          fontSize="15px"
        />
        <IncidentDetailItem />
        <IncidentItem title="March 26, 2024" colorSpanText="No incidents reported today." />
        <IncidentItem title="March 25, 2024" colorSpanText="No incidents reported today." />
        <IncidentItem title="March 24, 2024" colorSpanText="No incidents reported today." />
        <IncidentItem title="March 23, 2024" colorSpanText="No incidents reported today." />
        <IncidentItem title="March 22, 2024" colorSpanText="No incidents reported today." />
        <IncidentItem title="March 21, 2024" colorSpanText="No incidents reported today." />
      </IncidentsWrapper>
  );
};

export default IncidentsHistory;