import React from 'react'
import { useState, useEffect } from 'react'
import { API_URL } from '../Constants/URL'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import{Form, Button, Checkbox} from'semantic-ui-react';

function Update() {
   
    const[id, setId] = useState('');
    const[firstname, setFirstName] = useState('');
    const[lastname, setLastName] = useState('');
    const[checked, setChecked] = useState(false);
    
    const navigate = useNavigate();
    const UpdateUser = async () => {
        await axios.put(API_URL + id, {
            firstname,
            lastname,
            checked
        })
         navigate('/read');
       }
    useEffect(()=> {
        setId(localStorage.getItem('id'))
        setFirstName(localStorage.getItem('firstname'))
        setLastName(localStorage.getItem('lastname'))
        setChecked(localStorage.getItem('checked'))
    }, [])
  return (
    <Form className='form'>
        <Form.Field>
            <label>First Name : </label>
            <input value={firstname} 
            onChange={event => setFirstName
             (event.target.value)}
            placeholder='Enter First Name' />
        </Form.Field><br />
        <Form.Field>
            <label>Last Name :  </label>
            <input  value={lastname}
             onChange={event => setLastName
                (event.target.value)}
            placeholder='Enter last Name' />
        </Form.Field><br />
        <Form.Field>
            <Checkbox value={checked} 
             onChange={() => setChecked
                (!checked)}
            label='Agree the terms & condition ' />
        </Form.Field><br />
        <Button className='btn' onClick={UpdateUser}>Update</Button>
    </Form>
  )
}

export default Update