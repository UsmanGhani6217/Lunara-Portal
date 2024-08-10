// styles/LayoutStyles.ts
import styled from 'styled-components';

export const OperationalSection = styled.div`
display: inline-flex;
  flex-wrap: wrap;
  gap: 12px;
    margin-top:108px;
    
`;

export const ProductSection = styled.div`
display: flex;
justify-content:space-between; 
margin-top:92px;   
`;
export const UptimeSpan = styled.span`
font-family: TT Interfaces;
font-size: 14px;
font-weight: 600;
line-height: 21px;
text-align: left;
   
`;

export const FeatureSection = styled.div`
display:flex;
flex-wrap:wrap;
margin-top:31px;
   
`;
export const FeatureItem = styled.span`
margin-right:20px;
font-family: TT Interfaces;
font-size: 12px;
font-weight: 400;
line-height: 18px;
text-align: center;
   
`;
export const ChartSection = styled.div`
margin-top:31px;
background: #1F1F1F;
height:auto;
`;
export const ChartHeader = styled.div`
display:flex;
justify-content:space-between;
`;
export const ChartTitle = styled.span`
font-family: TT Interfaces;
font-size: 16px;
font-weight: 500;
line-height: 24px;
text-align: left;
margin-left:16px;
`;
export const ChartSubTitle = styled.span`
font-family: TT Interfaces;
font-size: 14px;
font-weight: 500;
line-height: 21px;
text-align: left;
color:#61D47A;
margin-right:16px;

`;
export const ChartFooter = styled.div`
display:flex;
justify-content:space-between;
// margin: 24px 0px;
// border:1px solid red;

`;

export const ButtonWrapper = styled.div`
display:flex;
justify-content:center;
margin: 20px 0px;
`;
export const Button = styled.div`
background-color:#1F1F1F;
color:white;
padding: 10px 20px;
border: none;
    border-radius: 5px;

`;
export const TabsWrapper = styled.div`
display:flex;
justify-content:space-between;
margin-top:65px;

`;
export const IncidentsWrapper = styled.div`
margin-top:44px;

`;
export const IncidentSpan = styled.p`//styleName: Text Style/Normal Typography/Labels/Small (14\1.5);
color:#E6E6E6;
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
`