import React from 'react';
import { useHistory } from 'react-router-dom';
import Frame from '../../../images/logos/Frame.png'



const HeaderMain = () => {

    const history = useHistory()

    const handleOrder = () => {
        history.push('/customerPage');
    }
    return (
        <main style={{height: '600px'}} className="row d-flex align-items-center">
            <div className="col-md-4">
                <h1 style={{color: '#111430'}}><b>Let's Grow Your <br/> Brand To The <br/> Next Level </b></h1>
                <p style={{margin: '30px auto'}}>Lorem ipsum dolor sit amet consectetur <br/> adipisicing elit. Deleniti nesciunt <br/>voluptate nemo eius molestiae, rem ex</p>
                <button onClick={handleOrder} style={{width: '40%', background: '#111430'}} type="button" class="btn btn-dark">Hire Us</button>    
            </div>
            <div className="col-md 6 offset-md-1">
                <img src={Frame} alt="" className="img-fluid"/>
            </div>

        </main>
    );
};

export default HeaderMain;