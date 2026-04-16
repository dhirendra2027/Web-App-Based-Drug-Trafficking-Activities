import React from "react";

function Header() {
  const navHeaders = ["HOME", "INFO", "NGO", "NEWS", "COMPLAINT", "ABOUT US"];
  return (
    <div className="flex justify-between px-8 py-4 border-b-[1px] border-zinc-600">
      <h3 className="text-2xl font-bold">WatchGuard</h3>
      <div className="flex gap-8">
        {navHeaders.map((header, index) => (
          <a
            className="hover:text-zinc-400 transform-all duration-100"
            key={index}
            href={`/${header}`}>
            {header}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Header;
