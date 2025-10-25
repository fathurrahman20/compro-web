import { useState } from "react";
import { motion } from "framer-motion";
import { sectionVariants } from "@/animations";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState<{
    type: "idle" | "loading" | "success" | "error";
    msg?: string;
  }>({ type: "idle" });

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus({ type: "loading" });
  }

  return (
    <main className="pb-4">
      <motion.section
        className="container mx-auto px-4 md:px-6 py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h1 className="text-3xl font-bold mb-3">Kontak Kami</h1>
            <p className="text-gray-700 mb-6">
              Untuk pertanyaan komersial, permintaan sampel, atau dukungan
              teknis, silakan isi form di sebelah. Atau hubungi kami melalui
              email dan telepon berikut.
            </p>

            <div className="space-y-3">
              <p>
                <strong>Email:</strong> mycompany@gmail.com
              </p>
              <p>
                <strong>Telepon:</strong> +62 123 4567 890
              </p>
              <p>
                <strong>Alamat:</strong> Jl. Contoh No.123, Bekasi, Jawa Barat
              </p>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold mb-2">Jam Operasional</h4>
              <p className="text-gray-700">
                Senin - Jumat: 08:30 - 17:00 (WIB)
              </p>
            </div>
          </div>

          <div>
            <form
              onSubmit={onSubmit}
              className="bg-white p-6 rounded-lg shadow-sm space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Nama</label>
                <input
                  value={form.name}
                  onChange={(e) =>
                    setForm((s) => ({ ...s, name: e.target.value }))
                  }
                  required
                  className="w-full rounded-md p-3 border"
                  placeholder="Nama lengkap"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  value={form.email}
                  onChange={(e) =>
                    setForm((s) => ({ ...s, email: e.target.value }))
                  }
                  required
                  type="email"
                  className="w-full rounded-md p-3 border"
                  placeholder="email@domain.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Perusahaan (opsional)
                </label>
                <input
                  value={form.company}
                  onChange={(e) =>
                    setForm((s) => ({ ...s, company: e.target.value }))
                  }
                  className="w-full rounded-md p-3 border"
                  placeholder="Nama perusahaan"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Pesan</label>
                <textarea
                  value={form.message}
                  onChange={(e) =>
                    setForm((s) => ({ ...s, message: e.target.value }))
                  }
                  required
                  rows={5}
                  className="w-full rounded-md p-3 border"
                  placeholder="Tuliskan kebutuhan atau pertanyaan Anda..."
                />
              </div>

              <div className="flex items-center justify-between gap-3">
                <Button
                  type="submit"
                  className="rounded-full bg-green-600 hover:bg-green-700 text-white">
                  {status.type === "loading" ? "Mengirim..." : "Kirim Pesan"}
                </Button>

                {status.type === "success" && (
                  <p className="text-green-700">{status.msg}</p>
                )}
                {status.type === "error" && (
                  <p className="text-red-600">{status.msg}</p>
                )}
              </div>
            </form>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
