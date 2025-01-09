import SectionTitle from "../../ui/SectionTitle";
import { technologies } from "../../../constants/technologies";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../../hooks/useTheme";

export default function Stack() {
  const { t } = useTranslation();
  const { isDarkMode } = useTheme();

  return (
    <section id="stack" className="p-2 sm:p-4 pt-8 md:pt-4 pb-4 sm:pb-10 w-full mx-auto max-w-screen-xl">
      <SectionTitle title={t("stack.title")} />
      <ul className="flex flex-wrap justify-center gap-2 sm:gap-4 mx-auto">
        {technologies.map(({ name, bgColorLight, bgColorDark, borderColor, image }) => {
          const bgColor = isDarkMode ? bgColorDark : bgColorLight;
          return (
            <li
              key={name}
              className="group flex flex-col items-center justify-center p-2 sm:p-4"
              style={{ "--borderColor": borderColor }}
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 mb-2 flex items-center justify-center">
                <div
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center border border-transparent transition-all duration-300 group-hover:ring-2 group-hover:ring-[var(--borderColor)]"
                  style={{ backgroundColor: bgColor }}
                >
                  <img src={image} alt="{name}'s logo" className="w-8 h-8 sm:w-10 sm:h-10" />
                </div>
              </div>
              <p className="text-nav-xxs sm:text-nav text-primary dark:text-primary-dark">{name}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
