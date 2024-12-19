export default function Button({ onClick, children, className = "", size = "default" }) {
  const sizeClasses = {
    small: "px-2 py-1 text-xs shadow-[3px_3px_#0f172a] dark:shadow-[3px_3px_#0f172a] hover:shadow-[4px_4px]",
    default: "px-4 py-2 text-sm shadow-[4px_4px_#0f172a] dark:shadow-[4px_4px_#0f172a] hover:shadow-[6px_6px]",
  };

  return (
    <button
      className={`${sizeClasses[size]} rounded-lg tracking-widest font-semibold uppercase text-sky-900 dark:text-gray-200
       bg-sky-400 dark:bg-teal-600 border-2 border-slate-950 transition-all duration-300 ease-in-out 
       hover:bg-slate-950 dark:hover:bg-slate-950 hover:text-gray-200 hover:shadow-sky-400 dark:hover:shadow-teal-600 ${className}`}
      onClick={onClick}
    >
      {/* Children allow for dynamic content to be passed in, as for example the text of the button */}
      {children}
    </button>
  );
}
