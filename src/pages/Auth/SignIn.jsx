import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {  GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import {  auth } from "../firebase/fire";



function Signin() {


  

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setloading] = useState(false);
  const navigate = useNavigate()


const Userlogin = async()=>{
  setloading(true);
  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      navigate("/");
      setloading(false);
    })
    .catch((err) => {
      alert(err);
      setloading(false);
    });
}

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
    navigate("/")
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
                  Sign In
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Contact Us */}
   
<div className="row d-flex justify-content-center ">
        <div className=" col-lg-6 get_in_touch_col">
          <div className=" get_in_touch_contents">
            <h1>Sign In Your Acount</h1>
            <p>Fill out the form below to recieve a free and confidential.</p>
            
              <div>
                {/* <label> Profile Image</label>  <input  type="file"> */}
                <input
                  id="signin_name"
                  onChange={(e) => setemail(e.target.value)}
                  className="form_input input_name input_ph"
                  type="text"
                  placeholder="Email"
                  required="required"
                  data-error="Email is required."
                />
                {/* <input id="input_email" class="form_input input_email input_ph" type="email" name="email" placeholder="Email" required="required" data-error="Valid email is required."> */}
                <input
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


              {loading?(<div className="spinner-border text-danger " role="status">
  <span className="sr-only">Loading...</span>
  
</div>):(<button



style={{width:"20%"}}
  id="review_submit"
  type="submit"
  className="red_button message_submit_btn trans_300"
  value="Submit"
  onClick={Userlogin}
  
>
  Sign In
</button>)
}
               
                <button
                
                  id="register_btn"
                  type="submit"
                  className="mx-2 red_button message_submit_btn trans_300 px-3"
                  onClick={handelwithgoogle}
                >
                  With Google
                </button>
                <Link to={'/register'} ><button
                  id="register_btn"
                  className="red_button message_submit_btn px-3"
                >
                  Register
                </button></Link>


              </div>
            
          </div>
        </div>
      </div>
     
      
    </div>


  )
}
export default Signin;