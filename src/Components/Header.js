import { Grid, IconButton } from "@mui/material";
import React from "react";
import MarkunreadRoundedIcon from "@mui/icons-material/MarkunreadRounded";
import "./Header.css";
import USAFLAG from "../assets/USAFLAG.png";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Header = () => {
  return (
    <>
      <div className="check">
        <Grid container xs={12}>
          <Grid item xs={6} style={{ backgroundColor: "whitesmoke" }}>
            <div className="name" style={{ paddingLeft: "70px" }}>
              <span>
              <IconButton>
                <MarkunreadRoundedIcon /> <h3>Blockport</h3>
              </IconButton>
              </span>
            </div>
          </Grid>
          <Grid item xs={6} style={{ backgroundColor: "whitesmoke" }}>
            <div className="header">
              <nav>
                <ul>
                  <li> <a href="#jobs">Jobs</a> </li>
                  <li> <a href="#swap">Swap</a> </li>
                  <li> <a href="#reviews">Reviews</a> </li>
                  <li> <a href="#employer">Employer</a> </li>
                  <li className="headerUSAFlag"> 
                  <img style={{ paddingTop: "6px 0 -6px 0" }} src={USAFLAG} alt="US Flag" width="40px" heigth="10px" />
                    <span style={{ padding: "6px" }}>EN</span>
                    <IconButton>
                      <ArrowDropDownIcon />
                    </IconButton>
                  </li>
                  <li className="nav-buttons">
                    <button className="login-btn">Login/Sign up</button>
                  </li>
                </ul>
              </nav>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Header;
