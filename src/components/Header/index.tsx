import type { NextPage } from "next";
import Image from "next/image";
import LogoImage from "../../assets/images/Emblem.png";
import LuranaImage from "../../assets/images/Lunara.png";
import RadioImage from "../../assets/images/Ellipse 2.png";

import {
  HeaderWrapper,
  LeftWrapper,
  RightWrapper,
  Title,
  DateSpan,
  ColorSpan,
  DropDownWrapper,
  ReportButton
} from "../../styles/LayoutStyles";
export const Header :NextPage = () => {
  return (
    <HeaderWrapper>
      <LeftWrapper>
        <Image src={LogoImage} width={32.64} height={32.64} alt="Lunara Logo" />
        <Image src={LuranaImage} width={121.12} height={18.13} alt="Lunara text" /> 
        <span>
        | <Title> Status </Title>
        </span>
      </LeftWrapper>
      <RightWrapper>
        <DateSpan>28th April, 2024</DateSpan>
        <Image src={RadioImage} width={8} height={8} alt="Radio icon" />
        <DateSpan> <ColorSpan>Last update </ColorSpan>11:12:24</DateSpan>
        <DateSpan> <Image src={RadioImage} width={8} height={8} alt="Radio icon" /> </DateSpan>
        <ColorSpan>Next update, 24 second later</ColorSpan>
        <DropDownWrapper name="cars" id="cars">
              <optgroup label="Swedish Cars">
                <option value="volvo">Subscribe to Update</option>
                <option value="saab">Saab</option>
              </optgroup>
              </DropDownWrapper>
  <ReportButton>
    Report
  </ReportButton>
        
      </RightWrapper>
    </HeaderWrapper>
  );
};
