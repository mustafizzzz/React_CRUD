import React, { useEffect, useState } from 'react';
import {useParams,useNavigate, Navigate} from 'react-router-dom';

const UpdateProduct = () => {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [company, setCompany] = useState('');
    const [error, setError] = useState(false);
    const params = useParams();
    const navigate=useNavigate();

    useEffect(()=>{
        
        getprodductDetails();
    },[])

    const getprodductDetails = async()=>{
        console.log("iam",params);
        
        let result = await fetch(`http://localhost:5000/products/${params.id}`);
        result = await result.json();
        console.log(result);
        setName(result.name);
        setPrice(result.price);
        setCategory(result.category);
        setCompany(result.company);

    }

    const updateProduct = async () => {
        console.log(name, price, category, company);
        let result= fetch(`http://localhost:5000/products/${params.id}`,{
            method:'Put',
            body:JSON.stringify({name, price, category, company}),
            headers:{
                'Content-Type':'application/json'
            }
        });

      
        navigate('/');




    }





    return (
        <div className='product'>
            <h1>UpdateProduct</h1>
            <input type='text' className='inputbox'
                onChange={(e) => { setName(e.target.value) }} value={name}
                placeholder='Enter Product Name'></input>
            {error && !name && <span className='validate-input'>Enter valid name</span>}

            <input type='text' className='inputbox'
                onChange={(e) => { setPrice(e.target.value) }} value={price}
                placeholder='Enter Product Price'></input>
            {error && !price && <span className='validate-input'>Enter valid price</span>}

            <input type='text' className='inputbox'
                onChange={(e) => { setCategory(e.target.value) }} value={category}
                placeholder='Enter Product Category'></input>
            {error && !category && <span className='validate-input'>Enter valid category</span>}



            <input type='text' className='inputbox'
                onChange={(e) => { setCompany(e.target.value) }} value={company}
                placeholder='Enter Product Company'></input>
            {error && !company && <span className='validate-input'>Enter valid company</span>}


            <button onClick={updateProduct} className='btn-reg'>Update Product</button>
        </div>
    )

}

export default UpdateProduct;