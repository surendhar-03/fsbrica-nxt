"use client";

import { useState } from "react";
import Link from "next/link";
import "@/Styles/Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Studio", href: "/studio" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="header">
      <div className="header-inner">
        <div className="logo"><p>fabrica®</p></div>
        <div className="nav-links">
            <div>Studio</div>
            <div>Projects</div>
            <div>Blog </div>
            <div>Contact</div>
        </div>

        {/* Hamburger / Cross Button */}
        <button
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
            
          <span></span>
          <span></span>
            
        </button>
      </div>

      {/* Mobile Menu */}
      <nav className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            onClick={() => setMenuOpen(false)}
          >
            {item.name}
          </Link>
        ))}

        {/* Contact info inside menu */}
        <div className="contact">
          <div className="contact-1 c1">
            <div className="c1-1">
              <p>(312) 555-2468</p>
            </div>
            <div className="c1-2">
              <div className="pt4-1">
                <div className="pt4-1-1">+</div>
                <div className="Pt4-1-2">hello@fabrica.com</div>
              </div>
            </div>
          </div>
          <div className="contact-1 c2">
            <div className="c2-1">
              <p>Privacy Policy</p>
            </div>
            <div className="c2-1">
              <p>Terms of Service</p>
            </div>
          </div>
          <div className="contact-1 c3">
            <div>
              <p>© 2025 fabrica® Studio</p>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
