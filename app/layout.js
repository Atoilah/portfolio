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
  title: "Portfolio-AtoilahPutra",
  description: "Saya membuat portofolio ini dengan framework nextjs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="./A.svg" type="image/x-icon"/>
      {/* <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Roboto&display=swap" rel="stylesheet"/> */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white font-title`}
      >
        {children}
      </body>
    </html>
  );
}
