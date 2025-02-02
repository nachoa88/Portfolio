interface Language {
  code: string;
  name: string;
  country_code: string;
}

export const languages: Language[] = [
  {
    code: "es",
    name: "Español",
    country_code: "es",
  },
  {
    code: "cat",
    name: "Català",
    country_code: "cat",
  },
  {
    code: "en",
    name: "English",
    country_code: "gb",
  },
];