import type { NextPage } from 'next';
import { FooterWrapper, FooterSpan} from '../../styles/LayoutStyles';
import { FooterData } from '../../../utils/constant';

export const Footer: NextPage = () => {
    return (
            <FooterWrapper>
                {
                    FooterData.map(val =>{
                        return <FooterSpan key={val}>{val}</FooterSpan>
                    })
                }
            </FooterWrapper>
    )
};