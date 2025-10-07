import React, {useEffect, useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

const API = import.meta.env.VITE_API_URL || 'http://localhost:5000'

export default function ProductDetail(){
  const { id } = useParams()
  const [p, setP] = useState(null)
  const nav = useNavigate()

  useEffect(()=>{
    axios.get(`${API}/api/products/${id}`).then(r=>setP(r.data)).catch(err=>{console.error(err); toast.error('Không tải được')} )
  },[id])

  if(!p) return <div>Loading...</div>

  return (
    <div className="max-w-2xl bg-white rounded-lg shadow p-6">
      <h3 className="text-2xl font-semibold">{p.title}</h3>
      <p className="text-gray-600 mt-2">Giá: ${p.price}</p>
      <p className="mt-4 text-gray-700">{p.description}</p>
      <div className="mt-6">
        <button onClick={async ()=>{ await axios.delete(`${API}/api/products/${id}`); toast.success('Đã xóa'); nav('/')} } className="px-4 py-2 bg-red-500 text-white rounded">Xóa</button>
      </div>
    </div>
  )
}