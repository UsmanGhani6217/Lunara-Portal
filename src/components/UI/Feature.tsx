import { NextPage } from "next";
import Image from "next/image";
import { FeatureSection, FeatureItem } from "../../styles/CommonStyles";
  import YellowDot from "../../assets/images/yellow.png";
  import GreenDot from "../../assets/images/green.png";
  import RedDot from "../../assets/images/red.png";
  import OrangeDot from "../../assets/images/orange.png";



const Feature: NextPage = () => {
  return (
    <FeatureSection>
        <FeatureItem>
          <Image src={GreenDot} width={8} height={8} alt="green" /> Operational
        </FeatureItem>
        <FeatureItem>
          <Image src={OrangeDot} width={8} height={8} alt="orange" /> Degraded Performance
        </FeatureItem>
        <FeatureItem>
          <Image src={YellowDot} width={8} height={8} alt="yellow" /> Partial Outage
        </FeatureItem>
        <FeatureItem>
          <Image src={RedDot} width={8} height={8} alt="red" /> Major Outage
        </FeatureItem>
        <FeatureItem>
          <Image src={GreenDot} width={8} height={8} alt="green" /> Maintenance
        </FeatureItem>
      </FeatureSection>
  );
};
export default Feature;
