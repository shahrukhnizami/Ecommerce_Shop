import Header from "../components/Header";
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import Slider from '../components/Slider'
import Products from '../components/Products'
import Benefits from '../components/Benefits'
import Newsletter from '../components/Newsletter'
import { getAllProducts } from '../utils/products'

function Home (){
    return(
        <div class="super_container">
 
 <div className="fs_menu_overlay"></div>
 
 <div className="hamburger_menu">
		<div className="hamburger_close"><i className="fa fa-times" aria-hidden="true"></i></div>
		<div className="hamburger_menu_content text-right">
			<ul className="menu_top_nav">
				<li className="menu_item has-children">
					<a href="#">
						usd
						<i className="fa fa-angle-down"></i>
					</a>
					<ul className="menu_selection">
						<li><a href="#">cad</a></li>
						<li><a href="#">aud</a></li>
						<li><a href="#">eur</a></li>
						<li><a href="#">gbp</a></li>
					</ul>
				</li>
				<li className="menu_item has-children">
					<a href="#">
						English
						<i className="fa fa-angle-down"></i>
					</a>
					<ul className="menu_selection">
						<li><a href="#">French</a></li>
						<li><a href="#">Italian</a></li>
						<li><a href="#">German</a></li>
						<li><a href="#">Spanish</a></li>
					</ul>
				</li>
				<li className="menu_item has-children">
					<a href="#">
						My Account
						<i className="fa fa-angle-down"></i>
					</a>
					<ul className="menu_selection">
						<li><a href="signIn/index.html"><i className="fa fa-sign-in" aria-hidden="true"></i>Sign In</a></li>
						<li><a href="register/index.html"><i className="fa fa-user-plus" aria-hidden="true"></i>Register</a></li>
					</ul>
				</li>
				<li className="menu_item"><a href="#">home</a></li>
				<li className="menu_item"><a href="#">shop</a></li>
				<li className="menu_item"><a href="#">promotion</a></li>
				<li className="menu_item"><a href="#">pages</a></li>
				<li className="menu_item"><a href="#">blog</a></li>
				<li className="menu_item"><a href="#">contact</a></li>
			</ul>
		</div>
	</div>
  <Slider/>
  <Banner/>
  <Products/>
  
	
 <Benefits/>
 <Newsletter/>
 </div>
    )
}
export default Home