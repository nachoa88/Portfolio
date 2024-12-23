export default function Button({
  as: Component = "button",
  href,
  download,
  onClick,
  children,
  className = "",
  size = "default",
  ...props
}) {
  const sizeClasses = {
    small: "px-2 py-1 text-xs leading-4 shadow-[3px_3px_#0f172a] dark:shadow-[3px_3px_#0f172a] hover:shadow-[4px_4px]",
    default: "px-4 py-2 text-sm leading-5 shadow-[4px_4px_#0f172a] dark:shadow-[4px_4px_#0f172a] hover:shadow-[6px_6px]",
  };

  const baseClasses = `${sizeClasses[size]} rounded-lg tracking-widest font-semibold uppercase text-sky-900 dark:text-gray-200
  bg-sky-400 dark:bg-teal-600 order-2 border-slate-950 transition-all duration-300 ease-in-out 
  hover:bg-slate-950 dark:hover:bg-slate-950 hover:text-gray-200 hover:shadow-sky-400 dark:hover:shadow-teal-600 ${className}`;

  // If href is provided, render an anchor tag
  if (href) {
    return (
      <a href={href} className={baseClasses} {...props}>
        {children}
      </a>
    );
  }

  // Otherwise render a button
  return (
    <Component className={baseClasses} onClick={onClick} {...props}>
      {children}
    </Component>
  );
}
