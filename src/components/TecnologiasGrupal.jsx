import { AnimatedTestimonials } from "./ui/animated-testimonials";

export default function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      name: "Outdoor E-commerce Website",
      quote:
        "Group project developed at university where I led the team and managed Git branches. The site sells outdoor gear, includes a shopping cart, and integrates a payment gateway. Built with teamwork and attention to detail.",
      designation: "Team Project",
      src: "/pathway.png",
    },
    {
      name: "School Management System – Funval",
      quote:
        "Collaborative project developed with classmates. The system manages users, students, and staff of the programming school, including their corresponding documents and access roles.",
      designation: "Team Project",
      src: "/funval.png",
    }
  ];

  return (
    <div className="h-full w-full text-white md:p-8">
      <AnimatedTestimonials testimonials={testimonials} />
    </div>
  );
}
