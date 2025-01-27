import React, { useRef, useState } from "react";
import Link from "next/link";

const Header = () => {
  let [open, setOpen] = useState(false);
  let logoref = useRef();
  let closeHeader = () => {
    setOpen(false);
    logoref.current.focus();
    logoref.current.blur();
  };
  return (
    <div className="shadow-lg w-full fixed top-0 left-0 z-50 ">
      <div
        id="navbar"
        className="md:flex items-center justify-between md:px-10 px-7"
      >
        <div className=" text-xl cursor-pointer flex items-center ">
          <Link href="/">
            <a
              ref={logoref}
              onClick={closeHeader}
              class="flex title-font pt-4 md:pt-0 font-medium items-center text-gray-900 mb-4 md:mb-0"
            >
              {/* <img src="/logo/nss2.png" height={100} width={100} /> */}
              <img src="/logo/logo.png" height={100} width={100} />
            </a>
          </Link>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>

        <ul
          className={`md:flex  md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          <li className="text-white font-medium md:hover:border-b-2 border-white cursor-pointer transition-all md:ml-8 text-base md:my-0 my-7 ">
            <Link href="/about">
              <a onClick={closeHeader}>About</a>
            </Link>
          </li>
          <li className="  placeholder:hover:text-primary border-white cursor-pointer transition-all md:ml-8 text-base md:my-0 my-7">
            <div className="dropdown sm:dropdown-hover">
              <label
                tabIndex="0"
                className="btn p-0 m-0 hover:bg-transparent bg-transparent border-0  capitalize "
              >
                Services
              </label>
              <ul
                tabIndex="0"
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li className="bg-white">
                  <Link href="/services/appdev">
                    <a
                      className="focus:bg-primary"
                      onClick={(e) => {
                        e.target.blur();
                        closeHeader();
                      }}
                    >
                      App Development
                    </a>
                  </Link>
                </li>
                <li className="bg-white">
                  <Link href="/services/webdev">
                    <a
                      className="focus:bg-primary"
                      onClick={(e) => {
                        e.target.blur();
                        closeHeader();
                      }}
                    >
                      Web Development
                    </a>
                  </Link>
                </li>
                <li className="bg-white">
                  <Link href="/services/enterprise">
                    <a
                      className="focus:bg-primary"
                      onClick={(e) => {
                        e.target.blur();
                        closeHeader();
                      }}
                    >
                      Enterprise Solutions
                    </a>
                  </Link>
                </li>
                <li className="bg-white">
                  <Link href="/services/back-office">
                    <a
                      className="focus:bg-primary"
                      onClick={(e) => {
                        e.target.blur();
                        closeHeader();
                      }}
                    >
                      Back Office Support
                    </a>
                  </Link>
                </li>
                <li className="bg-white">
                  <Link href="/services/contract-developer">
                    <a
                      className="focus:bg-primary"
                      onClick={(e) => {
                        e.target.blur();
                        closeHeader();
                      }}
                    >
                      Staff Augmentation
                    </a>
                  </Link>
                </li>
                <li className="bg-white">
                  <Link href="/services/blockchain">
                    <a
                      className="focus:bg-primary"
                      onClick={(e) => {
                        e.target.blur();
                        closeHeader();
                      }}
                    >
                      Blockchain & NFT
                    </a>
                  </Link>
                </li>
                <li className="bg-white">
                  <Link href="/services/eCommerce">
                    <a
                      className="focus:bg-primary"
                      onClick={(e) => {
                        e.target.blur();
                        closeHeader();
                      }}
                    >
                      ECommerce Solutions
                    </a>
                  </Link>
                </li>
                <li className="bg-white">
                  <Link href="/services/digital-marketing">
                    <a
                      className="focus:bg-primary"
                      onClick={(e) => {
                        e.target.blur();
                        closeHeader();
                      }}
                    >
                      Digital Marketing
                    </a>
                  </Link>
                </li>
                <li className="bg-white">
                  <Link href="/services/cloud-management">
                    <a
                      className="focus:bg-primary"
                      onClick={(e) => {
                        e.target.blur();
                        closeHeader();
                      }}
                    >
                      Cloud Management
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          {/* <li className="  placeholder:hover:text-primary border-white cursor-pointer transition-all md:ml-8 text-base md:my-0 my-7">
            <div className="dropdown sm:dropdown-hover">
              <label
                tabIndex="0"
                className="btn hover:bg-transparent p-0 m-0 bg-transparent border-0  capitalize "
              >
                Products
              </label>
              <ul
                tabIndex="0"
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li className="bg-white">
                  <Link href="/products/mtc">
                    <a
                      className="focus:bg-primary"
                      onClick={(e) => {
                        e.target.blur();
                        closeHeader();
                      }}
                    >
                      MTC
                    </a>
                  </Link>
                </li>
                <li className="bg-white">
                  <Link href="/products/avidiancrm">
                    <a
                      className="focus:bg-primary"
                      onClick={(e) => {
                        e.target.blur();
                        closeHeader();
                      }}
                    >
                      Avidian CRM
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </li> */}

          <li className="text-white font-medium md:hover:border-b-2 border-white cursor-pointer transition-all md:ml-8 text-base md:my-0 my-7">
            <Link href="/projects">
              <a onClick={closeHeader}>Projects</a>
            </Link>
          </li>
          <li className="text-white hover:bg-white hover:text-primary font-medium border-2 p-1 rounded-md border-white cursor-pointer transition-all md:ml-8 text-base md:my-0 my-7">
            <Link href="/contact">
              <a onClick={closeHeader}>Contact Us</a>
            </Link>
          </li>
          {/* <li className=" hover:text-primary md:hover:border-b-2 border-white cursor-pointer transition-all md:ml-8 text-base md:my-0 my-7">
            <Link href="#">
              <a onClick={closeHeader}>Career</a>
            </Link>
          </li> */}
          {/* <li style={{ background: "rgb(255 103 1)", color: "#fff" }} className=" hover:text-primary border-2 p-1 rounded-md border-white cursor-pointer transition-all md:ml-8 text-base md:my-0 my-7">
            <Link href="tel:+918448229553">
              <a onClick={closeHeader}>+91 8448229553</a>
            </Link>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
