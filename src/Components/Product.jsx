import React, { useEffect, useState } from 'react'
import {NavLink, useParams} from 'react-router-dom'
import Skeleton from 'react-loading-skeleton';
import axios from "axios";

const Product = (props) => {
    const {productId} = useParams();
    const [product, setProduct] =useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        const getProduct = async () =>{
            setLoading(true);
            const response = await fetch(`http://localhost:9090/products/getById/${productId}`);
            setProduct(await response.json());
            setLoading(false);
        }
        getProduct();
    },[])
    const Loading = () =>{
        return(
            <>
                <div className="col-md-6">
                    <Skeleton height={400}/>
                </div>
                <div className="col-md-6" style={{lineHeight:2}}>
                    <Skeleton height={50} width={300}/>
                    <Skeleton height={75} />
                    <Skeleton height={50}/>
                    <Skeleton height={150}/>
                    <Skeleton height={50} width={100}/>
                    <Skeleton height={50} width={100} style={{marginLeft:6}}/>

                </div>
            </>
        )
    }
    const addingToCart = ()=>{
        const abs = JSON.parse(localStorage.getItem('userId'));
        axios.post(`http://localhost:9090/cart/${abs}/add/${productId}`)
        alert("Product added to cart successfully.")
        props.history.push("/cart");
    }
    const ShowProduct = () =>{
        return (
            <>
                <div className="col-md-6">
                    <img src={product.url} alt={product.name} height="400px" width="400px"/>
                </div>
                <div className="col-md-6">
                    <h4 className="text-uppercase text-black-50">{product.category}</h4>
                    <h1 className="display-5">{product.name}</h1>
                    <p className='lead fw-bolder'>Rating - 4.5 <span class="fa fa-star checked"></span></p>
                    <h3 className="display-6 fw-bold my-4">Rs. {product.price}</h3>
                    <p className="lead">{product.details}</p>
                    <button className='btn btn-outline-dark px-4 py-2' onClick={addingToCart}>Add to Cart</button>
                    <NavLink to="/cart" className='btn btn-dark ms-2 px-3'>Go to Cart</NavLink>
                </div>
            </>
        )
    }
  return (
    <div>
      <div className="container py-5">
        <div className="row py-4">
            {loading ? <Loading/> :<ShowProduct/>}
        </div>
      </div>
    </div>
  )
}

export default Product
