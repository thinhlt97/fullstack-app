export default function Footer(){
  return (
    <footer className="bg-white border-t mt-10">
      <div className="container mx-auto px-4 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} My Shop — Built with ❤️
      </div>
    </footer>
  )
}