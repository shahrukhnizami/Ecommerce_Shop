import Card from "./Cards"
import { useEffect, useState } from 'react'

import { getAllProducts } from '../utils/products'

function Products() {
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState([]);



  useEffect(() => { fetchproducts() }, [])

  const fetchproducts = async () => {
    const product = await getAllProducts()
    setProducts([...product])
    console.log("All",product);

  }
 
 
 
  

  const  categorySerch=(e)=>{
    setSearch(e.target.id);
  }
  // const filteredArr = products.filter((data) => data.title);
  
  const categoryArr = products.filter((data)=>data.category.indexOf(search)    !==-1);
  console.log("filteredArr>",categoryArr);
    
  // const allproducts=()=>{
  //   const categoryArr = products.filter((data)=>data !==-1)
  //   console.log("AllArr>",categoryArr);}
  // const filteredArr = products.filter((data) => data.category.indexOf(search.toLowerCase()) !== -1 );
  
  


  console.log(search);
  return (
    <>
      <div className="new_arrivals">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <div className="section_title new_arrivals_title">
                <h2>New Arrivals</h2>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col text-center">
              <div className="new_arrivals_sorting">
                <ul className="arrivals_grid_sorting clearfix button-group filters-button-group">
                  <li
                    className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center active is-checked"
                    data-filter="*" id="category" onClick={categorySerch}
                  >
                    All
                  </li>
                  <li
                    className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center"
                    data-filter=".women" id="women" onClick={categorySerch}
                  >
                    women's
                  </li>
                 
                  <li
                    className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center"
                    data-filter=".men"  id="men's clothing" onClick={categorySerch}
                  >
                    men's
                  </li>
                  <li
                    className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center"
                    data-filter=".accessories" id="electronics" onClick={categorySerch}
                  >
                    Electronics
                  </li>
                  <li
                    className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center"
                    data-filter=".men"  id="jewelery" onClick={categorySerch}
                  >
                   jewelery
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col text-center">

              <div className="product-grid d-flex flex-wrap justify-content-right align-items-row">
                {/* Product 1 */}

                
                {categoryArr.map((data, ind) => {
                  return (<Card key={data.ind} item={data} />)
                })}



              </div>
            </div>
          </div>

        </div>
      </div>
    </>

  )
}

export default Products