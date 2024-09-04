import { getAllProducts } from "../utils/products";
import Card from "./Cards"
import { useEffect, useState } from 'react'

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



  // const categoryArr = products.filter((data) => {
  //   if (data.category == search){
  //     return(data.category === search)
      
  //   }
  // //  else if (data.category == search){
  // //     return(data !==-1)
  // //   }
  // } )
  
   
  
  
  
    // if (data.category === "all") {
    //   return prods;}})
    
     
  //   // } else if (categorySelected.electronics) {
  //   //   return prods.category === Category.Electronics;
  //   // }
  //   // else if (categorySelected.jewelery) {
  //   //   return prods.category === Category.Jewelery;
  //   // }
  // })
  // console.log("categorymulti=>",categorymulti);
  
  const categoryArr = products.filter((data)=>data.category == search    !==-1);
  // console.log("filteredArr>",categoryArr);
 

  
  



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
                    id="category" onClick={(categorySerch)}
                  >
                    All
                  </li>
                  <li
                    className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center"
                    id="women's clothing" onClick={categorySerch}
                  >
                    women's
                  </li>
                 
                  <li
                    className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center"
                      id="men's clothing" onClick={categorySerch}
                  >
                    men's
                  </li>
                  <li
                    className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center"
                    id="electronics" onClick={categorySerch}
                  >
                    Electronics
                  </li>
                  <li
                    className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center"
                     id="jewelery" onClick={categorySerch}
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