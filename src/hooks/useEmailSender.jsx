import { useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";

export function useEmailSender() {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });
  const { t } = useTranslation();

  const sendEmail = async (form) => {
    setIsLoading(true);
    setStatus({ type: "", message: "" });

    try {
      // This maybe should go in a .env file
      await emailjs.sendForm("service_1b5j0qf", "template_sl424gr", form, "sgN1ERRoHV7F3wBk9");
      setStatus({
        type: "success",
        message: t("contact.form.success")
      });
      return true;
    } catch (error) {
      setStatus({
        type: "error",
        message: t("contact.form.error")
      });
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return { sendEmail, isLoading, status };
}
