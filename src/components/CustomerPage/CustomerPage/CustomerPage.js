import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {ShoppingCart} from '@material-ui/icons';
import {SmsOutlined} from '@material-ui/icons';
import {LocalMallOutlined} from '@material-ui/icons';

import {
  BrowserRouter as Router,
  Switch, Route, Link
} from "react-router-dom";

import {
  Drawer, List, ListItem,
  ListItemIcon, ListItemText,
  Container, Typography,
} from "@material-ui/core";
import CustomerNavbar from './CustomerNavbar/CustomerNavbar';
import logo from '../../../images/logos/logo.png';
import { useContext } from 'react';
import { UserContext } from '../../../App';


const useStyles = makeStyles((theme) => ({
  drawerPaper: { width: 'inherit' },
  link: {
    textDecoration: 'none',
    color: theme.palette.text.primary
  }
}))

function CustomerPage() {
  const [loggedInUser, setLoggedInUser] =useContext(UserContext);
  const classes = useStyles();
  return (
    
    <div style={{background: '#ecf4fd', height: '650px'}}>
    <CustomerNavbar></CustomerNavbar>
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
           
            <Link to="/customerPage" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <ShoppingCart/> 
                </ListItemIcon>
                <ListItemText primary={"Order"} />
              </ListItem>
            </Link>
            <Link to="/customerPage/serviceList" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <LocalMallOutlined/>
                </ListItemIcon>
                <ListItemText primary={"Service List"} />
              </ListItem>
            </Link>
            <Link to="/customerPage/review" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <SmsOutlined/> 
                </ListItemIcon>
                <ListItemText primary={"Review"} />
              </ListItem>
            </Link>
          </List>
        </Drawer>
        <Switch >
          <Route  exact path="/customerPage">
            <Container >
                <div className="d-flex align-items-center mt-3 mb-3">
                  <h3 className="justify-content-start">Order</h3>
                  <h5 style={{marginLeft: '80%'}}>{loggedInUser.name}</h5>  
                </div>
                <div className="col-md-7">
                  <form>
                    <div class="form-group">
                      <input style={{height: '50px'}} type="email" class="form-control" id="exampleInputEmail1" placeholder="Your Email"/>
                    </div>
                    <div class="form-group">
                      <input style={{height: '50px'}} type="text" class="form-control" id="exampleInputEmail1" placeholder="Your Name/Company's Name"/>
                    </div>
                    <div class="form-group">
                      <input style={{height: '50px'}} type="text" class="form-control" id="exampleInputEmail1" placeholder="Course Name"/>
                    </div>
                    <div class="form-group">
                      <input style={{height: '110px'}} type="text" class="form-control" id="exampleInputEmail1" placeholder="Project Details"/>
                    </div>
                    <div className="d-flex row">
                      <div class="form-group col-md-6">
                        <input style={{height: '50px'}} type="text" class="form-control" id="exampleInputEmail1" placeholder="Price"/>
                      </div>
                      <div class="form-group col-md-6">
                        <input style={{height: '50px'}} type="file" class="form-control" id="exampleInputEmail1"/>
                      </div>
                    </div>
                    <button style={{width: '30%', height: '50px', background: '#111430'}} type="submit" class="btn btn-primary">Send</button>
                  </form>
                </div>
              </Container>
          </Route>
          <Route exact path="/customerPage/serviceList">
            <Container >
              <div className="d-flex align-items-center mt-3 mb-3">
                <h3 className="justify-content-start">Service List</h3>
                <h5 style={{marginLeft: '75%'}}>{loggedInUser.name}</h5>  
              </div>
              <div>
                <Typography variant="h3" gutterBottom> 
                  Service List
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                </Typography>
              </div>
            </Container>
          </Route>
          <Route exact path="/customerPage/review">
            <Container >
                <div className="d-flex align-items-center mt-3 mb-3">
                  <h3 className="justify-content-start">Review</h3>
                  <h5 style={{marginLeft: '80%'}}>{loggedInUser.name}</h5>  
                </div>
                <div className="col-md-7">
                  <form>
                    <div class="form-group">
                      <input style={{height: '50px'}} type="text" class="form-control" id="exampleInputEmail1" placeholder="Your Name"/>
                    </div>
                    <div class="form-group">
                      <input style={{height: '50px'}} type="text" class="form-control" id="exampleInputEmail1" placeholder="Company's Name, Designation"/>
                    </div>
                    <div class="form-group">
                      <input style={{height: '110px'}} type="text" class="form-control" id="exampleInputEmail1" placeholder="Description"/>
                    </div>
                    
                    <button style={{width: '30%', height: '50px', background: '#111430'}} type="submit" class="btn btn-primary">Submit</button>
                  </form>
                </div>
              </Container>
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default CustomerPage;