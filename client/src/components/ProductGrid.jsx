import ProductCard from './ProductCard'

export default function ProductGrid({products, onDelete}){
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map(p => (
        <ProductCard key={p._id} product={p} onDelete={onDelete} />
      ))}
    </div>
  )
}