import React, { useState, useEffect } from 'react';
import './App.css'
import axios from 'axios';

const API_URL = 'https://apigenerator.dronahq.com/api/HxT-1_Bi/employeedata';

const Table = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(API_URL);
      setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Phone Number</th>
          <th>Email</th>
          <th>Vehicle</th>
          <th>Job Title</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.FirstName}</td>
            <td>{item.PhoneNumber}</td>
            <td>{item.Email}</td>
            <td>{item.Vehicle}</td>
            <td>{item.JobTitle}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
