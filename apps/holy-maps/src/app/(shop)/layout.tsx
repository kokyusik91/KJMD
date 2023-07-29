import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}
// 레이아웃 컴포넌트 서버
export default function ShopRootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <article>
        {children}
        <strong>쇼핑 푸터</strong>
      </article>
    </>
  )
}