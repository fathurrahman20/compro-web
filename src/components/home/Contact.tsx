import { motion } from "framer-motion";
import { Link } from "react-router";
import { sectionVariants } from "@/animations";

export default function Contact() {
  return (
    <motion.footer
      className="w-full bg-green-600 text-white py-12 md:py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionVariants}>
      <div className="container mx-auto px-4 flex flex-wrap gap-x-20 gap-y-8 text-start">
        <div>
          <h3 className="text-2xl font-bold mb-4">Kontak Kami</h3>
          <p className="mb-2">Email: mycompany@gmail.com</p>
          <p className="mb-2">Telepon: +62 123 4567 890</p>
          <p className="mb-2 max-w-[230px]">
            Alamat: Jl. Contoh No.123, Kota Contoh, Negara Contoh
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4">Jelajahi Situs</h3>
          <p className="mb-2">
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </p>
          <p className="mb-2">
            <Link to="/about" className="hover:underline">
              About Us
            </Link>
          </p>
          <p className="mb-2">
            <Link to="/services" className="hover:underline">
              Services
            </Link>
          </p>
          <p className="mb-2">
            <Link to="/news" className="hover:underline">
              News
            </Link>
          </p>
          <p className="mb-2">
            <Link to="/contact" className="hover:underline">
              Contact
            </Link>
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
