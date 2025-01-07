import SectionTitle from "../../ui/SectionTitle";
import { technologies } from "../../../constants/technologies";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../../hooks/useTheme";

export default function Stack() {
  const { t } = useTranslation();
  const { isDarkMode } = useTheme();
  console.log(isDarkMode);
  return (
    <section id="stack" className="pt-4 pb-10 p-4 w-full mx-auto max-w-screen-xl">
      <SectionTitle title="Stack" />
      <ul className="flex flex-wrap justify-center gap-4 mx-auto">
      {technologies.map(({ name, bgColorLight, bgColorDark, borderColor, image }) => {
          const bgColor = isDarkMode ? bgColorDark : bgColorLight;
          return (
            <li
              key={name}
              className="group flex flex-col items-center justify-center p-4"
              style={{ "--borderColor": borderColor }}
            >
              <div className="w-16 h-16 mb-2 flex items-center justify-center">
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center border border-transparent transition-all duration-300 group-hover:ring-2 group-hover:ring-[var(--borderColor)]"
                  style={{ backgroundColor: bgColor }}
                >
                  <img src={image} alt={name} className="w-10 h-10" />
                </div>
              </div>
              <p className="text-nav text-primary dark:text-primary-dark">{name}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
