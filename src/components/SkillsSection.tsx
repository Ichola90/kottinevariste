import React from 'react';
import { BookOpen, Languages, Lightbulb, Users, GraduationCap, Presentation } from 'lucide-react';

interface ResearchArea {
  id: number;
  category: string;
  icon: React.ReactNode;
  items: string[];
}

const researchAreas: ResearchArea[] = [
  {
    id: 1,
    category: "Domaines de recherche",
    icon: <BookOpen size={24} />,
    items: [
      "Didactique de l'anglais langue étrangère (EFL)",
      "Task-Based Language Teaching",
      "Compétence pragmatique",
      "Ingénierie didactique"
    ]
  },
  {
    id: 2,
    category: "Techniques pédagogiques",
    icon: <Lightbulb size={24} />,
    items: [
      "Jeu de rôle (Role-Play)",
      "Techniques dramatiques",
      "Théâtre-processus",
      "Approche par tâches"
    ]
  },
  {
    id: 3,
    category: "Ingénierie de la formation",
    icon: <GraduationCap size={24} />,
    items: [
      "Conception de curricula",
      "Modules de renforcement des capacités",
      "Dispositifs d'évaluation par compétences",
      "Révision de programmes de formation"
    ]
  },
  {
    id: 4,
    category: "Encadrement scientifique",
    icon: <Users size={24} />,
    items: [
      "Direction de mémoires et de thèses (Master, Doctorat)",
      "Formation d'enseignants",
      "Orientation vers des sujets à fort impact sociétal"
    ]
  },
  {
    id: 5,
    category: "Langues de travail",
    icon: <Languages size={24} />,
    items: [
      "Français",
      "Anglais (recherche et enseignement)"
    ]
  },
  {
    id: 6,
    category: "Diffusion et expertise",
    icon: <Presentation size={24} />,
    items: [
      "Publications dans des revues scientifiques (RILALE, Ziglôbitha)",
      "Communications lors de colloques internationaux",
      "Consultance auprès d'institutions éducatives et d'ONG"
    ]
  }
];

const keywords = [
  "EFL", "Didactique des langues", "Task-Based Language Teaching", "Jeu de rôle",
  "Techniques dramatiques", "Théâtre-processus", "Compétence pragmatique", "Ingénierie didactique",
  "Innovation pédagogique", "Ingénierie de la formation", "Encadrement doctoral", "Consultance"
];

const ResearchAreasSection: React.FC = () => {
  return (
    <section id="skills" className="py-16 sm:py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Domaines de recherche</h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Enseignant-chercheur en didactique de l'anglais langue étrangère, mes travaux portent sur le Task-Based Language Teaching, le jeu de rôle et les techniques dramatiques, au service du développement de la compétence pragmatique et d'une pédagogie créative et contextualisée.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {researchAreas.map((area) => (
            <div
              key={area.id}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mr-4 shrink-0">
                  {area.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">{area.category}</h3>
              </div>

              <ul className="space-y-2">
                {area.items.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 mt-2 shrink-0"></span>
                    <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Keywords cloud */}
        <div className="mt-16 sm:mt-20">
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-8 sm:mb-10 text-gray-900 dark:text-white">
            Mots-clés de recherche
          </h3>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-3xl mx-auto">
            {keywords.map((keyword, index) => (
              <span
                key={index}
                className="text-sm font-medium px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 shadow-sm"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchAreasSection;