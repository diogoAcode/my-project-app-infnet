import Image from "next/image";
import Link from "next/link";

function Appbar({ onMenuToggle }) {
  return (
    <div className="flex justify-between items-center bg-orange-600 p-4">
      <div className="text-orange-50">My App</div>
      <button onClick={onMenuToggle}>
        <svg
          className="w-6 h-6 text-orange-50 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 16 12"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h14M1 6h14M1 11h7"
          />
        </svg>
      </button>
    </div>
  );
}

export default Appbar;
