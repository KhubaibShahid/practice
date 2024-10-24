"use client"
import React, { useEffect, useState, useRef } from 'react';
import { Breadcrumb, Layout, Menu, theme, Button } from 'antd';
import LOGO from "../assests/logo.svg"
import Image from 'next/image';
import "../globals.css"
import SiderNav from "./sider"
import useMediaQuery from '../hook/media';

const { Header, Content, Footer } = Layout;

const items = [
  {
    key: "1",
    label: 'Home',
    path: "/"
  },
  {
    key: "2",
    label: 'Resume templates',
    path: "/templates"
  },
  {
    key: "3",
    label: 'About us',
    path: "/about"
  },
  {
    key: "4",
    label: "Feedback",
    path: "feedback"
  }

]

const Nav: React.FC = () => {

  let media = useMediaQuery("(max-width : 858px)");

  const [mode, setMode] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  useEffect(() => {
    if (media) {
    setMode(true)
    } else {
    setMode(false)
    }
  }, [media])

  return (
    <Layout>
      <Header
        style={{
          backgroundColor: "white",
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: "space-around",
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"
        }}
      >
        <Image width={200} src={LOGO} alt='' />
        {mode ? <SiderNav></SiderNav> 
        :
        <div className='flex items-center'>
          <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            items={items}
            style={{ flex: 1, minWidth: 400 }}
          />
          <div style={{ display: "flex", gap: 10 }}>
            <Button onClick={() => { }} style={{ backgroundColor: "#8c52ff" }} type='primary'>Log in</Button>
            <Button style={{ backgroundColor: "#8c52ff" }} type='primary'>Sign up</Button>
          </div>
        </div>
}
      </Header>
      <Content style={{ padding: '0 48px' }}>
        <div
          style={{
            padding: 24,
            minHeight: 380,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          Content
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
      </Footer>
    </Layout>
  );
};

export default Nav;