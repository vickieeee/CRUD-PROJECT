import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Create() {
  const [values, setValues] = useState({
    name: '',
    dateofjoin: '',
    requireofadmission: '',
    attender: ''
  });

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:3000/Details', values);
      navigate('/');
    } catch (err) {
      console.error('Error submitting form:', err);
    }
  };

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
      <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
        <form onSubmit={handleSubmit}> 
          <div className='mb-2'>
            <label htmlFor='name'>Name</label>
            <input 
              type='text' 
              name='name' 
              id='name'
              className='form-control' 
              placeholder='Name'  
              value={values.name}
              onChange={e => setValues({...values, name: e.target.value})} 
            />
          </div>
          <div className='mb-2'>
            <label htmlFor='dateofjoin'>Date</label>
            <input 
              type='date' 
              id='dateofjoin'
              name='dateofjoin' 
              className='form-control'  
              value={values.dateofjoin}
              onChange={e => setValues({...values, dateofjoin: e.target.value})} 
            />
          </div>
          <div className='mb-2'>
            <label htmlFor='requireofadmission'>Require of Admission</label>
            <input 
              type='text' 
              id='requireofadmission'
              name='requireofadmission' 
              className='form-control' 
              placeholder='Require of Admission' 
              value={values.requireofadmission}
              onChange={e => setValues({...values, requireofadmission: e.target.value})} 
            />
          </div>
          <div className='mb-2'>
            <label htmlFor='attender'>Attender Name</label>
            <input 
              type='text' 
              id='attender'
              name='attender' 
              className='form-control' 
              placeholder='Attender Name' 
              value={values.attender}
              onChange={e => setValues({...values, attender: e.target.value})} 
            />
          </div>
          <button type='submit' className='btn btn-success'>Submit</button>
          <Link to="/" className='btn btn-primary ms-3'>Back</Link>
        </form> 
      </div>
    </div>
  );
}

export default Create;
