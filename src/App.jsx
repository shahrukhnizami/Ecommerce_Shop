
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from "./components/Footer";
import Header from "./components/Header";

// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import ContactUs from './pages/ContactUs'
import Register from './pages/Auth/Register';
import Signin from './pages/Auth/SignIn';
import Products from './components/Products';
import ProductDetail from './pages/ProductDetail';
import Category from './pages/Category';
import SignUp from './pages/Auth/SignUp';


function App() {

	

  return (

	<BrowserRouter>
	<Header/>
	<Routes>
		<Route path='/' element={<Home/>}/>
		<Route path='/about' element={<About/>}/>
		<Route path='/contactus' element={<ContactUs/>}/>
		<Route path='/register' element={<Register/>}/>
		<Route path='/signin' element={<Signin/>}/>
		<Route path='/category' element={<Category/>}/>
		<Route path='/signup' element={<SignUp/>}/>


		
		<Route path='products' element ={<Products/>}  ></Route>
		<Route path=':id' element ={<ProductDetail/>}  ></Route>

	

		{/* <Route path='*' element={<h1>Page Not Found</h1>}/> */}
	
	</Routes>
	<Footer/>
	</BrowserRouter>
   
 

  )
}

export default App
