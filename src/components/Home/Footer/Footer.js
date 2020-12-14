import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <div id="contact-us" style={{ background: '#FBD062', height: '600px'}} className="mt-5 pt-5">
            <div className="container">
                <div className="row d-flex">
                    <div className="col-md-6">
                        <h3> <b> Let us handl your <br/> project, professionally </b></h3>
                        <p className="text-secondary mt-3">We will write code, we build amazing apps for all <br/> platforms, mobile and web apps in general</p>
                    </div>
                    <div style={{marginBottom: '100px'}} className="col-md-6">
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control style={{height: '50px'}} type="email" placeholder="Your email" />
                            </Form.Group>
                            <Form.Group controlId="formBasicName">
                                <Form.Control style={{height: '50px'}} type="name" placeholder="Your Name/Company Name" />
                            </Form.Group>
                            <Form.Group controlId="formBasicText">
                                <Form.Control style={{height: '200px'}} type="Text" placeholder="Your Message" />
                            </Form.Group>

                            <Button style={{background: '#111430', width: '150px'}} type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                </div>
                <div className="text-center">
                    <small className="text-secondary">Copyright Orange Labs {(new Date()).getFullYear()}</small>
                </div>
            </div>
        </div>
    );
};

export default Footer;