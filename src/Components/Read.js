import axios from 'axios';
import React, {useState, useEffect} from 'react'
import{Table, Button} from 'semantic-ui-react'
import { API_URL } from '../Constants/URL';
import { useNavigate } from 'react-router-dom';

function Read() {
    const [apiData, setApidata]= useState([]);

    const navigate = useNavigate();
    const updateUser = ({firstname, lastname, checked,id}) => {
      localStorage.setItem('id', id)
      localStorage.setItem('firstname', firstname)
      localStorage.setItem('lastname', lastname)
      localStorage.setItem('checked', checked)
      navigate('/Update')
    }

    const deleteUser = async (id) => {
      await axios.delete(API_URL + id)
      callGetApi()
     }

     const callGetApi = async () => {
      const resp=await axios.get(API_URL);
      setApidata(resp.data)
    }

    useEffect(()=>{
      callGetApi();
    }, []);

  return (
    <Table singleLine>
      <Table.Header className='tablehead'>
        <Table.Row>
          <Table.HeaderCell>First Name</Table.HeaderCell>
          <Table.HeaderCell>Last Name</Table.HeaderCell>
          <Table.HeaderCell>Checked</Table.HeaderCell>
          <Table.HeaderCell>Delete</Table.HeaderCell>
          <Table.HeaderCell>Update</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body className='tablebody'>
        {
          apiData.map(data => (
            <Table.Row key={data.id}>
            <Table.Cell>{data.firstname}</Table.Cell>
            <Table.Cell>{data.lastname}</Table.Cell>
            <Table.Cell>{data.checked  ? 'checked' : 'Not Checked'}</Table.Cell>
            <Table.Cell><Button className='btn' onClick={() => deleteUser(data.id)}>Delete</Button></Table.Cell>
            <Table.Cell><Button className='btn' onClick={() => updateUser(data)}>Update</Button></Table.Cell>
          </Table.Row>
          ))
        }
      </Table.Body>
    </Table>
  )
}

export default Read