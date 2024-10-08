import { createUserWithEmailAndPassword } from "firebase/auth";
import {  useState } from "react"
import { auth } from "../firebase/fire";
import { useNavigate } from "react-router";


function Register(){

  const [username,setusername] = useState("")
  const [email,setuseremail] = useState("")
  const [password,setpassword] = useState("")
  const navigate = useNavigate();
  
  const [loading, setloading] = useState(false);
  const [message, setmessage] = useState(false);


  const handleSubmit=()=>{
    console.log(username);
    console.log(email);
    console.log(password);
    setloading(true);
    setmessage(false)

    createUserWithEmailAndPassword(auth, email, password)
    .then(  setmessage(true),
    setloading(false),
      navigate("/"),
            
      
      
    )
      .catch((err) => {
        console.log(err);
        setloading(false);
      });
   
    

   }
    
  
  
    return(
        <div className="container contact_container">
  <div className="row">
    <div className="col">
      {/* Breadcrumbs */}
      <div className="breadcrumbs d-flex flex-row align-items-center">
        <ul>
          <li>
            <a href="../index.html">Home</a>
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
  <div className="d-flex justify-content-center row ">
    <div className=" col-lg-8 get_in_touch_col">
      <div className=" get_in_touch_contents">
        <h1>Register Your Acount</h1>
        <p>Fill out the form below to recieve a free and confidential.</p>
        {message?(<div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>):(<div></div>)}
        
          <div>
            {/* <label> Profile Image</label>{" "}
            <input
              id="register_img"
              className="form-control "
              type="file"
              required="required"
            /> */}
            <input 
            value={username}
            onChange={(e)=>{setusername(e.target.value)}}
              id="register_name"
              className="form_input input_name input_ph"
              type="text"
              name="name"
              placeholder="Name"
              required="required"
              data-error="Name is required."
            />
            <input
            value={email}
            onChange={(e)=>{setuseremail(e.target.value)}}
              id="register_email"
              className="form_input input_email input_ph"
              type="email"
              name="email"
              placeholder="Email"
              required="required"
              data-error="Valid email is required."
            />
            <input
            value={password}
            onChange={(e)=>{setpassword(e.target.value)}}
              id="register_password"
              className="form_input input_website input_ph"
              type="password"
              name="password"
              placeholder="Password"
              required="required"
              data-error="password is required."
            />
            {/* <input
              id="register_confrm_password"
              className="form_input input_website input_ph"
              type="password"
              name="password"
              placeholder="Confrm Password"
              required="required"
              data-error="password is required."
            /> */}
            {/* <textarea id="input_message" class="input_ph input_message" name="message"  placeholder="Message" rows="3" required data-error="Please, write us a message."></textarea> */}
          </div>
          <div>
            {loading?(<div className="container d-flex justify-content-center py-2">
                <div className="spinner-border text-danger " role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>):(<button
              id="register_btn"
              type="submit "
              style={{    width: "-webkit-fill-available"}}
              className=" py-3 red_button message_submit_btn trans_300"
              onClick={handleSubmit}
            >
              Submit
            </button>)}
            
            
          </div>
       
      </div>
    </div>
  </div>
</div>

    )
}
export default Register