import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ThemeProvider } from "@/lib/theme-provider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Muoka Software Solutions | Custom Software Development",
  description: "You need a software? Worry less — leave it to us, the experts, to bring it to life. Professional software development, web apps, mobile apps, and IT solutions.",
  keywords: "software development, web development, mobile apps, IT solutions, custom software, Nairobi, Kenya",
  authors: [{ name: "Muoka Software Solutions" }],
  creator: "Muoka Software Solutions",
  publisher: "Muoka Software Solutions",
  openGraph: {
    title: "Muoka Software Solutions | Custom Software Development",
    description: "Professional software development services in Nairobi, Kenya. We build scalable, innovative, and reliable software solutions.",
    url: "https://muokasoftware.com",
    siteName: "Muoka Software Solutions",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muoka Software Solutions",
    description: "Custom Software Development & IT Solutions",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        <ThemeProvider
          defaultTheme="system"
        >
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
