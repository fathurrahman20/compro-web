import bgImage from "@/assets/image/mine.webp";
import image1 from "@/assets/image/palm.webp";
import image2 from "@/assets/image/mine2.webp";
import { motion } from "framer-motion";

export default function Jumbotron() {
  return (
    <section className="relative w-full text-white pt-24 pb-16 mb-12">
      <div
        className="absolute inset-0 bg-cover bg-center -z-10"
        style={{ backgroundImage: `url(${bgImage})` }}></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>
          "Menghubungkan Industri dengan Keunggulan dalam Material"
        </motion.h1>
        <motion.p
          className="mt-4 max-w-2xl mx-auto text-lg md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}>
          Menyediakan pasokan mineral produk turunan kelapa sawit yang
          terpercaya untuk mendukung produksi dan pertumbuhan Anda. Percayakan
          kepada kami untuk kualitas, konsistensi, dan jangkauan global di
          setiap pengiriman.
        </motion.p>

        <motion.div
          className="mt-8 flex justify-center flex-wrap gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}>
          <div>
            <img
              src={image1}
              alt="image1"
              className="w-48 h-48 md:w-60 md:h-60 object-cover rounded-[10px] shadow-lg"
            />
          </div>
          <div>
            <img
              src={image2}
              alt="image2"
              className="w-48 h-48 md:w-60 md:h-60 object-cover rounded-[10px] shadow-lg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
