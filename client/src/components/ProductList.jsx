import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const API = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export default function ProductList(){
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    axios.get(`${API}/api/products`).then(r => setProducts(r.data)).catch(console.error);
  },[]);

  return (
    <div>
      <h3>Products</h3>
      <ul>
        {products.map(p => (
          <li key={p._id}>
            <Link to={`/products/${p._id}`}>{p.title} — ${p.price}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
