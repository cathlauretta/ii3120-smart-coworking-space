"use client"
import { ChakraProvider } from "@chakra-ui/react"

import WithSubnavigation from "@/components/navbar"
import SmallWithSocial from "@/components/footer"
import "tailwindcss/tailwind.css"
import theme from "@/styles/theme"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head/>
      <body>
        <ChakraProvider theme={theme}>
          <div>
            {/* <WithSubnavigation /> */}
            {children}
            <SmallWithSocial />
          </div>
        </ChakraProvider>
      </body>
    </html>
  )
}
