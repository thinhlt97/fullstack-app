import React, {useEffect, useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
const API = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export default function ProductDetail(){
  const { id } = useParams();
  const [p, setP] = useState(null);
  const nav = useNavigate();

  useEffect(()=>{
    axios.get(`${API}/api/products/${id}`).then(r=>setP(r.data)).catch(console.error);
  },[id]);

  if(!p) return <div>Loading...</div>;

  return (
    <div>
      <h3>{p.title}</h3>
      <p>Price: ${p.price}</p>
      <p>{p.description}</p>
      <button onClick={async ()=>{
        await axios.delete(`${API}/api/products/${id}`);
        nav('/');
      }}>Delete</button>
    </div>
  );
}
