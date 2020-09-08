import React from 'react';
import {
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@material-ui/core';

const Projects = ({ projects }) => {
  return (
    <>
      <Typography variant="h4" align="center" style={{ margin: "5rem auto 2rem auto", color: "rgb(0,0,75)", cursor: "default" }}>Some examples of my work</Typography>
      <Grid container justify="center" >
        {
          projects.map((project, index) =>
            <Grid item xs={12} md={6} sm={8} key={index} style={{display: "flex"}}>
              <Card style={{ maxWidth: "350px", margin: "2rem auto", display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image={project.image}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">{project.title}</Typography>
                    <Typography variant="body2" color="textSecondary" component="p">{project.description}</Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <a href={project.link} target="blank" style={{ textDecoration: "none", color: "inherit" }}>
                    <Button variant="contained" size="small">Live Demo</Button>
                  </a>
                </CardActions>
              </Card>
            </Grid>
          )
        }
      </Grid>
    </>
  )
}

export default React.memo(Projects);