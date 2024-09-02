function Signin(){
    return(
        <div className="container contact_container">
        <div className="row">
          <div className="col-12">
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
          <div className="col-lg-6 get_in_touch_col">
            <div className="get_in_touch_contents">
              <h1>Sign In Your Acount</h1>
              <p>Fill out the form below to recieve a free and confidential.</p>
              <form id="login_form">
                <div>
                  {/* <label> Profile Image</label>  <input  type="file"> */}
                  <input
                    id="signin_name"
                    className="form_input input_name input_ph"
                    type="text"
                    placeholder="Email"
                    required="required"
                    data-error="Email is required."
                  />
                  {/* <input id="input_email" class="form_input input_email input_ph" type="email" name="email" placeholder="Email" required="required" data-error="Valid email is required."> */}
                  <input
                    id="password"
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
                    id="review_submit"
                    type="submit"
                    className="red_button message_submit_btn trans_300"
                    value="Submit"
                  >
                    Sign In
                  </button>
                  <button
                    id="register_btn"
                    className="red_button message_submit_btn "
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      

    )
}
export default Signin;