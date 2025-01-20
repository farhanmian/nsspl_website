import React, { useRef } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div style={{ marginTop: '90px' }} className=''  >
        {children}
        <Footer />
        <a class="whats-app" href="https://wa.me/918448229553" target="_blank">
          <img src='/logo/whatsapp.svg' height={50} width={50} />
        </a>
        {/* <TawkMessengerReact
                propertyId="6318455337898912e967b33b"
                widgetId="1gcbctkfu"
                 /> */}
      </div>
    </div>
  )
}

export default Layout