import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../App';

const MakeAdmin = () => {
    const [loggedInUser, setLoggedInUser] =useContext(UserContext);
    return (
        <div>
            <div>
                <div className="d-flex align-items-center mt-3 mb-3">
                    <h3 className="justify-content-start">Make Admin</h3>
                    <h5 style={{marginLeft: '75%'}}>{loggedInUser.name}</h5>  
              </div>
            </div>
            <div style={{background: '#ecf4fd', height: '580px', paddingTop: '30px', paddingLeft: '20px'}}>
                
                    <form>
                        <div className="row" style={{background: '#fff', border: '1px solid #fff', borderRadius: '10px', padding: '30px', margin: '30px'}}>
                            <div >
                                <div >
                                    <div class="form-group">
                                        <label for="exampleInputEmail1" class="form-label"><b>Email</b></label>
                                        
                                    </div>
                                    <div class="form-group d-flex">
                                        
                                            <input style={{ width: '400px'}}   type="email" class="form-control" id="exampleInputEmail1" placeholder="jon@gmail.com"/>
                                            <button style={{ marginLeft: '10px'}}   type="submit" class="btn btn-success">Send</button> 
                                         
                                    </div>
                                </div>
                                 
                            </div>
                        </div>
                        
                    </form>
               
            </div>
        </div>
    );
};

export default MakeAdmin;