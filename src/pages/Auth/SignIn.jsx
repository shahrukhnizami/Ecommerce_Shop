import { useState } from "react";
import { Link } from "react-router-dom";
import {  GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app, auth } from "../firebase/fire";



function Signin() {


  

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const handelwithgoogle=()=>{


    const provider = new GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
  }

 



  
  return (
    <div className="container contact_container">
      <div className="row">
        <div className="col-12">
          {/* Breadcrumbs */}
          <div className="breadcrumbs d-flex flex-row align-items-center">
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li className="active">
                <a href="#">
                  <i className="fa fa-angle-right" aria-hidden="true" />
                  Register
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Contact Us */}
      <div className="container d-flex flex-wrap">
        {/* justify-content-right align-items-row */}
      <div className="row ">
        <div className="col-lg-6 get_in_touch_col">
          <div className="get_in_touch_contents">
            <h1>Sign In Your Acount</h1>
            <p>Fill out the form below to recieve a free and confidential.</p>
            <form id="login_form">
              <div>
                {/* <label> Profile Image</label>  <input  type="file"> */}
                <input
                  id="signin_name"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  className="form_input input_name input_ph"
                  type="text"
                  placeholder="Email"
                  required="required"
                  data-error="Email is required."
                />
                {/* <input id="input_email" class="form_input input_email input_ph" type="email" name="email" placeholder="Email" required="required" data-error="Valid email is required."> */}
                <input
                  value={password}
                  id="password"
                  onChange={(e) => setpassword(e.target.value)}
                  className="form_input input_website input_ph"
                  type="password"
                  name="password"
                  placeholder="password"
                  required="required"
                  data-error="password is required."
                />
                {/* <textarea id="input_message" class="input_ph input_message" name="message"  placeholder="Message" rows="3" required data-error="Please, write us a message."></textarea> */}
              </div>
              <div>
                <button
                style={{width:"20%"}}
                  id="review_submit"
                  type="submit"
                  className="red_button message_submit_btn trans_300"
                  value="Submit"
                >
                  Sign In
                </button>
                <button
                style={{width:"20%"}}
                  id="register_btn"
                  type="submit"
                  className="mx-2 red_button message_submit_btn trans_300"
                  onClick={handelwithgoogle}
                >
                  With Google
                </button>
                <button
                style={{width:"20%"}}
                  id="register_btn"
                  className="mx-2 red_button message_submit_btn "
                >
                  Register
                </button>


              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
      
    </div>


  )
}
export default Signin;