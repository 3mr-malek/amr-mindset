import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";

  return (
    <nav className="navbar">
      <Link
        className="Amr-Mindset"
        to="/"
        onClick={() => setMenuOpen(false)}
      >
        AMR MINDSET
      </Link>

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
        {isHome ? (
          <>
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
          </>
        ) : (
          <>
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>

            <a href="#packages">
              Packages
            </a>
          </>
        )}

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