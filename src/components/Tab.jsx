import { useParams } from "react-router";
import axios from "axios";
import {useEffect, useState } from "react";


function Tab(){

    const[product,setProduct] = useState("")
    const[loading,setloading] = useState(true)
    const[notFound,setnotFound] = useState(false)

    const {id} = useParams()

    useEffect(() => {
      setnotFound(false)
        axios.get(`https://dummyjson.com/products/${id}`)
          .then((res) =>{setProduct(res.data)
            setloading(false)
          } )
          .catch((error) => {console.log(error)
            setnotFound(true)
            setloading(false)
          } );
      }, []);


    return(
    <h1>help</h1>
      )
}
export default Tab;