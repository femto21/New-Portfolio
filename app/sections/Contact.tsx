import React, { ReactNode, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { cn } from "@/lib/utils";
import toast from "react-hot-toast";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CiMail } from "react-icons/ci";
import { IoMdDownload } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-purple-600 to-transparent opacity-0 transition duration-500 " />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 " />
    </>
  );
};

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      setLoading(true);
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_SERVICE_ID!,
          process.env.NEXT_PUBLIC_TEMPLATE_ID!,
          form.current,
          {
            publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
          }
        )
        .then(() => {
          toast("Message sent successfully");
          form.current?.reset();
        })
        .catch((error) => {
          console.log("FAILED...", error.text);
          toast("Message failed to send");
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };
  return (
    <div id="contact" className="m-auto h-[90vh] mt-30 mb-10 w-3/5">
      <p className="text-l mb-1 text-color2 text-shadow w-fit m-auto">
        Get In Touch
      </p>
      <p className="text-3xl text-color1 text-shadow w-fit m-auto">
        Contact Me
      </p>
      <div className="mt-16 h-[70%] border-amber-300 flex flex-row  justify-around ">
        <div className="flex flex-col justify-between items-center gap-8 h-auto">
          <div className="h-[100%] w-[100%] bg-white/10 px-2 py-2 rounded-2xl flex flex-col justify-around items-center">
            <div className="text-color2 w-full text-shadow-subtle text-center  text-sm">
              Feel free to contact<br></br> me regarding anything<br></br> or
              just to say hi
            </div>
          </div>
          <div className="h-[100%] w-[100%] bg-white/10 px-8 py-4 rounded-2xl flex flex-col justify-around items-center">
            <div className="mb-2">
              <CiMail className="text-3xl text-color2 icon-shadow" />
            </div>

            <div className="text-color2 text-shadow text-xl">Email</div>
            <div className="text-color2 text-shadow-subtle text-l">
              arpitgahlot@dal.ca
            </div>
            <a
              href="mailto:arpitgahlot@dal.ca"
              className="nav-color1 text-shadow-subtle"
            >
              Send message
            </a>
          </div>
          <div className="h-[100%] w-[100%] bg-white/10 px-8 py-4 rounded-2xl flex flex-col justify-around items-center">
            <div className="mb-2">
              <FaLinkedin className="text-2xl text-color2 icon-shadow" />
            </div>
            <div className="text-color2 text-shadow text-l">LinkedIn</div>

            <a
              href="https://linkedin.com/in/arpitgahlot/"
              className="nav-color1 text-shadow-subtle"
            >
              Connect
            </a>
          </div>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="w-3/5  h-full gap-8 flex flex-col justify-between"
        >
          <input
            id="name"
            placeholder="Your full name"
            type="text"
            name="name"
            className="h-12 shadow-input dark:placeholder-text-neutral-600 flex w-full rounded-md border-[1px] border-white/50 bg-transparent px-3 py-2 text-sm text-white transition duration-400 group-hover/input:shadow-none file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 focus-visible:ring-[2px] focus-visible:ring-neutral-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:bg-zinc-800 dark:text-white dark:shadow-[0px_0px_1px_1px_#404040] dark:focus-visible:ring-neutral-600"
            required
          />

          <input
            id="email"
            placeholder="Your Email"
            type="email"
            name="email"
            className="h-12 shadow-input  flex w-full rounded-md border-[1px] border-white/50 bg-transparent px-3 py-2 text-sm text-white transition duration-400 group-hover/input:shadow-none file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 focus-visible:ring-[2px] focus-visible:ring-neutral-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:bg-zinc-800 dark:text-white dark:shadow-[0px_0px_1px_1px_#404040] dark:focus-visible:ring-neutral-600"
            required
          />
          <textarea
            id="message"
            placeholder="Write your message here :)"
            name="message"
            className="h-48 shadow-input px-3 py-2 text-sm rounded-md dark:placeholder-text-neutral-600 border-[1px] border-white/50 resize-none transition duration-400 group-hover/input:shadow-none file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 focus-visible:ring-[2px] focus-visible:ring-neutral-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:bg-zinc-800 dark:text-white dark:shadow-[0px_0px_1px_1px_#404040] dark:focus-visible:ring-neutral-600"
            required
          />

          {!loading ? (
            <button
              className="group/btn relative block h-10 w-48 cursor-pointer rounded-md bg-[#5742af] font-medium text-white text-shadow"
              type="submit"
              value="Send"
            >
              Send Message &rarr;
              <BottomGradient />
            </button>
          ) : (
            <button
              className="group/plbtn relative block h-10 w-full cursor-pointer rounded-md bg-gradient-to-br from-[#a594f9] to-[#9c88ff] font-medium text-white text-shadow"
              type="submit"
              value="Send"
            >
              Sending...
              <BottomGradient />
            </button>
          )}
        </form>
      </div>
    </div>
  );
};
export default Contact;
