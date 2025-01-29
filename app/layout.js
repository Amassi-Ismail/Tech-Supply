// app/layout.js
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";
import "./globals.css";

export const metadata = {
  title: "Tech Store",
  description: "Your one-stop shop for tech supplies",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Navbar />
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}