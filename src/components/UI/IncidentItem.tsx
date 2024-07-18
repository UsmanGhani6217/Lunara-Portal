import { NextPage } from "next";
import { ColorSpan, Line } from "../../styles/LayoutStyles";

interface IncidentItemProps {
  title: string;
  colorSpanText: string;
  fontSize?: string;
}

const IncidentItem: NextPage<IncidentItemProps> = ({ title = "", colorSpanText= "white", fontSize = "12px" }) => {
  return (
    <>
      <h3>{title}</h3>
      <Line />
      <ColorSpan fontSize={fontSize}>{colorSpanText}</ColorSpan>
    </>
  );
};

export default IncidentItem;
