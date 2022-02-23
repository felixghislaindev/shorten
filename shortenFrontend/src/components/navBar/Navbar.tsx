import React from "react";

export const Navbar = () => {
  return (
    <nav className="text-white font-mono">
      <div className="max-w-5xl mx-auto py-12">
        <div className="flex justify-between items-center">
          <div className="font-Satisfy text-2xl">Shorten</div>
          <div>
            <a href="https://github.com/felixghislaindev/shorten">GitHub</a>
          </div>
        </div>
      </div>
    </nav>
  );
};
