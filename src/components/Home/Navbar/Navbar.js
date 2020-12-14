import React from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';

const Navbar = () => {

    const history = useHistory()

    const handleAdminPage = () => {
        history.push('/adminPage');
    }

    return (
        <div >
            <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
                <a class="navbar-brand" href="#">
                    <img style={{height: '50px'}} src={logo} alt=""/>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                    <li class="nav-item active mr-5">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item mr-5" >
                        <a class="nav-link" href="#portfolio">Our Portfolio</a>.
                    </li>
                    <li class="nav-item mr-5">
                        <a class="nav-link" href="#">Our Team</a>
                    </li>
                    <li class="nav-item mr-5">
                        <a class="nav-link" href="#contact-us">Contact Us</a>
                    </li>
                    
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            <button onClick={handleAdminPage} style={{background: '#111430'}} type="button" class="btn btn-dark">Login</button>
                        </a>
                    </li>
                    
                    </ul>
                    
                </div>
            </nav>
    </div>
    );
};

export default Navbar;