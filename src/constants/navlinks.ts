interface NavLink {
  name: string;
  sectionId: string;
}

export const navLinks: NavLink[] = [
  { name: "navbar.home", sectionId: "home" },
  { name: "navbar.projects", sectionId: "projects" },
  { name: "navbar.contact", sectionId: "contact" },
];
