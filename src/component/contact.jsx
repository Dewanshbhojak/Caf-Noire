import React from 'react'

const contact = () => {
  return (
    <div>
    <section id="contact" className="px-10 py-20 bg-zinc-800 text-center">
        <h2 className="text-4xl font-bold text-amber-400 mb-6">Contact Us</h2>
        <p className="text-gray-300 mb-8">We’d love to hear from you! Reach us for orders, feedback, or just to say hi.</p>
        <form className="max-w-2xl mx-auto grid grid-cols-1 gap-6">
          <input type="text" placeholder="Your Name" className="px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-amber-500" />
          <input type="email" placeholder="Your Email" className="px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-amber-500" />
          <textarea rows="4" placeholder="Message" className="px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-amber-500"></textarea>
          <button className="bg-amber-500 hover:bg-amber-600 text-black px-6 py-3 rounded-xl text-lg font-semibold">
            Send Message
          </button>
        </form>
      </section>

      
      <footer className="px-10 py-6 text-center border-t border-zinc-800 text-gray-400">
        © {new Date().getFullYear()} Coffee.io All Rights Reserved.
      </footer>
      </div>
  )
}

export default contact
