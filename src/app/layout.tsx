'use client';
import GoogleTracking from '@/components/common/google-tracking';
import WithModalVisible from '@/hoc/WithModalVisible';
import { WithAuth } from '@/hoc/with-auth';
import { useMobile } from '@/utils';
import { LocalStateProvider } from '@/utils/local-state';
import dynamic from 'next/dynamic';
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
  return (
    <html lang="en" className={isMobile ? 'mobile' : 'pc'}>
      <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, minimum-scale=1, maximum-scale=1" />
      <body>
        <LocalStateProvider>
          <WithIntl>
            <WithAuth>
              <WithModalVisible>
                <WithAntdConfig>
                  <GoogleTracking />
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
