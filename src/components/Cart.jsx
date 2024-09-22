import { useContext,  useState } from "react";
import { Button, Image } from "antd";
import { CartContext } from "../Context/CartContext";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";

function Cart() {
  const { cartitem,removeItemFromCart ,addItemTOCart,lessQuantitfromcart } = useContext(CartContext);

  // const totalAmount = cartitem.reduce((total,obj)=>total = obj.quantity * obj.price,0)
  const totalAmount = cartitem.reduce(
    (total, obj) => total + obj.quantity * obj.price,
    0
  );
  const totalQuantity = cartitem.reduce((total,obj)=> total + obj.quantity,0)

  
  

 
  return (

    <>
      <div className="container mx-auto my-5">
        <div className="row">

        </div>
        <div className="col-12 d-flex flex-wrap justify-content-center">
          <h1 className="text-3xl font-semibold my-4 text-center">Cart Items</h1>
        </div>
        <div className="row d-flex flex-wrap justify-content-between">

          <div className="col-3  border  p-2 border-2 rounded-md cursor-pointer  ">
            <h4 className="font-medium py-3 text-center ">Total Quantity</h4>
            <h1 className="font-semibold text-3xl my-1 text-center ">{totalQuantity}</h1>
          </div>
          <div className="col-4   border  p-2 border-2 rounded-md cursor-pointer  ">
            <h4 className="font-medium py-3 text-center ">Total Price</h4>
            <h2 className="font-semibold text-center my-1">
              {" "}
              {Math.round(totalAmount)}
            </h2>
          </div>

          <div className="col-4 bg-danger text-white  border p-2 cursor-pointer">
            <h3 className="font-medium py-5 text-center">Proceed to Checkout</h3></div>
        </div>
        {cartitem.map((data) => (
        <div key={data.id} className="flex items-center border my-2 p-3">
          <Image src={data.thumbnail} height={200} width={250} />

          <div className="flex flex-col pl-5">
            <h1 className="font-medium text-xl mb-2">
              {data.title} {`(${data.category})`}
            </h1>
            <h1 className="font-normal text-lg mb-2">{data.description}</h1>
            <h1 className="font-normal text-lg mb-2">Price : {data.price}</h1>

            <div className="flex gap-3 items-center">
              <Button
                onClick={() => addItemTOCart(data)}
                icon={<PlusOutlined />}
              ></Button>

              <h1 className="text-xl">{data.quantity}</h1>
              <Button
                danger
                icon={<MinusOutlined />}
                onClick={() => lessQuantitfromcart(data.id)}
                disabled={data.quantity === 1}
              ></Button>
            </div>

            <Button
              onClick={() => removeItemFromCart(data.id)}
              danger
              className="w-40 my-4"
            >
              Remove item{" "}
            </Button>
          </div>
        </div>))}





      </div>



    </>

  );
}

export default Cart;