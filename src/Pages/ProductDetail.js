/** @format */

import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../Redux/Actions/productActions";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  const { price, title, id, category, image} = product;
  const { productId } = useParams();
  console.log(productId);
  const dispatch = useDispatch();

  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((error) => {
        console.log("error", error);
      });
    dispatch(selectedProduct(response.data));
    
  };
  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail();
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);
  return (
    <>
      <Header />
      {Object.keys(product).length === 0 ? (
        <div>loading....</div>
      ) : (
        <div className="card" key={id}>
          <img src={image} className="card-img-top" alt="title" />
          <div className="card-body">
            <hr />
            <h5 className="card-title">{title}</h5>
            <h4>$;;;;;:{price}</h4>
            <p>{category}</p>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default ProductDetail;
