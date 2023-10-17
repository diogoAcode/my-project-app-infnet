import Link from "next/link";
import React, { useContext } from "react";
import { ThemeContext } from "@/app/contexts/ThemeContext";

const Drawer = ({ isOpen, onClose }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const drawerStyle = {
    transform: isOpen ? "translateX(0%)" : "translateX(-100%)",
  };

  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 ${
        theme === "dark" ? "bg-gray-800" : "bg-orange-800 text-white"
      } p-4`}
      style={drawerStyle}
    >
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          onClick={toggleTheme}
          checked={theme === "dark"}
        ></input>
        <div
          className={`w-11 h-6 ${
            theme === "dark"
              ? "bg-gray-700 peer-checked:bg-blue-600 "
              : "bg-orange-500 peer-checked:white"
          } peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-50 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600`}
        ></div>

        <span className="ml-3 text-sm font-medium text-orange-50">
          {theme === "dark" ? "Tema Escuro" : "Tema claro"}
        </span>

      </label>

      <h5
        id="drawer-navigation-label"
        className="text-base font-semibold text-orange-50 uppercase dark:text-gray-400"
      >
        Menu
      </h5>
      <button
        onClick={onClose}
        type="button"
        data-drawer-hide="drawer-navigation"
        aria-controls="drawer-navigation"
        className="text-orange-50 bg-transparent hover:bg-gray-200 hover:text-orange-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-orange-50"
      >
        <svg
          className="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
        <span className="sr-only">Close menu</span>
      </button>
      <div className="py-4 overflow-y-auto">
        <ul className="space-y-2 font-medium">
          <li>
            <Link href={"/"}>
              <div className="flex items-center p-2 text-orange-50 hover:text-orange-900 rounded-lg dark:text-orange-50 hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-orange-50 transition duration-75 dark:text-gray-400 group-hover:text-orange-900 dark:group-hover:text-orange-50"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Home</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href={"/products"}>
              <div className="flex items-center p-2 text-orange-50 hover:text-orange-900 rounded-lg dark:text-orange-50 hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-orange-50 transition duration-75 dark:text-gray-400 group-hover:text-orange-900 dark:group-hover:text-orange-50"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 20"
                >
                  <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Produtos</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href={"/cart"}>
              <div className="flex items-center p-2 text-orange-50 hover:text-orange-900 rounded-lg dark:text-orange-50 hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-orange-50 transition duration-75 dark:text-gray-400 group-hover:text-orange-900 dark:group-hover:text-orange-50"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 21"
                >
                  <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Carrinho</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href={"/login"}>
              <div className="flex items-center p-2 text-orange-50 hover:text-orange-900 rounded-lg dark:text-orange-50 hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-orange-50 transition duration-75 dark:text-gray-400 group-hover:text-orange-900 dark:group-hover:text-orange-50"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                  />
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Login</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href={"/"}>
              <div className="flex items-center p-2 text-orange-50 hover:text-orange-900 rounded-lg dark:text-orange-50 hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-orange-50 transition duration-75 dark:text-gray-400 group-hover:text-orange-900 dark:group-hover:text-orange-50"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                  <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
                  <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Registro</span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
