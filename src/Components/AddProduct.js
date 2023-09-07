import React, { useState } from 'react'

const AddProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [company, setCompany] = useState('');
    const [error,setError]=useState(false);
    const addproduct=async()=>{

        if (!name || !price || !category || !company) {
            
            setError(true)
            return false;
        }




        console.log(name,price,company);
        const userId=JSON.parse(localStorage.getItem('users'))._id;
        console.log(userId._id);
        let result=await fetch('http://localhost:5000/add-products',{
            method:'post',
            body:JSON.stringify({name,price,category,company}),
            headers:{
                'Content-Type':'application/json'
            }
        });

        result = await result.json();
        console.log(result);

    }
    return (
        <div className='product'>
            <h1>AddProduct</h1>
            

            <input type='text' className='inputbox' 
            onChange={(e)=>{setName(e.target.value)}} value={name}
            placeholder='Enter Product Name'></input>
            {error && !name && <span className='validate-input'>Enter valid name</span>} 

            <input type='text' className='inputbox' 
            onChange={(e)=>{setPrice(e.target.value)}} value={price}
            placeholder='Enter Product Price'></input>
            {error && !price && <span className='validate-input'>Enter valid price</span>}

            <input type='text' className='inputbox' 
            onChange={(e)=>{setCategory(e.target.value)}} value={category}
            placeholder='Enter Product Category'></input>
            {error && !category && <span className='validate-input'>Enter valid category</span>}



            <input type='text' className='inputbox' 
            onChange={(e)=>{setCompany(e.target.value)}} value={company}
            placeholder='Enter Product Company'></input>
            {error && !company && <span className='validate-input'>Enter valid company</span>}


            <button onClick={addproduct} className='btn-reg'>Add Product</button>
        </div>
    )
}

export default AddProduct;