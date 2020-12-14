import React from 'react';
import { useContext } from 'react';
import {UserContext} from '../../../App';

const AdminPageServiceList = () => {
    const [loggedInUser, setLoggedInUser] =useContext(UserContext);
    return (
        <div>
            <div>
                <div className="d-flex align-items-center mt-3 mb-3">
                    <h3 className="justify-content-start">Service List</h3>
                    <h5 style={{marginLeft: '75%'}}>{loggedInUser.name}</h5>  
              </div>
            </div>
            <div style={{background: '#ecf4fd', height: '580px', paddingTop: '30px', paddingLeft: '20px'}}>
               <h1>This is Service List of Admin Page</h1> 
                    
            </div>
        </div>
    );
};

export default AdminPageServiceList;