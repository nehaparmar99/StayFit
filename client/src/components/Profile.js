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
