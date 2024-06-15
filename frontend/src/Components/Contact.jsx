import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center ">
        <div className="p-8 rounded-lg shadow-lg max-w-md w-full ">
          <h2 className="text-2xl font-bold mb-6 dark:bg-slate-100 dark:text-black">
            Contact Us
          </h2>
          <form className="space-y-4 dark:bg-slate-100 dark:text-black">
            <div>
              <label className="block " htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="dark:bg-slate-100 dark:text-black w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block " htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="dark:bg-slate-100 dark:text-black w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Your email"
              />
            </div>
            <div>
              <label className="block " htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                className="dark:bg-slate-100 dark:text-black w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Your message"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className=" w-full py-2 px-4 bg-indigo-500 text-white font-semibold rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
