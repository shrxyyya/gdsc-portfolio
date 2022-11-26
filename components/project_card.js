function ProjectCard(props) {
  return (
    <div className="bg-slate-800 p-4 rounded-xl">
      {props.project.is_featured ? (
        <p className="text-emerald-300 font-mono text-md">Featured Project</p>
      ) : (
        <p></p>
      )}
      <p className="font-bold text-rose-400">{props.project.title}</p>
      <p className="mt-3 text-lime-200">{props.project.desc}</p>
      <div className="mt-4 text-gray-400">
        <a
          href={props.project.github}
          className="underline hover:text-emerald-300 transition duration-300"
        >
          Github
        </a>
        <a
          href={props.project.website}
          className="underline ml-4 hover:text-emerald-300 transition duration-300"
        >
          Website
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;

/* 'is_featured ?' evaluates to boolean True or False value. */
/*transition duration specifies the number of miliseconds that it takes for the
 colour to change from default to the one specified when the text is hovered upon */
