import React from "react";
import { TiDeviceLaptop } from "react-icons/ti";
import "./SkillsComponent.css";
import {  Box, Card, CardContent, CardActions, Typography, Button, CardMedia, Icon } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const SkillsComponent = () => {
  return (
    <>
      <div>
        <div className="job">
          <h1>
            Find Your <span style={{ color: "darkblue" }}>Dream.</span>
          </h1>
        </div>
        <div className="check">
          <br />
          <p>
            Explore all the trendy <br />
            <span>career buttons</span>
          </p>
        </div>
        <div className="skillsbutton">
          <div className="skillsbutton1">
            <button>UI/UX Designer</button>
            <button>Frontend Developer</button>
            <button>Fullstack Developer</button>
          </div>
          <div className="skillsbutton2">
            <button>Sales Marketing</button>
            <button>Motion Graphics</button>
            <button>UFX Artist</button>
            <button>Data Analyst</button>
            <button>HR</button>
            <button>Web Developer</button>
          </div>
          <div className="skillsbutton3">
            <button>IT Support</button>
            <button>WhiteHat Hacker</button>
            <button>Game Designer</button>
            <button>Esports Player</button>
            <button>Digital Marketing</button>
          </div>
            <div className="alljobs">
                <h1 style={{ color : "darkblue", cursor: "pointer" }}>
                  View All Jobs <Icon> <ArrowForwardIcon /> </Icon> 
                  </h1>
            </div>
        </div>
        <hr style={{ height : "5px", backgroundColor : "darkblue"}} />
        <div className="job1">
          <h2>
            Not Just Your
            <br />
            Regular <span style={{ color: "darkblue" }}> Job Portal</span>
          </h2>
        </div>
        <div className="check1">
          <p>
            Build With Blockchain.
            <br />
            <span>Earn With DRP</span>
          </p>
        </div>
        <div className="laptop">
          <div className="Laptoplogo">
            <span>
            <TiDeviceLaptop size={50} />
            </span>
            <br />
            <h5>
              Login To Blockport
              <br />
              <span style={{ color: "darkblue" }}> Earn DRP</span>
            </h5>
          </div>
          <div>
          <br />
          <br />
            <h5>
              Complete Your Profile
              <br />
              <span style={{ color: "darkblue" }}> Earn DRP</span>
            </h5>
          </div>
          <div>
            <br />
            <br />
            <h5>
              Apply For Jobs
              <br />
              <span style={{ color: "darkblue" }}> Earn DRP</span>
            </h5>
          </div>
        </div>
        <div className="title">
          <h2>Keep In Touch</h2>
          <br />
        </div>
        <div className="subtitle">
          <h5>Learn why we do things</h5>
          <h5>and how we do it.</h5>
        </div>
        <div className="cardComponent">
        <Box width='260px'>
            <Card>
        <CardMedia
          component='img'
          height='140'
          image='https://source.unsplash.com/random'
          alt='unsplash image'
        />
        <CardContent>
          <Typography gutterBottom variant='h6' component='div'>
          Best Work For Home Jobs
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            React is a JavaScript library for building user interfaces. React
            can be used as a base in the development of single-page or mobile
            applications.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size='small'>Read More</Button>
        </CardActions>
      </Card>
    </Box>
    <Box width='260px'>
            <Card>
        <CardMedia
          component='img'
          height='140'
          image='https://source.unsplash.com/random'
          alt='unsplash image'
        />
        <CardContent>
          <Typography gutterBottom variant='h6' component='div'>
          Best Work For Home Jobs
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            React is a JavaScript library for building user interfaces. React
            can be used as a base in the development of single-page or mobile
            applications.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size='small'>Read More</Button>
        </CardActions>
      </Card>
    </Box>
    <Box width='260px'>
            <Card>
        <CardMedia
          component='img'
          height='140'
          image='https://source.unsplash.com/random'
          alt='unsplash image'
        />
        <CardContent>
          <Typography gutterBottom variant='h6' component='div'>
            Best Work For Home Jobs
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            React is a JavaScript library for building user interfaces. React
            can be used as a base in the development of single-page or mobile
            applications.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size='small'>Read More</Button>
        </CardActions>
      </Card>
    </Box>
    <Box width='260px'>
            <Card>
        <CardMedia
          component='img'
          height='140'
          image='https://source.unsplash.com/random'
          alt='unsplash image'
        />
        <CardContent>
          <Typography gutterBottom variant='h6' component='div'>
          Best Work For Home Jobs
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            React is a JavaScript library for building user interfaces. React
            can be used as a base in the development of single-page or mobile
            applications.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size='small'>Read More</Button>
        </CardActions>
      </Card>
    </Box>
        </div>
      </div>
    </>
  );
};

export default SkillsComponent;
