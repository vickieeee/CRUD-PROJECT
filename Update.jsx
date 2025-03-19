import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function Update() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [values, setValues] = useState({
    name: '',
    dateofjoin: '',
    requireofadmission: '',
    attender: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/Details/${id}`);
        setValues(res.data);
      } catch (err) {
        console.error('Error fetching data:', err);
      }
    };

    fetchData();
  }, [id]); 

  const handleUpdate = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`http://localhost:3000/Details/${id}`, values);
      navigate('/');
    } catch (err) {
      console.error('Error updating data:', err);
    }
  };

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
      <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
        <form onSubmit={handleUpdate}>
          <div className='mb-2'>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              name='name'
              className='form-control'
              placeholder='Name'
              value={values.name}
              onChange={e => setValues({ ...values, name: e.target.value })}
            />
          </div>
          <div className='mb-2'>
            <label htmlFor='dateofjoin'>Date</label>
            <input
              type='date'
              name='dateofjoin'
              className='form-control'
              value={values.dateofjoin}
              onChange={e => setValues({ ...values, dateofjoin: e.target.value })}
            />
          </div>
          <div className='mb-2'>
            <label htmlFor='requireofadmission'>Require of Admission</label>
            <input
              type='text'
              name='requireofadmission'
              className='form-control'
              placeholder='Require of Admission'
              value={values.requireofadmission}
              onChange={e => setValues({ ...values, requireofadmission: e.target.value })}
            />
          </div>
          <div className='mb-2'>
            <label htmlFor='attender'>Attender Name</label>
            <input
              type='text'
              name='attender'
              className='form-control'
              placeholder='Attender Name'
              value={values.attender}
              onChange={e => setValues({ ...values, attender: e.target.value })}
            />
          </div>
          <button type='submit' className='btn btn-success'>Submit</button>
          <Link to='/' className='btn btn-primary ms-3'>Back</Link>
        </form>
      </div>
    </div>
  );
}

export default Update;
