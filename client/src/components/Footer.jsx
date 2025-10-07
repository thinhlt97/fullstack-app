export default function Footer() {
  return (
    <footer className="bg-dark text-gray-300 py-6 mt-10 text-center">
      <p>© {new Date().getFullYear()} MyShop. All rights reserved.</p>
      <p className="text-sm mt-2 text-gray-500">
        Built with ❤️ using React + Tailwind + Express
      </p>
    </footer>
  );
}
