export default function TechCarousel() {
  const techs = [
    { name: "HTML5", src: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" },
    { name: "CSS3", src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" },
    { name: "Tailwind CSS", src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
    { name: "JavaScript", src: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
    { name: "React", src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
    { name: "Vite", src: "https://vitejs.dev/logo-with-shadow.png" },
    { name: "Node.js", src: "https://nodejs.org/static/images/logo.svg" },
    { name: "Axios", src: "https://avatars.githubusercontent.com/u/32372333?s=200&v=4" },
    { name: "SQL", src: "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png" },
    { name: "Python", src: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
  ];

  const duplicatedTechs = [...techs, ...techs]; // Loop visual

  return (
    <div className="w-full flex justify-center items-center py-10 bg-transparent">
      <div className="relative w-[100%] md:w-[80%] max-w-5xl overflow-hidden">
        <div
          className="flex md:gap-10 gap-15 animate-scroll whitespace-nowrap"
        >
          {duplicatedTechs.map((tech, i) => (
            <div key={i} className="flex flex-col items-center md:min-w-[150px] w-[30px] ">
              <img
                src={tech.src}
                alt={tech.name}
                className="w-16 h-16 object-contain"
              />
              <p className="text-white md:text-sm text-xs mt-2 text-center ">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
