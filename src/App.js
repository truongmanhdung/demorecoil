import './App.css';
import {atom, selector, useRecoilCallback, useRecoilState, useRecoilValue} from "recoil";
import Worklist from "./components/worklist";
import React, {useEffect} from "react";
import userApi from "./apis/user";
import routes from "./router";
import {Link, Route, Switch} from "react-router-dom";
import {Breadcrumb, Layout, Menu} from "antd";
import { MailOutlined, AppstoreOutlined, SettingOutlined,LoginOutlined ,PoweroffOutlined} from '@ant-design/icons';
import {Content, Footer, Header} from "antd/es/layout/layout";
import {userState} from "./components/layouts/login"
const currentState = atom({
    key: "currentState",
    default: "mail"
})
const currentEmail = atom({
    key: "Email",
    default : localStorage.getItem("email")
})

function App() {
    const [current, setCurrent] = useRecoilState(currentState)
    const email = useRecoilValue(userState)
    console.log(userState)
    console.log(email)
    // const loadEmail = useRecoilCallback(({snapshot})=> async () =>{
    //     const setEmailnew = await snapshot.getPromise(currentEmail);
    //     return setEmailnew;
    // })
    // const a = loadEmail().then(function (result){
    //     return result
    // })
    // console.log(a)
    const showContent = (routes) => {
        let result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.component}
                    />
                );
            });
        }
        return <Switch>{result}</Switch>;
    };

  return (
      <div>
          <Layout className="layout">
              <Header>
                  <div className="logo" />
                  <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                      {/*<Menu.Item key={8} onClick={loadEmail}>*/}
                      {/*    test*/}
                      {/*</Menu.Item>*/}
                      <Menu.Item key={1}>
                          <Link to="/">Home</Link>
                      </Menu.Item>

                      {email?(<><Menu.Item key={2} disabled>
                          {email}
                            </Menu.Item>
                          <Menu.Item key={3}>
                          logout
                          <PoweroffOutlined />
                      </Menu.Item></>):(<>
                          <Menu.Item key={2} >
                              <Link to="/login">Login</Link>
                              <LoginOutlined />
                          </Menu.Item>
                          <Menu.Item key={3}>
                              <Link to="/sigup">Sigup</Link>
                          </Menu.Item>
                      </>)}
                  </Menu>
              </Header>
              <Content style={{ padding: '0 50px' }}>
                  <Breadcrumb style={{ margin: '16px 0' }}>

                  </Breadcrumb>
                  <div className="site-layout-content">
                      {showContent(routes)}
                  </div>
              </Content>
              <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
          </Layout>,
      </div>
  );
}

export default App;
