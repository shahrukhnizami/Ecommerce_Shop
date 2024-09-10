import Header from "../components/Header";
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import Slider from '../components/Slider'
import Products from '../components/Products'
import Benefits from '../components/Benefits'
import Newsletter from '../components/Newsletter'

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
						<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Launch demo modal
</button>

{/* <!-- Modal --> */}
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
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