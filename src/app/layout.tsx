'use client';
import dynamic from 'next/dynamic';
import { LocalStateProvider } from '@/utils/local-state';
import { WithAuth } from '@/hoc/with-auth';
import { WithClient } from '@/apis/BaseAxiosClient';
import { useMobile } from "@/utils";
import './globals.scss';
const WithLayout = dynamic(() => import('@/hoc/WithLayout'), { ssr: false });
const WithAntdConfig = dynamic(() => import('@/hoc/WithAntdConfig'), { ssr: false });
const Nav = dynamic(() => import('@/components/common/nav'), { ssr: false });
const Footer = dynamic(() => import('@/components/common/footer'), { ssr: false });
const BackTop = dynamic(() => import('@/components/common/back-top'), {
  ssr: false,
});
const WithIntl = dynamic(() => import('@/hoc/with-intl'), {
  ssr: false,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isMobile = useMobile();
  return (
    <html lang="en" className={isMobile ? 'mobile' : 'pc'}>
      <meta
        name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1, minimum-scale=1, maximum-scale=1"
      />
      <body>
        <LocalStateProvider>
          <WithIntl>
            <WithAuth>
              <WithClient>
                <WithAntdConfig>
                  <Nav />
                  <WithLayout>{children}</WithLayout>
                  <Footer />
                  <BackTop />
                </WithAntdConfig>
              </WithClient>
            </WithAuth>
          </WithIntl>
        </LocalStateProvider>
      </body>
    </html>
  );
}
