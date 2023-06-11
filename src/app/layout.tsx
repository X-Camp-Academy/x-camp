import dynamic from 'next/dynamic';
import './globals.scss';

const Nav = dynamic(() => import('@/components/nav'));

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <meta
        name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1, minimum-scale=1, maximum-scale=1"
      >
      </meta>
      <body>
        <Nav />
        {children}
      </body>
    </html>
  )
}
