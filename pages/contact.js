import Link from "next/link";
import Head from "next/head";
import { motion } from "framer-motion";

export default function Contact() {
  const Adminemail = "sahilkalam000@gmail.com";
  const botUsername = "Test_sahil93_bot"; 
  
  // Basic English message as requested
  const message = encodeURIComponent("Hey sir, I want admission in Sarvoch Coaching Centre");
  
  // Telegram Bot link (Note: Telegram bots primarily open direct chat)
  const telegramUrl = `https://t.me/${botUsername}?text=${message}`;

  return (
    <>
      <Head>
        <title>Sarvoch Coaching Centre | Contact Us</title>
        <meta
          name="description"
          content="Contact Sarvoch Coaching Centre for admissions, course information, and student support. Start your learning journey with Abdul sir."
        />
        {/* Extra SEO Meta Tags Added Below */}
        <meta name="keywords" content="Sarvoch Coaching Centre, Abdul sir, Admission 2026, Coaching Classes, Student Support, Contact Sarvoch" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Sarvoch Coaching Centre | Contact Us" />
        <meta property="og:description" content="Get in touch with Sarvoch Coaching Centre for admissions and career guidance." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
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
              💬
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

            {/* Clickable Motion Telegram Button */}
            <motion.a 
              href={telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="w-full bg-sky-500 hover:bg-sky-600 text-white font-bold py-4 px-6 rounded-2xl shadow-lg shadow-sky-200 transition-colors duration-300 flex items-center justify-center space-x-3 text-lg"
            >
              {/* Telegram SVG Icon */}
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.16 1.12-.88 5.36-1.24 7.32-.15.83-.46 1.11-.76 1.14-.64.06-1.13-.42-1.75-.83-.97-.63-1.52-1.02-2.46-1.64-1.08-.71-.38-1.1.24-1.74.16-.17 2.97-2.72 3.02-2.94.01-.03.01-.14-.05-.2-.06-.06-.16-.04-.23-.02-.1.02-1.67 1.06-4.71 3.11-.45.31-.85.46-1.21.45-.4-.01-1.16-.23-1.73-.41-.7-.23-1.25-.35-1.2-.74.03-.2.3-.41.83-.62 3.23-1.41 5.39-2.34 6.47-2.79 3.07-1.28 3.71-1.5 4.13-1.51.09 0 .3.02.43.13.11.09.14.21.15.31.02.19 0 .4-.02.59z"/>
              </svg>
              <span>Chat on Telegram</span>
            </motion.a>

          </motion.main>
        </div>
      </div>
    </>
  );
}
