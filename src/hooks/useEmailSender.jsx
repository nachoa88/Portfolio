import { useState } from "react";
import emailjs from "@emailjs/browser";

export function useEmailSender() {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const sendEmail = async (form) => {
    setIsLoading(true);
    setStatus({ type: "", message: "" });

    try {
      await emailjs.sendForm("service_1b5j0qf", "template_sl424gr", form, "sgN1ERRoHV7F3wBk9");
      setStatus({
        type: "success",
        message: "Message sent successfully!",
      });
      return true;
    } catch (error) {
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again.",
      });
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return { sendEmail, isLoading, status };
}
