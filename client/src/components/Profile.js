// import React, { Component } from 'react'
// import jwt_decode from 'jwt-decode'

// class Profile extends Component {
//     constructor() {
//         super()
//         this.state = {
//             first_name: '',
//             last_name: '',
//             email: ''
//         }
//     }

//     componentDidMount () {
//         const token = localStorage.usertoken
//         const decoded = jwt_decode(token)
//         this.setState({
//             first_name: decoded.identity.first_name,
//             last_name: decoded.identity.last_name,
//             email: decoded.identity.email
//         })
//     }

//     render () {
//         return (
//             <div className="container">
//                 <div className="jumbotron mt-5">
//                     <div className="col-sm-8 mx-auto">
//                         <h1 className="text-center">PROFILE</h1>
//                     </div>
//                     <table className="table col-md-6 mx-auto">
//                         <tbody>
//                             <tr>
//                                 <td>First Name</td>
//                                 <td>{this.state.first_name}</td>
//                             </tr>
//                             <tr>
//                                 <td>Last Name</td>
//                                 <td>{this.state.last_name}</td>
//                             </tr>
//                             <tr>
//                                 <td>Email</td>
//                                 <td>{this.state.email}</td>
//                             </tr>
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         )
//     }
// }

// export default Profile

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./profile.css";
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';


const Pricing = () => {
  const [profileName, setProfileName] = useState("");
  const [profileCell, setProfileCell] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [profileEmail, setProfileEmail] = useState("");

  const profileData = async () => {
    try {
      const res = await axios.get("https://randomuser.me/api/");
      setProfileCell(res.data.results[0].cell);
      setProfileEmail(res.data.results[0].email);
      setProfileImage(res.data.results[0].picture.large);
      setProfileName(
        `${res.data.results[0].name.first} ${res.data.results[0].name.last}`
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    profileData();
  }, []);

  return (
    
    <div>
      <Row>
        <Col><div id="updiv">
      <img id="i" src={profileImage} style={{ width: "30vh" }} />
      </div></Col>
         
      </Row>
      <Row>
         <div id="prof">
        
        <h1>{profileName}</h1>
        <p className="title">{profileEmail}</p>
        <h5>Age : 20</h5>
        <h5>Weight : 40 kg</h5>
        <h5>Height : 170 cm</h5>
        <p>{profileCell}</p>
        <p>
          <button id="btbt" >Contact</button>
        </p>
      </div>
      </Row>
     
      
      {/* <button onClick={() => profileData()}>New Person</button> */}
      {/* <div id="prof"> */}
        
        {/* <h1>{profileName}</h1> */}
        {/* <p className="title">{profileEmail}</p> */}
        {/* <h5>Age : 20</h5> */}
        {/* <h5>Weight : 40 kg</h5> */}
        {/* <h5>Height : 170 cm</h5> */}
        {/* <p>{profileCell}</p> */}
        {/* <p> */}
          {/* <button id="btbt" >Contact</button> */}
        {/* </p> */}
      {/* </div> */}
    </div>
  );
};

export default Pricing;
