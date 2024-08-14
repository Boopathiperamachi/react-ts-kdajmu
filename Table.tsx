import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Menu from './Menu';

const Table: React.FC<{}> = () => {
  const [value, setValue] = useState([]);
  const getData = async () => {
    const data = await axios.get(
      'https://crudcrud.com/api/0a849da27c6c470481a0ccf0a502ec29/user'
    );
    console.log('BBBBBBBBBB', data);
    setValue(data.data);
  };
  const addData = async () => {
    return await axios.post(
      'https://crudcrud.com/api/0a849da27c6c470481a0ccf0a502ec29/user',
      { name: 'boopathi', id: 1 }
    );
  };
  const deleteData = async () => {
    return await axios.delete(
      'https://crudcrud.com/api/0a849da27c6c470481a0ccf0a502ec29/1'
    );
  };
  const updateData = async () => {
    return await axios.put(
      'https://crudcrud.com/api/0a849da27c6c470481a0ccf0a502ec29/1',
      {
        name: `boopathi peramachi`,
        id: 1,
      }
    );
  };
  useEffect(() => {
    setValue(value);
  }, [value]);
  const renderData = () => {
    return <tr></tr>;
  };
  return (
    <div>
      <Menu /> <button onClick={getData}>Get</button>{' '}
      <button onClick={addData}>ADD</button>{' '}
      <button onClick={deleteData}>Update</button>{' '}
      <button onClick={updateData}>Delete</button>{' '}
      <table>
        <thead>
          <th>name</th>
          <th>Id</th>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
};
export default Table;
