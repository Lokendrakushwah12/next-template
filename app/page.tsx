import About from "@/components/sections/about";
import Footer from "@/components/sections/footer";
import Header from "@/components/sections/header";

export default function Page() {
  return (
    <div className="flex flex-col h-full lg:max-w-screen-lg mx-auto">
      <Header />
      <About />
      <Footer />
    </div>
  );
}
