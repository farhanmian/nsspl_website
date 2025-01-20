import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="/fonts/AkkBd_Pro_1.otf" />
        <link rel="preconnect" href="/fonts/AkkRg_Pro_1.otf" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap"
          rel="stylesheet"
        />

        {/* <!-- Google tag (gtag.js) --> */}
        {/* <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-NP35GSWPZZ"
        ></Script>
        <Script id="google analytics">
          {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-NP35GSWPZZ');`}
        </Script> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
