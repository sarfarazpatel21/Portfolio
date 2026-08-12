import { useState } from "react";
import "./Navbar.css";

const RESUME_URL =
  "https://drive.google.com/file/d/1UYhiidMStuEClXgX48CUfOouO4I4PR8I/view?usp=sharing";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      {" "}
      <div className="navbar__logo">SARFARAZ PATEL</div>{" "}
      <div className={`navbar__links ${menuOpen ? "navbar__links--open" : ""}`}>
        {" "}
        <a href="#work" className="nav-link" onClick={closeMenu}>
          {" "}
          Work{" "}
        </a>{" "}
        <a href="#about" className="nav-link" onClick={closeMenu}>
          {" "}
          About{" "}
        </a>{" "}
        <a
          href={RESUME_URL}
          target="_blank"
          rel="noreferrer"
          className="nav-link"
          onClick={closeMenu}
        >
          {" "}
          Resume{" "}
        </a>{" "}
        <a
          href="mailto:sarfarazpatel890@gmail.com"
          className="nav-link nav-link--current"
          onClick={closeMenu}
        >
          {" "}
          Let’s Talk{" "}
        </a>{" "}
      </div>{" "}
      <button
        type="button"
        className={`navbar__toggle ${menuOpen ? "navbar__toggle--open" : ""}`}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
}
