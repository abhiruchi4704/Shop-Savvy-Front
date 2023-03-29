import React from 'react'
import { useState, useEffect } from 'react';

const OrderedProducts = () => {
    const [order, setOrder] = useState([]);
    const [loading, setLoading] =useState(false);

    useEffect(()=>{
        const getProducts = async () =>{
            setLoading(true);
            const abs = JSON.parse(localStorage.getItem('userId'));
            const response = await fetch(`http://shopsavvy-env.eba-dg3qdgp9.ap-south-1.elasticbeanstalk.com/order/${abs}/getOrders`)
            setOrder(await response.json());
            setLoading(false);
        }
        getProducts();
    },[])
  return (
    <>
        {order.map((prod)=>{
        return(

            <div class="card mb-3 mt-3 offset-1 col-10">
            <div class="row g-0">
              <div class="col-md-4">
                <img src={prod.product.url} class="card-img-top" alt={prod.product.name} height="300px"/>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h4 className="text-uppercase text-black-50">{prod.product.category}</h4>
                  <h5 className="card-title fw-bold  mb-0">{prod.product.name.substring(0,12)}</h5>
                  <p class="card-text">{prod.product.details}</p>
                  <h3 className="display-6 fw-bold my-4">Rs. {prod.product.price}</h3>
                  <h4 className="text-uppercase text-black-50">Quantity: {prod.quantity}</h4>
                </div>
              </div>
            </div>
          </div>
        )
    })}
    </>
  )
}

export default OrderedProducts
