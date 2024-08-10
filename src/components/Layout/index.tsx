import type { NextPage } from 'next';
import {Header} from '../Header/index';
import {Footer} from '../Footer/index';

import { MainWrapper, Content, FooterSpan} from '../../styles/LayoutStyles';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: NextPage<LayoutProps> = ({ children }) => {
    return (
        <MainWrapper>
          <Header />
                <Content>
                    {children}
                </Content>
           <Footer />
        </MainWrapper>
    )
};

export default Layout;