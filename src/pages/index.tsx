// pages/index.tsx
import type { NextPage } from 'next';
import Image from "next/image";
import  Layout  from '../components/Layout';
import  { IncidentItem }  from '../components/UI/IncidentItem';
import  { IncidentDetailItem }  from '../components/UI/IncidentDetailItem';
import  BarChart  from '../pages/chart';
import  TabsComponent  from '../pages/tabs';

import { ColorSpan } from '../styles/LayoutStyles';
import { OperationalSection, MainHeading, ProductSection, UptimeSpan, FeatureSection, FeatureItem, ChartSection, ChartHeader,
   ChartTitle, ChartSubTitle, ChartFooter, ButtonWrapper, Button, TabsWrapper, IncidentsWrapper} from '../styles/CommonStyles';
import YellowDot from "../assets/images/yellow.png";
import GreenDot from "../assets/images/green.png";
import RedDot from "../assets/images/red.png";
import OrangeDot from "../assets/images/orange.png";
import Line from "../assets/images/Line.png";

const Home: NextPage = () => {
    return (
        <Layout>
     <OperationalSection>
      <h1>All Systems Operational</h1>
     </OperationalSection>
      <ProductSection>
        <div style={{flex:1}}></div>
        <div>
        <ColorSpan>Update over the past 90 days</ColorSpan> <UptimeSpan>View historical uptime</UptimeSpan> 
        </div>
      </ProductSection>
      <FeatureSection>
        <FeatureItem><Image src={GreenDot} width={8} height={8} alt="green" /> Operational</FeatureItem>
        <FeatureItem><Image src={OrangeDot} width={8} height={8} alt="orange" /> Degraded Performance</FeatureItem>
        <FeatureItem><Image src={YellowDot} width={8} height={8} alt="yellow" /> Partial Outage</FeatureItem>
        <FeatureItem><Image src={RedDot} width={8} height={8} alt="ren" /> Major Outage</FeatureItem>
        <FeatureItem><Image src={GreenDot} width={8} height={8} alt="green" /> Maintenance</FeatureItem>
      </FeatureSection>
      <ChartSection>
        <ChartHeader>
          <div>
            <ChartTitle>Sandbox arrow icon</ChartTitle>
          </div>
          <div>
          <ChartSubTitle>Operational</ChartSubTitle>
          </div>
        </ChartHeader>
        <div>
        <BarChart/>
        </div>
        <ChartFooter>
  <div><ColorSpan>90 days ago <Image src={Line} width={100} height={3} alt="green" /></ColorSpan> </div>
  <div><ColorSpan>100.0% uptime <Image src={Line} width={100} height={3} alt="green" /></ColorSpan> </div>
  <div><ColorSpan>Today</ColorSpan> </div>
 
 </ChartFooter>
      </ChartSection>
      <ChartSection>
        <ChartHeader>
          <div>
            <ChartTitle>Sandbox arrow icon</ChartTitle>
          </div>
          <div>
          <ChartSubTitle>Operational</ChartSubTitle>
          </div>
        </ChartHeader>
        <div>
        <BarChart/>
        </div>
        <ChartFooter>
  <div><ColorSpan>90 days ago <Image src={Line} width={100} height={3} alt="green" /></ColorSpan> </div>
  <div><ColorSpan>100.0% uptime <Image src={Line} width={100} height={3} alt="green" /></ColorSpan> </div>
  <div><ColorSpan>Today</ColorSpan> </div>
 
 </ChartFooter>
      </ChartSection>
      <ChartSection>
        <ChartHeader>
          <div>
            <ChartTitle>Sandbox arrow icon</ChartTitle>
          </div>
          <div>
          <ChartSubTitle>Operational</ChartSubTitle>
          </div>
        </ChartHeader>
        <div>
        <BarChart/>
        </div>
        <ChartFooter>
  <div><ColorSpan>90 days ago <Image src={Line} width={100} height={3} alt="green" /></ColorSpan> </div>
  <div><ColorSpan>100.0% uptime <Image src={Line} width={100} height={3} alt="green" /></ColorSpan> </div>
  <div><ColorSpan>Today</ColorSpan> </div>
 
 </ChartFooter>
      </ChartSection>
      <ChartSection>
        <ChartHeader>
          <div>
            <ChartTitle>Sandbox arrow icon</ChartTitle>
          </div>
          <div>
          <ChartSubTitle>Operational</ChartSubTitle>
          </div>
        </ChartHeader>
        <div>
        <BarChart/>
        </div>
        <ChartFooter>
  <div><ColorSpan>90 days ago <Image src={Line} width={100} height={3} alt="green" /></ColorSpan> </div>
  <div><ColorSpan>100.0% uptime <Image src={Line} width={100} height={3} alt="green" /></ColorSpan> </div>
  <div><ColorSpan>Today</ColorSpan> </div>
 
 </ChartFooter>
      </ChartSection>
 <ButtonWrapper>
  <Button>View more &#x25BC;</Button>
 </ButtonWrapper>
  <TabsWrapper>
<div>Tab Component</div>
<div></div>
  </TabsWrapper>
<IncidentsWrapper>
<IncidentItem />
<IncidentDetailItem/>
<IncidentItem />
<IncidentItem />
<IncidentItem />
<IncidentItem />
</IncidentsWrapper>
        </Layout>
    );
};

export default Home;
