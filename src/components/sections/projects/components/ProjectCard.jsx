export default function ProjectCard({ title, description, image, technologies }) {
  return (
    <div className="flex flex-col items-center bg-gray-200 dark:bg-cyan-900 border border-sky-800 dark:border-gray-500 rounded-lg shadow-lg md:flex-row">
      <img
        className="object-cover w-full rounded-t-lg h-96 md:h-64 md:w-auto md:rounded-none md:rounded-s-lg text-sky-900 dark:text-gray-300"
        src={image}
        alt={`${title} preview`}
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-sky-950 dark:text-gray-200">{title}</h5>
        <p className="mb-3 font-normal text-sky-900 dark:text-gray-300">{description}</p>
        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
          {technologies.map((tech) => (
            <li key={tech} className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                {tech}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
