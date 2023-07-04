import "./globals.scss";
import dynamic from "next/dynamic";
import { LocalStateProvider } from "@/utils/local-state";

import WithLayout from "@/hoc/WithLayout";
import { WithAuth } from "@/hoc/with-auth";
import { WithClient } from "@/apis/BaseAxiosClient";

const Nav = dynamic(() => import("@/components/common/nav"));
const Footer = dynamic(() => import("@/components/common/footer"));
const BackTop = dynamic(() => import("@/components/common/back-top"), {
  ssr: false,
});
const WithIntl = dynamic(() => import("@/hoc/with-intl"), {
  ssr: false,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta
        name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1, minimum-scale=1, maximum-scale=1"
      ></meta>
      <body>
        <LocalStateProvider>
          <WithIntl>
            <WithAuth>
              <WithClient>
                <Nav />
                <WithLayout>{children}</WithLayout>
                <Footer />
                <BackTop />
              </WithClient>
            </WithAuth>
          </WithIntl>
        </LocalStateProvider>
      </body>
    </html>
  );
}
