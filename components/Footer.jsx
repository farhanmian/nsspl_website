import React from "react";
import Link from "next/link";
import TelegramImage from "./telegram.svg";
import Image from "next/image";
function Footer() {
  return (
    <>
      <div
        // id="footer"
        className="grid grid-cols-1 gap-4 px-10 py-10 items-start justify-around sm:grid-cols-2 md:grid-cols-3 md:gap-8 text-heading"
      >
        <div className="container ">
          <h1 className="text-xl text-bold my-3 uppercase">
            NSS{" "}
            <span className={"capitalize text-xl text-bold"}>Pvt. Ltd.</span>{" "}
          </h1>

          <h4 className=" my-3">
            <span className="font-semibold">Head Office:</span> Delhi, India
          </h4>

          <h4 className=" my-3">
            <span className="font-semibold">US OFFICE:</span> Gols Inc Seattle,
            WA
          </h4>
        </div>

        <div className="">
          <h1 className="text-xl text-bold my-3 ">Our Services</h1>

          <ul className="text-gray-500 flex flex-col gap-4 md:max-w-[240px] lg:max-w-none">
            <Link href="/services/appdev">
              <li className="hover:cursor-pointer border-b-2 border-transparent hover:border-b-primary max-w-max">
                Application Development
              </li>
            </Link>
            <Link href="/services/webdev">
              <li className="hover:cursor-pointer border-b-2 border-transparent hover:border-b-primary max-w-max">
                Web App Development Services
              </li>
            </Link>
            <Link href="/services/enterprise">
              <li className="hover:cursor-pointer border-b-2 border-transparent hover:border-b-primary max-w-max">
                Enterprise Solutions
              </li>
            </Link>
            <Link href="/services/back-office">
              <li className="hover:cursor-pointer border-b-2 border-transparent hover:border-b-primary max-w-max">
                Back Office Support
              </li>
            </Link>
            <Link href="/services/contract-developer">
              <li className="hover:cursor-pointer border-b-2 border-transparent hover:border-b-primary max-w-max">
                Contract Developers
              </li>
            </Link>
          </ul>
        </div>

        <div className="container font-md-nsspl">
          <div className="sm:mx-auto max-w-[300px]">
            <h1 className="text-xl text-bold mt-4 uppercase">CONTACT US</h1>
            <h4 className="font-medium mt-2">
              <a href="tel:+918448229553">+91 844 822 9553</a>
            </h4>
            <h4 className="font-medium mt-2">
              <a href="mailto:sales@nssplindia.com">sales@nssplindia.com</a>
            </h4>

            <div className="contact-icons">
              <a
                target="_blank"
                href="https://join.skype.com/invite/uAR8TRl9Hb6W"
                className="contact-icon skype"
              >
                <ion-icon name="logo-skype"></ion-icon>
              </a>
              <a
                target="_blank"
                href="https://t.me/+918448229553"
                className="contact-icon telegram"
              >
                <Image src={TelegramImage} height={40} width={40} />
              </a>
            </div>

            <div className="my-3">
              {/* <h1 className="text-xl">Our Social Networks</h1> */}

              <p className="text-gray-500">
                Follow us on Different Social Media Platforms
              </p>
              <ul className="flex gap-2 mt-4">
                <li className="cursor-pointer">
                  <a
                    target="_blank"
                    href="https://www.facebook.com/syphersystems/"
                  >
                    <img src="/logo/facebook.svg" height={30} width={30} />
                  </a>{" "}
                </li>
                <li className="cursor-pointer">
                  <a target="_blank" href="https://www.instagram.com/nssplind/">
                    <img src="/logo/instagram.svg" height={30} width={30} />
                  </a>{" "}
                </li>
                <li className="cursor-pointer">
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/company/2676312/"
                  >
                    <img src="/logo/linkedin.svg" height={30} width={30} />
                  </a>{" "}
                </li>
                <li className="cursor-pointer">
                  <a
                    style={{
                      marginTop: -5,
                    }}
                    target="_blank"
                    href="https://twitter.com/SypherNeo3377"
                    className="contact-icon twitter"
                  >
                    <ion-icon name="logo-twitter"></ion-icon>
                  </a>{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
