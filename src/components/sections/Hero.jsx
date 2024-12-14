import portrait from "../../assets/images/portrait_hd.jpg";
import portrait_w from "../../assets/images/portrait_hd_w.jpg";
import resume from "../../assets/files/cv2024.pdf";
import { useTheme } from "../../hooks/useTheme";
import { useState } from "react";

export default function Hero() {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isFlipping, setIsFlipping] = useState(false);

  const handleThemeToggle = () => {
    setIsFlipping(true);
    toggleTheme();
    setTimeout(() => setIsFlipping(false), 700);
  };

  const handleHover = (e) => {
    if (isFlipping) return;
    const currentRotation = isDarkMode ? 180 : 0;
    e.currentTarget.style.transform = `rotateY(${
      currentRotation + (isDarkMode ? -15 : 15)
    }deg)`;
  };

  const handleClick = (event) => {
    window.open(resume, "_blank");
    event.currentTarget.blur(); // Remove focus after click
  };

  return (
    <section className="rounded-lg shadow-lg m-4 bg-slate-300 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div className="w-full max-w-xs mx-auto">
            {/* Perspective wrapper */}
            <div className="relative" style={{ perspective: "1000px" }}>
              {/* Overlay Text */}
              <div className="text-center">
                <div className="animate-bounce">
                  <span className="text-xs uppercase tracking-widest font-semibold text-sky-950 dark:text-teal-400">
                    Click on portrait to see my {isDarkMode ? "light" : "dark"}{" "}
                    side...
                  </span>
                </div>
              </div>
              {/* Flip container */}
              <div
                className="relative aspect-[7/8] transition-all duration-700 cursor-pointer"
                style={{
                  transformStyle: "preserve-3d",
                  transform: isDarkMode ? "rotateY(180deg)" : "rotateY(0deg)",
                }}
                onClick={handleThemeToggle}
                onMouseEnter={handleHover}
                onMouseLeave={(e) => {
                  const baseRotation = isDarkMode ? 180 : 0;
                  e.currentTarget.style.transform = `rotateY(${baseRotation}deg)`;
                }}
              >
                {/* Light mode image (front) */}
                <img
                  src={portrait}
                  alt="profile picture light"
                  className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-md"
                  style={{ backfaceVisibility: "hidden" }}
                />
                {/* Dark mode image (back) */}
                <img
                  src={portrait_w}
                  alt="profile picture dark"
                  className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-md"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-sky-950 dark:text-gray-200">
              Hi, I'm Ignacio Albiol
            </h1>
            <p className="text-lg text-sky-900 dark:text-gray-300">
              Full Stack Developer passionate about creating intuitive and
              efficient web solutions.
            </p>
            <p className="text-sky-900 dark:text-gray-300">
              With experience in both front-end and back-end development, I
              specialize in building responsive web applications using modern
              technologies.
            </p>
            <button
              className="inline-flex items-center px-4 py-2 bg-sky-950 dark:bg-teal-600 
                text-white rounded-lg shadow hover:bg-sky-800 dark:hover:bg-teal-500 
                transition duration-300"
              onClick={handleClick}
              download={resume}
            >
              Download CV
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
