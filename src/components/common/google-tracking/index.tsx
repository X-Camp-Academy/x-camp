import Script from 'next/script';

const GoogleTracking = () => {
  return (
    <div>
      <Script src="https://www.googletagmanager.com/gtag/js?id=AW-11428221684" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-11428221684');
        `}
      </Script>
    </div>
  );
};

export default GoogleTracking;
