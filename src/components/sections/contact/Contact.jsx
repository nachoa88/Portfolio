import SectionTitle from "../../ui/SectionTitle";
import Button from "../../ui/Button";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });
  const inputClasses =
    "block py-2.5 px-0 w-full text-sm text-sky-950 dark:text-gray-200 bg-transparent border-0 border-b-2 border-sky-400 dark:border-teal-600 appearance-none focus:outline-none focus:ring-0 focus:border-sky-700 dark:focus:border-teal-300 peer";
  const labelClasses =
    "absolute text-sm text-sky-400 dark:text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-sky-700 dark:peer-focus:text-teal-300 peer-focus:font-medium peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 transition-all";

  // Reset the form fields
  const clearForm = () => {
    form.current.reset();
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: "", message: "" });

    emailjs
      .sendForm("service_1b5j0qf", "template_sl424gr", form.current, "sgN1ERRoHV7F3wBk9")
      .then((result) => {
        setStatus({ type: "success", message: "Message sent successfully!" });
        clearForm(); // Clear the input fields
      })
      .catch((error) => {
        setStatus({ type: "error", message: "Failed to send message. Please try again." });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <section id="contact" className="pt-20 pb-20 p-4 w-full mx-auto max-w-screen-xl">
      <SectionTitle title="Get in touch" />

      <div className="grid lg:grid-cols-2 gap-8 mt-8">
        {/* Contact Info */}
        <div className="space-y-4">
          <div className="flex items-center text-xl gap-2 text-sky-900 dark:text-gray-200 hover:text-sky-600 dark:hover:text-teal-400">
            <MdEmail className="w-10 h-10" />
            <span>nacho.albiol88@gmail.com</span>
          </div>
          <div className="flex items-center text-xl gap-2 text-sky-900 dark:text-gray-200 hover:text-sky-600 dark:hover:text-teal-400">
            <MdPhone className="w-10 h-10" />
            <span>+34 677 246 546</span>
          </div>
          <div className="flex items-center text-xl gap-2 text-sky-900 dark:text-gray-200 hover:text-sky-600 dark:hover:text-teal-400">
            <MdLocationOn className="w-10 h-10" />
            <span>Barcelona, Catalonia</span>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full sm:max-w-lg mx-auto sm:px-6 lg:px-8">
          <div className="p-6 bg-sky-100/70 dark:bg-cyan-900/70 overflow-hidden shadow-lg rounded-lg">
            <form ref={form} onSubmit={sendEmail}>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  placeholder=" "
                  className={inputClasses}
                  id="name"
                  type="text"
                  name="name"
                  required
                  autoComplete="name"
                />
                <label className={labelClasses} htmlFor="name">
                  Name
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  placeholder=" "
                  className={inputClasses}
                  id="email"
                  type="email"
                  name="email"
                  required
                  autoComplete="username"
                />
                <label className={labelClasses} htmlFor="email">
                  Email
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  placeholder=" "
                  className={inputClasses}
                  id="subject"
                  type="text"
                  name="subject"
                  required
                  autoComplete="subject"
                />
                <label className={labelClasses} htmlFor="subject">
                  Subject
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <textarea
                  placeholder=" "
                  className={inputClasses}
                  id="message"
                  name="message"
                  required
                  rows="4"
                  defaultValue=""
                />
                <label className={labelClasses} htmlFor="message">
                  Message
                </label>
              </div>

              {status.message && (
                <p className={`text-sm mb-4 ${status.type === "success" ? "text-green-500" : "text-red-500"}`}>
                  {status.message}
                </p>
              )}

              <div className="flex items-center justify-end mt-4">
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
