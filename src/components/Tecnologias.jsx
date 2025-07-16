import { a, link } from "motion/react-client";
import { AnimatedTestimonials } from "./ui/animated-testimonials";

export default function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      name: "Perfume E-commerce Website",
      quote:
        "A responsive online store built to sell perfumes. Includes product listings, shopping cart, and a user-friendly checkout process.",
      designation: "Web Project",
      src: "/perfumes.webp",
      link: "https://perfumepage.vercel.app/",
      github: "https://github.com/ginorojo/perfume-page",
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
    },
    {
      name: "Stays Platform",
      quote:
        "A page to explore accommodations with filters, map integration, and detailed property info. Perfect for users searching for lodging.",
      designation: "Web Project",
      src: "/stays.webp",
      link: "https://final-proyect-wdd330.vercel.app/",
      github: "https://github.com/ginorojo/final-proyect-wdd330",
       technologies: [
        {
          name: "React",
          icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
        
        },
        {
          name: "Vite",
          icon: "https://vitejs.dev/logo-with-shadow.png",
     
        },
        {
          name: "Tailwind",
          icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
       
        },
        
        {
          name: "javascript",
          icon: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
         
        },
          {
          name: "sql",
          icon: "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png",
         
        },
          {
          name: "nodejs",
          icon:  "https://nodejs.org/static/images/logo.svg",
        
        },
        
      ],
    },
    {
      name: "Admin Dashboard",
      quote:
        "An admin panel to manage products, users, and e-commerce statistics. Features login, data tables, and a clean, intuitive layout.",
      designation: "Web Project",
      src: "/admin-perfumes.webp",
      link: "https://perfumepage.vercel.app/Test",
      github: "https://github.com/ginorojo/backend-perfumes",
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
      
        
      ],
    },
    {
      name: "Smart Search Engine",
      quote:
        "A real-time search tool that finds any GitHub user along with their repositories. Offers a fast and simple interface.",
      designation: "Web Project",
      src: "/buscador.webp",
      link: "https://ginorojo.github.io/react-github-search/",
      github: "https://github.com/ginorojo/react-github-search",
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
          
        
      ],
    },
    {
      name: "Weather App",
      quote:
        "Real-time weather app using an external API. Displays temperature, city, and weather status with a modern and clean design.",
      designation: "Web Project",
      src: "/weather.webp",
      link: "https://app-weather-react-lemon.vercel.app",
      github: "https://github.com/ginorojo/app-weather-react",
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

        
      ],
    },
  ];

  return (
    <div className="h-full w-full justify-center text-white md:p-8">
      <AnimatedTestimonials testimonials={testimonials} />
    </div>
  );
}
