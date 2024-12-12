export default function Logo({ isDarkMode }) {
  return (
    <div className="flex items-center">
      <div className="flex flex-col justify-center items-end mr-2">
        <span className="text-sky-950 dark:text-gray-200 text-xs tracking-widest uppercase">
          Ignacio
        </span>
        <span className="text-sky-950 dark:text-gray-200 text-xs tracking-widest uppercase">
          Albiol Paradeda
        </span>
      </div>
      <img
        src={isDarkMode ? "./logo_w.png" : "./logo.png"}
        alt="IAP-Dev logo"
        className="h-16 p-3"
      />
    </div>
  );
}
