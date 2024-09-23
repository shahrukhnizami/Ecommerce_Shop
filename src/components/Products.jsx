import axios from "axios";
import Card from "./Cards"
import { useContext, useEffect, useState } from 'react'
import CategoriesSlug from "./CetegoriesSlug";
import { CartContext } from "../Context/CartContext";

function Products() {




  const [products, setProducts] = useState([])
  const [categories, setcategories] = useState([]);
  const [loading, setloading] = useState(true);
  const [chossenCategory, setchossenCategory] = useState("All");
  


    
    useEffect(() => { 
      console.log("useefect call hogaya");

      
      const url = chossenCategory === "All"?
      "https://dummyjson.com/products" :
      `https://dummyjson.com/products/category/${chossenCategory}`

      axios.get(url).then(
      (res)=>{(res.data.products)

      setProducts(res.data.products)
      setloading(false)}
    )

      .catch((error)=>{
        console.log("error",error)
      setloading(false)})
     }, [chossenCategory])


     useEffect(() => { axios.get('https://dummyjson.com/products/categories').then(
      (res)=>{console.log("Api",res.data)

      setcategories(res.data)
      console.log("Categories",res.data)
      setloading(false)}
    )

      .catch((error)=>{
        console.log("error",error)
      setloading(false)})
     }, [])
 


  
  



  return (
    <>
    <div className="container d-flex justify-content-center py-2">
     {loading?(<div className="spinner-border text-danger " role="status">
  <span className="sr-only">Loading...</span>
</div>)
     :
     (<div className="new_arrivals">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <div className="section_title new_arrivals_title">
              <h2>New Arrivals</h2>
              {/* <!-- Button trigger modal --> */}

            </div>
          </div>
        </div>
        <div className="row align-items-center">
        <div className="col text-center">
            <div className="new_arrivals_sorting">
              <ul className="arrivals_grid_sorting clearfix button-group filters-button-group">

              <CategoriesSlug onClick={()=>setchossenCategory("All")}  ischossen ={ chossenCategory == "All"} category={{name:"All", slug:"all"}}/>


                {categories.map((category)=>( <CategoriesSlug onClick={()=>setchossenCategory(category.slug)}  ischossen={category.slug ==  chossenCategory }  category={category}/>))}
            
             
                 

                {/* {categories.map((category)=>( <li className="grid_sorting_button button m-1 d-flex flex-column justify-content-center align-items-center" key={category.slug}>{category.name}</li>
                )
                 )} */}
                {/* <li
                  
                  className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center"id="women's clothing" 
                >
                  women's
                </li>
               
                <li
                  className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center"
                    id="men's clothing"
                >
                  men's
                </li>
                <li
                  className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center"
                  id="electronics" 
                >
                  Electronics
                </li>
                <li
                  className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center"
                   id="jewelery" 
                >
                 jewelery
                </li> */}
              </ul>
            </div>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col text-center">

            <div className="product-grid d-flex flex-wrap justify-content-right align-items-row">
              {/* Product 1 */}

              
              {products.map((data, ind) => {
                return (<Card  key={data.ind} item={data} />)
              })}



            </div>
          </div>
        </div>

      </div>
    </div>)}
    </div>
      
    </>

  )
}

export default Products