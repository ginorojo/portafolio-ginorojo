import { link } from "motion/react-client";
import { AnimatedTestimonials } from "./ui/animated-testimonials";

export default function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      name: "Outdoor E-commerce Website",
      quote:
        "Group project developed at university where I led the team and managed Git branches. The site sells outdoor gear, includes a shopping cart, and integrates a payment gateway. Built with teamwork and attention to detail.",
      designation: "Team Project",
      src: "/pathway.webp",
      link: "https://outsideteam3.netlify.app/",
      github: "https://github.com/ginorojo/wdd330-team-3-",
       technologies: [
        {
          name: "Html 5",
          icon: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
        
        },
        {
          name: "CSS",
          icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
      
        },
        
        {
          name: "javascript",
          icon: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
         
        },
        {
          name: "nodejs",
          icon:  "https://nodejs.org/static/images/logo.svg",
          
        },

        
      ],
    },
    {
      name: "School Management System – Funval",
      quote:
        "Collaborative project developed with classmates. The system manages users, students, and staff of the programming school, including their corresponding documents and access roles.",
      designation: "Team Project",
      src: "/funval.webp",
      link:"https://frontend-hs-app.vercel.app/",
      github: "https://github.com/RicardoAHH/frontend-hs-app ",
        technologies: [
        {
          name: "React",
          icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
          url: "https://react.dev/",
        },
        {
          name: "Vite",
          icon: "https://vitejs.dev/logo-with-shadow.png",
          url: "https://vitejs.dev/",
        },
        {
          name: "Tailwind",
          icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
          url: "https://tailwindcss.com/",
        },
        
        {
          name: "javascript",
          icon: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
          url: "https://tailwindcss.com/",
        },
          {
          name: "sql",
          icon: "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png",
          url: "https://tailwindcss.com/",
        },
          {
          name: "nodejs",
          icon:  "https://nodejs.org/static/images/logo.svg",
          url: "https://tailwindcss.com/",
        },
        
      ],
    }
  ];

  return (
    <div className="h-full w-full text-white md:p-8" id="team-projects">
      <AnimatedTestimonials testimonials={testimonials} />
    </div>
  );
}
