import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "../context/CartContext";

export const metadata: Metadata = {
  title: "مشويات دمشق القديمة | الفخامة الشامية في الرياض",
  description: "أصالة المشويات الشامية، كباب عراقي، أوصال غنم، فطائر معجنات، وطواجن فاخرة بالرياض.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="dark">
      <body className="bg-[#0F0F0F] text-white antialiased selection:bg-[#A40000]">
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}

