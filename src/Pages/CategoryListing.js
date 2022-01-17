import React from 'react';
import axios from "axios";
import { useEffect } from "react";
import {useSelector, useDispatch} from "react-redux";
import {productCategories} from "../Redux/Actions/productActions";
import Category from './CategoryComponent';

const CategoryListing = () => {
  const categories = useSelector((state) => state);
  const dispatch = useDispatch( );

  const fetchCat = async () =>{
    const response = await axios
  .get("https://fakestoreapi.com/products/categories")
  .catch((error) =>{
    console.log("error", error);
  })
  dispatch(productCategories(response.data));
  }
  useEffect(() => {
     fetchCat();
  }, []);
  console.log("categories", categories);
    return (
        <>
          <Category/>
        </>
    )
}

export default CategoryListing
