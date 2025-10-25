import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <span className="text-2xl font-bold text-blue-600">Cashy</span>
        </Link>
        <div className="text-gray-600">Simple Test Mode</div>
      </nav>
    </header>
  );
};

export default Header;