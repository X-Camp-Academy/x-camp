/* eslint-disable @next/next/next-script-for-ga */
/* eslint-disable @next/next/no-head-element */

const GoogleTracking = () => {
  return (
    <>
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11428221684" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-11428221684');
            `
          }}
        />
      </head>
    </>
  );
};

export default GoogleTracking;
