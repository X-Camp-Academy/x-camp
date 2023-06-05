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
      <body>
        <Nav />
        {children}
      </body>
    </html>
  )
}
