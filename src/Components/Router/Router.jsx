import React from 'react'
import {BrowserRouter ,Routes,Route} from 'react-router-dom'
import Landing from '../../Pages/Landing/Landing';
import SignUp from '../../Pages/Auth/SignUp';
import Payment from '../../Pages/Payment/Payment';
import Order from '../../Pages/Orders/Order';
import Cart from '../../Pages/Cart/Cart';
import Results from '../../Pages/Results/Results';
import ProductDetail from '../../Pages/ProductDetail/ProductDetail';

function Routing() {
  return (
   <BrowserRouter>
    <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/SignUp' element={<SignUp/>} />
        <Route path='/Payments' element={<Payment/>} />
        <Route path='/Orders' element={<Order/>} />
        <Route path='/category/:categoryName'element={<Results/>} />
        <Route path='/Carts' element={<Cart/>} />
        <Route path="/products/:productId" element={<ProductDetail/>} />
    </Routes>
   </BrowserRouter>
  );
}

export default Routing