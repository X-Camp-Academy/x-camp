'use client';
import GoogleTracking from '@/components/common/google-tracking';
import WithModalVisible from '@/hoc/WithModalVisible';
import { WithAuth } from '@/hoc/with-auth';
import { useMobile } from '@/utils';
import { LocalStateProvider } from '@/utils/local-state';
import './globals.scss';
import WithLayout from '@/hoc/WithLayout';
import WithAntdConfig from '@/hoc/WithAntdConfig';
import Nav from '@/components/common/nav';
import Footer from '@/components/common/footer';
import BackTop from '@/components/common/back-top';
import dynamic from 'next/dynamic';
const WithIntl = dynamic(() => import('@/hoc/with-intl'), { ssr: false });
import FixedButtons from '@/components/common/fixed-buttons';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const isMobile = useMobile();
  return (
    <html lang="en" className={isMobile ? 'mobile' : 'pc'}>
      <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, minimum-scale=1, maximum-scale=1" />
      <GoogleTracking />
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
