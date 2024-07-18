import { NextPage } from "next";
import { ColorSpan, DropDownWrapper } from "@/styles/LayoutStyles";

import {
  OperationalSection,
  ProductSection,
  UptimeSpan,
} from "@/styles/CommonStyles";
const OperationalProduct: NextPage = () => {
  return (
    <>
    <OperationalSection>
        <div
          style={{
            width: "40px",
            height: "40px",
            backgroundColor: "#61D47A",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "10%",
            alignSelf: "center",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            width="30"
            height="30"
            strokeWidth="1.5"
            stroke="black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15L15 9.75M21 12A9 9 0 1 1 3 12A9 9 0 0 1 21 12Z"
            />
          </svg>
        </div>

        <h2 style={{ fontWeight: "400" }}> All Systems Operational</h2>
      </OperationalSection>
      <ProductSection>
        <div>
          <DropDownWrapper name="cars" id="cars" showDot bgColor="#212121" margin="10px">
            <option value="volvo">All Products</option>
          </DropDownWrapper>
        </div>
        <div>
          <ColorSpan>Update over the past 90 days</ColorSpan> <UptimeSpan>View historical uptime</UptimeSpan>
        </div>
      </ProductSection>
    </>
  );
};

export default OperationalProduct;
