import React, {useEffect, useState} from "react";
import {postcontacturl} from "../helper/constant";
import {ImCross} from "react-icons/im";
import Swal from "sweetalert2";
import Head from "next/head";
import {useRouter} from "next/router";
import {BsCheckCircleFill, BsFillTelephoneFill} from "react-icons/bs";
import {BiLocationPlus} from "react-icons/bi";
import {AiOutlineMail} from "react-icons/ai";
import TelegramImage from "../components/telegram.svg";
import Image from "next/image";

const Contact = () => {
    const router = useRouter();
    let [num1, setnum1] = useState(0);
    let [num2, setnum2] = useState(0);
    let [userans, setuserans] = useState(0);
    let [firstname, setfirstname] = useState("");
    let [lastname, setlastname] = useState("");
    let [email, setemail] = useState("");
    let [company, setcompany] = useState("");
    let [code, setcode] = useState("");
    let [mobile, setmobile] = useState("");
    let [message, setmessage] = useState("");

    useEffect(() => {
        setnum1(Math.floor(Math.random() * 10));
        setnum2(Math.floor(Math.random() * 10));
    }, []);

    const formSubmit = async (e) => {
        e.preventDefault();
        try {
            const req = await fetch(postcontacturl, {
                method: "POST",
                body: JSON.stringify({
                    first_name: firstname,
                    last_name: lastname,
                    email,
                    company_name: company,
                    country_code: code,
                    mobile,
                    message,
                }),
                headers: {"Content-type": "application/json"},
            });

            const res = await req.json();
            if (res.status == 200) {
                // Swal.fire({
                //   icon: "success",
                //   title: "Thanks for connecting with us",
                //   text: "One of our Busienss Development Connect with you soon",
                // });
                router.push("/thanks");
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: res.message,
                });
            }
        } catch (error) {
            console.log(error);
            setshownotif(true);
            setnotif("Something Went Wrong. Please try again");
        }
    };

    return (
        <>
            <Head>
                <title>Contact Us</title>
            </Head>
            <section className="py-4">
                <div className="title text-center items-center py-4">
                    <h1 className="font-bold sm:leading-[45px] text-heading pt-10 lg:pt-0 text-2xl sm:text-3xl md:text-4xl lg:text-4xl">
                        Schedule A Call
                    </h1>
                    <p className="text-center text-gray-600 mt-5">
                        Schedule a call today to see how we can modernize your business and
                        enhance your productivity by applying technology in the right
                        quantum at the right place!
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row ">
                    <div className="flex-1 flex flex-col items-center ">
                        <div className="block mt-10 p-6 rounded-lg shadow-lg bg-white max-w-md sm:p-10 ">
                            <h1 className="font-bold sm:leading-[45px] text-heading pt-10 lg:pt-0 text-2xl">
                                Contact Us
                            </h1>
                            <p class="text-left text-gray-600 text-sm mb-5">
                                Feel free to ask for details, don't save any questions!
                            </p>
                            <form onSubmit={formSubmit}>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="form-group mb-6">
                                        <label
                                            for="exampleInputEmail2"
                                            className="form-label inline-block mb-2 text-gray-700"
                                        >
                                            First Name
                                        </label>
                                        <input
                                            value={firstname}
                                            onChange={(e) => {
                                                setfirstname(e.target.value);
                                            }}
                                            type="text"
                                            className="form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none"
                                            id="exampleInput123"
                                            aria-describedby="emailHelp123"
                                            placeholder="eg. John"
                                            required
                                        />
                                    </div>
                                    <div className="form-group mb-6">
                                        <label
                                            for="exampleInputEmail2"
                                            className="form-label inline-block mb-2 text-gray-700"
                                        >
                                            Last Name
                                        </label>
                                        <input
                                            value={lastname}
                                            onChange={(e) => {
                                                setlastname(e.target.value);
                                            }}
                                            type="text"
                                            className="form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none"
                                            id="exampleInput124"
                                            aria-describedby="emailHelp124"
                                            placeholder="eg. Doe"
                                        />
                                    </div>
                                </div>
                                <div className="form-group mb-6">
                                    <label
                                        for="exampleInputEmail2"
                                        className="form-label inline-block mb-2 text-gray-700"
                                    >
                                        Email address
                                    </label>
                                    <input
                                        value={email}
                                        onChange={(e) => {
                                            setemail(e.target.value);
                                        }}
                                        type="email"
                                        className="form-control block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none"
                                        id="exampleInput125"
                                        placeholder="eg. johndoe@companyname.com"
                                        required
                                    />
                                </div>
                                <div className="form-group mb-6">
                                    <label
                                        for="exampleInputEmail2"
                                        className="form-label inline-block mb-2 text-gray-700"
                                    >
                                        Company Name
                                    </label>
                                    <input
                                        value={company}
                                        onChange={(e) => {
                                            setcompany(e.target.value);
                                        }}
                                        type="text"
                                        className="form-control block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none"
                                        id="exampleInput125"
                                        placeholder="eg. Your company name"
                                        required
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="form-group mb-6">
                                        <label
                                            for="exampleInputEmail2"
                                            className="form-label inline-block mb-2 text-gray-700"
                                        >
                                            Country Code
                                        </label>
                                        <input
                                            value={code}
                                            onChange={(e) => {
                                                setcode(e.target.value);
                                            }}
                                            type="number"
                                            className="form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none"
                                            id="exampleInput123"
                                            aria-describedby="emailHelp123"
                                            placeholder="Country Code"
                                            required
                                        />
                                    </div>
                                    <div className="form-group mb-6">
                                        <label
                                            for="exampleInputEmail2"
                                            className="form-label inline-block mb-2 text-gray-700"
                                        >
                                            Phone Number
                                        </label>
                                        <input
                                            value={mobile}
                                            onChange={(e) => {
                                                setmobile(e.target.value);
                                            }}
                                            type="number"
                                            className="form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none"
                                            id="exampleInput124"
                                            aria-describedby="emailHelp124"
                                            placeholder="Phone Number"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="form-group mb-6">
                  <textarea
                      value={message}
                      onChange={(e) => {
                          setmessage(e.target.value);
                      }}
                      className="form-control
                            block
                            w-full
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding
                            border border-solid border-gray-300
                            rounded
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none
                        "
                      id="exampleFormControlTextarea13"
                      rows="3"
                      placeholder="Message"
                  ></textarea>
                                </div>
                                <div className="form-group mb-2 flex justify-center">
                                    <label className="form-label inline-block  mx-2 text-gray-700">
                                        {num1} + {num2} =
                                    </label>
                                    <input
                                        value={userans}
                                        onChange={(e) => {
                                            setuserans(e.target.value);
                                        }}
                                        className="w-20 px-2 border focus:border-primary  focus:outline-none"
                                        type="number"
                                        placeholder="?"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="
                    w-full
                    px-6
                    py-2.5
                    bg-primary
                    text-white
                    font-medium
                    text-xs
                    leading-tight
                    uppercase
                    rounded
                    shadow-md
                    hover:bg-primary hover:shadow-lg
                    focus:bg-primary focus:shadow-lg focus:outline-none focus:ring-0
                    active:bg-primary active:shadow-lg
                    transition
                    duration-150
                    ease-in-out
                     disabled:opacity-50
                    "
                                    disabled={userans != num1 + num2}
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="flex-1 p-2 p-10 lg:pt-6">
                        <h1 className="text-[60px] text-xl">
              <span className="text-primary">
                Contact Us & Let's Collaborate!
              </span>
                        </h1>
                        <p className="mt-2 text-gray-600">
                            We would love to hear how we can bring your possibilities to
                            reality through technology and give away 2hrs of free consulting.
                            So call us now..
                        </p>
                        <div className="mt-5 text-gray-600">
                            <li className="flex gap-2  items-center">
                                <BiLocationPlus size={20} className="text-primary"/>
                                US: Gols Inc , Seattle , WA
                                98195
                            </li>
                            <li className="flex gap-2 mt-2 items-center">
                                <BiLocationPlus size={20} className="text-primary"/>
                                India: G4 , C Block, Naraina Vihar, New Delhi, Delhi 110028
                            </li>
                            <li className="flex gap-2 mt-3 items-center">
                                <BsFillTelephoneFill size={20} className="text-primary"/>
                                Sales: <a href="tel:+918448229553">+91 844 822 9553</a>
                            </li>
                            <li className="flex gap-2 mt-3 items-center">
                                <AiOutlineMail size={20} className="text-primary"/>
                                <span className="text-primary">
                  <a href="mailto:sales@nssplindia.com">sales@nssplindia.com</a>
                </span>
                            </li>

                            <div className="contact-icons">
                                <a target="_blank" href='https://join.skype.com/invite/uAR8TRl9Hb6W' className="contact-icon skype">
                                    <ion-icon name="logo-skype"></ion-icon>
                                </a>

                                <a target="_blank" href='https://t.me/+918448229553'
                                   className="contact-icon telegram"><Image src={TelegramImage} height={40} width={40}/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
