import './globals.scss';
import { Inter } from 'next/font/google';
import { ConfigProvider } from 'antd';

import dynamic from 'next/dynamic';
const Nav = dynamic(() => import('@/components/nav'));

const inter = Inter({ subsets: ['latin'] });


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <Nav />
          <div>
            {children}
          </div>
      </body>
    </html>
  )
}
