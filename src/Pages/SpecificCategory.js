import React, {useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {selctedCategory} from '../Redux/Actions/productActions';
import { useSelector } from 'react-redux';

const SpecificCategory = () => {
    const categories = useSelector((state) => state.categories);
    // const product = useSelector((state) => state.product);
    const {productCategory} = useParams();
    console.log(productCategory);
    const dispatch = useDispatch();
    
    const fetchSpecificCategory = async () =>{
        const response = await axios
        .get(`https://fakestoreapi.com/products/category/${productCategory}`)
        .catch((error)=>{
            console.log("error", error);
        })
        dispatch(selctedCategory(response.data));
    }
    useEffect(() => {
          fetchSpecificCategory();
      }, []);
    
    return (
        <div className='cat'>
            <h1>want to display selected category here</h1>
        </div>
    )
}

export default SpecificCategory
