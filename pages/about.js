import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <Head>
        <title>About | Sarvoch Coaching</title>
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50">

        <div className="max-w-5xl mx-auto px-6 py-10">

          <Link
            href="/"
            className="inline-block mb-8 text-purple-700 font-semibold"
          >
            ← Back Home
          </Link>

          <motion.div
            initial={{ opacity: 0, scale: .95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: .5 }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-12 text-center">
              <h1 className="text-5xl font-black">
                About Us
              </h1>

              <p className="mt-3 opacity-90">
                Excellence Through Education
              </p>
            </div>

            <div className="p-10">
              <p className="text-gray-600 leading-8">
                Sarvoch Coaching Centre is dedicated to providing quality
                education, personal mentorship, and regular assessments.
                Our mission is to help students achieve academic excellence.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-10">

                <motion.div
                  whileHover={{ scale: 1.04 }}
                  className="bg-purple-50 p-6 rounded-2xl"
                >
                  <h3 className="font-bold text-xl text-purple-700">
                    Expert Teachers
                  </h3>

                  <p className="mt-2 text-gray-600">
                    Experienced faculty focused on student success.
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.04 }}
                  className="bg-purple-50 p-6 rounded-2xl"
                >
                  <h3 className="font-bold text-xl text-purple-700">
                    Smart Classes
                  </h3>

                  <p className="mt-2 text-gray-600">
                    CCTV monitored classrooms and modern facilities.
                  </p>
                </motion.div>

              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}