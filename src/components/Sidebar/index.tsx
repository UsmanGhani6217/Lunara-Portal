// components/Sidebar.tsx
import styled from 'styled-components';
import Link from 'next/link';
import { Layout, Menu } from 'antd';

const { Sider } = Layout;

const StyledSider = styled(Sider)`
  .ant-layout-sider-children {
    display: flex;
    flex-direction: column;
  }
`;

const Sidebar = () => (
  <StyledSider width={200} className="site-layout-background">
    <Menu mode="inline" defaultSelectedKeys={['1']} style={{ height: '100%', borderRight: 0 }}>
      <Menu.Item key="1">
        <Link href="/overview">Runway Overview</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link href="/financial-health">Financial Health</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link href="/data-sources">Data Sources</Link>
      </Menu.Item>
      <Menu.Item key="4">
        <Link href="/scenarios">Linked Scenarios</Link>
      </Menu.Item>
    </Menu>
  </StyledSider>
);

export default Sidebar;
