import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import { getLocale, getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

const open_sans = Open_Sans({
  variable: "--open_sans-font",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export const metadata: Metadata = {
  title: "oYoo Admin - Quản lý hệ thống đặt sân thể thao",
  description:
    "Trang quản trị oYoo giúp bạn dễ dàng quản lý hệ thống đặt sân thể thao. Quản lý thông tin sân bãi, theo dõi người dùng, xử lý yêu cầu đặt sân và nhận thông báo tức thì. Đơn giản hóa việc quản lý với oYoo Admin!",
  openGraph: {
    title: "oYoo Admin - Quản lý hệ thống đặt sân thể thao",
    description:
      "oYoo Admin cung cấp công cụ quản lý toàn diện cho việc đặt sân thể thao. Dễ dàng quản lý sân bãi, người dùng, và theo dõi hoạt động từ một giao diện duy nhất. Tối ưu hóa quy trình quản lý của bạn với oYoo Admin!",
    images: [
      "https://res.cloudinary.com/vku-university/image/upload/v1723109339/cknj5rnh1qj8iy0rl0em.png",
    ],
  },
  keywords: [
    "oYoo Admin",
    "Quản lý đặt sân thể thao",
    "Quản trị hệ thống sân bãi",
    "Quản lý người dùng",
    "Quản lý đặt sân",
    "Hệ thống quản lý sân thể thao",
    "oYoo quản lý sân thể thao",
  ],
  viewport: "width=device-width, initial-scale=1.0",
  other: {
    "google-site-verification": "4ahDuz3zxm5yfILuV5i30-AWdYT5CAyuWN4SMN53BQU",
    "apple-itunes-app": "app-id=id6553981056",
    "google-play-app": "app-id=com.hihi.sport.booking.booking",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${open_sans.variable}`}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <body>{children}</body>
      </NextIntlClientProvider>
    </html>
  );
}
