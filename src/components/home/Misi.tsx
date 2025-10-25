import { sectionVariants } from "@/animations";
import { motion } from "framer-motion";
export default function Misi() {
  return (
    <motion.section
      className="container mx-auto px-4 py-12 md:py-16 text-start"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionVariants}>
      <div className="flex w-full justify-between items-center flex-wrap gap-4">
        <div className="flex-1">
          <h2 className="font-bold text-2xl">Misi Kami</h2>
          <p className="text-start text-lg mt-4">
            Tujuan dan misi kami adalah menjadi mitra terpercaya dalam
            penyediaan mineral dan produk kelapa sawit berkualitas tinggi bagi
            berbagai industri di seluruh dunia. Kami berkomitmen membangun
            hubungan jangka panjang dengan setiap klien melalui sumber pasokan
            yang andal, kualitas konsisten, dan pelayanan profesional. Melalui
            inovasi dan integritas, kami berupaya mendukung pertumbuhan serta
            keberhasilan mitra kami, sekaligus mendorong praktik bisnis yang
            berkelanjutan dan bertanggung jawab di setiap aspek operasional kami
          </p>
        </div>
      </div>
    </motion.section>
  );
}
