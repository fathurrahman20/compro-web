import { motion } from "framer-motion";
import {
  sectionVariants,
  cardContainerVariants,
  cardVariants,
} from "@/animations";
import { Button } from "@/components/ui/button";
import { services } from "@/data";
import { Link } from "react-router";

export default function ServicesPage() {
  return (
    <main className="pb-4">
      <motion.section
        className="container mx-auto px-4 md:px-6 py-12 min-h-screen"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}>
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold">Layanan Kami</h1>
          <p className="mt-3 text-gray-700">
            Layanan kami dirancang untuk menutup seluruh kebutuhan rantai
            pasokan — dari sourcing, pengujian, hingga pengiriman. Setiap
            layanan dapat disesuaikan berdasarkan volume, spesifikasi teknis,
            dan lokasi pengiriman.
          </p>
        </header>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={cardContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}>
          {services.map((service) => (
            <motion.article
              key={service.id}
              className="p-6 rounded-lg bg-white shadow-sm border"
              variants={cardVariants}>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-700 mb-3 leading-relaxed">
                {service.description}
              </p>

              <ul className="list-inside list-disc text-gray-600 mb-4">
                {service.details.map((detail) => (
                  <li key={detail} className="py-0.5">
                    {detail}
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <Button
                  asChild
                  className="rounded-full bg-green-500 hover:bg-green-600 text-white">
                  <Link to="/contact">Minta Penawaran</Link>
                </Button>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <section className="mt-10 bg-green-50 p-6 rounded-lg">
          <h4 className="text-lg font-semibold mb-2">
            Solusi Paket & Volume Besar
          </h4>
          <p className="text-gray-700 mb-4">
            Untuk kebutuhan volume besar atau kontrak tahunan, tim kami
            menyediakan penawaran yang disesuaikan termasuk logistic bundling,
            pembiayaan, dan jaminan kontinuitas pasokan.
          </p>
          <Link
            to="/contact"
            className="inline-block px-5 py-3 rounded-full border border-green-600 text-green-600 hover:bg-green-50">
            Diskusikan Kontrak Korporat
          </Link>
        </section>
      </motion.section>
    </main>
  );
}
