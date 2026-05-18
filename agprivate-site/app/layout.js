
export const metadata = {
  title: 'AG Private Advisory',
  description: 'Private financial advisory',
}

import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  )
}
