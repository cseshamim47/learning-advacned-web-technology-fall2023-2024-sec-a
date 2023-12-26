'use client'
import { FeedbackProvider } from "../context/FeedbackContext"

export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        <FeedbackProvider> 
            {children}
        </FeedbackProvider>
      </section>
    )
  }