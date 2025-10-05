import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { cn } from "@/lib/utils";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_SERVICE_ID!,
          process.env.NEXT_PUBLIC_TEMPLATE_ID!,
          form.current,
          {
            publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
          }
        )
        .then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };
  return (
    <div>
      <div className="m-auto my-16 w-fit">
        <p className="text-4xl text-color1 text-shadow w-fit m-auto">
          Get In Touch
        </p>
        <div className="w-sm">
          <form ref={form} onSubmit={sendEmail}>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="name" className="text-color1 text-shadow-subtle">
                Name
              </Label>
              <Input
                id="name"
                placeholder="Tyler"
                type="text"
                name="name"
                required
              />
            </LabelInputContainer>

            <LabelInputContainer className="mb-4">
              <Label htmlFor="email" className="text-color1 text-shadow-subtle">
                Email Address
              </Label>
              <Input
                id="email"
                placeholder="projectmayhem@fc.com"
                type="email"
                name="email"
                required
              />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label
                htmlFor="message"
                className="text-color1 text-shadow-subtle"
              >
                Message
              </Label>
              <Textarea
                id="message"
                placeholder="write your message here :)"
                name="message"
                className="bg-white text-black"
                required
              />
            </LabelInputContainer>

            <button
              className="group/btn relative block h-10 w-full cursor-pointer rounded-md bg-gradient-to-br from-purple-500/30 to-indigo-500/30 font-medium text-white text-shadow shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset]"
              type="submit"
              value="Send"
            >
              Send Message &rarr;
              <BottomGradient />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;
