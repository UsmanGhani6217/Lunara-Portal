// styles/LayoutStyles.ts
import styled from "styled-components";

export const OperationalSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 94px;
`;
export const TickSpan = styled.span`
  width: 56px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #61d47a;
  border: 1px solid #61d47a;
  border-radius: 12px;
  color: black;
  margin-right: 14px;
`;

export const ProductSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 92px;
`;
export const AllProductDropDownWrapper = styled.div`
  width: 240px;
  padding: 0px 10px 0px 10px;
  height: 38px;
  display: flex;
  align-items: center;
  border: 1.5px solid #383838;
  background-color: #1f1f1f;
  border-radius: 10px;
`;
export const DotSpan = styled.span`
  color: #61d47a;
  margin-right: 14px;
`;
export const GreenDot = styled.span`
  color: #61d47a;
  margin-right: 5px;
  height: fit-content;
  display: flex;
  align-items: center;
`;
export const OrangeDot = styled(GreenDot)`
  color: #ffc47f;
`;
export const YellowDot = styled(GreenDot)`
  color: #d5ff7b;
`;
export const RedDot = styled(GreenDot)`
  color: #fa3e3e;
`;
export const LightBlueDot = styled(GreenDot)`
  color: #7ed1ff;
`;

export const AllProductText = styled.span`
  width: 120px;
  font-family: TT Interfaces;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  text-align: left;
  flex-grow: 1;
`;

export const UptimeSpan = styled.span`
  font-family: TT Interfaces;
  font-size: 14px;
  font-weight: 600;
  line-height: 21px;
  text-align: left;
  text-decoration: underline;
  text-decoration-color: white;
`;

export const FeatureSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin-top: 31px;
`;
export const FeatureItem = styled.span`
  font-family: TT Interfaces;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  display: flex;
  align-items: center;
`;
export const ChartSection = styled.div`
  margin-top: 31px;
  background: #1f1f1f;
  height: auto;
  padding: 16px 24px 16px 24px;
  border-radius: 8px;
`;
export const ChartHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const SandBoxWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const ChartTitle = styled.span`
  font-family: TT Interfaces;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
  margin-left: 16px;
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
  align-items: center;
`;
export const LineSpan = styled.hr`
  flex-grow: 1;
  background-color: #9b9b9b;
  border: none;
  height: 2px;
`;
export const ChartColorSpan = styled.span`
  padding: 0px 10px 0px 10px;
  color: #9b9b9b;
  font-family: TT Interfaces;
  font-size: 14px;
  font-weight: 600;
  line-height: 21px;
  text-align: left;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0px;
`;
export const Button = styled.div`
  display: flex;
  gap: 10px;
  background-color: #1f1f1f;
  align-items: center;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
`;
export const TabsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 65px;
`;
export const TabContent = styled.div`
  display: flex;
  background-color: #1f1f1f;
  width: 298px;
  height: 45px;
  border: 1px solid #383838;
  padding: 4px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
`;
export const TabItem = styled.div`
  background-color: #e5edff;
  padding: 8px 12px;
  color: #0046ff;
  border-radius: 6px;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const TabItem1 = styled.div`
  background-color: #1f1f1f;
  color: #9b9b9b;
  padding: 8px 12px;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const DatePickerWrapper = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  width: 244px;
  background-color: #1f1f1f;
  border: 1px solid #383838;
  height: 44px;
`;
export const IncidentsWrapper = styled.div`
  margin-top: 44px;
`;
export const IncidentSpan = styled.p`
  //styleName: Text Style/Normal Typography/Labels/Small (14\1.5);
  color: #e6e6e6;
  font-family: TT Interfaces;
  font-size: 8px;
  font-weight: 400;
  line-height: 18px;
  text-align: left;
`;

export const MainHeading = styled.span`
  font-family: TT Interfaces;
  font-size: 32px;
  font-weight: bold;
  letter-spacing: -1px;
  text-align: left;
`;
