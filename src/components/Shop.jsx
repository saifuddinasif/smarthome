import React, { useContext,useState } from 'react'
import { ProduceContext } from './Root';
import Product  from './Product';
import { toast } from 'react-toastify';
import {addToDb} from  '../utils/fakeDB'
const Shop = () => {
  const product= useContext(ProduceContext)

  const products = product[0];

const [cart, setCart] = useState([])

const handleAddToCart = (product) => {

// setCart(previous => [...previous, product])
// console.log(cart);

let newCart = [];

const exists = cart.find(existingProduct =>  existingProduct.id === product.id )

   if (!exists){
    product.quantity =1;
    newCart = [...cart,product]

   }else{

    const rest = cart.filter(existingProduct =>  existingProduct.id !== product.id )

    exists.quantity = exists.quantity + 1;

    newCart= [...rest, exists]
   }

   setCart(newCart)

 addToDb(product.id);

 toast.success('product added',{autoClose : 500} )
}
  return (
    <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <div className='grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8'>
     
               
           {products.map (product => (
            <Product key={product.id} 
            
            handleAddToCart={handleAddToCart}
            product={product}/>
           ))}  


      </div>
    </div>
  )
}

export default Shop
