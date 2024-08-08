"use client";

import { AppDownload, FormSupport } from "@/app/components/modules";

export default function SupportPage() {
  return (
    <>
      <FormSupport />
      <AppDownload className="mb-20 md:mb-[100px]" />
    </>
  );
}
