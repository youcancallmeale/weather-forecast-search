import Header from "./components/Header/Header";
import "./globals.css";

export const metadata = {
  title: "Weather Forecast App",
  description: "by Alesandro Barbosa",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="custom-html">
      <body className="custom-body">
        <Header />
        {children}
      </body>
    </html>
  );
}
