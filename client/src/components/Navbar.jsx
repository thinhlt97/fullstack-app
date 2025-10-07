import { Link } from 'react-router-dom'
import { HiOutlineShoppingBag } from 'react-icons/hi'

export default function Navbar(){
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <HiOutlineShoppingBag className="text-2xl text-primary" />
          <span className="font-semibold text-lg">My Shop</span>
        </Link>

        <nav className="space-x-4">
          <Link to="/" className="text-sm hover:text-primary">Home</Link>
          <Link to="/new" className="btn-primary text-sm">Add product</Link>
        </nav>
      </div>
    </header>
  )
}