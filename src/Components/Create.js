import React, { useState } from 'react'
import{Form, Button, Checkbox} from'semantic-ui-react';
import { API_URL } from '../Constants/URL'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Create() {
    const[firstname, setFirstName] = useState('');
    const[lastname, setLastName] = useState('');
    const[checked, setChecked] = useState(false);
    const navigate = useNavigate();
    const postData = async () => {
      await axios.post(API_URL, {
            firstname,
            lastname,
            checked
        })
        navigate('/Read');
    }

 return (
    <Form className='form'>
        <Form.Field>
            <label>First Name : </label>
            <input className='inputbox' value={firstname} 
            onChange={event => setFirstName
             (event.target.value)}
            placeholder='Enter First Name' />
        </Form.Field><br />
        <Form.Field>
            <label>Last Name :  </label>
            <input  className='inputbox' value={lastname}
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
        <Button   className='btn' onClick={postData}>Submit</Button>
    </Form>
  )
}

export default Create