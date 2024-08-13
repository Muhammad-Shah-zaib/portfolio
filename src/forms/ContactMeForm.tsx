import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import handDrawnPersonTyping from "../assets/hand-drawn-person-typing.svg";
import handDrawnPersonWriting from "../assets/hand-drawn-person-writing.svg";
import handDrawnPersonUsingPhone from "../assets/hand-drawn-person-using-phone.svg";
import handDrawnWhirlingArrow from "../assets/hand-drawn-whirling-arrow.svg";
import { motion } from "framer-motion";
import { FaEnvelope, FaPaperPlane } from "react-icons/fa";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

interface FormInputs {
  firstname: string;
  lastname: string;
  email: string;
  contactNumber: string;
  message: string;
}

const ContactMeForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormInputs>();

  const [sendMessagePending, setSendMessagePending] = useState(false);

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    setSendMessagePending(true); // Start sending

    try {
      await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        data as any,
        import.meta.env.VITE_PUBLIC_KEY
      );
      toast.success("Message sent successfully!");
      reset();
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setSendMessagePending(false); // Stop sending
    }
  };

  return (
    <form
      className="relative md:grid flex flex-col gap-2 md:grid-cols-2 font-roboto w-full md:gap-4 max-w-[310px] sm:max-w-[450px] px-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* DRAWING */}
      <div className="hidden md:block absolute bottom-0 left-0">
        <motion.div
          whileInView={{ opacity: [0, 0.5, 1], scale: [0.9, 1.1, 1] }}
          transition={{ delay: 0.2 }}
          className="flex items-center px-4 justify-center gap-4"
        >
          <div>
            <img
              src={handDrawnWhirlingArrow}
              className="max-h-[3rem] rotate-12"
              alt="Whirling Arrow"
            />
          </div>
          <FaEnvelope
            size={"1.5rem"}
            className="text-[#7c7c7c] hover:text-sky-700 transition-all duration-300"
          />
        </motion.div>
      </div>
      {/* FIRSTNAME CTN */}
      <div className="relative flex flex-col w-full">
        <label htmlFor="firstname" className="text-sm font-bold">
          First Name:
        </label>
        <input
          id="firstname"
          type="text"
          {...register("firstname", { required: "First name is required" })}
          className="w-full outline-none bg-transparent focus:border-blue-600 dark:focus:border-sky-500 dark:hover:border-sky-300 hover:border-blue-500 border-2 transition-all duration-200 dark:border-zinc-400 border-zinc-600 rounded-lg px-4 py-1"
        />
        {errors.firstname && (
          <span className="text-red-500 text-xs">
            {errors.firstname.message}
          </span>
        )}
      </div>

      {/* LASTNAME CTN */}
      <div className="relative flex flex-col w-full">
        {/* DRAWING */}
        <div className="hidden xs:block absolute top-2 -right-[30%] md:-right-[38%]">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="inline-block"
          >
            <img
              src={handDrawnPersonUsingPhone}
              className="w-[80px] -rotate-12"
              alt="Person Using Phone"
            />
          </motion.div>
        </div>
        {/* CONTENT */}
        <label htmlFor="lastname" className="text-sm font-bold">
          Last Name:
        </label>
        <input
          id="lastname"
          type="text"
          {...register("lastname", { required: "Last name is required" })}
          className="w-full outline-none bg-transparent focus:border-blue-600 dark:focus:border-sky-500 dark:hover:border-sky-300 hover:border-blue-500 border-2 transition-all duration-200 dark:border-zinc-400 border-zinc-600 rounded-lg px-4 py-1"
        />
        {errors.lastname && (
          <span className="text-red-500 text-xs">
            {errors.lastname.message}
          </span>
        )}
      </div>

      {/* EMAIL */}
      <div className="flex flex-col w-full">
        <label htmlFor="email" className="text-sm font-bold">
          Email:
        </label>
        <input
          id="email"
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email address",
            },
          })}
          className="w-full outline-none bg-transparent focus:border-blue-600 dark:focus:border-sky-500 dark:hover:border-sky-300 hover:border-blue-500 border-2 transition-all duration-200 dark:border-zinc-400 border-zinc-600 rounded-lg px-4 py-1"
        />
        {errors.email && (
          <span className="text-red-500 text-xs">{errors.email.message}</span>
        )}
      </div>
      {/* CONTACT NUMBER CTN */}
      <div className="flex flex-col w-full">
        <label htmlFor="contactNumber" className="text-sm font-bold">
          Contact Number:
        </label>
        <input
          id="contactNumber"
          type="text"
          {...register("contactNumber", {
            required: "Contact number is required",
          })}
          className="w-full outline-none bg-transparent focus:border-blue-600 dark:focus:border-sky-500 dark:hover:border-sky-300 hover:border-blue-500 border-2 transition-all duration-200 dark:border-zinc-400 border-zinc-600 rounded-lg px-4 py-1"
        />
        {errors.contactNumber && (
          <span className="text-red-500 text-xs">
            {errors.contactNumber.message}
          </span>
        )}
      </div>

      {/* MESSAGE CTN */}
      <div className="flex flex-col col-span-2 w-full relative">
        {/* drawing - 1*/}
        <motion.div
          animate={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="hidden xs:block absolute top-0 -left-1/3 md:-left-1/4"
        >
          <img
            src={handDrawnPersonWriting}
            className="w-[100px] rotate-[5deg]"
            alt="Person Writing"
          />
        </motion.div>
        {/* drawing - 2 */}
        <motion.div
          animate={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="hidden xs:block absolute top-[70%] -right-1/3 md:-right-1/4"
        >
          <img
            src={handDrawnPersonTyping}
            className="w-[100px]"
            alt="Person Typing"
          />
        </motion.div>
        {/* message */}
        <label htmlFor="message" className="text-sm font-bold">
          Message:
        </label>
        <textarea
          id="message"
          rows={8}
          {...register("message", { required: "Message is required" })}
          className="w-full outline-none bg-transparent focus:border-blue-600 dark:focus:border-sky-500 dark:hover:border-sky-300 hover:border-blue-500 border-2 transition-all duration-200 dark:border-zinc-400 border-zinc-600 rounded-lg px-4 py-1"
        />
        {errors.message && (
          <span className="text-red-500 text-xs">{errors.message.message}</span>
        )}
      </div>

      <motion.button
        animate={{ scale: 1 }}
        whileTap={{ scale: 0.9 }}
        type="submit"
        className={`${sendMessagePending ? ' bg-blue-300 text-zsky-950 font-bold cursor-not-allowed ':'hover:bg-blue-600 bg-blue-500'} col-start-2 text-white rounded-lg px-4 py-2  flex items-center justify-center gap-2`}
      >
        {sendMessagePending ? (
          <>
            Sending...
            {/* Optionally, you can add a spinner or loading icon here */}
          </>
        ) : (
          <>
            Send
            <FaPaperPlane />
          </>
        )}
      </motion.button>
    </form>
  );
};

export default ContactMeForm;
