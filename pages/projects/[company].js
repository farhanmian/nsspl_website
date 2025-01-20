import { useRouter } from "next/router";
import React from "react";
import QuickStart from "../../components/Homepage/QuickStart";
import { getCaseStudyById } from "../../helper/constant";

const Company = ({ data }) => {
  const router = useRouter();
  console.log("data.problemdata.problem", data);
  return (
    <div className="">
      <section>
        <div className="flex flex-col sm:flex-row-reverse">
          <div className=" flex-1">
            <img src={data.mainimg} className={"m-auto companyWrapper"} object-fit="cover" />
          </div>
          <div className="flex flex-1 flex-col  py-10">
            <div className=" mx-10 sm:ml-20">
              {/* <div className="">
                <img src={Data?.logoimg} width={300} height="100%" />
              </div> */}
              <h2 className="text-lg pb-2">
                {data.projectType.map((tag, index) => (
                  <span
                      key={index}
                    className={
                      "pr-5 lg:text-[30px] text-heading font-black uppercase"
                    }
                  >{`#${tag.project_type}`}</span>
                ))}
              </h2>
              <h1 className="text-[42px] mb-2 font-extrabold uppercase text-primary">
                {data.title}
              </h1>
              <div
                className={
                  "portfolio-detail mb-5 text-[20px] whitespace-pre-wrap"
                }
                dangerouslySetInnerHTML={{ __html: data.detail }}
              />
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex flex-col max-w-sm">
                  <div className={"flex"}>
                    <div className={"mr-2 flex"}>
                      <img
                        src={"/globe-svgrepo-com.svg"}
                        className={"m-auto height-35"}
                        object-fit="cover"
                      />
                    </div>
                    <div>
                      <h1 className="font-extrabold text-primary text-xl">
                        Country:
                      </h1>
                      <h1 className="text-lg font-bold">{data.country}</h1>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col max-w-sm">
                  <div className={"flex"}>
                    <div className={"mr-2 flex"}>
                      <img
                        src={"/time-svgrepo-com.svg"}
                        className={"m-auto height-35"}
                        object-fit="cover"
                      />
                    </div>
                    <div>
                      <h1 className="font-extrabold text-primary text-xl">
                        Duration:
                      </h1>
                      <h1 className="text-lg font-bold">{data.duration}</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {data.client_desc && (
        <section>
          <div className="py-10 m-auto w-9/12">
            <div
              className="text-center portfolio-detail-second  text-[20px] mb-5 whitespace-pre-wrap"
              dangerouslySetInnerHTML={{ __html: data.client_desc }}
            />
          </div>
        </section>
      )}
      {data.problem && (
        <section>
          <div className="flex flex-col sm:flex-row">
            <div className=" flex-1">
              <img
                className={"m-auto img-height-450 companyWrapper"}
                src={data.flipimg}
                object-fit="cover"
              />
            </div>
            <div className="flex flex-1 flex-col  py-10 bg-gray-200">
              <div className=" mx-10 sm:ml-20">
                <div
                  className={
                    "portfolio-detail-second  whitespace-pre-wrap text-[20px]"
                  }
                  dangerouslySetInnerHTML={{ __html: data.problem }}
                />
              </div>
            </div>
          </div>
        </section>
      )}
      {data.solution && (
        <section>
          <div className="flex flex-col sm:flex-row-reverse">
            <div
              className=" flex-1"
              // style={{
              //   backgroundImage: "url(/imgs/bg-2.png)",
              //   backgroundPosition: "bottom",
              //   display: "flex",
              //   justifyContent: "center",
              //   backgroundSize: "contain",
              //   backgroundRepeat: "no-repeat",
              // }}
            >
              <img src={data.image1} className={"m-auto companyWrapper"} object-fit="cover" style={{width: "100%"}} />
            </div>
            <div className="flex flex-1 flex-col  py-10 bg-violet-100">
              <div className=" mx-10 sm:ml-20">
                <div
                  className={
                    "portfolio-detail-second whitespace-pre-wrap text-[20px]"
                  }
                  dangerouslySetInnerHTML={{ __html: data.solution }}
                />
              </div>
            </div>
          </div>
        </section>
      )}
      {data.result && (
        <section>
          <div className="flex flex-col sm:flex-row">
            <div
              className=" flex-1"
              style={{
                backgroundImage: "url(/imgs/leftHand.png)",
                backgroundPosition: "bottom",
                display: "flex",
                justifyContent: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <img src={data.image2} className={"img-height-25 companyWrapper"} />
            </div>
            <div className="flex flex-1 flex-col  py-10 bg-blue-100">
              <div className=" mx-10 sm:ml-20">
                <div
                  className={
                    "portfolio-detail-second whitespace-pre-wrap text-[20px]"
                  }
                  dangerouslySetInnerHTML={{ __html: data.result }}
                />
              </div>
            </div>
          </div>
        </section>
      )}
      {/* company product logo */}
      <section className="py-5 flex justify-center ">
        <div className=" sm:m-16 md:m-20">
          <h1 className="text-[42px] text-center font-extrabold mb-10 uppercase text-primary">
            {"Screenshots"}
          </h1>
          <div className={"flex flex-1 flex-wrap gap-10 justify-around"}>
            <img
              src={data.image3}
              className={"img-height-450 companyWrapper"}
              object-fit="cover"
            />
            <img
              src={data.image4}
              className={"img-height-450 companyWrapper"}
              object-fit="cover"
            />
            <img
              src={data.image5}
              className={"img-height-450 companyWrapper"}
              object-fit="cover"
            />
          </div>
        </div>
      </section>
      {/* technology section  */}
      <section>
        <div className="bg-lightGray py-10">
          <div className="text-center">
            <h1 className="text-[40px] font-bold text-heading">
              Technology <span className="text-primary"> Used </span>
            </h1>
            <p className="text-para sm:px-40">
              Our professionals utilize some of the best mobile app development
              frameworks for developing and deploying intuitive mobile
              applications for specified use.
            </p>
          </div>
          {data.technology.length > 0 && (
            <ul className="flex justify-center gap-8 flex-wrap">
              {data.technology.map((item, index) => (
                <li key={index}>
                  <div className="flex flex-col  items-center hover:shadow-lg p-3">
                    <img src={item.image} height={75} width={75} /> {item.name}
                  </div>
                </li>
              ))}
              {/* <li><div className='flex flex-col  items-center hover:shadow-lg p-3'><img src='/icons/angular.png' height={75} width={75} /> Angular</div></li>
                        <li><div className='flex flex-col  items-center hover:shadow-lg p-3'><img src='/icons/vue.png' height={75} width={75} /> Vue</div></li>
                        <li><div className='flex flex-col  items-center hover:shadow-lg p-3'><img src='/icons/js.png' height={75} width={75} /> Javascript</div></li>
                        <li><div className='flex flex-col  items-center hover:shadow-lg p-3'><img src='/icons/css.png' height={75} width={75} /> Css</div></li>
                        <li><div className='flex flex-col  items-center hover:shadow-lg p-3'><img src='/icons/html.png' height={75} width={75} /> Html</div></li> */}
            </ul>
          )}
        </div>
      </section>
      {/*Problems section  */}

      <QuickStart />
    </div>
  );
};

export async function getServerSideProps(ctx) {

  console.log('getServerSideProps', ctx.params.company);

  try {
    const { params } = ctx;
    const { company } = params;
    if (!company) {
      return {
        notFound: true,
      };
    }
    const result = await fetch(getCaseStudyById + "/" + company);
    const resultJson = await result.json();
    if (resultJson.status == 200) {
      return {
        props: {
          data: resultJson.data,
        },
      };
    } else {
      return {
        notFound: true,
      };
    }
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
    };
  }
}

export default Company;
