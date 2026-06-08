import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  const features = [
    "Weekly Tests",
    "Complete Syllabus Coverage",
    "Daily Classes",
    "Better Results",
    "Camera Facility",
    "Regular Doubt Classes",
  ];

  return (
    <>
      <Head>
        <title>Sarvoch Coaching Centre</title>
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50">
        <div className="max-w-6xl mx-auto px-6 py-10">

          <motion.nav
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="flex justify-between items-center"
          >
            <h1 className="text-3xl font-black text-purple-700">
              Sarvoch Coaching
            </h1>

            <div className="flex gap-4">
              <Link href="/about" className="font-semibold">
                About
              </Link>

              <Link
                href="/contact"
                className="bg-purple-600 text-white px-5 py-2 rounded-full"
              >
                Contact
              </Link>
            </div>
          </motion.nav>

          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <h2 className="text-6xl font-black mb-5 text-gray-800">
              Learn. Grow. Succeed.
            </h2>

            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Building strong foundations through expert teaching and
              consistent practice.
            </p>
          </motion.section>

          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.12,
                },
              },
            }}
            className="grid md:grid-cols-3 gap-6"
          >
            {features.map((item, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 30,
                  },
                  show: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                whileHover={{
                  scale: 1.05,
                  y: -8,
                }}
                className="backdrop-blur-lg bg-white/70 border border-white rounded-3xl p-8 shadow-lg"
              >
                <h3 className="font-bold text-xl text-purple-700">
                  {item}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
}