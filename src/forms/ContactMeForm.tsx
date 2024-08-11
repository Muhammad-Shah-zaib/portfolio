import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "emailjs-com"; // Import EmailJS
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";

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
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    try {
      const result = await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID || '',   // Use environment variable
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID || '',  // Use environment variable
        data,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY || ''    // Use environment variable
      );
      console.log(result.text);
      alert("Message sent successfully!");
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <form
      className="relative grid grid-cols-2 font-roboto w-full gap-4 max-w-[310px] sm:max-w-[450px] px-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* FIRST NAME */}
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

      {/* LAST NAME */}
      <div className="relative flex flex-col w-full">
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

      {/* CONTACT NUMBER */}
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

      {/* MESSAGE */}
      <div className="flex flex-col col-span-2 w-full relative">
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
        className="flex items-center gap-2 justify-center bg-blue-500 col-start-2 text-white rounded-lg px-4 py-2 hover:bg-blue-600"
      >
        Send Message
        <FaPaperPlane />
      </motion.button>
    </form>
  );
};

export default ContactMeForm;
