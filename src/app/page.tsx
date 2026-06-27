import Nav from "@/components/nav/Nav";
import Hero from "@/components/Hero";
import Lessons from "@/components/Lessons";
import BookShowcase from "@/components/BookShowcase";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative flex w-full flex-1 flex-col">
      <Nav />
      <main className="w-full flex-1">
        <Hero />
        <Lessons />
        <BookShowcase />
        <About />
        <Footer />
      </main>
    </div>
  );
}