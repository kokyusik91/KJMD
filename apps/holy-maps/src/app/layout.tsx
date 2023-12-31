import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}
// 레이아웃 컴포넌트 서버
export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <Link href={'/ㅇ'}>홈</Link>
          <Link href={'/maps'}>지도</Link>
          <Link href={'/dashboard'}>대시보드</Link>
        </nav>
        <main>{children}</main>
        <footer>고규식 전체 페이지 푸터</footer>
      </body>
    </html>
  )
}
