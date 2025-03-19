import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
function Home() {
const [data, SetData]=useState([ ])
const navigate=useNavigate();
    useEffect(()=>{
        axios.get('http://localhost:3000/Details')
        .then(res =>SetData(res.data))
        .catch(err => console.log(err));

    },[ ])

const handleDelete=(id)=>{
    const confirm= window.confirm("would you like to delete the user?");
    if(confirm){
        axios.delete('http://localhost:3000/Details/' + id)
        .then(res =>{
           location.reload();
        }).catch(err => console.log(err));
    }
}
  return (
    <div className='d-flex flex-column justify-content-center align-items-center -bg-light vh=100'>
        <h1>List of <span>users</span></h1>
        
        <div className='w-75 rounded bg-white border shadow p-4'>
        <div className='d-flex justify-content-end'>
            <Link to="/create" className='btn btn-success'>ADD +</Link> 
            </div>


           <table className='table table-striped'>
            <thead>
                <tr>
                   <th>ID</th>
                <th>Name</th>
                <th>Date-of-join</th>
                <th>require-of-addmission</th>
                <th>attender</th>
                <th>ACTION</th>
                </tr>
             </thead>
            <tbody>
                {
                   data && data.map((d, index) =>(
                        <tr key={data.id}>
                            <td>{index + 1}</td>
                            <td>{d.name}</td>
                            <td>{d.dateofjoin}</td>
                            <td>{d.requireofadmission}</td>
                            <td>{d.attender}</td>

                            <td>
                                
                                <Link to={`/read/${d.id}`} className='btn btn-sm btn-primary me-2'>REAd</Link>
                                <button onClick={e => handleDelete(d.id)}className='btn btn-sm btn-danger me-2'>DELETE</button>
                            </td>
                            </tr>
                             ))
                }
            </tbody>
           </table>
        </div>
    </div>
  )

}

export default Home
