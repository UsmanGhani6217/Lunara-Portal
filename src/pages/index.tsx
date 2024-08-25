import type { NextPage } from "next";
import Image from "next/image";
import Layout from "../components/Layout";
import Line from "../assets/images/Line.png";
import BarChart from "../pages/chart";

import { IncidentItem } from "../components/UI/IncidentItem";
import { IncidentDetailItem } from "../components/UI/IncidentDetailItem";
import { FaRegCheckCircle } from "react-icons/fa";
import TabsComponent from "../pages/tabs";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import {
  OperationalSection,
  MainHeading,
  ProductSection,
  UptimeSpan,
  FeatureSection,
  FeatureItem,
  ChartSection,
  ChartHeader,
  ChartTitle,
  ChartSubTitle,
  ChartFooter,
  ButtonWrapper,
  Button,
  TabsWrapper,
  IncidentsWrapper,
  TickSpan,
  AllProductDropDownWrapper,
  DotSpan,
  AllProductText,
  GreenDot,
  OrangeDot,
  YellowDot,
  RedDot,
  LightBlueDot,
  SandBoxWrapper,
  LineSpan,
  ChartColorSpan
} from "../styles/CommonStyles";
import {
  ColorSpan,
} from "../styles/LayoutStyles";
const Home: NextPage = () => {
  return (
    <Layout>
      <OperationalSection>
        <TickSpan>
          <FaRegCheckCircle size={25} />
        </TickSpan>
        <h1>All Systems Operational</h1>
      </OperationalSection>
      <ProductSection>
        <AllProductDropDownWrapper>
          <DotSpan>
          <GoDotFill size={28} />
          </DotSpan>
          <AllProductText>All Products</AllProductText>
          <MdOutlineKeyboardArrowDown size={18} />
        </AllProductDropDownWrapper>
        <div>
          <ColorSpan>Update over the past 90 days</ColorSpan>{" "}
          <UptimeSpan>View historical uptime</UptimeSpan>
        </div>
      </ProductSection>
      <FeatureSection>
        <FeatureItem>
        <GreenDot>
          <GoDotFill size={15} />
          </GreenDot> 
          <span>
          Operational
          </span>
        </FeatureItem>
        <FeatureItem>
        <OrangeDot>
          <GoDotFill size={15} />
          </OrangeDot> 
          <span>
          Performance
          </span>
        </FeatureItem>
        
        <FeatureItem>
        <YellowDot>
          <GoDotFill size={15} />
          </YellowDot> 
          <span>
          Partial
          Outage
          </span>
        </FeatureItem>
        <FeatureItem>
        
        <RedDot>
          <GoDotFill size={15} />
          </RedDot> 
          <span>
          Major Outage
          </span>
        </FeatureItem>
        <FeatureItem>
        <LightBlueDot>
          <GoDotFill size={15} />
          </LightBlueDot> 
          <span>
          Maintenance
          </span>
        </FeatureItem>
      </FeatureSection>
      <ChartSection>
        <ChartHeader>
          <SandBoxWrapper>
            <ChartTitle>Sandbox <GoArrowRight style={{color:"#9B9B9B"}}/></ChartTitle>
          </SandBoxWrapper>
          <div>
            <ChartSubTitle>Operational</ChartSubTitle>
          </div>
        </ChartHeader>
        <div>
          <BarChart />
        </div>
        <ChartFooter>
        <ChartColorSpan>
              90 days ago{" "}
            </ChartColorSpan>{" "}
            <LineSpan></LineSpan>
            <ChartColorSpan>
              100.0% uptime{" "}
            </ChartColorSpan>{" "}
            <LineSpan></LineSpan>
            <ChartColorSpan>Today</ChartColorSpan>{" "}
         
        </ChartFooter>
      </ChartSection>
      <ChartSection>
        <ChartHeader>
          <SandBoxWrapper>
            <ChartTitle>Money movement: card authorization <GoArrowRight style={{color:"#9B9B9B"}}/></ChartTitle>
          </SandBoxWrapper>
          <div>
            <ChartSubTitle>Operational</ChartSubTitle>
          </div>
        </ChartHeader>
        <div>
          <BarChart />
        </div>
        <ChartFooter>
        <ChartColorSpan>
              90 days ago{" "}
            </ChartColorSpan>{" "}
            <LineSpan></LineSpan>
            <ChartColorSpan>
              100.0% uptime{" "}
            </ChartColorSpan>{" "}
            <LineSpan></LineSpan>
            <ChartColorSpan>Today</ChartColorSpan>{" "}
         
        </ChartFooter>
      </ChartSection>
      <ChartSection>
        <ChartHeader>
          <SandBoxWrapper>
            <ChartTitle>Production <GoArrowRight style={{color:"#9B9B9B"}}/></ChartTitle>
          </SandBoxWrapper>
          <div>
            <ChartSubTitle>Operational</ChartSubTitle>
          </div>
        </ChartHeader>
        <div>
          <BarChart />
        </div>
        <ChartFooter>
        <ChartColorSpan>
              90 days ago{" "}
            </ChartColorSpan>{" "}
            <LineSpan></LineSpan>
            <ChartColorSpan>
              100.0% uptime{" "}
            </ChartColorSpan>{" "}
            <LineSpan></LineSpan>
            <ChartColorSpan>Today</ChartColorSpan>{" "}
         
        </ChartFooter>
      </ChartSection>
      <ChartSection>
        <ChartHeader>
          <SandBoxWrapper>
            <ChartTitle>Dashboard <GoArrowRight style={{color:"#9B9B9B"}}/></ChartTitle>
          </SandBoxWrapper>
          <div>
            <ChartSubTitle>Operational</ChartSubTitle>
          </div>
        </ChartHeader>
        <div>
          <BarChart />
        </div>
        <ChartFooter>
        <ChartColorSpan>
              90 days ago{" "}
            </ChartColorSpan>{" "}
            <LineSpan></LineSpan>
            <ChartColorSpan>
              100.0% uptime{" "}
            </ChartColorSpan>{" "}
            <LineSpan></LineSpan>
            <ChartColorSpan>Today</ChartColorSpan>{" "}
         
        </ChartFooter>
      </ChartSection>
      <ButtonWrapper>
        <Button>View more <MdOutlineKeyboardArrowDown size={18} /> </Button>  
      </ButtonWrapper>
      <TabsWrapper>
        <div>Tab Component</div>
        <div></div>
      </TabsWrapper>
      <IncidentsWrapper>
        <IncidentItem />
        <IncidentDetailItem />
        <IncidentItem />
        <IncidentItem />
        <IncidentItem />
        <IncidentItem />
      </IncidentsWrapper>
    </Layout>
  );
};

export default Home;
