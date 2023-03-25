import '@unocss/reset/normalize.css'
import './globals.css'

export const metadata = {
  title: 'Year Progress | Percent Complete',
  description: 'Percent complete of the current calendar year, updated daily!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
