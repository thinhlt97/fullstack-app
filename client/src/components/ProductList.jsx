import React, {useEffect, useState} from 'react'
import axios from 'axios'
import ProductGrid from './ProductGrid'
import { toast } from 'react-toastify'

const API = import.meta.env.VITE_API_URL || 'http://localhost:5000'

export default function ProductList(){
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const load = async () => {
    setLoading(true)
    try{
      const res = await axios.get(`${API}/api/products`)
      setProducts(res.data)
    }catch(err){
      console.error(err)
      toast.error('Không tải được danh sách sản phẩm')
    }
    setLoading(false)
  }

  useEffect(()=>{ load() }, [])

  const handleDelete = async (id) => {
    if(!confirm('Bạn có chắc muốn xóa?')) return
    try{
      await axios.delete(`${API}/api/products/${id}`)
      setProducts(prev => prev.filter(p => p._id !== id))
      toast.success('Đã xóa')
    }catch(err){
      console.error(err)
      toast.error('Xóa thất bại')
    }
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Sản phẩm</h2>
      {loading ? (
        <div className="py-12 text-center">Đang tải...</div>
      ) : (
        <ProductGrid products={products} onDelete={handleDelete} />
      )}
    </div>
  )
}