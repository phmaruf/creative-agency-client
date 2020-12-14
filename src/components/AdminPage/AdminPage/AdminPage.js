import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import AddIcon from '@material-ui/icons/Add';
import PersonAddIcon from '@material-ui/icons/PersonAdd';


import {
  BrowserRouter as Router,
  Switch, Route, Link
} from "react-router-dom";

import {
  Drawer, List, ListItem,
  ListItemIcon, ListItemText,
  Container, Typography,
} from "@material-ui/core";
import logo from '../../../images/logos/logo.png';
import AddService from '../AddService/AddService';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AdminPageServiceList from '../AdminPageServiceList/AdminPageServiceList';


const useStyles = makeStyles((theme) => ({
  drawerPaper: { width: 'inherit' },
  link: {
    textDecoration: 'none',
    color: theme.palette.text.primary
  }
}))

function AdminPage() {
  const classes = useStyles();
  return (
    
    <div style={{height: '650px'}}>
    
    <Router>
      <div style={{ display: 'flex' }}>
        <Drawer
          style={{ width: '220px' }}
          variant="persistent"
          anchor="left"
          open={true}
          classes={{ paper: classes.drawerPaper }}
        >
          <List>
            
            <a href="/"><img style={{height: '50px', marginBottom: '50px'}} src={logo} alt=""/></a>
           
            <Link to="/adminPage" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <LocalMallOutlinedIcon/>
                </ListItemIcon>
                <ListItemText primary={"Service List"} />
              </ListItem>
            </Link>
            
            <Link to="/adminPage/addService" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                    <AddIcon/>  
                </ListItemIcon>
                <ListItemText primary={"Add Service"} />
              </ListItem>
            </Link>
            
            <Link to="/adminPage/makeAdmin" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <PersonAddIcon/> 
                </ListItemIcon>
                <ListItemText primary={"Make Admin"} />
              </ListItem>
            </Link>
          </List>
        </Drawer>
        <Switch >
          <Route  exact path="/adminPage">
            <Container >
              <AdminPageServiceList></AdminPageServiceList>    
            </Container>
          </Route>
          <Route exact path="/adminPage/addService">
            <Container >
                <AddService></AddService>
            </Container>
          </Route>
          <Route exact path="/adminPage/makeAdmin">
            <Container >
                <MakeAdmin></MakeAdmin>
              </Container>
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default AdminPage;