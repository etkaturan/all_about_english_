import Cursor from "@/components/Cursor";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Lessons from "@/components/Lessons";
import BookShowcase from "@/components/BookShowcase";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative flex flex-1 flex-col">
      <Cursor />
      <Nav />
      <main className="flex-1">
        <Hero />
        <Lessons />
        <BookShowcase />
        <About />
        <Footer />
      </main>
    </div>
  );
}