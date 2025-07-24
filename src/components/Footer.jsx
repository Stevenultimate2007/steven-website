import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 px-6 text-center">
      <p>&copy; {new Date().getFullYear()} Steven Nty</p>
      <div className="mt-4 space-x-6">
        <Link to="/impressum" className="hover:text-blue-400">Impressum</Link>
        <Link to="/datenschutz" className="hover:text-blue-400">Datenschutz</Link>
      </div>
    </footer>
  );
}
