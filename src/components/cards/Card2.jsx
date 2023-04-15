import Link from "next/link";
import React from "react";

function Card2() {
  return (
    <>
      <Link className="p-4 block md:w-1/3" href="/blogs/all">
        <div className="h-full border-2 border-gray-200 border-opacity-60 overflow-hidden rounded-global dark:border-slate-700">
          <img
            className="w-full object-cover object-center transition-all ease-in duration-200 hover:scale-105 bg-gray-50 md:h-36 lg:h-48"
            src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              CATEGORY
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3 dark:text-gray-100">
              The Catalyzer
            </h1>
            <p className="leading-relaxed mb-3">
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat.
            </p>
            <div className="flex items-center flex-wrap text-primary-500">
              <span className="w-fit">
                <svg
                  className="w-6 h-6 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path> <path d="M12 5l7 7-7 7"></path>
                </svg>
              </span>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <span className="w-fit">
                  <svg
                    className="w-4 h-4 mr-1"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </span>
                <p>1.2K</p>
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <span className="w-fit">
                  <svg
                    className="w-4 h-4 mr-1"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                </span>
                <p>6</p>
              </span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Card2;
