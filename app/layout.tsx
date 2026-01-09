import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ma porto",
  description: "Personal portfolio of Elgy Sundari - UI/UX Designer and Quality Assurance Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <div className="orb orb-1" aria-hidden="true"></div>
        <div className="orb orb-2" aria-hidden="true"></div>
        <div className="orb orb-3" aria-hidden="true"></div>
        {children}
      </body>
    </html>
  );
}
