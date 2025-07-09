import { AnimatedTestimonials } from "./ui/animated-testimonials";

export default function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      name: "Perfume E-commerce Website",
      quote:
        "A responsive online store built to sell perfumes. Includes product listings, shopping cart, and a user-friendly checkout process.",
      designation: "Web Project",
      src: "/perfumes.png",
    },
    {
      name: "Stays Platform",
      quote:
        "A page to explore accommodations with filters, map integration, and detailed property info. Perfect for users searching for lodging.",
      designation: "Web Project",
      src: "/stays.png",
    },
    {
      name: "Admin Dashboard",
      quote:
        "An admin panel to manage products, users, and e-commerce statistics. Features login, data tables, and a clean, intuitive layout.",
      designation: "Web Project",
      src: "/admin-perfumes.png",
    },
    {
      name: "Smart Search Engine",
      quote:
        "A real-time search tool that finds any GitHub user along with their repositories. Offers a fast and simple interface.",
      designation: "Web Project",
      src: "/buscador.png",
    },
    {
      name: "Weather App",
      quote:
        "Real-time weather app using an external API. Displays temperature, city, and weather status with a modern and clean design.",
      designation: "Web Project",
      src: "/weather.png",
    },
  ];

  return (
    <div className="h-full w-full justify-center text-white md:pt-25 md:p-8">
      <AnimatedTestimonials testimonials={testimonials} />
    </div>
  );
}

