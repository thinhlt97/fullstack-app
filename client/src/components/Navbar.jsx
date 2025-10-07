import { motion } from "framer-motion";
import { FaShoppingCart } from "react-icons/fa";

export default function Navbar() {
  return (
    <motion.nav
      className="bg-white shadow-sm sticky top-0 z-50"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-primary tracking-tight">
          MyShop
        </h1>
        <div className="flex gap-4">
          <a href="/" className="text-gray-700 hover:text-primary">Home</a>
          <a href="/create" className="text-gray-700 hover:text-primary">Add Product</a>
          <FaShoppingCart className="text-primary" size={22} />
        </div>
      </div>
    </motion.nav>
  );
}
