import "./globals.scss";
import dynamic from "next/dynamic";
import { LocalStateProvider } from "@/utils/local-state";
import WithIntl from "@/hoc/WithIntl";
import WithLayout from "@/hoc/WithLayout";

const Nav = dynamic(() => import("@/components/common/nav"));
const Footer = dynamic(() => import("@/components/common/footer"));
const BackTop = dynamic(() => import("@/components/common/back-top"));

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LocalStateProvider>
      <WithIntl>
        <html lang="en">
          <meta
            name="viewport"
            content="width=device-width, user-scalable=no, initial-scale=1, minimum-scale=1, maximum-scale=1"
          ></meta>
          <body>
            <Nav />
            <WithLayout>{children}</WithLayout>
            <Footer />
            <BackTop />
          </body>
        </html>
      </WithIntl>
    </LocalStateProvider>
  );
}
