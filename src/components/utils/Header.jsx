import { Menu } from "@headlessui/react";
import { useState } from "react";
import Link from "next/link";

export default function Header({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSearch(query, data); // assuming data is passed via props to the Index page component
  };
  return (
    <div className="py-8  ">
      <header className="container m-auto flex justify-between items-center ">
        <Link
          className="inline-flex items-center text-black-800 font-bold gap-2.5 text-xl md:text-2xl"
          href="#"
        >
          <span className="w-6 h-auto text-primary">
            <div
              style={{
                fontSize: "inherit",
                color: "inherit",
                padding: "2px",
              }}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 640 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M640 199.9v54l-320 200L0 254v-54l320 200 320-200.1zm-194.5 72l47.1-29.4c-37.2-55.8-100.7-92.6-172.7-92.6-72 0-135.5 36.7-172.6 92.4h.3c2.5-2.3 5.1-4.5 7.7-6.7 89.7-74.4 219.4-58.1 290.2 36.3zm-220.1 18.8c16.9-11.9 36.5-18.7 57.4-18.7 34.4 0 65.2 18.4 86.4 47.6l45.4-28.4c-20.9-29.9-55.6-49.5-94.8-49.5-38.9 0-73.4 19.4-94.4 49zM103.6 161.1c131.8-104.3 318.2-76.4 417.5 62.1l.7 1 48.8-30.4C517.1 112.1 424.8 58.1 319.9 58.1c-103.5 0-196.6 53.5-250.5 135.6 9.9-10.5 22.7-23.5 34.2-32.6zm467 32.7z"></path>
              </svg>
            </div>
          </span>
          <span className="transition-all">Money ki baat</span>
        </Link>
        <nav className="hidden lg:flex gap-12">
          <Link
            className="text-lg font-semibold text-primary lg:font-medium lg:text-base"
            href="#"
          >
            Home
          </Link>
          
          
          <Link
            className="hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100 lg:text-base lg:font-normal"
            href="#"
          >
            About
          </Link>
        </nav>
        {/* <div>
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder="Search..."
            className="bg-white rounded-full border border-gray-400 focus:outline-none focus:shadow-outline-purple focus:border-black text-gray-800 font-medium py-2 px-4"
          />
          <button
            onClick={handleFormSubmit}
            className="bg-black hover:bg-purple-700 text-white font-medium py-2 px-4 ml-2 rounded-full"
          >
            Search
          </button>
        </div> */}
        <Menu as="div" className="sticky top-0 ">
          <Menu.Button
            className=" w-full justify-center rounded-md px-4 py-2 text-sm font-medium dark:text-white hover:bg-opacity-30 "
            style={{ display: "none" }}
          >
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
      </header>
    </div>
  );
}
