import {  useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../pages/firebase/fire';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router";


function Header(){
	const[cartitem , setCartItem]= useState([0])
	const [username,setusername] = useState("")
	const [email,setuseremail] = useState("")
	const [password,setpassword] = useState("")
	const navigate = useNavigate();
	
	
	const [loading, setloading] = useState(false);

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
	

	const {user,setUser} = useContext(AuthContext)
	// console.log("User",user);
	 const logoutUser = async()=>{
		console.log("click Log out");
		
		await signOut(auth);
	}

    return(
        <>
        <header className="header trans_300">

		{/* <!-- Top Navigation --> */}

		<div className="top_nav">
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<div className="top_nav_left">free shipping on all u.s orders over $50</div>
					</div>
					<div className="col-md-6 text-right">
					

						<div className="top_nav_right">
							<ul className="top_nav_menu">

								{/* <!-- Currency / Language / My Account --> */}

								<li className="currency">
									<a href="#">
										usd
										<i className="fa fa-angle-down"></i>
									</a>
									<ul className="currency_selection">
										<li><a href="#">cad</a></li>
										<li><a href="#">aud</a></li>
										<li><a href="#">eur</a></li>
										<li><a href="#">gbp</a></li>
									</ul>
								</li>
								<li className=" language">
									<a href="#">
										Theme Dark
										<i className="fa fa-angle-down"></i>
									</a>
									
								</li>

								
								<li className="account">
									
									{
									 user ?.islogin ? (<>
									
									 <a className='px-3' href="#">{user?.userinfo?.email}
										<i className=" fa fa-angle-down"></i>
									 	<img width={"30px"} className="mx-2 avatar rounded-4  avatar-lg" src={user?.userinfo?.photo} />
									</a>									
									<ul className="account_selection">
									<li onClick={logoutUser}><Link to={"./"}><i className="fa fa-user-plus"   aria-hidden="true"></i>Logout</Link></li>
									</ul></>
									):
									(<>

									<a href="#">My Acount<i className="fa fa-angle-down"></i>
									</a>
									<ul className="account_selection">
										<li><Link to={"signin"}><i className="fa fa-sign-in" aria-hidden="true"></i>Sign In</Link></li>
										<li><Link to={"register"}><i className="fa fa-user-plus" aria-hidden="true"></i>Register</Link></li>
										{/* <li><Link to={"signup"}><i className="fa fa-user-plus" aria-hidden="true"></i>SignUp</Link></li> */}
							


																				
									</ul>


									
									</>)
									}
										
									
								</li>
								
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>

		{/* <!-- Main Navigation --> */}

		<div className="main_nav_container">
			<div className="container">
				<div className="row">
					<div className="col-lg-12 text-right">
						<div className="logo_container">
							<Link to="/">colo<span>shop</span></Link>
						</div>
						<nav className="navbar">
							<ul className="navbar_menu">
								<li><Link to={"/"}>home</Link></li>
								<li><Link to={"products"} >All Products</Link></li>
								<li><Link to={"category"} href="#">Category</Link></li>
								<li><a href="#">pages</a></li>
								<li><a href="#">blog</a></li>
								<li><Link to={"contactus"}>contact</Link></li>
							</ul>
							<ul className="navbar_user">
								<li><a href="#"><i className="fa fa-search" aria-hidden="true"></i></a></li>
								<li><a href="#"><i className="fa fa-user" aria-hidden="true"></i></a></li>
								<li className="checkout">
									<a href="#">
										<i className="fa fa-shopping-cart" aria-hidden="true"></i>
										<span id="checkout_items" className="checkout_items">{cartitem.length}</span>
									</a>
								</li>
							</ul>
							<div className="hamburger_container">
								<i className="fa fa-bars" aria-hidden="true"></i>
							</div>
						</nav>
						
					</div>
				</div>
			</div>
		</div>
        
	</header>
    
    </>
   
     
    )
}
export default Header;