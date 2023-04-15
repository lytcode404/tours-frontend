import "../styles/globals.css";
import Header from "../components/utils/Header";

import Footer from "../components/utils/Footer";
import  { AppProps } from "next/app";
import { Menu } from "@headlessui/react";
import { useState } from "react";

export default function App({ Component, pageProps }) {

  const [filteredData, setFilteredData] = useState([]);

  const handleSearch = (query, data) => {
    const filtered = data.filter(item => item.title.toLowerCase().includes(query.toLowerCase()));
    setFilteredData(filtered);
  };
  return (
    <>
      <Header onSearch={handleSearch}/>
      <Component {...pageProps}  filteredData={filteredData} />
      <Footer />
      <Menu as="div" className="fixed top-8 right-10">
        <Menu.Button className=" w-full justify-center rounded-md px-4 py-2 text-sm font-medium dark:text-white hover:bg-opacity-30 ">
          <span className="w-fit">
            <svg
              className="h-6 w-6 "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </Menu.Button>
        <Menu.Items
          as="ul"
          className="absolute right-0 text-gray-900 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg"
        >
          <Menu.Item
            as="li"
            className="group flex rounded-md items-center w-full px-2 py-2 text-sm"
          >
            Menu Item 1
          </Menu.Item>
          <Menu.Item
            as="li"
            className="group flex rounded-md items-center w-full px-2 py-2 text-sm"
          >
            Menu Item 2
          </Menu.Item>
        </Menu.Items>
      </Menu>
    </>
  );
}
