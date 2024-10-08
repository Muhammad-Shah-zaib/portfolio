import ContactMeForm from "../forms/ContactMeForm";

function ContactMe() {
  return (
    <section
      id="contact-me"
      className={`font-roboto flex flex-col gap-10 items-center justify-center py-16`}
    >
      <div className={`select-none flex flex-col gap-1 items-center`}>
        <h2 className={`text-4xl font-bold font-biorhyme`}>Get In Touch</h2>
        <span className={`text-xs text-sky-700 dark:text-sky-200`}>
          Lets work together
        </span>
      </div>
      <ContactMeForm />
    </section>
  );
}

export default ContactMe;
