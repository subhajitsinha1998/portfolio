import React from 'react';
import './Home.css';
import Typed from 'react-typed';
import { Avatar, Typography, Container } from '@material-ui/core';
import Particles from 'react-particles-js';

const Home = ({ profilePicture, title }) => {
  return (
    <>
      <Particles
        style={{ position: "absolute", opacity: 0.7 }}
        height="100%"
        width="100%"
        params={{
          particles: {
            number: {
              value: 100,
              density: {
                enable: true,
              }
            },
            shape: {
              type: "circle",
              stroke: {
                width: 1,
              }
            },
            size: {
              value: 3,
              random: {
                enable: true
              }
            },
            lineLinked: {
              distance: 200,
            },
            move: {
              random: true,
            }
          }
        }}
      />
      <Container className="textarea">
        <Avatar variant="rounded" className="avatar" src={profilePicture} alt="Avatar" />
        <Typography className="title" variant="h4">Subhajit Sinha</Typography>
        <br />
        <Typography className="subtitle" variant="h6">
          <Typed
            strings={window.innerWidth > window.innerHeight ? [title.join(' | ')] : [title.join("<br>")]}
            typeSpeed={40}
            backSpeed={50}
            loop />
        </Typography>
      </Container>
    </>
  )
}

export default React.memo(Home);