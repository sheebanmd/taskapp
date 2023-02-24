import { Grid } from "@mui/material";
import React from "react";
import PofileImg1 from "../assets/PofileImg1.jpg";
import PofileImg2 from "../assets/PofileImg2.jpg";
import PofileImg3 from "../assets/PofileImg3.jpg";
import Google from "../assets/Google.png";
import Netflix from "../assets/Netflix.png"
import "./MainComponent.css";

const MainComponent = () => {

  // const theme = createTheme({
  //   breakpoints: {
  //     values: {
  //       xs: 0,
  //       sm: 600,
  //       md: 900,
  //       lg: 1200,
  //       xl: 1536,
  //     },
  //   },
  // });

  return (
    <>
      <Grid container lg={12}>
        <Grid container md={3} sx={{ height: "500px" }}>
          <div className="container1">
              <div className="round-image-container">
                <img className="round-image" src={PofileImg2} alt="profile" />
              </div>
              <div className="info-container">
                <h2 className="name">Vue JS, Html</h2>
                <h5 className="age">Mike Johnson</h5>
              </div>
          </div>
          <div className="container2">
            <div className="round-image-container">
              <img className="round-image" src={PofileImg3} alt="profile" />
            </div>
            <div className="info-container">
              <h2 className="name">Graphic Designer</h2>
              <h5 className="age">Jane Doe</h5>
            </div>
          </div>
          <div className="container3">
            <div className="round-image-container">
              <img className="round-image" src={PofileImg1} alt="profile" />
            </div>
            <div className="info-container">
              <h2 className="name">Data Analyst Doe</h2>
              <h5 className="age">Tyson Jo</h5>
            </div>
          </div>
        </Grid>

        <Grid container xs={7}>
          <div className="name-container">
            <h1>
              Create Your <br />
              Own <span>Opportuniy</span>
            </h1>
            <h4>
              Complete Your Proile, apply for jobs-Get rewards in{" "}
              <span>DRP</span>
            </h4>
            <div className="dropdown">
            <select>
              <option value="">Frontend Designer</option>
            </select>
            <select>
              <option value="">Bangalore, India</option>
            </select>
            <button type="submit">Find Jobs For Me</button>
            </div>
          </div>          
        </Grid>

        <Grid container xs={2}>
          <div className="card">
        <div className="card1">
          <img src={Google} alt="Google Logo" width="20px" heigth="20px" />
          <h4>Front End Developer</h4>
          <p>Lorem ipsum dolor sit amet,</p>
        </div>
        <div className="card2">
          <img src={Netflix} alt="Google Logo" width="30px" heigth="20px" />
          <h4>Front End Developer</h4>
          <p>Lorem ipsum dolor sit amet,</p>
        </div>
        </div>
        </Grid>
      </Grid>
    </>
  );
};

export default MainComponent;
