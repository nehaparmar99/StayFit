import React from "react";
import { Link } from 'react-router-dom'

function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg " color-on-scroll="500">
        <div className="container-fluid">
          <a className="navbar-brand" href="/" >StayFit</a>
          <div className="collapse navbar-collapse justify-content-end" id="navigation">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to='/'>
                  <span className="no-icon">Log out</span>
                </Link>
                
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Navbar

// import React, { Component } from "react";
// import "antd/dist/antd.css";
// import { Layout, Menu, Breadcrumb, Carousel } from "antd";
// import "./navbar.css"
// import {
//   AppstoreOutlined,
//   BarChartOutlined,
//   CloudOutlined,
//   ShopOutlined,
//   TeamOutlined,
//   UserOutlined,
//   UploadOutlined,
//   VideoCameraOutlined,
// } from "@ant-design/icons";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// import Calories from "./Calories";
// import Dashboard from "./Dashboard";
// import Profile from "./Profile";
// import Opening from "./Opening";

// const { Header, Content, Footer, Sider } = Layout;

// class NavBar extends Component {
//   state = {
//     isLoggedIn: false,
//   };
//   // toggle = () => {
//   //   this.setState({
//   //     isOpen: !this.state.isOpen,
//   //   });
//   // };
//   render() {
//     //render our navbar
//     return (
//       <Layout>
//           <Sider
//             style={{
//               overflow: "auto",
//               height: "100vh",
//               position: "fixed",
//               left: 0,
//             }}
//           >
//             <div className="logo" />
//             <Menu theme="dark" mode="vertical" defaultSelectedKeys={["1"]}>
//               <Menu.Item key="1" icon={<UserOutlined />}>
//                 <Link to="/dashboard">DASHBOARD</Link>
//               </Menu.Item>
//               <Menu.Item key="2" icon={<UserOutlined />}>
//                 <Link className="link" to="/profile">
//                   PROFILE
//                 </Link>
//               </Menu.Item>
//               <Menu.Item key="3" icon={<VideoCameraOutlined />}>
//                 <Link className="link" to="/calories">
//                   CALORIES
//                 </Link>
//               </Menu.Item>
//             </Menu>
//           </Sider>
//           <Layout className="site-layout" style={{ marginLeft: 200 }}>
//             <Header className="site-layout-background" style={{ padding: 0 }} />
//              <Content style={{ margin: "24px 16px 0", overflow: "initial" }}> 
//               {/* {this.state === true && (
//                 <Route path="/opening" component={Opening} />
//               )}
//               <Route path="/calories" component={Calories} />
//               <Route path="/profile" component={Profile} />
//               <Route path="/Dashboard" component={Dashboard} /> */}
//             </Content> 
//             <Footer style={{ textAlign: "center" }}>StayFit TM</Footer>
//           </Layout>
//       </Layout>
//     );
//   }
// }

// // const contentStyle = {
// //   height: "160px",
// //   color: "#fff",
// //   lineHeight: "160px",
// //   textAlign: "center",
// //   background: "#364d79",
// // };

// export default NavBar;