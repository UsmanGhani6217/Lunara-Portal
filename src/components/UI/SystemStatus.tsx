import { NextPage } from "next";
import Image from "next/image";
import Line from "@/assets/images/Line.png";
import BarChart from "@/pages/chart";
import { ColorSpan } from "@/styles/LayoutStyles";
import {
    ChartSection,
    ChartHeader,
    ChartTitle,
    ChartSubTitle,
    ChartFooter,
  } from "@/styles/CommonStyles";

interface IncidentItemProps {
  title: string;
  colorSpanText: string;
  fontSize?: string;
}

const SystemStatus: NextPage<IncidentItemProps> = ({ data = [] }) => {
  return  data.map((title, ind)=> {
            return <ChartSection>
            <ChartHeader>
              <div>
                <ChartTitle>
                  {title} {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#9b9b9b"
                    width="15px" // Set the width here
                    style={{ marginLeft: "10px" }}
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </ChartTitle>
              </div>
              <div>
                <ChartSubTitle>Operational</ChartSubTitle>
              </div>
            </ChartHeader>
            <div>
              <BarChart />
            </div>
            <ChartFooter>
              <div>
                <ColorSpan>
                  90 days ago <Image src={Line} width={100} height={3} alt="green" />
                </ColorSpan>{" "}
               
              </div>
              <div>
                <ColorSpan>
                  100.0% uptime  <Image src={Line} width={100} height={3} alt="green" />
                </ColorSpan> {" "}
              </div>
              <div>
                <ColorSpan>Today</ColorSpan>{" "}
              </div>
            </ChartFooter>
          </ChartSection>
        })
    };


export default SystemStatus;
