import SectionTitle from "../../ui/SectionTitle";
import ContactForm from "./components/ContactForm";
import ContactInfo from "./components/ContactInfo";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="pt-20 pb-20 p-4 w-full mx-auto max-w-screen-xl">
      <SectionTitle title={t("contact.title")} />

      <div className="grid lg:grid-cols-2 gap-8 pt-4">
        <ContactForm />
        <ContactInfo />
      </div>
    </section>
  );
}
