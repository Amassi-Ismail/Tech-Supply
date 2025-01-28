// app/layout.js
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
        <footer className="bg-gray-800 text-white p-4 text-center">
          &copy; 2025 Tech Store
        </footer>
      </body>
    </html>
  );
}