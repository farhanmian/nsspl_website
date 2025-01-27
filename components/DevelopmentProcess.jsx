import Heading from "./Heading";

const DevelopmentProcess = () => {
  return (
    <section className="homeAboutSection py-2 sm:py-5 md:py-10">
      <Heading
        title={"Our Application"}
        highlighted={"Development Process"}
        details={
          "The key elements of Nsspl Web & Mobile app development ecosystem are our people and thorough process structure that enables us to deliver quality services to our clients."
        }
      />
      <div className="flex flex-col gap-6  items-center justify-items-center sm:grid sm:grid-cols-3 justify-center lg:flex lg:flex-row">
        <div className="border border-primaryLight w-40 h-60 bg-white shadow-lg flex flex-col gap-6 items-center py-4 rounded-3xl lg:mt-28">
          <div className="bg-[#C33172] h-32 w-28 rounded-3xl flex justify-center items-center">
            <img src="/icons/strategy.svg" />
          </div>
          <h1 className="text-center text-xl font-bold">Strategy</h1>
        </div>

        <div className="border border-primaryLight w-40 h-60 bg-white shadow-lg flex flex-col gap-6 items-center py-4 rounded-3xl">
          <div className="bg-[#ED4254] h-32 w-28 rounded-3xl flex justify-center items-center">
            <img src="/icons/analysis.svg" />
          </div>
          <h1 className="text-center text-xl font-bold">Analysis</h1>
        </div>

        <div className="border border-primaryLight w-40 h-60 bg-white shadow-lg flex flex-col gap-6 items-center py-4 rounded-3xl lg:mt-28">
          <div className="bg-[#BFAB4A] h-32 w-28 rounded-3xl flex justify-center items-center">
            <img src="/icons/ui-design.svg" />
          </div>
          <h1 className="text-center text-xl font-bold">UI/UX Design</h1>
        </div>

        <div className="border border-primaryLight w-40 h-60 bg-white shadow-lg flex flex-col gap-6 items-center py-4 rounded-3xl">
          <div className="bg-[#66C160] h-32 w-28 rounded-3xl flex justify-center items-center">
            <img src="/icons/development-process.svg" />
          </div>
          <h1 className="text-center text-xl font-bold">Development Process</h1>
        </div>

        <div className="border border-primaryLight w-40 h-60 bg-white shadow-lg flex flex-col gap-6 items-center py-4 rounded-3xl lg:mt-28">
          <div className="bg-[#01AEBC] h-32 w-28 rounded-3xl flex justify-center items-center">
            <img src="/icons/testing.svg" />
          </div>
          <h1 className="text-center text-xl font-bold">Testing</h1>
        </div>

        <div className="border border-primaryLight w-40 h-60 bg-white shadow-lg flex flex-col gap-6 items-center py-4 rounded-3xl">
          <div className="bg-[#006693] h-32 w-28 rounded-3xl flex justify-center items-center">
            <img src="/icons/publish.svg" />
          </div>
          <h1 className="text-center text-xl font-bold">Publish & Launch</h1>
        </div>
      </div>
    </section>
  );
};

export default DevelopmentProcess;
