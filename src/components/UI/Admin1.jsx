/* eslint-disable max-lines */
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import {  Table , Button, Input } from 'reactstrap';
import '../../styles/register.css';
const Admin1 = () => {
    const [data, setData] = useState([]);
    let [cars, setCars] = useState([]);
   useEffect(() => {
    axios.get('http://localhost:8001/cars')
    // .then(carrrs => setCars(carrrs.data))
    .then(res => {
        setData(res.data)
        setCars(res.data);
    })
    .catch(err => console.log(err));
   },[])
   const handleDelete = (id) => {
      axios.delete('http://localhost:8001/deletecar/'+ id)
      .then(res => {console.log(res)
       window.location.reload()})
      .catch(errr => console.log(errr))
   }
   const Filter = (event) =>{
     setCars(data.filter(f => f.name.toLowerCase().includes(event.target.value.toLowerCase())))
   }
  return (
    <div>
        <div className= "abc"><Input   type ="text" onChange={Filter} placeholder="Search Car"/></div>
        <Table hover>
  <thead>
    <tr>
      <th>
        No.
      </th>
      <th>
        Car
      </th>
      <th>
        Email
      </th>
      <th>
        From
      </th>
      <th>
        To
      </th>
      <th>
        Date
      </th>
      <th>
        Time
      </th>
      <th>
        Transaction Id
      </th>
      <th>
        Action
      </th>
    </tr>
  </thead>
  <tbody>
    {cars.map((carItem, index) => (
                            <tr>
                                <th>
                                    {index+1}
                                </th>
                                <td>
                                    {carItem.name}
                                </td>
                                <td>
                                    {carItem.email}
                                </td>
                                <td>
                                    {carItem.fromAddress}
                                </td>
                                <td>
                                    {carItem.toAddress}
                                </td>
                                <td>
                                    {carItem.journeyDate}
                                </td>
                                <td>
                                    {carItem.journeyTime}
                                </td>
                                <td>
                                    {carItem.trans}
                                </td>
                                <td>
      <Button variant="outline-danger" onClick={(e) => handleDelete(carItem._id)}>Delete</Button>{' '}      
                                </td>
                            </tr>
                        ))}
  </tbody>
</Table>
    </div>
  );
};
export default Admin1