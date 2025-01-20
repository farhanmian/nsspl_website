import PortfolioItem from "../../components/Portfolio/PortfolioItem";
import React, { useState } from "react";
import Head from "next/head";
import data from "../../helper/data";
import { getAllCaseStudies } from "../../helper/constant";
import PortfolioItemRight from "../../components/Portfolio/PortfolioItemRight";

const Project = () => {
  const [page, setPage] = React.useState(1);
  const [allData, setAllData] = React.useState({
    caseStudyList: [],
    currentPage: 1,
    totalPages: 1,
    totalRecords: 0,
  });

  React.useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    const payload = {
      page,
      limit: 10,
      isActive: true,
    };
    fetch(getAllCaseStudies, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status) {
          setAllData(data.data);
        }
      });
  };
  return (
    <>
      <Head>
        <title>Portfolio | Mobile App Developer</title>
        <meta
          name="description"
          content="Have a look on our portfolio to see the quality of work delivered by us to well renowned clients."
        />
        <meta
          name="keywords"
          content="Our Portfolio, Android developer Portfolio, iOS developer Portfolio, Mobile App developer Portfolio, India"
        />
        <meta name="robots" content="index, follow" />
        <meta name="copyright" content="NSS Pvt Ltd" />
        <meta name="language" content="EN" />
      </Head>
      <section className="flex flex-col items-center">
        <div>
          <h2 className="font-extrabold text-[42px]">
            OUR <span className="text-primary"> Case Studies </span>
          </h2>
        </div>
        <div className="flex flex-col gap-4 justify-center items-center sm:p-4 sm:gap-10 sm:my-10">
          {allData.caseStudyList.map((item, index) =>
            index % 2 === 0 ? (
              <PortfolioItem item={item} key={index + "" + item._id} />
            ) : (
              <PortfolioItemRight item={item} key={index + "" + item._id} />
            )
          )}
        </div>
      </section>
    </>
  );
};

export default Project;

// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await fetch(`/api/project`)
//   const data = await res.json()

//   // Pass data to the page via props
//   return { props: { data } }
// }
