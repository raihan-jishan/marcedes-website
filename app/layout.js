import "./globals.css";
import "../css/font.css";
export const metadata = {
  title: "marcedes  ",
  description: "marcedes website using nextjs ",
  icons: {
    icon: "assets/images/logo.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-montserrat bg-black text-white">{children}</body>
    </html>
  );
}
