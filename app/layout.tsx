import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'WebhookSpy — Debug Why Webhooks Fail to Deliver',
  description: 'Monitor webhook delivery attempts, categorize failure reasons, get retry strategies, and track delivery success rates across all your endpoints.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="892518d7-5473-4cda-8441-3eac782ab75f"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
