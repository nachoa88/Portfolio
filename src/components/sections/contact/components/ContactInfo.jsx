import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { useTranslation } from "react-i18next";

export default function ContactInfo() {
    const { t } = useTranslation();

    return (
        <div className="space-y-4 flex flex-col justify-center lg:items-start items-center">
        <p className="text-lg text-center lg:text-left p-2 md:p-10 lg:p-0 mb-4 text-secondary dark:text-secondary-dark">
          {t("contact.text.p")}{" "}
          <span className="font-bold text-secondary dark:text-secondary-dark underline decoration-2 decoration-sky-500 dark:decoration-teal-300">
            {t("contact.text.span")}
          </span>
        </p>
        <div className="flex items-center text-lg gap-2 text-secondary dark:text-secondary-dark">
          <MdEmail className="w-10 h-10" />
          <span>nacho.albiol88@gmail.com</span>
        </div>
        <div className="flex items-center text-lg gap-2 text-secondary dark:text-secondary-dark">
          <MdPhone className="w-10 h-10" />
          <span>+34 677 246 546</span>
        </div>
        <div className="flex items-center text-lg gap-2 text-secondary dark:text-secondary-dark">
          <MdLocationOn className="w-10 h-10" />
          <span>Barcelona, 08003</span>
        </div>
      </div>
    )
}