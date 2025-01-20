import Head from "next/head"
import AboutContent from "../components/About/AboutContent"
import AboutHero from "../components/About/AboutHero"
import Aboutinfo from "../components/About/Aboutinfo"
import Achievements from "../components/About/Achievements"
import Industries from "../components/About/Industries"
import Management from "../components/About/Management"
import Ondemand from "../components/About/Ondemand"
import Solution from "../components/Homepage/Solution";
import Partners from '../components/Homepage/Partners'

const About = () => {
  return (<>
        <Head>
          <title>About NSS | Web and Mobile App Development Company.</title>
          <meta name="description" content="About NSS: We are a Trusted Web & Mobile App Development Company in India that help businesses to the top of success through technology." />
          <meta name="keywords" content="NSS, Company Overview, Why NSS, NSS Pvt Ltd" />
          <meta name="robots" content="index, follow" />
          <meta name="copyright" content="NSS Pvt Ltd" />
          <meta name="language" content="EN" />
        </Head>
        <AboutHero />
        <Achievements />
        <Aboutinfo />
        <Industries />
        <AboutContent />
        <Solution />
        <Partners />
        <Management />

        {/* <Ondemand /> */}
        
    </>)
}

export default About