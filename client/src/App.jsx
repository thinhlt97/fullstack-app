import { Routes, Route, Link } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import ProductDetail from './components/ProductDetail';

export default function App(){
  return (
    <div style={{maxWidth:900, margin:'0 auto', padding:20}}>
      <header>
        <h2>My Shop</h2>
        <nav>
          <Link to="/">Home</Link> | <Link to="/new">Add product</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/new" element={<ProductForm />} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}
