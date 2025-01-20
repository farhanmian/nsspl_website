import Link from "next/link";
import ClientFocusTab from "../../components/ClientFocusTab";
import Heading from "../../components/Heading";
import QuickStart from "../../components/Homepage/QuickStart";
import DevelopmentProcess from "../../components/DevelopmentProcess";
import TechStack from "../../components/Homepage/TechStack";
import Head from "next/head";
import {
  BsTools,
  BsShieldFillCheck,
  BsFillGrid1X2Fill,
  BsSpeedometer,
  GiChaingun,
} from "react-icons/bs";

const Blockchain = () => {
  return (
    <>
      <Head>
        <title>Mobile App Development Company | NSS Pvt Ltd</title>
        <meta
          name="description"
          content="Top mobile app development company NSS focusing on Android & iOS apps. Since 2009, we build more than 2500+ apps for both platform."
        />
        <meta
          name="keywords"
          content="mobile app development company, top app development companies, mobile app developers, mobile application development, mobile app development companies"
        />
        <meta name="robots" content="index, follow" />
        <meta name="copyright" content="NSS Pvt Ltd" />
        <meta name="language" content="EN" />
        <meta name="author" content="NSS Pvt Ltd" />
        <meta name="distribution" content="global" />
      </Head>
      {/* Hero Section STARTS */}
      <section className="text-gray-600 pb-5 body-font">
        <div className=" mx-auto flex px-5 sm:mx-10 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 flex flex-col md:text-left mb-16 md:mb-0 lg:text-left">
            <div className="title lg:text-left my-3 lg:my-9 text-2xl sm:text-3xl md:text-4xl lg:text-4xl">
              <h1 className="font-bold sm:leading-[45px] text-heading ">
                <span className="text-primary">NFT Marketplace </span>
                Development Services
              </h1>
            </div>
            <p className="mb-8 text-center text-base md:text-left leading-relaxed">
              Come work with one of the most well-known NFT marketplace
              development services out there. NSS clients get the best
              Non-Fungible Token creation services with built-in security and
              consistent support over the lifetime of a project
            </p>
            <div className="flex lg:justify-center lg:md:justify-start justify-between justify-start sm:gap-8 w-full">
              <Link href="/contact">
                <button className="p-2 lg:px-4 bg-primary text-white rounded-sm hover:scale-105 transition-all rounded-full">
                  Let’s Discuss your Project
                </button>
              </Link>
              <span className="mt-2 lg:text-[17px] text-[12px] text-heading font-bold">
                Or Call +918448229553
              </span>
            </div>
          </div>

          <div className="">
            <img
              className="object-contain object-center rounded sm:h-[500px]"
              alt="hero"
              src="/backgrounds/nft-marketplace.png"
            />
          </div>
        </div>
      </section>
      {/* Hero Section ENDS */}

      {/* NFT Marketplace start------------------------------------------------------------ */}
      <section className="bg-lightGray sm:pt-5">
        <div className="title text-center items-center my-3 text-2xl sm:text-3xl md:text-4xl lg:text-4xl">
          <h1 className="font-bold sm:leading-[45px] text-heading ">
            <span className="text-primary"> NFT Marketplace </span> Development
            Services
          </h1>
        </div>

        <div className="grid sm:grid-cols-2 sm:mx-20 sm:mt-8 mx-7 marketplaceWrapper">
          <div className="box flex flex-col sm:min-h-[150px]  items-left  border-right border-bottom">
            <h1 className="font-bold text-lg text-heading text-heading mb-4">
              CENTRALIZED NFT MARKETPLACE DEVELOPMENT
            </h1>
            <p className="text-gray-600">
              As a leading NFT Marketplace Development Company, We create NFT
              Marketplaces that ensure a delightful trading experience of NFTs
              for users around the world. With in-depth knowledge of all
              blockchain platforms, smart contracts, and IPFS protocols, We
              provide interactive NFT marketplace solutions in diverse
              industries.
            </p>
          </div>

          <div className="box flex flex-col sm:min-h-[150px]  items-left border-bottom">
            <h1 className="font-bold text-lg text-heading text-heading mb-4">
              NFT MARKETPLACE APP DEVELOPMENT
            </h1>
            <p className="text-gray-600">
              Our Custom NFT Marketplace Development solutions provide
              end-to-end development of robust NFT Marketplace Applications by
              leveraging the iconic blockchain platforms. We build
              business-centric, secure, and interactive NFT Marketplace Apps
              that run seamlessly across all mobile devices.
            </p>
          </div>

          <div className="box flex flex-col sm:min-h-[150px]  items-left  border-right">
            <h1 className="font-bold text-lg text-heading text-heading mb-4">
              NFT SMART CONTRACT AUDITS
            </h1>
            <p className="text-gray-600">
              Our Smart Contract Developers provide comprehensive NFT smart
              contract audit services that verify the compliance and security of
              your NFT Marketplaces. We carefully audit your entire smart
              contract functions and ensure that it will never be affected by
              breaches or bugs.
            </p>
          </div>

          <div className="box flex flex-col sm:min-h-[150px]  items-left ">
            <h1 className="font-bold text-lg text-heading text-heading mb-4">
              DECENTRALIZED NFT MARKETPLACE DEVELOPMENT
            </h1>
            <p className="text-gray-600">
              Through decentralization, we enable users to connect their wallet
              directly to the NFT marketplace eliminating the need to enter KYC
              details.
            </p>
          </div>
          <div className="icon">
            <img
              src="/icons/web-dev-icons/marketing-monitor.svg"
              alt=""
              height={50}
              width={50}
            />
          </div>
        </div>
        <div className="items-center flex flex-col lg:mt-0 mt-8">
          <Link href="/contact">
            <button className="my-10 p-2 lg:px-4 bg-primary text-white rounded-sm hover:scale-105 transition-all rounded-full">
              Consult Our NFT Experts
            </button>
          </Link>
        </div>
      </section>
      {/* NFT Marketplace End-------------------------------------------------------------------------- */}

      {/* Benefits of Availing Our start------------------------------------------------------------ */}
      <section className="lg:mt-0 mt-5">
        <div className="grid grid-cols-1 sm:mx-10 lg:grid-cols-[510px_minmax(0px,_1fr)_0px] items-center">
          <div className="flex flex-col">
            <div className="title mx-7 my-3 lg:my-9 lg:text-left text-center text-2xl sm:text-3xl md:text-4xl lg:text-4xl">
              <img
                src="/backgrounds/benefits-circle.png"
                alt=""
                height={120}
                width={120}
                // className="mx-4"
              />
              <h1 className="font-bold sm:leading-[45px] text-heading mt-5">
                Benefits of Availing Our{" "}
                <span className="text-primary">
                  NFT Marketplace Development
                </span>{" "}
                Services
              </h1>
            </div>

            <p className="text-center text-gray-600 md:text-left leading-relaxed mx-7">
              We Serve a Horizon of Benefits to Our Esteemed Customers Through
              Our NFT Marketplace Development
            </p>
          </div>

          <div className="flex flex-col my-10">
            <div className="grid gap-8 my-4 px-5 sm:grid-cols-2 sm:px-10  md:grid-cols-2 lg:grid-cols-2">
              <div className="flex flex-col p-2 text-left sm:mx-2 bg-white rounded-xl shadow-lg justify-center items-left gap-2">
                <img
                  src="/icons/web-dev-icons/security-audit-icon-a.svg"
                  alt=""
                  height={50}
                  width={50}
                  className="mx-4"
                />
                <h1 className="font-bold text-lg text-heading ml-4 text-left">
                  Security Audit
                </h1>

                <p className="text-gray-600 mx-4">
                  We deploy the NFT Marketplace after rigorous testing and
                  fixing of the bugs to secure the funds and digital assets
                  avoiding vulnerabilities.
                </p>
              </div>

              <div className="flex flex-col p-2 text-left sm:mx-2 bg-white rounded-xl shadow-lg justify-center items-left gap-2">
                <img
                  src="/icons/web-dev-icons/customized-solutions-icon-a.svg"
                  alt=""
                  height={50}
                  width={50}
                  className="mx-4"
                />
                <h1 className="font-bold text-lg text-heading ml-4 text-left">
                  Customized Platform
                </h1>
                <p className="text-gray-600 mx-4">
                  We Customize our NFT Marketplace Development services based on
                  the needs of our customers to meet their business objectives.
                </p>
              </div>

              <div className=" flex flex-col p-2 text-left sm:mx-2 bg-white  rounded-xl shadow-lg justify-center items-left gap-2">
                <img
                  src="/icons/web-dev-icons/intuitive-interface-icon-a.svg"
                  alt=""
                  height={50}
                  width={50}
                  className="mx-4"
                />
                <h1 className="font-bold text-lg text-heading ml-4 text-left">
                  Intuitive Interface
                </h1>
                <p className="text-gray-600 mx-4">
                  We offer a self-explanatory interface for our NFT Marketplace
                  delivering an enhanced trading experience.
                </p>
              </div>

              <div className=" flex flex-col p-2 text-left sm:mx-2 bg-white rounded-xl shadow-lg justify-center items-left gap-2">
                <img
                  src="/icons/web-dev-icons/trending-technology-icon-a.svg"
                  alt=""
                  height={50}
                  width={50}
                  className="mx-4"
                />
                <h1 className="font-bold text-lg text-heading ml-4 text-left">
                  Trending Technology
                </h1>
                <p className="text-gray-600 mx-4">
                  Our certified professionals stay updated with cutting-edge
                  technology trends to deliver enhanced NFT Marketplace
                  Development Services.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="items-center flex flex-col lg:mt-0 mt-8">
          <Link href="/contact">
            <button className="mb-10 p-2 lg:px-4 bg-primary text-white rounded-sm hover:scale-105 transition-all rounded-full">
              Let's get started
            </button>
          </Link>
        </div>
      </section>
      {/* Benefits of Availing Our End-------------------------------------------------------------------------- */}

      {/* Features of NFT Marketplace start------------------------------------------------------------ */}
      <section className="bg-lightGray sm:pt-3">
        <div className="title text-center items-center my-3 text-2xl sm:text-3xl md:text-4xl lg:text-4xl">
          <h1 className="font-bold sm:leading-[45px] text-heading pt-10 lg:pt-0">
            Features of{" "}
            <span className="text-primary"> NFT Marketplace Development </span>
          </h1>
        </div>
        <div className="grid sm:grid-cols-3 sm:mt-8 mx-7 sm:mx-20">
          <div className="flex flex-col sm:min-h-[150px] items-center text-center gap-2 box-border border-[1px] p-5 rounded-[30px] border-primary">
            <h1 className="font-bold text-md text-heading ml-4 text-left">
              STOREFRONT
            </h1>
            <p className="text-gray-600">
              NFT Marketplace Platform comes with an Outstanding Storefront that
              contains all the information needed for NFTs such as owners, bids,
              previews, and price history.
            </p>
          </div>

          <div className="flex flex-col sm:min-h-[150px] items-center mt-5 gap-2 box-border border-[1px] lg:mt-0 lg:ml-5 p-5 rounded-[30px] border-primary">
            <h1 className="font-bold text-md text-heading ml-4 text-left">
              FILTERS
            </h1>
            <p className="text-gray-600">
              Every Marketplace should come up with Filters that make navigation
              and searching easier for users. With the Filter Feature, users can
              easily assess their items more accurately.
            </p>
          </div>

          <div className="flex flex-col sm:min-h-[150px] mt-5 items-center gap-2 box-border border-[1px] lg:mt-0 lg:ml-5 p-5 rounded-[30px] border-primary">
            <h1 className="font-bold text-md text-heading ml-4 text-left">
              SEARCHING FOR ITEMS
            </h1>
            <p className="text-gray-600">
              NFT Marketplace Platform will come up with a search bar for the
              users to support category management. Users can search NFTs using
              the search bar by adding categories.
            </p>
          </div>

          <div className="flex flex-col sm:min-h-[150px]  items-center gap-2 box-border border-[1px] mt-5 p-5 rounded-[30px] border-primary">
            <h1 className="font-bold text-md text-heading ml-4 text-left">
              CREATE MINING
            </h1>
            <p className="text-gray-600">
              With the Create mining feature users can create their own NFTs and
              Submit it. Users can upload their files by providing suitable
              token information such as name, description, tags, etc.
            </p>
          </div>

          <div className="flex flex-col sm:min-h-[150px]  items-center gap-2 box-border border-[1px] lg:ml-5 mt-5 p-5 rounded-[30px] border-primary">
            <h1 className="font-bold text-md text-heading ml-4 text-left">
              BUY AND BID
            </h1>
            <p className="text-gray-600">
              The Buy and Bid feature on the marketplace allows users to Bid for
              their favorite NFTs they wish to Buy that are listed on the
              platform.
            </p>
          </div>

          <div className="flex flex-col sm:min-h-[150px]  items-center gap-2 box-border border-[1px] lg:ml-5 mt-5 p-5 rounded-[30px] border-primary">
            <h1 className="font-bold text-md text-heading ml-4 text-left">
              WALLET
            </h1>
            <p className="text-gray-600">
              The main feature of the NFT Marketplace Platform enables users to
              store, send, and receive NFTs. With this feature, users can
              connect their wallets to the Platform.
            </p>
          </div>
        </div>
        <div className="items-center flex flex-col">
          <Link href="/contact">
            <button className="my-10 p-2 lg:px-4 bg-primary text-white rounded-sm hover:scale-105 transition-all rounded-full">
              Request a free consultant
            </button>
          </Link>
        </div>
      </section>
      {/* Features of NFT Marketplace End-------------------------------------------------------------------------- */}

      {/* NFT MARKETPLACE SOFTWARE FOR VARIOUS MARKET start------------------------------------------------------------ */}
      <section className="sm:pt-5 sm:mx-10">
        <div className="title text-center items-center my-3">
          <h1 className="font-bold sm:leading-[45px] text-heading pt-10 lg:pt-0 text-2xl sm:text-3xl md:text-4xl lg:text-4xl">
            <span className="text-primary">NFT Marketplace</span> Software for
            Various Markets
          </h1>
          <p className="my-4 text-center text-gray-600">
            NFT Marketplace Software allows entrepreneurs to easily launch and
            display a wide range of NFT
            <br /> Collectibles that include art, music, in-game components, and
            attire.
          </p>
        </div>

        <div className="flex flex-col my-5 mx-6 marketPlace_wrapper">
          <div className="grid gap-2 my-4 px-5 sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col pb-4 text-center sm:mx-2 bg-white rounded-xl shadow-lg justify-center items-center gap-2 mb-2">
              <img
                src="/backgrounds/art.jpg"
                alt=""
                height={200}
                width={200}
                className="mx-4"
              />
              <h1 className="font-bold text-heading text-md">Art</h1>
              <p className="text-gray-600 text-sm">
                Create an Exclusive platform to showcase individual uniqueness
                in the field of art
              </p>
            </div>

            <div className="flex flex-col pb-4 text-center sm:mx-2 bg-white rounded-xl shadow-lg justify-center items-center gap-2 mb-2">
              <img
                src="/backgrounds/music.webp"
                alt=""
                height={150}
                width={200}
                className="mx-4"
              />
              <h1 className="font-bold text-heading text-md">Music</h1>
              <p className="text-gray-600 text-sm">
                Create an Extensive Marketplace to get in Rhythm and hold
                favorite music's proprietorship
              </p>
            </div>

            <div className="flex pb-4 flex-col text-center sm:mx-2 bg-white rounded-xl shadow-lg justify-center items-center gap-2 mb-2">
              <img
                src="/backgrounds/games.webp"
                alt=""
                height={150}
                width={200}
                className="mx-4"
              />
              <h1 className="font-bold text-heading text-md">Games</h1>
              <p className="text-gray-600 text-sm">
                Get into gaming by holding fractional ownership of your favorite
                games and their accessories.
              </p>
            </div>

            <div className="flex pb-4 flex-col text-center sm:mx-2 bg-white rounded-xl shadow-lg justify-center items-center gap-2 mb-2">
              <img
                src="/backgrounds/digital.jpg"
                alt=""
                height={150}
                width={200}
                className="mx-4"
              />
              <h1 className="font-bold text-heading text-md">
                Digital Collectibles
              </h1>
              <p className="text-gray-600 text-sm">
                Create your Marketplace to showcase your rarest collections and
                bring them to trade-off using NFTs.
              </p>
            </div>

            <div className="flex pb-4 flex-col text-center sm:mx-2 bg-white rounded-xl shadow-lg justify-center items-center gap-2 mb-2">
              <img
                src="/backgrounds/photography.jpg"
                alt=""
                height={150}
                width={200}
                className="mx-4"
              />
              <h1 className="font-bold text-heading text-md">Photography</h1>
              <p className="text-gray-600 text-sm">
                Showcase and display your photography skills over a dedicated
                platform and trade-off for certain NFTs.
              </p>
            </div>

            <div className="flex pb-4 flex-col text-center sm:mx-2 bg-white rounded-xl shadow-lg justify-center items-center gap-2 mb-2">
              <img
                src="/backgrounds/metaverse.jpeg"
                alt=""
                height={150}
                width={200}
                className="mx-4"
              />
              <h1 className="font-bold text-heading text-md">Metaverses</h1>
              <p className="text-gray-600 text-sm">
                NFT Marketplace for Metaverses combines AR, VR, and physical
                spaces within a single entity.
              </p>
            </div>

            <div className="flex pb-4 flex-col text-center sm:mx-2 bg-white rounded-xl shadow-lg justify-center items-center gap-2 mb-2">
              <img
                src="/backgrounds/domains.png"
                alt=""
                height={150}
                width={200}
                className="mx-4"
              />
              <h1 className="font-bold text-heading text-md">Domains</h1>
              <p className="text-gray-600 text-sm">
                NFT Marketplace for Domains a generic ledger to hold a certain
                set of Domains for future and further use.
              </p>
            </div>

            <div className="flex pb-4 flex-col text-center sm:mx-2 bg-white rounded-xl shadow-lg justify-center items-center gap-2 mb-2">
              <img
                src="/backgrounds/sports.jpg"
                alt=""
                height={150}
                width={200}
                className="mx-4"
              />
              <h1 className="font-bold text-heading text-md">Sports</h1>
              <p className="text-gray-600 text-sm">
                NFT Marketplace in sports is mainly used to make use of Trump
                that are different and unique in value.
              </p>
            </div>
          </div>
        </div>
        <div className="items-center flex flex-col lg:mt-0 mt-8">
          <Link href="/contact">
            <button className="mb-10 p-2 lg:px-4 bg-primary text-white rounded-sm hover:scale-105 transition-all rounded-full">
              Request a free consultant
            </button>
          </Link>
        </div>
      </section>
      {/* NFT MARKETPLACE SOFTWARE FOR VARIOUS MARKET End-------------------------------------------------------------------------- */}

      {/* Technology Engagement start------------------------------------------------------------ */}
      <section className="bg-lightGray sm:pt-3">
        <div className="title text-center items-center my-3 text-2xl sm:text-3xl md:text-4xl lg:text-4xl">
          <h1 className="font-bold sm:leading-[45px] text-heading pt-10 lg:pt-0">
            <span className="text-primary">Technology</span> Engagement
          </h1>
        </div>
        <div className="grid sm:grid-cols-2 sm:mt-8 mx-7 sm:mx-20 sm:mx-20 mb-10 text-heading">
          <div className="flex flex-col lg:mt-0 mt-5 sm:min-h-[150px] items-center text-center  legend-box">
            <div className="head bg-lightGray">Blockchain Platform</div>
            <div className="flex justify-center innerImg gap-5">
              <img src="/icons/brand1.svg" height={80} width={80} />
              <img src="/icons/brand2.svg" height={80} width={80} />
              <img src="/icons/brand3.svg" height={80} width={80} />
              <img src="/icons/brand4.svg" height={80} width={80} />
              <img src="/icons/brand5.svg" height={80} width={80} />
            </div>
          </div>

          <div className="flex flex-col lg:ml-5 lg:mt-0 mt-10 sm:min-h-[150px] items-center text-center  legend-box">
            <div className="head bg-lightGray">Storage Platform</div>
            <div className="flex justify-center innerImg gap-5">
              <img src="/icons/brand6.svg" height={80} width={80} />
              <img src="/icons/brand7.svg" height={80} width={80} />
              <img src="/icons/brand8.svg" height={80} width={80} />
            </div>
          </div>

          <div className="flex flex-col mt-10 sm:min-h-[150px] items-center text-center  legend-box">
            <div className="head bg-lightGray">NFT Standard</div>
            <div className="flex justify-center innerImg gap-5">
              {/* <img src="/icons/brand9.svg" height={80} width={80} /> */}
              <img src="/icons/brand10.svg" height={80} width={95} />
              <img src="/icons/brand11.svg" height={60} width={60} />
              <img src="/icons/brand12.svg" height={80} width={70} />
              <img src="/icons/brand13.svg" height={85} width={80} />
              <img src="/icons/brand14.svg" height={80} width={70} />
            </div>
          </div>

          <div className="flex flex-col lg:ml-5 mt-10 sm:min-h-[150px] items-center text-center  legend-box">
            <div className="head bg-lightGray">Front-end Frameworks</div>
            <div className="flex justify-center innerImg gap-5">
              <img src="/icons/brand15.svg" height={80} width={80} />
              <img src="/icons/brand16.svg" height={80} width={80} />
              <img src="/icons/brand17.svg" height={80} width={80} />
            </div>
          </div>
        </div>
      </section>
      {/* Technology Engagement End-------------------------------------------------------------------------- */}

      {/* contact us START */}
      <QuickStart />
      {/* contact us ENDS */}
    </>
  );
};

export default Blockchain;
