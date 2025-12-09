import type { Metadata, Viewport } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import Script from "next/script";

export const viewport: Viewport = {
  themeColor: "#f97316",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_URL || "https://example.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
    },
  },
  title: {
    default: "Free Invoice Generator: Create & Send Professional Invoices in Minutes",
    template: "%s | Invoice Generator Pro",
  },
  description: "Get paid on time with our free invoice maker. Create professional invoices & send them to clients instantly. No signup required.",
  keywords: [
    "invoice generator",
    "free invoice template",
    "invoice maker",
    "online invoice",
    "create invoice",
    "professional invoice",
    "invoice software",
    "invoice creator",
    "digital invoice",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    url: process.env.NEXT_PUBLIC_URL || "https://example.com",
    title: "Free Invoice Generator: Create & Send Professional Invoices in Minutes",
    description: "Get paid on time with our free invoice maker. Create professional invoices & get them to clients instantly.",
    siteName: "Invoice Generator Pro",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Invoice Generator Pro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ThatsPranav",
    creator: "@ThatsPranav",
    title: "Free Invoice Generator: Create & Send Professional Invoices in Minutes",
    description: "Get paid on time with our free invoice maker. Create professional invoices & get them to clients instantly.",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  category: "business",
  authors: [{ name: "Invoice Generator Pro Team" }],
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <head>
        {/* Favicon & App Icons */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#f97316" />
        
        {/* Preconnect to external domains for better performance */}
        <link rel="preconnect" href="https://www.highperformanceformat.com" />
        <link rel="preconnect" href="https://pl28225690.effectivegatecpm.com" />
        
        {/* SEO Meta Tags */}
        <meta name="application-name" content="Invoice Generator Pro" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body className={`${GeistSans.className} antialiased`}>
        {/* Ad Scripts - Using Next.js Script component for better performance */}
        <Script
          id="effective-gate-cpm"
          strategy="afterInteractive"
          src="//pl28225690.effectivegatecpm.com/3c/91/79/3c9179bcc776f30dc1a579d80aff60b0.js"
        />
        
        <Script
          id="ad-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.atOptions = {
              'key': '7597aa772c2c514edb50598d1254e478',
              'format': 'iframe',
              'height': 90,
              'width': 728,
              'params': {}
            };`,
          }}
        />
        
        <Script
          id="high-performance-format"
          strategy="afterInteractive"
          src="//www.highperformanceformat.com/7597aa772c2c514edb50598d1254e478/invoke.js"
        />
        
        {/* Main Content */}
        <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
          {children}
        </main>
        
        {/* Analytics Script (Optional - Add your analytics here) */}
        {process.env.NODE_ENV === "production" && (
          <Script
            id="google-analytics"
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
          />
        )}
        
        {process.env.NODE_ENV === "production" && (
          <Script
            id="google-analytics-config"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />
        )}
      </body>
    </html>
  );
}
