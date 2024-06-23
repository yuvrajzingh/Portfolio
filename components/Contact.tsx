


"use client";

import Image from "next/image";
import map from "../public/map.png";
import React, { useState } from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./SubmitBtn";
import toast from "react-hot-toast";
import SectionDivider from "@/components/SectionDivider";
import { BsArrowDownLeft, BsArrowDownRight } from "react-icons/bs";

export default function Contact() {
  const { ref } = useSectionInView("CONTACT");

  // State for the form inputs
  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 min-w-[95%] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionDivider className="" />
      <div className="flex py-2 sm:py-10 flex-col-reverse sm:flex-row sm:justify-evenly text-lightText dark:text-darkText">
        <form
          className="mt-10 flex flex-col dark:text-black max-w-3xl"
          action={async (formData) => {
            const { data, error } = await sendEmail(formData);

            if (error) {
              toast.error(error);
              return;
            }

            toast.success("Email sent successfully!");
            setSenderEmail("");
            setMessage("");
          }}
        >
          <p className="text-lg font-semibold text-lightText mb-5 dark:text-darkText">
            PLEASE CONTACT ME DIRECTLY AT{" "}
            <a className="underline" href="mailto:yuvisingh1810@gmail.com">
              YUVISINGH1810@GMAIL.COM
            </a>{" "}
            OR THROUGH THIS FORM.
          <p className="text-lg text-lightText mt-5 dark:text-darkText">CURRENTLY SEEKING NEW OPPORTUNITIES.</p>
          </p>
          <input
            className="h-14 px-4 rounded-[5px] borderBlack bg-white/100 dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
            name="senderEmail"
            type="email"
            required
            maxLength={500}
            placeholder="Your email"
            value={senderEmail}
            onChange={(e) => setSenderEmail(e.target.value)}
          />
          <textarea
            className="h-52 my-3 rounded-[5px] borderBlack p-4 bg-white/100 dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
            name="message"
            placeholder="Your message"
            required
            maxLength={5000}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <SubmitBtn />
        </form>
        <SectionDivider className="sm:w-0.5 sm:h-auto" />
        <div className="flex items-center justify-between sm:flex-col sm:justify-between">
          <SectionHeading>
            <BsArrowDownLeft className="hidden w-5 mr-2 mt-1 sm:block sm:pt-1 " />
            (CONTACT ME)
            <BsArrowDownRight className="w-5 ml-2 mt-1  sm:hidden" />
          </SectionHeading>
          <Image
            src={map}
            alt="contact image"
            width="492"
            quality="100"
            className="hidden sm:block"
          />
        </div>
      </div>
    </motion.section>
  );
}
