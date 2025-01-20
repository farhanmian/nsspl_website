import "../styles/globals.css";
import "../styles/MtcPageStyles/MtcProductPage.css";
import "../styles/MtcPageStyles/MtcProductBgContainerImg.css";
import "../styles/MtcPageStyles/MtcProductTextFlexCard.css";
import "../styles/MtcPageStyles/MtcHelpSectionStyles.css";
import "../styles/MtcPageStyles/MyTrueCardStyles.css";

import "../styles/TextHeadingStyles.css";
import "../styles/MtcPageStyles/TechnologyImgCard.css";
import "../styles/MtcPageStyles/MtcQuoteFormStyles.css";
import "../styles/MtcPageStyles/MtcAvidianCrmStyles.css";
import "../styles/MtcPageStyles/MtcGetStartedComponentStyles.css";
import "../styles/AvidianCrm/AvidianCrmOutlook.css";
import "../styles/AvidianCrm/AvidianCrmFeaturesStyles.css";
import "../styles/AvidianCrm/EmbeddedOutlookStyles.css";
import "../styles/AvidianCrm/OpportunityManagementStyles.css";
import "../styles/AvidianCrm/SalesAutomationStyles.css";
import "../styles/AvidianCrm/ProphetCRMintegrationComponetStyles.css";

// MyTrueCardStyles;

// AvidianCrmFeaturesStyles;
// AvidianCrmOutlook;

import Layout from "../helper/Layout";
import Script from "next/script";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <Layout>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-NP35GSWPZZ"
      ></Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-NP35GSWPZZ');`}
      </Script>

      <script
        async
        type="module"
        src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        async
        noModule
        src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
      ></script>
      {router.pathname === "/thanks" ? (
        <>
          <script
            dangerouslySetInnerHTML={{
              __html: `gtag('event', 'conversion', {'send_to': 'AW-10976951418/zKSTCKTGo9YYEPr4m_Io'});`,
            }}
          ></script>
        </>
      ) : (
        <>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=AW-10976951418"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'AW-10976951418');`,
            }}
          ></script>
        </>
      )}

      <Script id="tawk" strategy="lazyOnload">
        {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/6318455337898912e967b33b/1gcbctkfu';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
            })(); 
        `}
      </Script>

      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
