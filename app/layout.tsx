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
  title: "oYoo - Tìm kiếm & Đặt sân thể thao dễ dàng",
  description:
    "Khám phá và đặt sân thể thao dễ dàng với oYoo. Kết nối với những người đam mê thể thao, theo dõi lịch đặt sân và nhận thông báo tự động. Bắt đầu hành trình thể thao của bạn với chúng tôi ngay hôm nay!",
  openGraph: {
    title: "oYoo - Tìm kiếm & Đặt sân thể thao dễ dàng",
    description:
      "oYoo mang đến trải nghiệm đặt sân thể thao toàn diện. Tìm kiếm và đặt sân, kết nối với đồng đội và quản lý hoạt động thể thao của bạn một cách dễ dàng. Tham gia oYoo ngay bây giờ!",
    images: [
      "https://res.cloudinary.com/vku-university/image/upload/v1721705685/phdog9lxfozfmxvklufi.png",
    ],
  },
  keywords: [
    "oYoo",
    "Đặt lịch sân thể thao",
    "Đặt sân thể thao",
    "Đặt sân bóng đá",
    "Đặt sân tennis",
    "Đặt sân cầu lông",
    "Đặt sân bóng rổ",
    "Đặt sân bóng chuyền",
    "Đặt sân bóng bàn",
    "Đặt sân bóng đá mini",
    "Đặt sân futsal",
  ],
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index",
  other: {
    "google-site-verification": "4ahDuz3zxm5yfILuV5i30-AWdYT5CAyuWN4SMN53BQU",
    "apple-itunes-app": "app-id=id6553981056",
    "google-play-app": "app-id=com.hihi.sport.booking",
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
