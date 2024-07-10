import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeName } from '../store/slices';


const CarForm = () => {
  
  const dispatch= useDispatch();
 const name= useSelector((state)=>{
    return state.form.name;
  })
  const handleChange=(e)=>{
dispatch(changeName(e.target.value));
  };
  return (
    <div className='car-form panel'>
      <h4 className='subtitle is-3'>Add Car</h4>
      <form>
        <div className='field-group'> 
          <div className='field'>
            <label className='label'>Name</label>
            <input className='input is-expanded' value={name} onChange={handleChange}/>
          </div>

        </div>
      </form>
    </div>
  )
}

export default CarForm;