import { Link } from 'react-router-dom'
import { HiOutlineTrash } from 'react-icons/hi'

export default function ProductCard({product, onDelete}){
  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col">
      <div className="h-40 bg-gray-100 rounded-md flex items-center justify-center text-gray-400">Image</div>
      <div className="mt-3 flex-1">
        <h3 className="font-semibold text-lg">{product.title}</h3>
        <p className="text-gray-500 mt-1">${product.price}</p>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <Link to={`/products/${product._id}`} className="text-sm text-primary hover:underline">View</Link>
        <button onClick={()=> onDelete(product._id)} className="text-red-500 hover:text-red-600 flex items-center gap-1 text-sm">
          <HiOutlineTrash /> Delete
        </button>
      </div>
    </div>
  )
}