import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../App';

const AddService = () => {
    const [loggedInUser, setLoggedInUser] =useContext(UserContext);
    return (
        <div>
            <div>
                <div className="d-flex align-items-center mt-3 mb-3">
                    <h3 className="justify-content-start">Add Service</h3>
                    <h5 style={{marginLeft: '75%'}}>{loggedInUser.name}</h5>  
              </div>
            </div>
            <div style={{background: '#ecf4fd', height: '580px', paddingTop: '30px', paddingLeft: '20px'}}>
                <div>
                    <form>
                        <div className="row" style={{background: '#fff', border: '1px solid #fff', borderRadius: '10px', padding: '30px', margin: '30px'}}>
                            <div className="col-me-8">
                                <div className="d-flex row">
                                    <div class="form-group col-md-9">
                                        <label for="exampleInputTitle1" class="form-label"><b>Service Title</b></label>
                                        <input  type="text" class="form-control" id="exampleInputEmail1" placeholder="Enter Title"/>
                                    </div>
                                    <div class="form-group col-md-3">
                                        <label for="exampleInputIcon1" class="form-label"><b>Icon</b></label>
                                        <input type="file" class="form-control" id="exampleInputEmail1"/>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputDescription1" class="form-label"> <b>Description</b></label>
                                    <input style={{height: '110px'}} type="text" class="form-control" id="exampleInputEmail1" placeholder="Enter Description"/>
                                </div>
                            </div>
                        </div>
                        <button  style={{width: '10%', marginLeft: '87%'}} type="submit" class="btn btn-success">Send</button> 
                    </form>
                </div>  
            </div>
        </div>
    );
};

export default AddService;