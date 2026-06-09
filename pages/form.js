// {https://script.google.com/macros/s/AKfycbwA23s0aPohrmoeGeCIEwdpY4-UD33o_R4ypi8Wki2cVApswyGNiD7RXNJHUusiDFUz/exec}
import Head from "next/head";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    studentClass: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Google Apps Script के लिए डेटा को URL-encoded फॉर्मेट में बदलना
    const urlEncodedData = new URLSearchParams();
    urlEncodedData.append("name", formData.name);
    urlEncodedData.append("number", formData.number);
    urlEncodedData.append("email", formData.email);
    urlEncodedData.append("studentClass", formData.studentClass);

    // आपका जेनरेट किया हुआ Google Script URL
    const googleSheetUrl = "https://script.google.com/macros/s/AKfycbwA23s0aPohrmoeGeCIEwdpY4-UD33o_R4ypi8Wki2cVApswyGNiD7RXNJHUusiDFUz/exec"; 

    try {
      await fetch(googleSheetUrl, {
        method: "POST",
        mode: "no-cors", // Next.js 10 में CORS एरर से बचने के लिए no-cors ज़रूरी है
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: urlEncodedData,
      });

      alert("Data Google Sheet me successfully save ho gaya!");
      
      // फॉर्म को खाली (Reset) करने के लिए
      setFormData({
        name: "",
        number: "",
        email: "",
        studentClass: "",
      });
    } catch (error) {
      console.error("Submission Error:", error);
      alert("Kuch gadbad hui, data save nahi ho paya.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Next.js 10 का स्टैण्डर्ड Head टैग */}
      <Head>
        <title>Student Registration - Next.js 10</title>
        <meta name="description" content="Google Sheet Form Integration" />
      </Head>
      
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
        <motion.div  
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center bg-white p-6 rounded-xl shadow-xl w-80"
        >
          <h2 className="text-xl font-bold mb-4 text-gray-800">Student Form</h2>
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Name"
              className="bg-gray-100 p-2 rounded-md shadow-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            
            <input
              type="tel"
              name="number"
              value={formData.number}
              onChange={handleChange}
              placeholder="Enter Number"
              className="bg-gray-100 p-2 rounded-md shadow-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Email"
              className="bg-gray-100 p-2 rounded-md shadow-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            
            <input
              type="text"
              name="studentClass"
              value={formData.studentClass}
              onChange={handleChange}
              placeholder="Enter Class"
              className="bg-gray-100 p-2 rounded-md shadow-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            
            <button 
              type="submit" 
              disabled={loading}
              className="bg-blue-500 text-white p-2 mt-2 rounded-md shadow-md hover:bg-blue-600 transition-colors font-semibold disabled:bg-gray-400"
            >
              {loading ? "Saving..." : "Submit to Sheet"}
            </button>
          </form>
        </motion.div>
      </div>
    </>
  );
}