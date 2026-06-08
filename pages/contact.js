import Link from "next/link";
import Head from "next/head";
import { motion } from "framer-motion";

export default function Contact() {
  const Adminemail = "sahilkalam000@gmail.com";
  const phoneNumber = "917992355621"; 
  const message = encodeURIComponent("Hello Sarvoch Coaching, I want to inquire about admission.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <>
      <Head>
        <title>Sarvoch Coaching Centre | Contact Us</title>
      </Head>

      <div className="min-h-screen bg-gray-50 text-gray-800 p-4 sm:p-8 flex flex-col justify-between">
        <div className="max-w-md mx-auto w-full my-auto">
          
          <div className="mb-6 text-center">
            <Link href="/">
              <a className="text-sm text-gray-500 hover:text-purple-600 transition font-medium">
                &larr; Back to Home
              </a>
            </Link>
          </div>

          {/* Spring Pop-up Animation Container */}
          <motion.main 
            initial={{ opacity: 0, y: 50, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 text-center p-8 sm:p-10"
          >
            
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
              className="mx-auto w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-inner"
            >
              📞
            </motion.div>

            <h1 className="text-2xl font-black text-gray-900 tracking-tight mb-2">
              Sarvoch Coaching Centre
            </h1>
            <p className="text-sm font-semibold text-purple-600 uppercase tracking-widest mb-6">
              Head: Abdul sir
            </p>

            <hr className="border-gray-100 my-6" />

            {/* Separated Contact Details for Premium UX */}
            <div className="space-y-6 mb-8">
              
              {/* Phone Section */}

              {/* Email Section */}
              <div>
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-1">
                  Email Us
                </p>
                <a 
                  href={`mailto:${Adminemail}`} 
                  className="text-base font-semibold text-gray-600 hover:text-purple-600 transition duration-300 break-all"
                >
                  {Adminemail}
                </a>
              </div>

            </div>

            {/* Clickable Motion WhatsApp Button */}
            <motion.a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 px-6 rounded-2xl shadow-lg shadow-emerald-200 transition-colors duration-300 flex items-center justify-center space-x-3 text-lg"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397 0 12.008 0c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 12.004-11.953 12.004-1.997-.001-3.956-.5-5.691-1.448L0 24zm6.59-4.817c1.615.959 3.198 1.463 4.821 1.465 5.305 0 9.623-4.314 9.626-9.619.002-2.569-1.002-4.985-2.825-6.808-1.824-1.824-4.24-2.826-6.81-2.827-5.31 0-9.628 4.316-9.63 9.62-.001 1.74.47 3.431 1.365 4.935l-.4 1.462 1.453-.381z"/>
              </svg>
              <span>Chat on WhatsApp</span>
            </motion.a>

          </motion.main>
        </div>
      </div>
    </>
  );
}
