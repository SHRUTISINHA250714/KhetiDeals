import { Button } from "@/components/ui/button";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { LoginButton } from "@/components/auth/login-button";
import Hero from "@/components/homePage/Hero";
import Navbar from "@/components/homePage/Navbar";
import Footer from "@/components/homePage/Footer";
import GoogleTranslate from "@/components/homePage/GoogleTranslate";

const font = Poppins({
  subsets: ["latin"],
  weight: "600",
});

export const metadata = {
  title: "Home",
  description: "Landing page",
};

export default function Home() {
  return (
    // <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
    //   <div className=" space-y-6 text-center ">
    //     <h1
    //       className={cn(
    //         "text-6xl font-semibold text-white drop-shadow-md",
    //         font.className
    //       )}
    //     >
    //       🔐 KETHIDEAL
    //     </h1>
    //     {/* <p className="text-white text-lg">A Simple Authentication service</p> */}
    //     <div>
    //       <LoginButton>
    //         <Button variant="secondary" size="lg">
    //           Sign in
    //         </Button>
    //       </LoginButton>
    //     </div>
    //   </div>
    // </main>
    <>
      <Navbar />
      <Hero />
      <Footer />
    </>
  );
}
