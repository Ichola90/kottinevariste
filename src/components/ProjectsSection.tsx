import React, { useState } from "react";
import { ExternalLink, FileText } from "lucide-react";

interface Publication {
  id: number;
  title: string;
  description: string;
  year: string;
  journal: string;
  coAuthors?: string[];
  keywords: string[];
  link?: string;
  type: "article" | "communication";
  featured: boolean;
}

const publications: Publication[] = [
  {
    id: 1,
    title:
      "Valorising and Innovating the EFL Teaching in Beninese Educational System",
    description:
      "Analyse des difficultés persistantes de l'enseignement de l'anglais dans le secondaire au Bénin et propositions pour valoriser et renouveler les pratiques pédagogiques afin d'encourager la prise de parole des apprenants.",
    year: "2021",
    journal:
      "Revue Internationale de Linguistique Appliquée, de Littérature et d'Éducation (RILALE), Vol. 4, N°2",
    keywords: ["Didactique de l'anglais", "EFL", "Système éducatif béninois"],
    link: "https://www.rilale-uac.org/volume-4-issue-1-2/",
    type: "article",
    featured: true,
  },
  {
    id: 2,
    title:
      "Looking into the Impact of Ditammari Language on Beninese Learners' EFL Oral Communication",
    description:
      "Étude de l'influence de la langue nationale Ditammari sur la production orale en anglais langue étrangère chez les apprenants béninois.",
    year: "2023",
    journal:
      "Ziglôbitha, Revue des Arts, Linguistique, Littérature & Civilisations, N°4",
    keywords: ["Langues nationales", "Communication orale", "EFL"],
    link: "https://www.ziglobitha.org/ziglobitha-n004/",
    type: "article",
    featured: true,
  },
  {
    id: 3,
    title:
      "Fostering Critical Thinking Skills among EFL Learners in Higher Education – A Systematic Review",
    description:
      "Revue systématique des stratégies favorisant le développement de l'esprit critique chez les apprenants d'anglais langue étrangère, combinant entretiens qualitatifs avec des enseignants et enquêtes quantitatives auprès des apprenants.",
    year: "2025",
    journal: "Publication scientifique",
    coAuthors: ["Crépin Djima Loko", "Mawumèvo Tchérak Dossou"],
    keywords: ["Esprit critique", "Enseignement supérieur", "Méthodes mixtes"],
    link: "https://www.researchgate.net/publication/394351766_Fostering_critical_thinking_skills_among_EFL_learners_in_higher_education_-_A_systematic_review",
    type: "article",
    featured: true,
  },
  {
    id: 4,
    title:
      "Motivational Concepts and Strategies for Teaching Listening Comprehension in EFL Context to Beninese Secondary School Learners",
    description:
      "Exploration de concepts et stratégies motivationnels destinés à améliorer l'enseignement de la compréhension orale en anglais auprès des élèves du secondaire au Bénin.",
    year: "2022",
    journal: "Bibliographie des Enseignants et Chercheurs de l'UAC (BEC-UAC)",
    coAuthors: ["Ulrich Orlando Sèna Hindeme"],
    keywords: ["Compréhension orale", "Motivation", "Pédagogie de l'anglais"],
    link: "https://www.bec.uac.bj/",
    type: "article",
    featured: false,
  },
  {
    id: 5,
    title: "ICT: New Trends in Beninese Secondary Schools",
    description:
      "Examen des nouvelles tendances d'intégration des technologies de l'information et de la communication (TIC) dans l'enseignement secondaire au Bénin.",
    year: "2022",
    journal: "Bibliographie des Enseignants et Chercheurs de l'UAC (BEC-UAC)",
    coAuthors: ["Estelle Bankolé-Minaflinou"],
    keywords: ["TIC", "Innovation pédagogique", "Enseignement secondaire"],
    link: "https://bec.uac.bj/",
    type: "article",
    featured: false,
  },
  {
    id: 6,
    title:
      "L'usage de l'intelligence artificielle dans le développement des compétences d'écriture des apprenants d'anglais langue étrangère",
    description:
      "Recherche de terrain à méthode mixte sur les apports et les enjeux de l'intelligence artificielle pour le développement des compétences rédactionnelles des apprenants d'EFL.",
    year: "2025",
    journal:
      "Revue Internationale de Linguistique Appliquée, de Littérature et d'Éducation (RILALE), Vol. 8, N°2",
    coAuthors: ["Jérémie Dovonou", "Mawumèvo Tchérak Dossou"],
    keywords: ["Intelligence artificielle", "Écriture", "EFL"],
    link: "https://www.rilale-uac.org/",
    type: "article",
    featured: true,
  },
  {
    id: 7,
    title:
      "Research at the University of Abomey-Calavi and Adjarra University Centre",
    description:
      "Communication présentée lors d'un colloque international portant sur les pratiques et enjeux de la recherche universitaire à l'Université d'Abomey-Calavi et au Centre universitaire d'Adjarra.",
    year: "2021",
    journal: "Actes du Colloque International, Université d'Abomey-Calavi",
    coAuthors: ["Arlette J. Viviane Hounhanou"],
    keywords: ["Recherche universitaire", "Enseignement supérieur"],
    link: "https://bec.uac.bj/",
    type: "communication",
    featured: false,
  },
];

const typeLabel: Record<Publication["type"], string> = {
  article: "Article scientifique",
  communication: "Communication à un colloque",
};

const typeStyle: Record<Publication["type"], string> = {
  article: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  communication:
    "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300",
};

const PublicationsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<"all" | "featured">("all");

  const filteredPublications =
    activeFilter === "all"
      ? publications
      : publications.filter((publication) => publication.featured);

  return (
    <section id="projects" className="py-16 sm:py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Publications</h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Une sélection de travaux de recherche portant sur l'enseignement de
            l'anglais langue étrangère, la didactique des langues et
            l'innovation pédagogique au Bénin.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-4">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-7 py-3.5 rounded-full text-sm font-medium transition-colors ${
                activeFilter === "all"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700"
              }`}
            >
              Toutes les publications
            </button>
            <button
              onClick={() => setActiveFilter("featured")}
              className={`px-7 py-3.5 rounded-full text-sm font-medium transition-colors ${
                activeFilter === "featured"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700"
              }`}
            >
              Publications marquantes
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPublications.map((publication) => (
            <div
              key={publication.id}
              className="flex flex-col bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div className="p-5 sm:p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span
                    className={`text-xs font-medium px-2.5 py-1 rounded-full ${typeStyle[publication.type]}`}
                  >
                    {typeLabel[publication.type]}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap">
                    {publication.year}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-900 dark:text-white leading-snug">
                  {publication.title}
                </h3>

                <p className="text-sm italic text-gray-500 dark:text-gray-400 mb-3">
                  {publication.journal}
                </p>

                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4">
                  {publication.description}
                </p>

                {publication.coAuthors && publication.coAuthors.length > 0 && (
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                    Avec {publication.coAuthors.join(", ")}
                  </p>
                )}

                <div className="flex flex-wrap gap-2 mb-6">
                  {publication.keywords.map((keyword, index) => (
                    <span
                      key={index}
                      className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>

                <div className="mt-auto">
                  {publication.link && (
                    <a
                      href={publication.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 flex items-center"
                    >
                      <FileText size={16} className="mr-1" /> Lire l'article
                      <ExternalLink size={14} className="ml-1" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
