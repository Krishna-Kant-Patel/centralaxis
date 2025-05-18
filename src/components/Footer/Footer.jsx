import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-6 px-4 md:px-12">
      <div className="max-w-7xl mx-auto flex items-center space-x-3">
        <img src="https://www.centralaxis.com/_next/image?url=%2Flogo_white_icon_only.png&w=96&q=75" alt="Logo" className="h-6 w-auto" />
        <span className="text-white text-sm">Copyright © 2025</span>
      </div>
    </footer>
  );
}
