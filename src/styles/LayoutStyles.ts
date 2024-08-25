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
  max-width: 60%;
  margin: auto;
  padding: 20px;
  color: #fff;
`;

export const FooterWrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  margin: 111px 50px 0 50px;
  color: white;
`;
export const FooterSpan = styled.span`
  //styleName: Typography/Text Small/Regular;
  font-family: TT Interfaces;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  text-align: left;
`;

export const HeaderWrapper = styled.header`
  box-sizing: border-box;
  background-color: #212121;
  color: #fff;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 10px 20px;
  height: 74px;
`;

export const LeftWrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  //   border:1px solid red;
  img {
    margin-right: 10px;
  }

  // span {
  //   font-weight: bold;
  //   font-size: 20px;
  // }
`;
export const RightWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  //   border:1px solid red;
  //   justify-content: space-between;
`;
export const ColorSpan = styled.span`
  color: #9b9b9b;
  font-family: TT Interfaces;
  font-size: 14px;
  font-weight: 600;
  line-height: 21px;
  text-align: left;
`;

export const DateSpan = styled.span`
  margin: 7px;
  font-family: TT Interfaces;
  font-size: 14px;
  font-weight: 600;
  line-height: 21px;
  text-align: left;

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
export const HeaderBorder = styled.span`
  width: 20px;
  display: flex;
  justify-content: center;
  background-color: red;
`;

export const Title = styled.span`
  font-family: "DM Serif Text", serif;
  font-size: 32px;
  font-weight: 400;
  line-height: 32px;
  text-align: left;
`;
export const BorderSpan = styled.span`
  border-left: solid 2px #383838;
  padding-left: 12px;
`;
export const LogoText = styled.span`
  width: 121.12px;
`;
export const DropDownWrapper = styled.button`
  background-color: #0046ff;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #0046ff;
  width: 178px;
  height: 34px;
  color: white;
  margin-left: 20px;
  font-weight: bold;
  border: 1px solid #0046ff;
  border-radius: 8px;
`;
export const DropDownText = styled.span`
  margin-right: 8px;
  font-family: TT Interfaces;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  text-align: left;
`;
export const ReportButton = styled.button`
  background-color: #383838;
  color: white;

  font-family: TT Interfaces;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  text-align: center;
  margin: 0px 10px;
  padding: 13px 20px;
  border: 1px solid #212121;
  border-radius: 8px;
`;
