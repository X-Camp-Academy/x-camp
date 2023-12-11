/* eslint-disable react/style-prop-object */
/* eslint-disable @next/next/next-script-for-ga */

const GoogleTracking = () => {
  return (
    <>
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-DD9N7XKE9Q" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-DD9N7XKE9Q');
            `
          }}
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){
              w[l] = w[l] || [];
              w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),
                  dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KFQ47RNG');
          `
          }}
        />
      </head>
      <body>
        <noscript><iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-KFQ47RNG"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        /></noscript>
      </body>
    </>
  );
};

export default GoogleTracking;
