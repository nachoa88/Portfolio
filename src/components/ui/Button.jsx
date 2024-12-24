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
    small: "px-2 py-1 text-xs leading-4 btn-shadow-sm",
    default: "px-4 py-2 text-sm leading-5 btn-shadow-default",
  };

  const baseClasses = `${sizeClasses[size]} btn-base btn-hover ${className}`;

  if (href) {
    return (
      <a href={href} className={baseClasses} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Component className={baseClasses} onClick={onClick} {...props}>
      {children}
    </Component>
  );
}