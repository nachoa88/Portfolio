export default function SectionTitle({ title }) {
  return (
    <h2 className="mb-4 flex items-center gap-4 text-xl font-semibold text-primary dark:text-primary-dark md:text-2xl lg:text-3xl">
      <div className="h-[2px] flex-grow bg-sky-400 dark:bg-teal-600 rounded"></div>
      <mark className="px-2 py-1 text-primary dark:text-primary-dark bg-sky-400 rounded dark:bg-teal-600">{title}</mark>
      <div className="h-[2px] flex-grow bg-sky-400 dark:bg-teal-600 rounded"></div>
    </h2>
  );
}
