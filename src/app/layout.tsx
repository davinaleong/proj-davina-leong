import type { Metadata } from "next"
import Link from "next/link"
import "./globals.scss"

import PrimaryHeader from "./components/primaryHeader/primary-header"
import PrimaryFooter from "./components/primaryFooter/primary-footer"

import LibEnvVariables from "./lib/env/env"

const { APP_NAME, APP_DESCRIPTION } = LibEnvVariables

export const metadata: Metadata = {
  title: APP_NAME,
  description: APP_DESCRIPTION,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <PrimaryHeader />
        {children}
        <PrimaryFooter />
      </body>
    </html>
  )
}
