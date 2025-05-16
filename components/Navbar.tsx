"use client";

import Link from "next/link";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="menu">
      <div className="menu__items">
        <Link href="/">Home</Link>
        <Link href="/cities">Cities</Link>
      </div>
    </nav>
  );
};

export default Navbar;
