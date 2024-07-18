import type { NextPage } from "next";
import { Header } from "../Header/index";
import { Footer } from "../Footer/index";

import { MainWrapper, Content } from "../../styles/LayoutStyles";
import { ReactNode } from "react";

interface LayoutProps {
  pageTitle: String;
  children: ReactNode;
}

const Layout: NextPage<LayoutProps> = ({ pageTitle = "", children }) => {
  return (
    <MainWrapper>
      <Header pageTitle={pageTitle} />
      <Content>{children}</Content>
      <Footer />
    </MainWrapper>
  );
};

export default Layout;
