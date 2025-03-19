import React from 'react'   
import { useParams } from 'react-router-dom';
import { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
 
 function Read() {
    const [data, SetData]=useState([])
    const {id}=useParams();
      
   
useEffect(()=>{
  axios.get('http://localhost:3000/Details/' + id)
  .then(res =>SetData(res.data))
  .catch(err => console.log(err));

},[]) 
   return (
    <div className='d-flex flex-column justify-content-center align-items-center -bg-light vh=100'>
        <div className='w-50 rounded bg-white border shadow px-5 pt-3'>
            <h2>Details of users </h2>
            <div className='mb-2'>
            <strong>Name: {data.name || "Loading..."}</strong>
            </div>

            <div className='mb-3'>
                <strong>date-of-join:{data.dateofjoin}</strong>
            </div>

            <div className='mb-2'>
                <strong>require-of-admission:{data.requireofadmission}</strong>
            </div>

            
            <div className='mb-2'>
                <strong>attender:{data.attender}</strong>
            </div>

            <Link to={`/update/${id}`} className='btn btn-success'>Edit</Link>
            <Link to="/" className='btn btn-primary ms-3'>Back</Link>
            </div>
      
      </div>
       )
    }     

             


       
    
 
 export default Read
 