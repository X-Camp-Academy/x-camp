/* eslint-disable @next/next/next-script-for-ga */
import Head from 'next/head';

const GoogleTracking = () => {
  return (
    <>
      <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11428221684" />
      <Head>
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
      </Head>
    </>
  );
};

export default GoogleTracking;
