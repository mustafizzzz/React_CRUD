import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = async () => {
        let results = await fetch('http://localhost:5000/products');
        results = await results.json();
        setProducts(results);
    }

    const deleteproducts=async(id)=>{
        console.log(id);
        let result = await fetch(`http://localhost:5000/products/${id}`,{
            method:"Delete"
        })

        result = await result.json();
        if (result){
            alert("Record is delete")
            getProducts();
        }else{
            alert('No record Found')
        }

    }

    const searchProducts= async(event)=>{
        console.log(event.target.value);
        let key=   event.target.value;
        if (key) {
            let results = await fetch(`http://localhost:5000/search/${key}`);
            results = await results.json();
            if (results) {
                setProducts(results);      
            }
            
        }else{
            getProducts();
        }

    }

    
    return (
        <div className='product-list'>
            <h2>ProductList</h2>
            <input type='text' placeholder='Search Products' className='search-product-box'
            onChange={searchProducts}
            ></input>
            <ul>
                        <li>S.no</li>
                        <li>Name</li>
                        <li>Price</li>
                        <li>Category</li>
                        <li>Operation</li>
                    </ul>
            {
                products.length>0 ?products.map((item,index) => 

                    <ul key={item._id}>
                        <li>{index + 1}</li>
                        <li>{item.name}</li>
                        <li>$ {item.price}</li>
                        <li>{item.category}</li>
                        <li><button onClick={()=>deleteproducts(item._id)}>delete</button>
                        <Link to={'/update/'+item._id}>Update</Link></li>
                    </ul>
                )
                :<h1>No Result Found</h1>
            }
        </div>
    )
}

export default ProductList