import Button from "../../../ui/Button";

export default function ProjectCard({ title, description, image, technologies }) {
  return (
    <div className="flex flex-col md:flex-row items-center bg-sky-100/70 dark:bg-cyan-900/70 border border-sky-800 dark:border-teal-600 rounded-lg shadow-lg">
      <img
        className="object-cover w-full rounded-t-lg h-96 md:h-64 md:w-auto md:rounded-none md:rounded-s-lg text-sky-900 dark:text-gray-300"
        src={image}
        alt={`${title} preview`}
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-sky-950 dark:text-gray-200">{title}</h5>
        <ul className="mb-2 flex flex-wrap" aria-label="Technologies used">
          {technologies.map((tech) => (
            <li key={tech} className="mr-1.5">
              <div className="flex items-center rounded-full text-sky-600 dark:text-teal-300 bg-sky-600/10 dark:bg-teal-300/10 px-3 py-1 text-xs font-medium leading-5">
                {tech}
              </div>
            </li>
          ))}
        </ul>
        <p className="mb-2 text-sm md:text-lg lg:text-sm text-sky-900 dark:text-gray-300">{description}</p>
        <div className="flex justify-center gap-4 mt-2">
          <Button size="small">View Project</Button>
          <Button size="small">View Code</Button>
        </div>
      </div>
    </div>
  );
}
