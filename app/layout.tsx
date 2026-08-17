import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";

const arabic = IBM_Plex_Sans_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "Like A Model | الرئيسية",
  description: "رحلة تحول مصممة خصيصاً لك. في Like A Model نؤمن أن التحول الحقيقي يبدأ من القرار."
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ar" dir="rtl" className={`${arabic.variable} h-full antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}