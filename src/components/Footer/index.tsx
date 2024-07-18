import type { NextPage } from "next";
import {
  FooterWrapper,
  FooterSpan1,
  FooterSpan2,
} from "../../styles/LayoutStyles";

export const Footer: NextPage = () => {
  return (
    <FooterWrapper>
      <div>
        <FooterSpan1>
          © 2023 Nod Financials, Inc. All rights reserved.
        </FooterSpan1>
        <FooterSpan2>Terms of Service</FooterSpan2>
        <FooterSpan2>Privacy Policy</FooterSpan2>
      </div>
      <div>
        <FooterSpan2>Twitter</FooterSpan2>
        <FooterSpan2>LinkedIn</FooterSpan2>
      </div>
    </FooterWrapper>
  );
};
