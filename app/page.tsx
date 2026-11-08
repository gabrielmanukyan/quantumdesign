import { Contact } from "@/components/contact";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { HowIWork } from "@/components/how-i-work";
import { Products } from "@/components/products";
import { SelectedWork } from "@/components/selected-work";
import { Stack } from "@/components/stack";

export default function Home() {
  return (
    <div className="mx-auto max-w-[1120px] px-6 min-[700px]:px-10">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Products />
        <SelectedWork />
        <Experience />
        <HowIWork />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
