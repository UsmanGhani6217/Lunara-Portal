import React from 'react';
import type { NextPage } from "next";
import Layout from "../components/Layout/index";
import Feature from "@/components/UI/Feature";
import SystemStatus from "@/components/UI/SystemStatus";
import IncidentsHistory from "@/components/UI/IncidentsHistory";
import OperationalProduct from "@/components/UI/OperationalProduct";
import TabSection from "@/components/UI/TabSection";
import { ButtonWrapper, Button } from "../styles/CommonStyles";

const Home: NextPage = () => {
  return (
    <Layout pageTitle={"Status"}>
     <OperationalProduct/>
      <Feature/>
      <SystemStatus data = {["Sandbox", "Money movement card authorization", "Production", "Dashboard"]}/>
      <ButtonWrapper>
        <Button>
          {" "}
          View more <span className="downward-triangle">&#x25BC;</span>
        </Button>
      </ButtonWrapper>
      <TabSection/>
      <IncidentsHistory/>
    </Layout>
  );
};

export default Home;
