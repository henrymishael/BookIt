import { Quicksand } from "next/font/google";
import Header from "@/components/header";
import "@/assets/styles/globals.css";
import Footer from "@/components/footer";
import { Toaster as Sonner } from "@/components/ui/sonner";
import AuthWrapper from "@/components/AuthWrapper";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const syne = Quicksand({ subsets: ["latin"] });

export const metadata = {
  title: "Bookit App | Book a room",
  description: "Book a meeting or conference room for your team",
};

export default function RootLayout({ children }) {
  return (
    <AuthWrapper>
      <html lang='en'>
        <body
          className={`${syne.className}
       `}
        >
          <Header />
          <main className='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8'>
            {children}
          </main>
          <Sonner expand={true} position='top-right' />
          {/* <ToastContainer /> */}
          <Footer />
        </body>
      </html>
    </AuthWrapper>
  );
}
