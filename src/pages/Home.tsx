import Contact from "@/components/home/Contact";
import Jumbotron from "@/components/home/Jumbotron";
import Misi from "@/components/home/Misi";
import Product from "@/components/home/Product";
import Services from "@/components/home/Services";

export default function HomePage() {
  return (
    <main>
      {/* START: Jumbotron */}
      <Jumbotron />
      {/* END: Jumbotron */}

      {/* START: Misi */}
      <Misi />
      {/* --- END: Misi --- */}

      {/* START: Produk */}
      <Product />
      {/* END: Produk */}

      {/* START: Layanan */}
      <Services />
      {/* END: Layanan */}

      {/* START: Kontak */}
      <Contact />
      {/* END: Kontak */}
    </main>
  );
}
