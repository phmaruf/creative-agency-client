import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../App';

const AddService = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = () => {

        const formData = new FormData()
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('description', info.description);

        fetch('http://localhost:5000/addService', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }


    return (
        <div>
            <div>
                <div className="d-flex align-items-center mt-3 mb-3">
                    <h3 className="justify-content-start">Add Service</h3>
                    <h5 style={{ marginLeft: '75%' }}>{loggedInUser.name}</h5>
                </div>
            </div>
            <div style={{ background: '#ecf4fd', height: '580px', paddingTop: '30px', paddingLeft: '20px' }}>
                <div>
                    <form onSubmit={handleSubmit}>
                        <div className="row" style={{ background: '#fff', border: '1px solid #fff', borderRadius: '10px', padding: '30px', margin: '30px' }}>
                            <div className="col-me-8">
                                <div className="d-flex row">
                                    <div class="form-group col-md-9">
                                        <label for="exampleInputTitle1" class="form-label"><b>Service Title</b></label>
                                        <input onBlur={handleBlur} type="text" class="form-control" name="serviceTitle" placeholder="Enter Title" />
                                    </div>
                                    <div class="form-group col-md-3">
                                        <label for="exampleInputIcon1" class="form-label"><b>Icon</b></label>
                                        <input onChange={handleFileChange} type="file" class="form-control" id="exampleInputEmail1" />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputDescription1" class="form-label"> <b>Description</b></label>
                                    <input onBlur={handleBlur} style={{ height: '110px' }} type="text" class="form-control" name="description" placeholder="Enter Description" />
                                </div>
                            </div>
                        </div>
                        <button style={{ width: '10%', marginLeft: '87%' }} type="submit" class="btn btn-success">Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;