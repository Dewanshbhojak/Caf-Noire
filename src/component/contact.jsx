import React from "react";
import Navbar from "./navbar";

const Contact = () => {
  return (
    <div className="bg-[#1C1C1C] min-h-screen">
      <Navbar />

      {/* Contact Section */}
      <section className="px-6 sm:px-10 py-16 sm:py-20 text-center border border-[#ffdd] rounded-3xl max-w-4xl mx-auto mt-10 shadow-2xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-amber-400 mb-6">
          Contact Us
        </h2>

        <p className="text-gray-300 text-sm sm:text-base mb-8 px-4 md:px-20">
          We’d love to hear from you! Reach out for orders, feedback,
          collaborations, or even just to say hi.
        </p>

        <form className="max-w-2xl mx-auto grid grid-cols-1 gap-6 px-4">
          <input
            type="text"
            placeholder="Your Name"
            className="px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-amber-500 text-gray-100"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-amber-500 text-gray-100"
          />

          <textarea
            rows="4"
            placeholder="Your Message"
            className="px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-amber-500 text-gray-100"
          ></textarea>

          <button className="bg-amber-500 hover:bg-amber-600 transition-all text-black px-6 py-3 rounded-xl text-lg font-semibold">
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="px-10 py-6 text-center mt-16 border-t border-[#ffdd] text-gray-400">
        © {new Date().getFullYear()} Café Noire All Rights Reserved.
      </footer>
    </div>
  );
};

export default Contact;
