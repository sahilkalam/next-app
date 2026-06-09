import Head from "next/head";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

export default function StudentForm() {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    studentClass: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const urlEncodedData = new URLSearchParams();
    urlEncodedData.append("name", formData.name);
    urlEncodedData.append("number", formData.number);
    urlEncodedData.append("email", formData.email);
    urlEncodedData.append("studentClass", formData.studentClass);

    const googleSheetUrl = "https://script.google.com/macros/s/AKfycbwA23s0aPohrmoeGeCIEwdpY4-UD33o_R4ypi8Wki2cVApswyGNiD7RXNJHUusiDFUz/exec"; 

    try {
      await fetch(googleSheetUrl, {
        method: "POST",
        mode: "no-cors", 
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: urlEncodedData,
      });
      alert("Data successfully save ho gaya!");
      setFormData({ name: "", number: "", email: "", studentClass: "" });
    } catch (error) {
      console.error("Submission Error:", error);
      alert("Kuch gadbad hui, data save nahi ho paya.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Student Registration - Sarvoch Coaching</title>
      </Head>
      
      {/* Container spacing fixed for mobile: p-4 sm:p-6 */}
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50 flex flex-col justify-between p-4 sm:p-6">
        
        {/* Responsive Header for Form */}
        <div className="max-w-6xl w-full mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 mb-6">
          <Link href="/">
            <span className="text-xl sm:text-2xl font-black text-purple-700 tracking-tight cursor-pointer">
              Sarvoch Coaching
            </span>
          </Link>
          <Link href="/">
            <span className="bg-purple-100 hover:bg-purple-200 text-purple-700 font-semibold px-4 py-1.5 sm:px-5 sm:py-2 rounded-full transition-all text-xs sm:text-sm cursor-pointer">
              ← Back to Home
            </span>
          </Link>
        </div>

        {/* Form Card Centerization and Padding Fix */}
        <div className="flex-grow flex items-center justify-center w-full my-4">
          <motion.div  
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="backdrop-blur-lg bg-white/70 border border-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl shadow-xl w-full max-w-md mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl font-black mb-1 text-gray-800 text-center">
              Registration Form
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm text-center mb-6">
              Apni details fill karein aur apni seat confirm karein.
            </p>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:gap-4">
              
              <div className="flex flex-col gap-1">
                <label className="text-[10px] sm:text-xs font-bold text-purple-700 uppercase tracking-wider pl-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter Name"
                  className="bg-white p-2.5 sm:p-3 rounded-xl sm:rounded-2xl shadow-sm border border-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm sm:text-base text-gray-700"
                  required
                />
              </div>
              
              <div className="flex flex-col gap-1">
                <label className="text-[10px] sm:text-xs font-bold text-purple-700 uppercase tracking-wider pl-1">Contact Number</label>
                <input
                  type="tel"
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
                  placeholder="Enter Number"
                  className="bg-white p-2.5 sm:p-3 rounded-xl sm:rounded-2xl shadow-sm border border-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm sm:text-base text-gray-700"
                  required
                />
              </div>
              
              <div className="flex flex-col gap-1">
                <label className="text-[10px] sm:text-xs font-bold text-purple-700 uppercase tracking-wider pl-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter Email"
                  className="bg-white p-2.5 sm:p-3 rounded-xl sm:rounded-2xl shadow-sm border border-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm sm:text-base text-gray-700"
                  required
                />
              </div>
              
              <div className="flex flex-col gap-1">
                <label className="text-[10px] sm:text-xs font-bold text-purple-700 uppercase tracking-wider pl-1">Select Class</label>
                <div className="relative">
                  <select
                    name="studentClass"
                    value={formData.studentClass}
                    onChange={handleChange}
                    className="w-full bg-white p-2.5 sm:p-3 rounded-xl sm:rounded-2xl shadow-sm border border-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm sm:text-base text-gray-700 appearance-none cursor-pointer"
                    required
                  >
                    <option value="" disabled hidden>Choose your class</option>
                    <option value="8th">8th Class</option>
                    <option value="9th">9th Class</option>
                    <option value="10th">10th Class</option>
                    <option value="11th">11th Class</option>
                    <option value="12th">12th Class</option>
                  </select>
                  {/* Custom Dropdown Arrow for aesthetics */}
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-purple-500">
                    ▼
                  </div>
                </div>
              </div>
              
              <motion.button 
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="submit" 
                disabled={loading}
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold p-3 mt-2 rounded-full shadow-md text-base sm:text-lg disabled:bg-gray-400 text-center"
              >
                {loading ? "Saving..." : "Submit"}
              </motion.button>
            </form>
          </motion.div>
        </div>
        
        <div className="text-center text-[10px] sm:text-xs text-gray-400 mt-4">
          © {new Date().getFullYear()} Sarvoch Coaching Centre. All rights reserved.
        </div>
      </div>
    </>
  );
        }
        
