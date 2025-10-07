import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const API = import.meta.env.VITE_API_URL || 'http://localhost:5000'

export default function ProductForm(){
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const navigate = useNavigate()

  const submit = async (e) => {
    e.preventDefault()
    try{
      await axios.post(`${API}/api/products`, { title, price: Number(price) })
      toast.success('Tạo sản phẩm thành công')
      navigate('/')
    }catch(err){
      console.error(err)
      toast.error('Tạo thất bại')
    }
  }

  return (
    <form onSubmit={submit} className="max-w-xl bg-white p-6 rounded-lg shadow">
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Tiêu đề</label>
        <input value={title} onChange={e=>setTitle(e.target.value)} className="w-full border rounded px-3 py-2" required />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Giá</label>
        <input type="number" value={price} onChange={e=>setPrice(e.target.value)} className="w-full border rounded px-3 py-2" required />
      </div>
      <div className="flex gap-2">
        <button className="btn-primary">Tạo</button>
        <button type="button" onClick={()=>navigate('/')} className="px-4 py-2 border rounded">Hủy</button>
      </div>
    </form>
  )
}