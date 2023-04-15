export default function Footer () {
  return (
    <footer className="py-12 leading-6 px-4 lg:px-8">
      <div className="flex justify-between mx-auto mb-6 max-w-screen-xl lg:mb-8">
        <a
          className="px-2 space-x-2 flex items-center gap-x-1 text-2xl font-bold text-primary"
          href="#">
          Money ki baat
          <span className="order-first">
            <div style={{fontSize:'inherit',color:'inherit',padding:'2px'}}>
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M502.285 159.704l-234-156c-7.987-4.915-16.511-4.96-24.571 0l-234 156C3.714 163.703 0 170.847 0 177.989v155.999c0 7.143 3.714 14.286 9.715 18.286l234 156.022c7.987 4.915 16.511 4.96 24.571 0l234-156.022c6-3.999 9.715-11.143 9.715-18.286V177.989c-.001-7.142-3.715-14.286-9.716-18.285zM278 63.131l172.286 114.858-76.857 51.429L278 165.703V63.131zm-44 0v102.572l-95.429 63.715-76.857-51.429L234 63.131zM44 219.132l55.143 36.857L44 292.846v-73.714zm190 229.715L61.714 333.989l76.857-51.429L234 346.275v102.572zm22-140.858l-77.715-52 77.715-52 77.715 52-77.715 52zm22 140.858V346.275l95.429-63.715 76.857 51.429L278 448.847zm190-156.001l-55.143-36.857L468 219.132v73.714z"></path>
              </svg>
            </div>
          </span>
        </a>
        <a
          className="flex items-center cursor-pointer hover:text-gray-200"
          href="#">
          <span>Return to top</span>
          <span className="block w-4 h-4 align-middle ml-2">
            <div style={{fontSize:'inherit',color:'inherit',padding:'2px'}}>
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 448 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"></path>
              </svg>
            </div>
          </span>
        </a>
      </div>
      <div className="pt-8 mx-auto max-w-screen-xl border-t-2 border-solid box-border space-y-8 dark:border-slate-700">
        <div className="md:grid md:grid-cols-5">
          <div className="py-1 dark:border-slate-700 md:border-r-2 md:pr-4 md:col-span-1">
            <h5 className="m-0 text-lg font-semibold leading-none text-slate-900 dark:text-slate-100">
              
              Policies
            </h5>
          </div>
          <nav className="col-span-4 col-start-2 mt-2 md:pl-12 md:mt-0 lg:pl-24">
            <ul className="flex flex-col p-0 space-y-2 sm:flex-row sm:space-x-10 sm:space-y-0">
              <li className="text-left">
                <a
                  className="text-base font-normal cursor-pointer hover:text-gray-800 dark:hover:text-gray-100"
                  href="#">
                  Privacy Policy
                </a>
              </li>
              <li className="text-left">
                <a
                  className="text-base font-normal cursor-pointer hover:text-gray-800 dark:hover:text-gray-100"
                  href="#">
                  Terms and conditions
                </a>
              </li>
              <li className="text-left">
                <a
                  className="text-base font-normal cursor-pointer hover:text-gray-800 dark:hover:text-gray-100"
                  href="#">
                  Refund policy
                </a>
              </li>
              <li className="text-left">
                <a
                  className="text-base font-normal cursor-pointer hover:text-gray-800 dark:hover:text-gray-100"
                  href="#">
                  Return Policy
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="md:grid md:grid-cols-5">
          <div className="py-1 dark:border-slate-700 md:border-r-2 md:pr-4 md:col-span-1">
            <h5 className="m-0 text-lg font-semibold leading-none text-slate-900 dark:text-slate-100">
              Links
            </h5>
          </div>
          <nav className="col-span-4 col-start-2 mt-2 md:pl-12 md:mt-0 lg:pl-24">
            <ul className="flex flex-col p-0 space-y-2 sm:flex-row sm:space-x-10 sm:space-y-0">
              <li className="text-left">
                <a
                  className="text-base font-normal cursor-pointer hover:text-gray-800 dark:hover:text-gray-100"
                  href="#">
                  Care
                </a>
              </li>
              <li className="text-left">
                <a
                  className="text-base font-normal cursor-pointer hover:text-gray-800 dark:hover:text-gray-100"
                  href="#">
                  About Us
                </a>
              </li>
              <li className="text-left">
                <a
                  className="text-base font-normal cursor-pointer hover:text-gray-800 dark:hover:text-gray-100"
                  href="#">
                  Contact Us
                </a>
              </li>
              <li className="text-left">
                <a
                  className="text-base font-normal cursor-pointer text-secondary hover:text-gray-800 dark:hover:text-gray-100"
                  href="#">
                  support@moneykibaat.com
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="md:grid md:grid-cols-5">
          <div className="py-1 dark:border-slate-700 md:border-r-2 md:pr-4 md:col-span-1">
            <h5 className="m-0 text-lg font-semibold leading-none text-slate-900 dark:text-slate-100">
              
              Social Media
            </h5>
          </div>
          <nav className="col-span-4 col-start-2 mt-2 md:pl-12 md:mt-0 lg:pl-24">
            <ul className="flex flex-col p-0 space-y-2 sm:flex-row sm:space-x-10 sm:space-y-0">
              <li className="text-left">
                <a
                  className="flex text-base font-normal cursor-pointer items-center gap-x-2 hover:text-gray-800 dark:hover:text-gray-100"
                  href="#">
                  Twitter
                  <span>
                    <div style={{fontSize:'inherit',color:'inherit',padding:'2px'}}>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 448 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z"></path>
                      </svg>
                    </div>
                  </span>
                </a>
              </li>
              <li className="text-left">
                <a
                  className="flex text-base font-normal cursor-pointer items-center gap-x-2 hover:text-gray-800 dark:hover:text-gray-100"
                  href="#">
                  Google
                  <span>
                    <div style={{fontSize:'inherit',color:'inherit',padding:'2px'}}>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 640 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M386.061 228.496c1.834 9.692 3.143 19.384 3.143 31.956C389.204 370.205 315.599 448 204.8 448c-106.084 0-192-85.915-192-192s85.916-192 192-192c51.864 0 95.083 18.859 128.611 50.292l-52.126 50.03c-14.145-13.621-39.028-29.599-76.485-29.599-65.484 0-118.92 54.221-118.92 121.277 0 67.056 53.436 121.277 118.92 121.277 75.961 0 104.513-54.745 108.965-82.773H204.8v-66.009h181.261zm185.406 6.437V179.2h-56.001v55.733h-55.733v56.001h55.733v55.733h56.001v-55.733H627.2v-56.001h-55.733z"></path>
                      </svg>
                    </div>
                  </span>
                </a>
              </li>
              <li className="text-left">
                <a
                  className="flex text-base font-normal cursor-pointer items-center gap-x-2 hover:text-gray-800 dark:hover:text-gray-100"
                  href="#">
                  Instagram
                  <span>
                    <div style={{fontSize:'inherit',color:'inherit',padding:'2px'}}>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 448 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z"></path>
                      </svg>
                    </div>
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="pt-8 mx-auto mt-8 max-w-screen-xl border-t-2 border-solid box-border dark:border-slate-700 lg:mt-12">
        <p className="m-0 text-sm leading-5 text-center md:text-left">
          
          ©2023 moneykibaat.com. All rights reserved
        </p>
      </div>
    </footer>
  )
}