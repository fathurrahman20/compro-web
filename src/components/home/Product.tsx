import { motion } from "framer-motion";
import { sectionVariants } from "@/animations";

export default function Product() {
  return (
    <motion.section
      className="container mx-auto px-4 py-12 md:py-16 text-start"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionVariants}>
      <h2 className="text-2xl font-bold">Produk</h2>
      <p className="text-justify text-lg mt-4">
        Temukan beragam pilihan mineral premium dan produk kelapa sawit
        unggulan, yang dipilih dan diuji kualitasnya secara cermat untuk
        mendukung berbagai aplikasi industri serta memenuhi standar tertinggi
        dalam keandalan dan performa.
      </p>
    </motion.section>
  );
}
