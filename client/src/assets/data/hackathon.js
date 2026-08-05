import navkalpanaImage from "../hackathon.jpeg";
import odooImage from "../Certificates/Odoo.jpg";
import womenWhoMasterImage from "../Certificates/WWM26-MUM-G-T028-M03_Rakhi-Rani-Rani.jpg";

const hackathons = [
  {
    id: 3,
    title: "Odoo Hackathon 2026",
    result: "Finalist",
    date: "2026",
    theme: "emerald",
    badgeGlow: true,
    description:
      "Successfully qualified as a Finalist in the Odoo Hackathon 2026 after clearing the selection process. Worked on solving real-world business challenges, demonstrating full-stack development, problem-solving, teamwork, and product-building skills.",
    image: odooImage,
    organizer: "Odoo",
    tech: ["React.js", "Node.js", "PostgreSQL", "REST APIs", "Teamwork", "Problem Solving"],
  },
  {
    id: 4,
    title: "Women Who Master Hackathon 2026",
    result: "Zonal Round Shortlisted",
    date: "2026",
    theme: "pink",
    badgeGlow: true,
    description:
      "Selected for the Zonal Round of the Women Who Master Hackathon 2026, recognizing technical skills and innovation among women in technology. Although unable to attend the zonal round due to university semester examinations, the selection itself reflects strong performance in the national screening process.",
    image: womenWhoMasterImage,
    organizer: "Aspire For Her × Logitech",
    tech: ["Innovation", "Problem Solving", "Collaboration", "Full Stack Development"],
  },
  {
    id: 1,
    title: "NavKalpana Hackathon",
    result: "Finalist",
    date: "Feb 2026",
    description:
      "Built HealthUP FitAI, an AI-powered adaptive fitness intelligence platform that delivers personalized workout plans, diet recommendations, habit tracking, and AI coaching. The platform continuously adapts to user progress, health metrics, fatigue levels, and behavioral patterns to provide a personalized fitness experience.",
    image: navkalpanaImage,
    organizer: "NRI College & RICR, Bhopal",
  },
  {
    id: 2,
    title: "HackNova",
    result: "3rd Runner Up",
    date: "Apr 2026",
    description:
      "Built HealthUP FitAI, an AI-powered adaptive fitness intelligence platform that delivers personalized workout plans, diet recommendations, habit tracking, and AI coaching. The platform continuously adapts to user progress, health metrics, fatigue levels, and behavioral patterns to provide a personalized fitness experience.",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
    organizer: "Bhabha University",
  },
];

export default hackathons;