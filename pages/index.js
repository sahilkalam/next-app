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
    <meta
    name="description"
    content="Sarvoch Coaching Centre provides quality coaching for students with experienced teachers, structured courses, regular tests, and academic guidance."
  />

  <meta
    name="keywords"
    content="Sarvoch Coaching Centre, Coaching Centre, Tuition Classes, Bihar Coaching, School Coaching, Competitive Exam Preparation, Education"
  />

  <meta name="author" content="Sarvoch Coaching Centre" />

  <meta property="og:title" content="Sarvoch Coaching Centre" />

  <meta
    property="og:description"
    content="Quality education and academic excellence for students."
  />

  <meta
    property="og:url"
    content="https://sarvochcoachingcentre.vercel.app"
  />

  <meta property="og:type" content="website" />

  <meta name="robots" content="index, follow" />
    <meta name="google-site-verification" content="b3_vUZ44IyMvtea-jViWJMcSVi4senjz_Q76qfPbySM" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50">
        {/* Mobile responsive padding: px-4 py-6 sm:px-6 sm:py-10 */}
        <div className="max-w-6xl mx-auto px-4 py-6 sm:px-6 sm:py-10">

          {/* Navbar Fixed for Mobile (flex-col on mobile, flex-row on desktop) */}
          <motion.nav
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="flex flex-col sm:flex-row justify-between items-center gap-4 border-b border-purple-100/50 pb-4 sm:pb-0 sm:border-none"
          >
            <h1 className="text-2xl sm:text-3xl font-black text-purple-700 tracking-tight text-center sm:text-left">
              Sarvoch Coaching
            </h1>

            {/* Buttons Wrap automatically on smaller screens */}
            <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4">
              <Link 
                href="/about" 
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-4 py-2 sm:px-6 sm:py-2.5 rounded-full shadow-md text-sm sm:text-base transition-all duration-200"
              >
                About
              </Link>

              <Link
                href="/contact"
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-4 py-2 sm:px-6 sm:py-2.5 rounded-full shadow-md text-sm sm:text-base transition-all duration-200"
              >
                Contact
              </Link>
              
              <Link 
                href="/form"
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-4 py-2 sm:px-6 sm:py-2.5 rounded-full shadow-md text-sm sm:text-base transition-all duration-200"
              >
                Fill form
              </Link>
            </div>
          </motion.nav>

          {/* Hero Section (Text sizes adjusted for mobile) */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12 sm:py-20"
          >
            {/* Mobile me text-4xl, desktop me text-6xl */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 sm:mb-5 text-gray-800 leading-tight">
              Learn. Grow. Succeed.
            </h2>

            <p className="text-gray-600 text-sm sm:text-lg max-w-2xl mx-auto px-2">
              Building strong foundations through expert teaching and
              consistent practice.
            </p>
          </motion.section>

          {/* Features Grid (1 column on mobile, 2 on tablet, 3 on desktop) */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.12 } },
            }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6"
          >
            {features.map((item, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
                whileHover={{ scale: 1.03, y: -4 }}
                className="backdrop-blur-lg bg-white/70 border border-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-md cursor-pointer"
              >
                <h3 className="font-bold text-lg sm:text-xl text-purple-700">
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
              
