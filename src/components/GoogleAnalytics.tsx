"use client";
import Script from "next/script";

const GoogleAnalytics = () => {
  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-91CV4XDFKH" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-91CV4XDFKH');
        `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
