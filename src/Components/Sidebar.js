import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import {
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography
} from '@material-ui/core';
import a from './Logos/twitter.png';
import facebook from './Logos/facebook.png'
import linkedin from './Logos/linkedin.png'
import instagram from './Logos/instagram.png'

const Sidebar = ({ open, setOpen, pages }) => {
  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={open}
    >
      <Paper square className="sidebar">
        <List>
          {pages.map((page, index) => (
            <ListItem button key={index} component={Link} to={page.link} onClick={() => setOpen(false)}>
              <ListItemIcon>{page.icon}</ListItemIcon>
              <ListItemText primary={page.title} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <Typography variant="h5" align="center" style={{marginTop: "2rem", cursor: "default"}}>Social Accounts</Typography>
        <List style={{color: "black"}}>
            <ListItem component="a" href="https://www.facebook.com/its.me.subhajit.sinha/" target="blank" button onClick={() => setOpen(false)}>
              <ListItemIcon>{<img src={facebook} alt="facebook" />}</ListItemIcon>
              <ListItemText primary="Facebook" />
            </ListItem>
            <ListItem component="a" href="https://www.instagram.com/suvojitsinha/" target="blank" button onClick={() => setOpen(false)}>
              <ListItemIcon>{<img src={instagram} alt="instagram" />}</ListItemIcon>
              <ListItemText primary="Instagram" />
            </ListItem>
            <ListItem component="a" href="https://twitter.com/suvojit36125199" target="blank" button onClick={() => setOpen(false)}>
              <ListItemIcon>{<img src={a} alt="twitter" />}</ListItemIcon>
              <ListItemText primary="Twitter" />
            </ListItem>
            <ListItem component="a" href="https://www.linkedin.com/in/subhajitsinha97/" target="blank" button onClick={() => setOpen(false)}>
              <ListItemIcon>{<img src={linkedin} alt="linkedin" />}</ListItemIcon>
              <ListItemText primary="LinkedIn" />
            </ListItem>
        </List>
      </Paper>
    </Drawer>
  )
}

export default React.memo(Sidebar);