import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './Pages/Home';
import Resume from './Pages/Resume';
import Projects from './Pages/Projects';
import Contacts from './Pages/Contacts';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import ScrollToTop from './Components/ScrollToTop';
import Sidebar from './Components/Sidebar';
import HomeIcon from '@material-ui/icons/Home';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import AppsIcon from '@material-ui/icons/Apps';
import ContactsIcon from '@material-ui/icons/Contacts';
import db from './Firebase';

const App = () => {

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [resumeContent, setResumeContent] = useState([]);
  const [projectContent, setProjectContent] = useState([]);
  const [homeContent, setHomeContent] = useState({ profilePicture: "", title: [] });

  const pages = [
    {
      title: 'Home',
      icon: <HomeIcon />,
      link: '/',
      render: <Home profilePicture={homeContent.profilePicture} title={homeContent.title} />
    },
    {
      title: 'Resume',
      icon: <AssignmentIndIcon />,
      link: '/resume',
      render: <Resume workExpriences={resumeContent} />
    },
    {
      title: 'Projects',
      icon: <AppsIcon />,
      link: '/projects',
      render: <Projects projects={projectContent} />
    },
    {
      title: 'Contacts',
      icon: <ContactsIcon />,
      link: '/contacts',
      render: <Contacts />
    }
  ]

  useEffect(() => {
    db.collection('projects').orderBy('id', 'desc').onSnapshot(snapshot => setProjectContent(snapshot.docs.map(doc => (doc.data()))));
    db.collection('workExperiences').orderBy('startyear', 'desc').onSnapshot(snapshot => setResumeContent(snapshot.docs.map(doc => doc.data())));
    db.collection('profile').onSnapshot(snapshot => (snapshot.docs.map(doc => setHomeContent(doc.data()))));
  }, []);

  return (
    <BrowserRouter>
      <Navbar open={drawerOpen} setOpen={setDrawerOpen} />
      <Sidebar open={drawerOpen} setOpen={setDrawerOpen} pages={pages} />
      <div className="App" onClick={() => setDrawerOpen(false)}>
        <Switch>
          {
            pages.map((page, index) =>
              <Route key={index} path={page.link} exact>
                {page.render}
              </Route>
            )
          }
        </Switch>
      </div>
      <ScrollToTop window={window} />
    </BrowserRouter>
  );
}

export default App;