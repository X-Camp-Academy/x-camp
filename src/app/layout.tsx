'use client';
import BackTop from '@/components/common/back-top';
import FixedButtons from '@/components/common/fixed-buttons';
import Footer from '@/components/common/footer';
import GoogleTracking from '@/components/common/google-tracking';
import Nav from '@/components/common/nav';
import WithAntdConfig from '@/hoc/WithAntdConfig';
import WithGlobalState from '@/hoc/WithGlobalState';
import WithLayout from '@/hoc/WithLayout';
import { WithAuth } from '@/hoc/with-auth';
import WithIntl from '@/hoc/with-intl';
import { useMobile } from '@/utils';
import { LocalStateProvider } from '@/utils/local-state';
import './globals.scss';

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
              <WithGlobalState>
                <WithAntdConfig>
                  <Nav />
                  <WithLayout>{children}</WithLayout>
                  <Footer />
                  <BackTop />
                  <FixedButtons />
                </WithAntdConfig>
              </WithGlobalState>
            </WithAuth>
          </WithIntl>
        </LocalStateProvider>
      </body>
    </html>
  );
}
