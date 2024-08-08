"use client";
import { useEffect } from "react";
import Aos from "aos";
import { Footer } from "../components/modules";

import "aos/dist/aos.css";
import { Header } from "../components/modules/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    Aos.init({
      easing: "ease",
      once: true,
      offset: 50,
      duration: 1000,
    });
  }, []);

  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
}
