import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      <a
        className="Amr-Mindset"
        href="https://www.youtube.com/@3mr-Malek"
        target="_blank"
        rel="noreferrer"
      >
        AMR MINDSET
      </a>

      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      <div
        className={`nav-links ${
          menuOpen ? "active" : ""
        }`}
      >
        <a
          href="#about"
          onClick={() => setMenuOpen(false)}
        >
          About
        </a>

        <a
          href="#courses"
          onClick={() => setMenuOpen(false)}
        >
          Courses
        </a>

        <a
          href="#results"
          onClick={() => setMenuOpen(false)}
        >
          Results
        </a>

        <Link
          to="/course/recovery"
          className="nav-cta"
          onClick={() => setMenuOpen(false)}
        >
          ابدأ التعافي
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;