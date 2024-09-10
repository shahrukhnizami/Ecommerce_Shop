import { createUserWithEmailAndPassword } from "firebase/auth";
import {  useState } from "react"
import { auth } from "../firebase/fire";
import { useNavigate } from "react-router";

function SignUp(){



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
      navigate("/signin"),
            
      
      
    )
      .catch((err) => {
        console.log(err);
        setloading(false);
      });
   
    

   }
    

    return(
    
        <>
        {/* <!-- Button trigger modal --> */}
        <button id="newsletter_submit" type="submit" data-target="#exampleModalCenter" data-toggle="modal" class="newsletter_submit_btn trans_300" value="Submit">Sign Up</button>

{/* <!-- Modal --> */}
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Register Your Acount</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <input 
            value={username}
            onChange={(e)=>{setusername(e.target.value)}}
              
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
              {loading?(<div className="container d-flex justify-content-center py-2">
                <div className="spinner-border text-danger " role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>):(<button data-dismiss="modal"
              id="register_btn"
              type="submit "
              className=" py-3 red_button message_submit_btn trans_300"
              onClick={handleSubmit}
            >
              SignUp
            </button>)}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

        </>
    )
}
export default SignUp;