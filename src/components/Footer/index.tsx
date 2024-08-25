import type { NextPage } from 'next';
import { FooterWrapper, FooterSpan} from '../../styles/LayoutStyles';
import { FooterData } from '../../../utils/constant';

export const Footer: NextPage = () => {
    return (
            <FooterWrapper>
                <div style={{display:"flex", gap:"70px"}}>
                <FooterSpan >© 2023 Nod Financials, Inc. All rights reserved.</FooterSpan> 
                <FooterSpan >Terms of Services</FooterSpan> 
                <FooterSpan >Privacy Policy</FooterSpan> 
                </div>
                <div style={{display:"flex", gap:"40px"}}>
                    <FooterSpan >Twitter</FooterSpan> 
                    <FooterSpan >LinkedIn</FooterSpan> 
                    </div>
            </FooterWrapper>
    )
};