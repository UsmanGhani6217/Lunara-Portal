// styles/LayoutStyles.ts
import styled from "styled-components";

export const OperationalSection = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 80px;
`;

export const ProductSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 70px;
`;
export const UptimeSpan = styled.span`
  font-family: TT Interfaces;
  font-size: 14px;
  font-weight: 600;
  line-height: 21px;
  text-align: left;
  text-decoration: underline;
  cursor: pointer;
`;

export const FeatureSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 31px;
`;
export const FeatureItem = styled.span`
  margin-right: 20px;
  font-family: TT Interfaces;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  text-align: center;
`;
export const ChartSection = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  margin-top: 31px;
  background: #1f1f1f;
  height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
export const ChartHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const ChartTitle = styled.span`
  font-family: TT Interfaces;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
  display: flex;
  align-items: center;
`;
export const ChartSubTitle = styled.span`
  font-family: TT Interfaces;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  text-align: left;
  color: #61d47a;
  margin-right: 16px;
`;
export const ChartFooter = styled.div`
  display: flex;
  justify-content: space-between;
  // margin: 24px 0px;
  // border:1px solid red;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0px;
`;
interface ButtonProps {
  bgColor?: string;
  color?: string;
}

export const Button = styled.div<ButtonProps>`
  background-color: ${(props) => props.bgColor || "#1f1f1f"};
  color: ${(props) => props.color || "white"};
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 13px;
  cursor: pointer;
  display: inline-block;

  .downward-triangle {
    font-size: 8px;
    vertical-align: middle;
    margin-left: 5px;
  }
`;
export const TabsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 65px;
`;
export const IncidentsWrapper = styled.div`
  margin-top: 44px;
`;
interface IncidentSpanProps {
  color?: string;
}

export const IncidentSpan = styled.div<IncidentSpanProps>`
  color: #e6e6e6;
  font-family: TT Interfaces;
  font-size: 13px;
  font-weight: 100;
  line-height: 18px;
  text-align: left;
  white-space: pre-wrap;

  .span {
    color: ${(props) => props.color || "white"};
  }
`;

export const MainHeading = styled.span`
  font-family: TT Interfaces;
  font-size: 32px;
  font-weight: bold;
  letter-spacing: -1px;
  text-align: left;
`;
