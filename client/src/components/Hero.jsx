import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      className="bg-gradient-to-r from-primary to-blue-500 text-white py-20 text-center"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-4xl font-bold mb-3">Welcome to MyShop</h1>
      <p className="text-lg text-blue-100 mb-5">
        Manage your products easily and beautifully
      </p>
      <a
        href="/create"
        className="px-6 py-3 bg-white text-primary rounded-full font-medium hover:bg-blue-100 transition"
      >
        Add Product
      </a>
    </motion.section>
  );
}
