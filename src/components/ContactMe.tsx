import ContactMeForm from "../forms/ContactMeForm";

function ContactMe() {
  return (
    <div
      className={`font-roboto min-h-screen min-w-screen flex flex-col gap-10 items-center justify-center`}
    >
      <div className={`select-none flex flex-col gap-1 items-center`}>
        <h2 className={`text-4xl font-bold font-biorhyme`}>Get In Touch</h2>
        <span className={`text-xs text-sky-700 dark:text-sky-200`}>
          Lets work together
        </span>
      </div>
      <ContactMeForm />
    </div>
  );
}

export default ContactMe;
