import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { cn } from "@/lib/utils";
import toast from "react-hot-toast";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-purple-600 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
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
    <div>
      <div className="m-auto my-16 w-3/5">
        <p className="text-4xl text-color1 text-shadow w-fit m-auto">
          Get In Touch
        </p>
        <div className="mt-16  border-amber-300 flex flex-row items-center justify-around ">
          <div className="flex flex-col justify-between items-center gap-4">
            <div className="h-1/2 bg-white/10 p-8 rounded-2xl flex flex-col justify-around items-center">
              <div className="text-color2 text-shadow text-xl">Email</div>
              <div className="text-color2 text-shadow-subtle text-l">
                arpitgahlot@dal.ca
              </div>
              <a
                href="mailto:arpitgahlot@dal.ca"
                className="text-color1 text-shadow-subtle"
              >
                Send message
              </a>
            </div>
            <div className="h-1/2 bg-white/10 p-8 rounded-2xl flex flex-col justify-around items-center">
              <div className="text-color2 text-shadow text-xl">Email</div>
              <div className="text-color2 text-shadow-subtle text-l">
                arpitgahlot@dal.ca
              </div>
              <a
                href="mailto:arpitgahlot@dal.ca"
                className="text-color1 text-shadow-subtle"
              >
                Send message
              </a>
            </div>
          </div>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="w-3/5  h-full gap-8 flex flex-col justify-between"
          >
            <Input
              id="name"
              placeholder="Your full name"
              type="text"
              name="name"
              className="h-12"
              required
            />

            <Input
              id="email"
              placeholder="Your Email"
              type="email"
              name="email"
              className="h-12"
              required
            />
            <Textarea
              id="message"
              placeholder="write your message here :)"
              name="message"
              className="bg-white text-black h-20 resize-none"
              required
            />

            {!loading ? (
              <button
                className="group/btn relative block h-10 w-full cursor-pointer rounded-md bg-gradient-to-br from-purple-500/30 to-indigo-500/30 font-medium text-white text-shadow shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset]"
                type="submit"
                value="Send"
              >
                Send Message &rarr;
                <BottomGradient />
              </button>
            ) : (
              <button
                className="group/btn relative block h-10 w-full cursor-pointer rounded-md bg-gradient-to-br from-purple-500/30 to-indigo-500/30 font-medium text-white text-shadow shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset]"
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
    </div>
  );
};
export default Contact;
