import React from "react";
import Link from "next/link";
import TelegramImage from "./telegram.svg";
import Image from "next/image";
function Footer() {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 px-10 py-10 items-start justify-around sm:grid-cols-2 md:grid-cols-4 md:gap-8 bg-lightGray text-heading">
        <div className="container ">
          <h1 className="text-2xl text-bold my-3 uppercase">
            NSS{" "}
            <span className={"capitalize text-xl text-bold"}>Pvt. Ltd.</span>{" "}
            <br />
            ISO 270001
          </h1>
          <h2 className="text-lg my-3">
            <strong>US OFFICE:</strong>
          </h2>
          <h2 className="text-lg my-3">
            Gols Inc
            <br /> Seattle, WA
          </h2>
          <h2 className="text-lg my-3">
            <strong>Head Office:</strong>
          </h2>
          <h2 className="text-lg my-3">Delhi, India</h2>
        </div>

        <div className="container font-md-nsspl">
          <h1 className="text-xl text-bold mt-4 uppercase">CONTACT US</h1>
          <h2 className="text-lg mt-2">
            <a href="tel:+918448229553">+91 844 822 9553</a>
          </h2>
          <h2 className="text-lg mt-2">
            <a href="mailto:sales@nssplindia.com">sales@nssplindia.com</a>
          </h2>

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
        </div>

        <div className="">
          <h1 className="text-xl text-bold my-3 ">Our Services</h1>

          <ul className="text-gray-500 text-sm flex flex-col gap-4">
            <Link href="/services/appdev">
              <li className="hover:cursor-pointer">
                {" "}
                &gt;Application Development
              </li>
            </Link>
            <Link href="/services/webdev">
              <li className="hover:cursor-pointer">
                {" "}
                &gt;Web App Development Services
              </li>
            </Link>
            <Link href="/services/enterprise">
              <li className="hover:cursor-pointer">
                {" "}
                &gt;Enterprise Solutions
              </li>
            </Link>
            <Link href="/services/back-office">
              <li className="hover:cursor-pointer"> &gt;Back Office Support</li>
            </Link>
            <Link href="/services/contract-developer">
              <li className="hover:cursor-pointer"> &gt;Contract Developers</li>
            </Link>
          </ul>
        </div>

        <div className="my-3">
          <h1 className="text-xl">Our Social Networks</h1>

          <p className="text-gray-500 text-sm">
            Follow us on Different Social Media Platforms
          </p>
          <ul className="flex gap-2 mt-4">
            <li className="cursor-pointer">
              <a target="_blank" href="https://www.facebook.com/syphersystems/">
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
    </>
  );
}

export default Footer;
