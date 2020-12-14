import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useContext } from 'react';
import {UserContext} from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import logo from '../../images/logos/logo.png';
import './Logo.css';

const Login = () => {
    const [loggedInUser, setLoggedInUser] =useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/adminPage" } };

    if(firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
           
            const {displayName, email} = result.user;
            const signedInUser = {name: displayName, email}
            setLoggedInUser(signedInUser);
            history.replace(from);
            // const {displayName, email} = result.user;
            // const signedInUser = {name: displayName, email}
            // setLoggedInUser(signedInUser);
            // storeAuthToken();
            
            }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
          
    }

    // const storeAuthToken = () => {
    //     firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
    //     .then(function(idToken) {
    //         sessionStorage.setItem('token', idToken);
    //         history.replace(from);
    //       }).catch(function(error) {
    //         // Handle error
    //       });
          
    // }

    return (
        <div className="text-center login-body">
            <div>
                <a class="navbar-brand mt-5 mb-5" href="/">
                        <img style={{height: '50px'}} src={logo} alt=""/>
                </a>
            </div>
            <div class="login">
                <h4 className="mb-4">Login with</h4>
                <button class="btn btn-light login-button" onClick={handleGoogleSignIn}>Continue with Google</button>
                <p className="mt-3">Don't have an account? <a href="">Create an account</a> </p>
            </div>
        </div>
    );
};

export default Login;


// import React from 'react';
// import logo from '../../images/logos/logo.png';
// import * as firebase from "firebase";
// import "firebase/auth";
// import firebaseConfig from './firebase.config';

// import './Logo.css';

// firebase.initializeApp(firebaseConfig);

// const Login = () => {
    
    
//     const provider = new firebase.auth.GoogleAuthProvider();

//     const handleGoogleSignIn = () => {
//         firebase.auth().signInWithPopup(provider)
//         .then(result => {
//             console.log(result); 
//         })
          
//     }

//     return (
//         <div className="text-center login-body">
//         <div>
//             <a class="navbar-brand mt-5 mb-5" href="/">
//                     <img style={{height: '50px'}} src={logo} alt=""/>
//             </a>
//         </div>
//         <div className="login">
//             <h4 className="mb-4"> <b>Login with </b></h4>
//             <button className="btn btn-light login-button" onClick={handleGoogleSignIn}>Continue with Google</button>
//             <p className="mt-3">Don't have an account? <a href="">Create an account</a> </p>
//         </div>
//     </div>
//     );
// };

// export default Login;