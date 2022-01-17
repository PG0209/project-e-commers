/** @format */

import React from "react";
import ProductComponentStyles from "./ProductComponentStyles.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  //console.log(products);

  return (
    <>
      {Object.keys(products).length === 0 ?(<div>Loading...</div>) :<div className="container">
        {products.map((product) => {
          const { id, title, image, category, price } = product;
          return (
            <Link to={`/product/${id}`} style={{textDecoration: 'none', color:'inherit'}} >
            <div className="card" key={id}>
              <img src={image} className="card-img-top" alt="title" />
              <div className="card-body">
                <hr />
                <h5 className="card-title">00{title}</h5>
                <h4>$:{price}</h4>
                <p>{category}</p>
              </div>
            </div>
            </Link>
          );
        })}
      </div>}
    </>
  );
};

export default ProductComponent;
