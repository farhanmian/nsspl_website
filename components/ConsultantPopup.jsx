import React, {useState} from 'react';
import {postcontacturl} from "../helper/constant";
import Swal from "sweetalert2";


const ConsultantPopup = ({open, setState}) => {

    let [firstname, setfirstname] = useState("");
    let [email, setemail] = useState("");
    let [mobile, setmobile] = useState("");
    let [code, setcode] = useState("91");
    const [successState, setSuccessState] = useState(false)

    const formSubmit = async (e) => {
        // e.preventDefault();
        try {
            const req = await fetch(postcontacturl, {
                method: "POST",
                body: JSON.stringify({
                    first_name: firstname,
                    last_name: '--',
                    email,
                    mobile,
                    message: 'Enquiry from development page',
                    company_name: 'company',
                    country_code: code,
                }),
                headers: {"Content-type": "application/json"},
            });

            const res = await req.json();
            if (res.status == 200) {
                setSuccessState(true);
                // gtag('event', 'conversion', {'send_to': 'AW-10976951418/zKSTCKTGo9YYEPr4m_Io'});
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: res.message,
                });
            }
        } catch (error) {
            console.log(error);
        }
    };

    return <>
        <div onClick={() => {
            setState(false);
            setSuccessState(false)
        }}
             className={open ? 'consultant__overlay active' : 'consultant__overlay'}></div>
        <div className={open ? 'consultant__popup active' : 'consultant__popup'}>

            {
                !successState ? <div className={'consultant__popupContent'}>

                    <div className={'consultant__header'}>Talk to our consultant <ion-icon
                        onClick={() => {
                            setState(false);
                            setSuccessState(false)
                        }} name="close-circle-outline"></ion-icon></div>

                    <div className="grid grid-cols-1">

                        {/*Name*/}
                        <div className="form-group mb-6">
                            <label
                                htmlFor="exampleInputEmail2"
                                className="form-label inline-block mb-2 text-gray-700"
                            >
                                Name
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

                        {/*Email*/}
                        <div className="form-group mb-6">
                            <label
                                htmlFor="exampleInputEmail2"
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

                        {/*Phone number*/}

                        <div className="form-group mb-6">
                            <label
                                htmlFor="exampleInputEmail2"
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

                        {/*<div className="grid grid-cols-2 gap-4">*/}
                        {/*    <div className="form-group mb-6">*/}
                        {/*        <label*/}
                        {/*            htmlFor="exampleInputEmail2"*/}
                        {/*            className="form-label inline-block mb-2 text-gray-700"*/}
                        {/*        >*/}
                        {/*            Country Code*/}
                        {/*        </label>*/}
                        {/*        <input*/}
                        {/*            value={code}*/}
                        {/*            onChange={(e) => {*/}
                        {/*                setcode(e.target.value);*/}
                        {/*            }}*/}
                        {/*            type="number"*/}
                        {/*            className="form-control*/}
                        {/*block*/}
                        {/*w-full*/}
                        {/*px-3*/}
                        {/*py-1.5*/}
                        {/*text-base*/}
                        {/*font-normal*/}
                        {/*text-gray-700*/}
                        {/*bg-white bg-clip-padding*/}
                        {/*border border-solid border-gray-300*/}
                        {/*rounded*/}
                        {/*transition*/}
                        {/*ease-in-out*/}
                        {/*m-0*/}
                        {/*focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none"*/}
                        {/*            id="exampleInput123"*/}
                        {/*            aria-describedby="emailHelp123"*/}
                        {/*            placeholder="Country Code"*/}
                        {/*            required*/}
                        {/*        />*/}
                        {/*    </div>*/}
                        {/*   */}
                        {/*</div>*/}

                    </div>

                    <button
                        onClick={() => formSubmit()}
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
                    >
                        Send Message
                    </button>

                </div> : <div className="consultant__success">
                    <div className={'consultant__header'}>Thanks for connecting with us
                        <ion-icon
                            onClick={() => {
                                setState(false);
                                setSuccessState(false)
                            }} name="close-circle-outline"></ion-icon>
                    </div>

                    <script
                        dangerouslySetInnerHTML={{
                            __html: `gtag('event', 'conversion', {'send_to': 'AW-10976951418/zKSTCKTGo9YYEPr4m_Io'});`,
                        }}
                    ></script>

                    <p>One of our Business Development Connect with you soon</p>
                </div>
            }


        </div>
    </>

}


export default ConsultantPopup;