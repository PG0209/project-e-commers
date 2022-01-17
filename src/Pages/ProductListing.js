import React from "react"
import Header from "../Components/Header"
import {useSelector, useDispatch} from "react-redux"
import axios from "axios"
import { useEffect } from "react"
import {setProducts} from "../Redux/Actions/productActions"
import ProductComponent from "./ProductComponent";

const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

    const fetchProducts = async () =>{
      const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((error) =>{
        console.log("error", error);
      });
      dispatch(setProducts(response.data));
    }
    useEffect(() =>{
      fetchProducts();
    },[]);
    console.log("products:", products);
     return(
         <>
         <Header/>
         <ProductComponent/>
         </>

    )
}
export default ProductListing;