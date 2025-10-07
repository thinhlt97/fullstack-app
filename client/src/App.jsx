import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import ProductList from './components/ProductList'
import ProductForm from './components/ProductForm'
import ProductDetail from './components/ProductDetail'

export default function App(){
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8">
        <Hero />
        <div className="mt-8">
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/new" element={<ProductForm />} />
            <Route path="/products/:id" element={<ProductDetail />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  )
}