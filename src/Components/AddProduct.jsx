import React, { useState } from 'react'
import axios from "axios";

const AddProduct = (props) => {
    const [product, setProduct] = useState({
        category: "",
        details: "",
        name:"",
        price: "",
        subcategory: "",
        url:""
      });
      const addingProduct = (e) => {
        e.preventDefault(e);
         axios.post("http://localhost:9090/products/addProduct", {
          category: product.category,
          details: product.details,
          name: product.name,
          price: product.price,
          subcategory: product.subcategory,
          url: product.url
        })
        .then((response)=>{
            alert("Product added Successfully");
            props.history.push("/products")
        })
        .catch((error) => {
          alert('Invalid email or password')
          console.log(error)
        })
      };
    
  return (
    <>
    <div className="offset-3 col-6 mt-4">
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Category
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={product.category}
            onChange={(e) => setProduct({ ...product, category: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Details
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            value={product.details}
            onChange={(e) => setProduct({ ...product, details: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Name of Product
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            value={product.name}
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Price
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            value={product.price}
            onChange={(e) => setProduct({ ...product, price: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Subcategory
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            value={product.subcategory}
            onChange={(e) => setProduct({ ...product, subcategory: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Url for Image
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            value={product.url}
            onChange={(e) => setProduct({ ...product, url: e.target.value })}
          />
        </div>
        <button type="submit"  className="btn btn-primary" onClick={addingProduct}>
          Add Product
        </button>
      </form>
      </div>
    </>
  )
}

export default AddProduct
