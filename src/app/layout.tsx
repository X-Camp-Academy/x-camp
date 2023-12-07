'use client';
import WithModalVisible from '@/hoc/WithModalVisible';
import { WithAuth } from '@/hoc/with-auth';
import { useMobile } from '@/utils';
import { LocalStateProvider } from '@/utils/local-state';
import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';
import Script from 'next/script';
import './globals.scss';

const WithLayout = dynamic(() => import('@/hoc/WithLayout'), { ssr: false });
const WithAntdConfig = dynamic(() => import('@/hoc/WithAntdConfig'), {
  ssr: false
});
const Nav = dynamic(() => import('@/components/common/nav'), { ssr: false });
const Footer = dynamic(() => import('@/components/common/footer'), {
  ssr: false
});
const BackTop = dynamic(() => import('@/components/common/back-top'), {
  ssr: false
});
const WithIntl = dynamic(() => import('@/hoc/with-intl'), {
  ssr: false
});
const FixedButtons = dynamic(() => import('@/components/common/fixed-buttons'), {
  ssr: false
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const isMobile = useMobile();
  const pathname = usePathname();
  const isTracking = pathname === '/' || /^\/courses\/detail/.test(pathname) || /^\/courses\/camps/.test(pathname);
  return (
    <html lang="en" className={isMobile ? 'mobile' : 'pc'}>
      <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, minimum-scale=1, maximum-scale=1" />
      <head>
        {isTracking && (
          <>
            <Script src="https://www.googletagmanager.com/gtag/js?id=AW-11428221684" strategy="afterInteractive" />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'AW-11428221684');
              `}
            </Script>
          </>
        )}
      </head>
      <body>
        <LocalStateProvider>
          <WithIntl>
            <WithAuth>
              <WithModalVisible>
                <WithAntdConfig>
                  <Nav />
                  <WithLayout>{children}</WithLayout>
                  <Footer />
                  <BackTop />
                  <FixedButtons />
                </WithAntdConfig>
              </WithModalVisible>
            </WithAuth>
          </WithIntl>
        </LocalStateProvider>
      </body>
    </html>
  );
}
