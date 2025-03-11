/* eslint-disable no-unused-vars */
// import emailjs from "@emailjs/browser";
import axios from "axios";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { z } from "zod";

// const MAX_EMAILS = 5;

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  // const [isLoading, setisloading] = useState(false);

  const zodSchema = z.object({
    name: z.string().min(3, { message: "Invalid name" }),
    email: z.string().email({ message: "Invalid email address" }),
    message: z.string().min(3, { message: "Invalid message" }),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { success, error } = zodSchema.safeParse({
      name,
      email,
      message,
    });

    if (success) {
      // setisloading(true);
      try {
        // Directly call the axios.post with await inside the try block
        const ress = await axios.post(
          "https://harshith6322-portfolio-api.vercel.app/send-email",
          {
            fullname: name,
            email: email,
            message: message,
          }
        );

        if (ress.status === 200) {
          // setisloading(false);
          toast(`✔️ ${ress.data.message}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            // transition: Bounce,
          });
        }
      } catch (error) {
        // Catch errors from axios and other issues
        // setisloading(false);
        if (error.response && error.response.status === 429) {
          toast(`❌ Too Many Requests`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        } else {
          // For other errors
          toast.error("Failed to send message.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      } finally {
        // setisloading(false);
      }
    } else {
      // Handle validation errors, e.g., show error messages
      // setisloading(false);
      const error1 = error.issues[0].message;
      toast(`❌ ${error1}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        // transition: Bounce,
      });
    }
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-br from-purple-600/20 to-blue-500/20 text-white "
      id="contact"
    >
      <div className="px-4 w-96 max-w-lg">
        <h2 className="text-3xl bg-gradient-to-br from-purple-600 to-blue-500 font-bold mb-8 bg-clip-text text-transparent text-center">
          Get In Touch
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <motion.input
              type="text"
              name="from_name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-black/20 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500"
              placeholder="Your Name..."
              whileHover={{ scale: 1.05 }}
              whileFocus={{ scale: 1.05 }}
              autoComplete="none"
              autoSave="false"
            />
          </div>

          <div>
            <motion.input
              type="email"
              name="reply_to"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-black/20 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500"
              placeholder="Your Email..."
              whileHover={{ scale: 1.05 }}
              whileFocus={{ scale: 1.05 }}
            />
          </div>

          <div>
            <motion.textarea
              name="message"
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-black/20 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500"
              placeholder="Your Message..."
              whileHover={{ scale: 1.05 }}
              whileFocus={{ scale: 1.05 }}
            />
          </div>

          <motion.button
            type="submit"
            className="w-full bg-gradient-to-br from-purple-600 to-blue-500 text-white py-3 px-6 rounded-lg font-medium hover:translate-y-[-2px] hover:shadow-xl transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Send Message
          </motion.button>
        </form>
      </div>
    </section>
  );
}
