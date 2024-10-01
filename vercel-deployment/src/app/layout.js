import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Next.js Splashpage",
  description: "basic template and spashpage to test vercel deployment",
  openGraph: {
    title: "Next.js Splashpage",
    description: "basic template and splshpage to test vercel deployment",
    image:
      "https://w0.peakpx.com/wallpaper/499/672/HD-wallpaper-warhammer-40-000-space-marine-tanks-robots-artwork-games.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
