
"use client";

import { motion } from "framer-motion";

export default function AltairRealtyLanding() {
  const scrollToContact = () => {
    const section = document.querySelector("#contact");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <header className="p-6 flex items-center justify-between border-b border-white/10">
        <h1 className="text-4xl font-bold tracking-wide text-yellow-400">Altair Realty</h1>
        <button
          className="border px-4 py-2 border-white text-white hover:bg-white hover:text-black"
          onClick={scrollToContact}
        >
          Связаться
        </button>
      </header>

      <main className="px-6 py-12 max-w-7xl mx-auto">
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="relative rounded-2xl overflow-hidden h-96 mb-10">
            <img
              src="/dubai-moscow-luxury.jpg"
              alt="Dubai and Moscow luxury skyline"
              className="object-cover w-full h-full opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/10 flex items-end p-6">
              <h2 className="text-5xl font-bold text-yellow-400">Москва. Дубай. Премиум.</h2>
            </div>
          </div>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
            Мы подбираем эксклюзивные квартиры и пентхаусы в лучших локациях Москвы и Дубая.
          </p>
        </motion.section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
              <img src={`/property-${item}.jpg`} alt={`Property ${item}`} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-yellow-400 mb-1">Penthouse в Дубае</h3>
                <p className="text-sm text-gray-300">Palm Jumeirah, от $5M, терраса, вид на море</p>
              </div>
            </div>
          ))}
        </div>

        <motion.section
          id="contact"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center"
        >
          <h2 className="text-3xl font-bold mb-4 text-yellow-400">Запишитесь на консультацию</h2>
          <p className="mb-6 text-gray-300 max-w-2xl mx-auto">
            Мы подберём идеальный объект под ваш запрос.
          </p>
          <button className="text-black bg-yellow-400 hover:bg-yellow-500 px-8 py-3 text-lg font-medium rounded-full">
            Оставить заявку
          </button>
        </motion.section>
      </main>

      <footer className="p-6 text-center text-gray-500 border-t border-white/10 mt-12">
        © 2025 Altair Realty. Элитная недвижимость Москвы и Дубая.
      </footer>
    </div>
  );
}
