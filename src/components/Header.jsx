import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-black/80 text-white backdrop-blur-md shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-wide">
          STEVEN NTY
        </Link>

        {/* Navigation */}
        <nav className="space-x-6 hidden md:flex">
          <a href="/#about" className="hover:text-[#1E90FF] transition">Über mich</a>
          <a href="/#portfolio" className="hover:text-[#1E90FF] transition">Portfolio</a>
          <a href="/#pricing" className="hover:text-[#1E90FF] transition">Pakete</a>
          <a href="/#approach" className="hover:text-[#1E90FF] transition">Ablauf</a>
          <Link to="/contact" className="hover:text-[#1E90FF] transition">Kontakt</Link>
          <Link to="/impressum" className="hover:text-[#1E90FF] transition">Impressum</Link>
        </nav>

        {/* Mobile Menu (optional) */}
        {/* Für später: Burger-Menü */}
      </div>
    </header>
  );
}
