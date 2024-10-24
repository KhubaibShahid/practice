import React, { useState } from 'react';
import {
  HomeOutlined,
  LayoutOutlined,
  InfoCircleOutlined,
  QuestionCircleOutlined,
  LoginOutlined,
  LogoutOutlined,
  MenuOutlined,
  CloseOutlined
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';

const { Header, Sider, Content } = Layout;

const SiderNav: React.FC = () => {
  const [collapsed, setCollapsed] = useState(true);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ height : "100svh", position : "fixed", right: 0, top: 0}}>
      <Sider style={{backgroundColor: "white"}} trigger={null} collapsible collapsed={collapsed}>
        <div className={`demo-logo-vertical ${collapsed ? `flex justify-center` : ``}`} >
        <Button
            type="text"
            icon={collapsed ? <MenuOutlined /> : < CloseOutlined/>}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </div>
        <Menu
        style={{display : "flex", flexDirection : "column", gap: "10px"}}
          theme="light"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <HomeOutlined style={{}} />,
              label: 'Home',
              className : "menu"
            },
            {
              key: '2',
              icon: <LayoutOutlined/>,
              label: 'Resume Templates',
              className : "menu"
            },
            {
              key: '3',
              icon: <InfoCircleOutlined/>,
              label: 'About Us',
              className : "menu"
            },
            {
              key: '4',
              icon: <QuestionCircleOutlined />,
              label: 'Feedback',
              className : "menu"
            },
            {
              key: '5',
              icon: <LoginOutlined />,
              label: 'Log In',
              className : "menu"
            }
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>

        </Header>
        {/* <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          Content
        </Content> */}
      </Layout>
    </Layout>
  );
};

export default SiderNav;