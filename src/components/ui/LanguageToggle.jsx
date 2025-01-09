import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";
import React from "react";
import { useTranslation } from "react-i18next";
import { MdCheck, MdKeyboardArrowDown } from "react-icons/md";
import { languages } from "../../constants/languages";
import { GBFlag, ESFlag, CATFlag } from "./flags/index";

export default function LanguageToggle({ isMobile }) {
  const { i18n } = useTranslation();
  const currentLang = languages.find((lang) => lang.code === i18n.language) || languages[0];
  const flagComponents = {
    en: GBFlag,
    es: ESFlag,
    cat: CATFlag,
  };

  return (
    <Listbox value={currentLang} onChange={(lang) => i18n.changeLanguage(lang.code)}>
      <div className="relative inline-flex">
        {/* Button */}
        <ListboxButton className="group relative transition duration-300 ease-in-out">
          <span className="flex items-center px-2 text-nav text-primary dark:text-primary-dark group-hover:text-sky-600 dark:group-hover:text-teal-300">
            {React.createElement(flagComponents[currentLang.code])}
            {currentLang.code.toUpperCase()}
            <MdKeyboardArrowDown
              className="w-4 h-4 text-primary dark:text-primary-dark group-hover:text-sky-600 dark:group-hover:text-teal-300"
              aria-hidden="true"
            />
          </span>
          {!isMobile && (
            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-sky-500 dark:bg-teal-300 transition-all duration-500 group-hover:w-full" />
          )}
        </ListboxButton>
        {/* Dropdown Options */}
        <ListboxOptions className="absolute left-0 top-full mt-2 w-32 bg-slate-300/80 dark:bg-gray-900/80 rounded-lg shadow-lg ring-1 ring-black/5 p-1 focus:outline-none z-50">
          {languages.map((lang) => (
            <ListboxOption
              key={lang.code}
              value={lang}
              className="group flex items-center gap-2 rounded-lg py-1.5 px-3 cursor-pointer select-none data-[focus]:bg-sky-300/40 dark:data-[focus]:bg-cyan-700 transition-colors duration-200"
            >
              <MdCheck className="invisible size-4 fill-current group-data-[selected]:visible text-primary dark:text-primary-dark" />
              <span className="text-nav text-primary dark:text-primary-dark">
                {lang.name}
              </span>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  );
}
