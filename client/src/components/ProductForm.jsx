import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const API = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export default function ProductForm(){
  const [title,setTitle] = useState('');
  const [price,setPrice] = useState('');
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    await axios.post(`${API}/api/products`, {
      title, price: Number(price)
    });
    navigate('/');
  };

  return (
    <form onSubmit={submit}>
      <div><input value={title} onChange={e=>setTitle(e.target.value)} placeholder="Title" required/></div>
      <div><input value={price} onChange={e=>setPrice(e.target.value)} placeholder="Price" type="number" required/></div>
      <button type="submit">Create</button>
    </form>
  );
}
