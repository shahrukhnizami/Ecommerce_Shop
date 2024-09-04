import { useState } from "react"


function Register(){

  const [username,setusername] = useState("")
  const [useremail,setuseremail] = useState("")
  const [userpassword,setpassword] = useState("")
  
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
  <div className="row">
    <div className="col-lg-8 get_in_touch_col">
      <div className="get_in_touch_contents">
        <h1>Register Your Acount</h1>
        <p>Fill out the form below to recieve a free and confidential.</p>
        <form id="register_form">
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
            value={useremail}
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
            value={userpassword}
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
            <button
              id="register_btn"
              type="submit "
              className=" py-3 red_button message_submit_btn trans_300"
            >
              Submit
            </button>
            
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

    )
}
export default Register