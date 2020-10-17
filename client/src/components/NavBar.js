import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

class Navbar extends Component {
    logOut (e) {
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push(`/`)
    }

    render () {
        const loginRegLink = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/login" className="nav-link">
                        Login
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/register" className="nav-link">
                        Register
                    </Link>
                </li>
            </ul>
        )

        const userLink = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/profile" className="nav-link">
                        User
                    </Link>
                </li>
                <li className="nav-item">
                    <a href="#" onClick={this.logOut.bind(this)} className="nav-link">
                        Logout
                    </a>
                </li>
            </ul>
        )

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
                <button className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbar1"
                    aria-controls="navbar1"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-md-center"
                    id="navbar1">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                Home
                            </Link>
                        </li>
                    </ul>
                    {localStorage.usertoken ? userLink : loginRegLink}
                </div>
            </nav>
        )
    }
}

export default withRouter(Navbar)
// import React, { Component } from "react";
// import "antd/dist/antd.css";
// import { Layout, Menu, Breadcrumb, Carousel } from "antd";
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

// import Login from "./Login";
// import Register from "./Register";
// import Calories from "./Calories";
// import Dashboard from "./Dashboard";
// import Profile from "./Profile";
// import Achievement from "./Achievement";

// const { Header, Content, Footer, Sider } = Layout;

// class AppNavbar extends Component {
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
//         <Router>
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
//                 <Link to="/Dashboard">DASHBOARD</Link>
//               </Menu.Item>
//               <Menu.Item key="2" icon={<UserOutlined />}>
//                 <Link className="link" to="/register">
//                   REGISTER
//                 </Link>
//               </Menu.Item>
//               <Menu.Item key="3" icon={<VideoCameraOutlined />}>
//                 <Link className="link" to="/login">
//                   LOGIN
//                 </Link>
//               </Menu.Item>
//               <Menu.Item key="4" icon={<BarChartOutlined />}>
//                 <Link className="link" to="/profile">
//                   PROFILE
//                 </Link>
//               </Menu.Item>
//                     </Menu>
//                      <Menu.Item key="5" icon={<UploadOutlined />}>
//                 <Link className="link" to="/achievement">
//                   ACHIEVEMENT
//                 </Link>
//                     </Menu.Item>
//                     <Menu.Item key="6" icon={<UploadOutlined />}>
//                 <Link className="link" to="/calories">
//                  CALORIES
//                 </Link>
//               </Menu.Item>
//           </Sider>
//           <Layout className="site-layout" style={{ marginLeft: 200 }}>
//             <Header className="site-layout-background" style={{ padding: 0 }} />
//             <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
//               {this.state === true && (
//                 <Route path="/dashboard" component={Dashboard} />
//                         )}
//               <Route path="/login" component={Login} />
//               <Route path="/register" component={Register} />
//                         <Route path="/profile" component={Profile} />
//                             <Route path="/achievement" component={Achievement} />
//                         <Route path="/calories" component={Calories} />
//             </Content>
//             <Footer style={{ textAlign: "center" }}>Stay Fit </Footer>
//           </Layout>
//         </Router>
//       </Layout>
//     );
//   }
// }

// const contentStyle = {
//   height: "160px",
//   color: "#fff",
//   lineHeight: "160px",
//   textAlign: "center",
//   background: "#364d79",
// };

// export default AppNavbar;