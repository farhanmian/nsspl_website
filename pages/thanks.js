import Head from "next/head";

const Thanks = () => {
  return (
    <>
      <Head>
        <title>Thanks</title>
      </Head>
      <section className="flex flex-col sm:flex-row bg-white items-center">
        <div className="flex-1 p-2 sm:p-12 ">
          <h1 className="text-[60px] font-bold text-center">
            Thanks for connecting with <span className="text-primary"> us</span>
          </h1>
          <p className="mt-5 text-center">
            One of our Business Development Connect with you soon
          </p>
        </div>
      </section>
    </>
  );
};

export default Thanks;
