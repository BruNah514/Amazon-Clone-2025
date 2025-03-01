 import React, { useEffect, useState } from "react";
import classes from "../ProductDetail/Product.module.css";


import LayOut from "../../Components/LayOut/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/endPoints";
import Loader from "../../Components/Loader/Loader";  
import ProductCard from "../../Components/Product/ProductCard";


function ProductDetail() {
  const [product, setProduct] = useState({});
  const [isLoading, setisLoading] = useState(false);
  const { productId } = useParams();
  useEffect(() => {
    setisLoading(true);
    axios
      .get(`${productUrl}/products/${productId}`)

      .then((res) => {
        
        setProduct(res.data);
        setisLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setisLoading(false);
      });
  }, []);
  
  return (
    <LayOut>
      {isLoading? (<Loader />):(<ProductCard
       product={product} 
      flex={true}
      renderDesc={true}
      renderAdd={true}
      />)}
     
      
    </LayOut>
  );
}

export default ProductDetail;
