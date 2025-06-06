// src/pages/About.tsx
// Displays personal background, education details, and academic achievements.

import { AcademicCapIcon, TrophyIcon, CheckBadgeIcon } from "@heroicons/react/24/outline";

// Reusable Highlight (HL) component for consistent styling
const HL = ({ children }: { children: React.ReactNode }) => (
  <span className="text-indigo-600 dark:text-indigo-400 font-semibold">{children}</span>
);

const About = () => {
  const achievements = [
    "Cum Laude Graduate",
    "Academic Scholar and Dean's Lister",
    "Best Thesis Project Award",
    "PAIR International Research Conference Best Abstract and Best Oral Research Presenter",
    "Placed in the Top 20 finalist at the 2024 National AppCon Competition",
    "Academic Leadership Award",
    "Academic Achievers Award",
    "Academic Research Award",
  ];

  const Certificates = [
    "CNA: JavaScript Essentials 1",
    "CLP: Advanced Programming in C",
    "CLA: Programming Essentials in C",
    "CCNAv7: Introduction to Networking",
    "PCAP: Programming Essentials in Python",
    "CNA: Introduction to IoT",
  ];

  const educationDetails = [
    "Degree: Bachelor of Science in Computer Science",
    "Institution: Columban College, Inc., Philippines",
    "Attended: July 12, 2021",
    "Graduated: June 18, 2025",
  ];

  return (
    <div className="p-8 max-w-6xl mx-auto min-h-screen">
      <h2 className="text-4xl font-semibold mb-8 text-center">About Me</h2>

      <p className="mb-12 text-lg leading-relaxed text-gray-700 dark:text-gray-300 max-w-4xl mx-auto text-justify">
        A <HL>Cum Laude Computer Science graduate</HL> specializing in <HL>full-stack software development</HL>. I enjoy{" "}
        <HL>building software</HL> and understanding how every part of the system works. Recognized with{" "}
        <HL>multiple awards</HL> for <HL>leadership</HL> and <HL>academic excellence</HL>.
      </p>

      {/* 3-column layout for Education, Achievements, Awards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Education */}
        <section>
          <h3 className="text-3xl font-semibold mb-6 flex items-center space-x-3 text-indigo-600 dark:text-indigo-400">
            <AcademicCapIcon className="w-8 h-8" />
            <span>Education</span>
          </h3>
          <ul className="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300">
            {educationDetails.map((detail) => (
              <li key={detail} className="flex items-center space-x-2">
                <AcademicCapIcon className="w-5 h-5 text-indigo-600 dark:text-indigo-400 flex-shrink-0" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Achievements */}
        <section>
          <h3 className="text-3xl font-semibold mb-6 flex items-center space-x-3 text-green-600 dark:text-green-400">
            <TrophyIcon className="w-8 h-8" />
            <span>Achievements</span>
          </h3>
          <ul className="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300">
            {achievements.map((achievement) => (
              <li key={achievement} className="flex items-center space-x-2">
                <TrophyIcon className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </section>

        {/*Certificates */}
        <section>
          <h3 className="text-3xl font-semibold mb-6 flex items-center space-x-3 text-yellow-600 dark:text-yellow-400">
            <CheckBadgeIcon className="w-8 h-8" />
            <span>Certificates</span>
          </h3>
          <ul className="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300">
            {Certificates.map((award) => (
              <li key={award} className="flex items-center space-x-2">
                <CheckBadgeIcon className="w-5 h-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0" />
                <span>{award}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About;
