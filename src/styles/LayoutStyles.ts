// styles/LayoutStyles.ts
import styled from "styled-components";

export const MainWrapper = styled.div`
  // display: flex;
  // flex-direction:column;
  max-width: 100%;
  min-height: 100vh;
  background-color: #060606;
`;

export const Header = styled.header`
  max-width: 1440px;
  height: 74px;
  padding: 16px 40px 16px 40px;
  gap: 0px;
  border: 0px 0px 1px 0px;
  justify: space-between;
  opacity: 0px;
  color: white;
  background: #111111;
`;

export const Sidebar = styled.aside`
  background: #f4f4f4;
  width: 250px;
  padding: 20px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const ContentWrapper = styled.div``;

export const Content = styled.main`
  max-width: 870px;
  margin: auto;
  padding: 20px;
  color: #fff;
`;

export const FooterWrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  margin: 111px 50px 0 50px;
  color: #C6C6C6;
`;
export const FooterSpan1 = styled.span`
  font-family: TT Interfaces;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  text-align: left;
  margin-right:100px;
`;
export const FooterSpan2 = styled.span`
  font-family: TT Interfaces;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  text-align: left;
  margin-right:53px;
`;

export const HeaderWrapper = styled.header`
  background-color: #212121;
  color: #fff;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 10px 20px;
`;

export const LeftWrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  //   border:1px solid red;
  img {
    margin-right: 10px;
  }

  span {
    font-weight: bold;
    font-size: 20px;
  }
`;
export const RightWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  //   border:1px solid red;
  //   justify-content: space-between;
`;

interface ColorSpanProps {
  fontSize?: string;
}

export const ColorSpan = styled.span<ColorSpanProps>`
  color: #a9a9a9;
  font-family: TT Interfaces;
  font-size: ${(props) => props.fontSize || "10px"};
  font-weight: 500;
  line-height: 18px;
  text-align: left;
`;
export const IncidentDetails = styled.div`
  margin-top: 20px;
`;
export const Line = styled.hr`
  border: none;
  height: 1px;
  background-color: darkgrey;
  width: 100%;
  opacity: 0.5;
`;
export const DateSpan = styled.span`
  margin: 7px;
  font-family: TT Interfaces;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  text-align: center;
`;

export const StatusInfo = styled.div`
  font-size: 14px;
`;

export const ActionsSection = styled.div`
  button {
    background-color: #0056b3;
    color: white;
    border: none;
    padding: 8px 16px;
    margin-left: 10px;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #004494;
    }
  }
`;
export const Title = styled.span`
  width: 74px;
  font-family: Harvest Bailey;
  font-size: 32px;
  font-weight: 400;
  line-height: 32px;
  text-align: left;
`;
export const LogoText = styled.span`
  width: 121.12px;
`;

interface DropDownWrapperProps {
  showDot?: boolean;
  bgColor?: string;
  margin?: string;
}
export const DropDownWrapper = styled.select<DropDownWrapperProps>`
  background-color: ${(props) => props.bgColor || "#0046ff"};
  width: 178px;
  height: 34px;
  color: white;
  margin-left: ${(props) => props.margin || "20px"};
  font-weight: bold;
  border: 1px solid ${(props) => props.bgColor || "#0046ff"};
  border-radius: 5px;
  padding-left: 10px;
  cursor: pointer;
  position: relative;

  &:after {
    padding-right: 20px;
  }

  &:before {
    content: ${(props) => (props.showDot ? "''" : "none")};
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    width: 10px;
    height: 10px;
    background-color: red;
    border-radius: 50%;
  }
`;
export const ReportButton = styled.button`
  background-color: #212121;
  color: white;
  margin: 0px 10px;
  padding: 10px 15px;
  border: 1px solid #615757;
  border-radius: 10px;
  margin-left: 20px;
  cursor: pointer;
`;
