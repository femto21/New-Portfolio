import { motion } from "framer-motion";

type ExperienceItem = {
  company: string;
  role: string;
  date: string;
  logo: string;
  achievements: string[];
};

const experiences: ExperienceItem[] = [
  {
    company: "Commissionaires Nova Scotia",
    role: "Desktop Support and Cybersecurity Intern",
    date: "June 2025 – September 2025",
    logo: "/cns.png",
    achievements: [
      "Designed and deployed a full-stack IT support App used by 40+ employees, reducing average response times by 25%.",
      "Resolved 200+ desktop support requests, improving employee productivity by minimizing downtime per incident.",
      "Developed an Azure Synapse dataflow pipeline to calibrate 16000+ rows of data from between different platforms",
      "Assisted in managing 100+ Active Directory accounts ensure secure access.",
    ],
  },
  {
    company: "Freelance",
    role: "Full Stack Developer",
    date: "Aug 2024 – May 2025",
    logo: "/freelance.webp",
    achievements: [
      "Designed and developed a full-stack web application to provide a new dimension for the storeowner to sell their products.",
      "Integrated an AI Agent deployed on Google Cloud Run with the app and stored all data securely in Firestore",
      "Implemented authentication for a water-consumption tracking platform using DynamoDB, and integrated real-time insights",
    ],
  },
];

const Experience = () => {
  return (
    <section id="work" className="lg:mx-40 mt-30 border-amber-500">
      <div className="m-auto min-h-max  border-solid w-full">
        <div className="m-auto w-fit">
          <p className="text-l mb-1 text-color2 text-shadow w-fit m-auto">
            My Professional Development
          </p>
          <p className="text-3xl text-color1 text-shadow w-fit m-auto">
            My Work
          </p>
        </div>
        <div className="mt-6 flex flex-col gap-10">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="mx-16 relative bg-white/5 text-white rounded-3xl p-8 shadow-lg "
            >
              <div className="flex flex-col items-center text-center">
                <img
                  src={exp.logo}
                  alt={exp.company}
                  className="w-16 h-16 mb-4 rounded-lg object-cover"
                />
                <h3 className="text-color2 text-xl text-shadow font-clashDisplay">
                  {exp.company}
                </h3>
                <p className="text-color1 text-md text-shadow font-clashDisplay">
                  {exp.role} | {exp.date}
                </p>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-left text-color2 text-shadow">
                {exp.achievements.map((point, i) => (
                  <li key={i} className="leading-relaxed">
                    • {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
