import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="py-10 px-10 bg-gray-950 text-gray-500">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-white font-bold text-lg">Accuat</Link>
        <div className="flex items-center gap-6 text-sm">
          <a href="#" className="hover:text-gray-300 transition-colors">Privacy</a>
          <a href="#" className="hover:text-gray-300 transition-colors">Terms</a>
          <a href="#" className="hover:text-gray-300 transition-colors">Contact</a>
        </div>
        <span className="text-sm">© 2024 Accuat</span>
      </div>
    </footer>
  )
}
