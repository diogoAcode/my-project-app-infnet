import React, { useContext, useEffect } from "react";
import { ThemeContext } from "@/app/contexts/ThemeContext";

function Appbar({ onMenuToggle }) {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    console.log("atualiza appbar");
  }, [theme]);

  return (
    <div
      className={`flex justify-between items-center p-4
      ${theme === "dark" ? "bg-gray-800" : "bg-orange-600"}
    
    `}
    >
      <div
        className={`
      ${theme === "dark" ? "text-orange-50" : "text-orange-50"}`}
      >
        Infnet e-commerce
      </div>
      <button onClick={onMenuToggle}>
        <svg
          className="w-6 h-6 text-orange-50 dark:text-orange-50"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
    </div>
  );
}

export default Appbar;
