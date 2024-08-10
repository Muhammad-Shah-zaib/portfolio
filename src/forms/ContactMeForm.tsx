import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import handDrawnPersonTyping from "../assets/hand-drawn-person-typing.svg";
import handDrawnPersonWriting from "../assets/hand-drawn-person-writing.svg";

interface FormInputs {
  name: string;
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

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log(data);
    // Handle form submission, e.g., send data to an API
  };

  return (
    <form
      className="font-roboto w-full flex flex-col gap-4 max-w-[310px] sm:max-w-[450px] px-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col w-full">
        <label htmlFor="name" className="text-sm font-bold">
          Name:
        </label>
        <input
          id="name"
          type="text"
          {...register("name", { required: "Name is required" })}
          className="w-full outline-none bg-transparent border dark:border-zinc-400 border-zinc-600 rounded-lg px-4 py-1"
        />
        {errors.name && (
          <span className="text-red-500 text-xs">{errors.name.message}</span>
        )}
      </div>

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
          className="w-full outline-none bg-transparent border dark:border-zinc-400 border-zinc-600 rounded-lg px-4 py-1"
        />
        {errors.email && (
          <span className="text-red-500 text-xs">{errors.email.message}</span>
        )}
      </div>

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
          className="w-full outline-none bg-transparent border dark:border-zinc-400 border-zinc-600 rounded-lg px-4 py-1"
        />
        {errors.contactNumber && (
          <span className="text-red-500 text-xs">
            {errors.contactNumber.message}
          </span>
        )}
      </div>

      <div className="flex flex-col w-full relative">
        {/* drawing */}
        <div className={`absolute top-0 -left-1/3 md:-left-1/4`}>
          <img
            src={handDrawnPersonWriting}
            className="w-[100px] rotate-[5deg]"
          />
        </div>

        <div className={`absolute top-[70%] -right-1/3 md:-right-1/4`}>
          <img src={handDrawnPersonTyping} className="w-[100px]" />
        </div>
        {/* message */}
        <label htmlFor="message" className="text-sm font-bold">
          Message:
        </label>
        <textarea
          id="message"
          rows={8}
          {...register("message", { required: "Message is required" })}
          className="w-full outline-none bg-transparent border dark:border-zinc-400 border-zinc-600 rounded-lg px-4 py-1"
        />
        {errors.message && (
          <span className="text-red-500 text-xs">{errors.message.message}</span>
        )}
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactMeForm;
