// "use clinet"
import Image from "next/image";

import Hero from "@/components/hero/page";
import Product from "@/components/product";
import AboutUs from "@/components/about";
import ShopPremium from "@/components/shop";
import ChoseUs from "@/components/choose";
export default function Home() {
  return (
    <main>
      <Hero />
      <Product limit={4} />
      <AboutUs />
      <ShopPremium />
      <ChoseUs />
    </main>
  );
}
