import { motion } from "framer-motion";
import { sectionVariants } from "@/animations";
import { Link } from "react-router";

export default function AboutPage() {
  return (
    <main className="pb-4">
      <motion.section
        className="container mx-auto px-4 md:px-6 py-12 bg-white rounded-lg shadow-sm"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}>
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold">
            Tentang PT My Company
          </h1>
          <p className="mt-3 text-lg text-gray-700 max-w-3xl">
            PT My Company adalah mitra industri yang berfokus pada penyediaan
            mineral dan produk turunan kelapa sawit dengan standar kualitas
            internasional. Kami menyokong rantai pasokan pelanggan melalui
            solusi yang andal, tepat waktu, dan berkelanjutan.
          </p>
        </header>

        {/* Sejarah */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Sejarah Singkat</h2>
          <p className="text-gray-700 leading-relaxed">
            Didirikan oleh profesional industri dengan pengalaman di sektor
            perdagangan komoditas dan logistik, PT My Company memulai operasi
            dengan tujuan menyediakan produk mineral dan hasil hilir kelapa
            sawit yang konsisten dan terstandarisasi. Sejak awal, kami membangun
            jaringan pemasok tepercaya, fasilitas pengujian kualitas, dan sistem
            logistik untuk memastikan setiap pengiriman memenuhi spesifikasi
            teknis serta kebutuhan produksi klien.
          </p>
        </section>

        {/* Visi & Misi */}
        <section className="mb-8 grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Visi</h3>
            <p className="text-gray-700 leading-relaxed">
              Menjadi penyedia global pilihan untuk mineral dan produk turunan
              kelapa sawit dengan standar mutu tinggi dan praktik bisnis yang
              berkelanjutan.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Misi</h3>
            <ul className="list-disc pl-5 text-gray-700 leading-relaxed space-y-2">
              <li>
                Menyediakan produk berkualitas melalui proses seleksi dan
                pengujian yang ketat.
              </li>
              <li>
                Membina kemitraan jangka panjang dengan pemasok dan pelanggan.
              </li>
              <li>
                Menerapkan proses logistik efisien untuk pengiriman tepat waktu.
              </li>
              <li>
                Mengadopsi praktik yang bertanggung jawab terhadap lingkungan
                dan sosial.
              </li>
            </ul>
          </div>
        </section>

        {/* Nilai & Keunggulan Kompetitif */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-3">
            Nilai-Nilai Inti & Keunggulan Kami
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <article className="bg-gray-50 p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold mb-1">Keandalan</h4>
              <p className="text-gray-700 leading-relaxed">
                Ketersediaan produk dan kepastian kualitas yang dapat diandalkan
                untuk operasi produksi pelanggan.
              </p>
            </article>

            <article className="bg-gray-50 p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold mb-1">Kualitas Terkendali</h4>
              <p className="text-gray-700 leading-relaxed">
                Pengujian spesifikasi melalui laboratorium terverifikasi dan
                dokumentasi mutu pada setiap batch.
              </p>
            </article>

            <article className="bg-gray-50 p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold mb-1">Logistik Terintegrasi</h4>
              <p className="text-gray-700 leading-relaxed">
                Rantai distribusi yang dirancang untuk mengurangi lead time dan
                mengoptimalkan biaya pengiriman.
              </p>
            </article>

            <article className="bg-gray-50 p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold mb-1">Layanan Teknis</h4>
              <p className="text-gray-700 leading-relaxed">
                Konsultasi teknis untuk spesifikasi produk dan penyesuaian
                solusi sesuai kebutuhan aplikasi industri.
              </p>
            </article>
          </div>
        </section>

        {/* CTA / Partnership */}
        <section className="mt-6">
          <h3 className="text-xl font-semibold mb-3">Mencari Mitra Pasokan?</h3>
          <p className="text-gray-700 leading-relaxed max-w-3xl mb-4">
            Jika perusahaan Anda mencari pemasok yang dapat diandalkan untuk
            bahan baku atau produk turunan kelapa sawit, tim kami siap
            berdiskusi tentang spesifikasi, volume, dan rencana pengiriman. Kami
            menerima permintaan sampel, penawaran harga, serta kunjungan pabrik
            untuk audit mutu.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-block px-5 py-3 rounded-full bg-green-600 text-white hover:bg-green-700">
              Hubungi Tim Penjualan
            </Link>
            <Link
              to="#"
              className="inline-block px-5 py-3 rounded-full border border-green-600 text-green-600 hover:bg-green-50">
              Lihat Produk & Spesifikasi
            </Link>
          </div>
        </section>
      </motion.section>
    </main>
  );
}
