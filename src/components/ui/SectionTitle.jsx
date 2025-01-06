export default function SectionTitle({ title }) {
  return (
    <h2 className="mb-5 flex items-center gap-4 text-xl md:text-2xl lg:text-3xl font-semibold text-primary dark:text-primary-dark">
      <div className="h-0.5 flex-grow bg-sky-400 dark:bg-teal-600 rounded"></div>
      <mark className="px-2 py-1 text-primary dark:text-primary-dark bg-sky-400 rounded dark:bg-teal-600">{title}</mark>
      <div className="h-0.5 flex-grow bg-sky-400 dark:bg-teal-600 rounded"></div>
    </h2>
  );
}
