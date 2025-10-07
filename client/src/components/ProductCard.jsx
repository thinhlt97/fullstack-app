import { motion } from "framer-motion";

export default function ProductCard({ product, onDelete }) {
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-card overflow-hidden hover:shadow-lg transition-shadow duration-300"
      whileHover={{ scale: 1.03 }}
    >
      <img
        src={product.image || "https://via.placeholder.com/400x250"}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-gray-500 text-sm mb-3">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-primary font-bold text-lg">${product.price}</span>
          <button
            onClick={() => onDelete(product._id)}
            className="text-red-500 text-sm font-medium hover:text-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </motion.div>
  );
}
