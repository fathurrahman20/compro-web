import { motion } from "framer-motion";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import {
  sectionVariants,
  cardContainerVariants,
  cardVariants,
} from "@/animations";

const services = [
  "Procurement & Trading",
  "Logistics & Delivery",
  "Custom Order",
  "Quality Assurance",
  "Assistant Consultation",
];

export default function Services() {
  return (
    <motion.section
      className="container mx-auto px-4 py-12 md:py-16 text-start"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionVariants}>
      <h2 className="text-2xl font-bold">Layanan</h2>
      <div className="flex w-full justify-between items-center flex-wrap gap-4">
        <p className="md:w-[80%] text-justify text-lg mt-4">
          Nikmati berbagai layanan profesional terintegrasi dari PT Green Global
          Sumatera, meliputi pasokan produk yang andal, Spesifikasi produk
          sesuai kebutuhan, Jaminan kualitas bersertifikat, Solusi logistik
          efisien, Konsultasi teknis industri. Semua layanan kami dirancang
          untuk mendukung kebutuhan industri Anda dengan cepat, t epat, dan
          konsisten.
        </p>
        <Button
          asChild
          className="rounded-full my-auto bg-green-400 hover:bg-green-600 text-white">
          <Link to="/layanan">Lihat semua</Link>
        </Button>
      </div>

      <motion.div
        className="flex flex-wrap gap-6 justify-center mt-6"
        variants={cardContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}>
        {services.map((service) => (
          <motion.div
            key={service}
            className="w-48 h-48 sm:w-56 sm:h-56 bg-green-300 rounded-lg flex items-center justify-center p-4"
            variants={cardVariants}
            whileHover={{
              y: -8,
              scale: 1.05,
            }}
            whileTap={{ scale: 0.95 }}>
            <p className="text-center cursor-pointer bg-white rounded-full px-4 py-2 font-medium">
              {service}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
