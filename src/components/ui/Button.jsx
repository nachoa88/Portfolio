export default function Button({ onClick, children, className = "" }) {
  return (
    <button
      className={`px-4 py-2 rounded-lg text-sm tracking-widest font-semibold uppercase text-sky-900 dark:text-gray-200 bg-sky-400 dark:bg-teal-600
          border-2 border-slate-950 shadow-[4px_4px_#0f172a] dark:shadow-[4px_4px_#0f172a] transition-all duration-300 ease-in-out
          hover:shadow-[6px_6px] hover:bg-slate-950 dark:hover:bg-slate-950 hover:text-gray-200 hover:shadow-sky-400 dark:hover:shadow-teal-600 ${className}`}
      onClick={onClick}
    >
      {/* Children allow for dynamic content to be passed in, as for example the text of the button */}
      {children}
    </button>
  );
}
