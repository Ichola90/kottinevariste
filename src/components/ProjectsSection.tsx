import React, { useState, useMemo, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import {
  ExternalLink,
  FileText,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

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
    title:
      "Fostering EFL Learners' English Language Learning through ICT: New Trends in Beninese Secondary Schools",
    description:
      "Examen des nouvelles tendances d'intégration des technologies de l'information et de la communication (TIC) dans l'enseignement de l'anglais langue étrangère au secondaire au Bénin.",
    year: "2020",
    journal:
      "Revue Internationale de Linguistique Appliquée, de Littérature et d'Éducation (RILALE), Vol. 2, N°3",
    coAuthors: ["Estelle Bankolé-Minaflinou"],
    keywords: ["TIC", "Innovation pédagogique", "Enseignement secondaire"],
    link: "https://www.rilale-uac.org/volume-2-issue-3/",
    type: "article",
    featured: false,
  },
  {
    id: 6,
    title:
      "Setting the Boundaries between Automated and Human-Created Texts in EFL Teaching and Learning in the Era of Artificial Intelligence",
    description:
      "Recherche de terrain à méthode mixte, menée auprès de 20 enseignants, 200 apprenants et 2 experts en IA, sur l'impact des outils d'intelligence artificielle (ChatGPT, Grammarly, Slick Write, Ginger) sur le développement des compétences rédactionnelles des apprenants d'anglais langue étrangère.",
    year: "2025",
    journal:
      "Revue Internationale de Linguistique Appliquée, de Littérature et d'Éducation (RILALE), Vol. 8, N°2, pp. 37-54",
    coAuthors: ["Jérémie Dovonou", "Mawumèvo Tchérak Dossou"],
    keywords: ["Intelligence artificielle", "Écriture", "EFL"],
    link: "https://www.rilale-uac.org/volume-8-issue-2/",
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
  {
    id: 8,
    title:
      "Enhancing Critical Thinking Skills of EFL Learners in Beninese Secondary Schools: Strategies and Implementation",
    description:
      "Étude de terrain à méthode mixte, combinant entretiens qualitatifs avec des enseignants d'anglais et enquêtes quantitatives auprès d'apprenants du secondaire, afin d'identifier des stratégies efficaces pour développer l'esprit critique en classe d'anglais langue étrangère au Bénin.",
    year: "2024",
    journal:
      "Edelweiss Applied Science and Technology, Vol. 8, N°6, pp. 769-781",
    coAuthors: [
      "Omolegbé Albert Koukpossi",
      "Crépin Djima Loko",
      "Innocent Sourou Koutchade",
      "Mawumèvo Tchérak Dossou",
    ],
    keywords: ["Esprit critique", "Enseignement secondaire", "Méthodes mixtes"],
    link: "https://doi.org/10.55214/25768484.v8i6.2162",
    type: "article",
    featured: true,
  },
  {
    id: 9,
    title:
      "The Impact of Teachers' Professional Training on Students' Achievement in English as a Foreign Language: A Benin Case Study",
    description:
      "Étude qualitative menée auprès de vingt enseignants d'anglais (formés et non formés) dans trois établissements publics du Bénin, examinant l'influence de la formation professionnelle des enseignants sur leur performance pédagogique et la réussite scolaire des apprenants d'EFL.",
    year: "2022",
    journal:
      "Revue Internationale de Linguistique Appliquée, de Littérature et d'Éducation (RILALE), Vol. 5, N°3, pp. 117-133",
    coAuthors: [
      "Ulrich Orlando Sèna Hindeme",
      "Pédro Marius Egounleti",
      "Innocent Sourou Koutchade",
    ],
    keywords: ["Formation des enseignants", "Performance pédagogique", "EFL"],
    link: "https://www.rilale-uac.org/wp-content/uploads/2023/01/Article-8-volume-5-numero-3-octobre-2022.docx.pdf",
    type: "article",
    featured: false,
  },
  {
    id: 10,
    title:
      "The Impact of Pronunciation Features (Vowels, Consonants, and Intonation) on the Listening Performance of Beninese EFL Beginner Learners",
    description:
      "Étude de terrain à méthode mixte, menée auprès de 172 participants, examinant l'influence de la prononciation (voyelles, consonnes, accentuation, intonation) sur la compréhension orale des apprenants débutants d'anglais langue étrangère au Bénin.",
    year: "2025",
    journal:
      "TPM – Testing, Psychometrics, Methodology in Applied Psychology, Vol. 32, N°S9, pp. 1576-1586",
    coAuthors: [
      "Ulrich Orlando Sèna Hindeme",
      "Pédro Marius Egounleti",
      "Alougba Agnès Dossavi",
    ],
    keywords: ["Prononciation", "Compréhension orale", "EFL"],
    link: "https://tpmap.org/submission/index.php/tpm/article/download/3549/2635/7661",
    type: "article",
    featured: false,
  },
  {
    id: 11,
    title:
      "The Mobility of Urban-Region Beninese EFL Teachers and its Influence on Rural Learners' Spoken English",
    description:
      "Étude portant sur la mobilité des enseignants d'anglais entre régions urbaines et rurales du Bénin et son influence sur le développement de l'expression orale des apprenants en zone rurale.",
    year: "2022",
    journal:
      "Djiboul, Revue des Arts, Communication, Lettres, Sciences Humaines et Sociales, N°003, Vol. 4",
    keywords: ["Mobilité des enseignants", "Expression orale", "EFL"],
    link: "https://djiboul.org/2022/07/16/n003_vol-4/",
    type: "article",
    featured: false,
  },
  {
    id: 12,
    title:
      "Valuing Written Assessment and Evaluation of English as a Foreign Language in Benin's Education System",
    description:
      "Étude suggérant que les enseignants d'anglais reconnaissent et accroissent davantage la valeur de l'évaluation écrite dans les cours secondaires du Bénin, afin d'encourager les apprenants dans leur apprentissage de la langue cible.",
    year: "2022",
    journal:
      "Akofena, Revue Linguistique, Lettres, Langues & Communication, Spécial N°8, Vol. 1",
    coAuthors: ["Pédro Marius Egounleti", "Martinien Toboula Zounhin"],
    keywords: ["Évaluation écrite", "Système éducatif béninois", "EFL"],
    link: "https://www.revue-akofena.com/n8_vol-1/",
    type: "article",
    featured: false,
  },
  {
    id: 13,
    title:
      "Girl Performances in EFL Learning in Benin: A Case Study of LMJF of Natitingou in the Region of Atacora",
    description:
      "Analyse comparative des performances des apprenantes d'anglais langue étrangère au Lycée Moderne des Jeunes Filles (LMJF) de Natitingou, dans une perspective d'équité et d'égalité femmes-hommes en contexte éducatif.",
    year: "2023",
    journal: "Science Journal of Education, Vol. 11, N°1, pp. 36-42",
    keywords: ["Genre", "Performances scolaires", "EFL"],
    link: "https://www.sciencepublishinggroup.com/article/10.11648/j.sjedu.20231101.16",
    type: "article",
    featured: false,
  },
  {
    id: 14,
    title:
      "Correcting Errors in Beninese EFL Classes: Case Study of some Secondary Schools",
    description:
      "Étude portant sur les pratiques de correction des erreurs dans les classes d'anglais langue étrangère au secondaire au Bénin, à travers plusieurs études de cas.",
    year: "2020",
    journal:
      "Particip'Action, Revue Interafricaine de Littérature, Linguistique et Philosophie, Vol. 12, N°1, pp. 181-195",
    keywords: ["Correction des erreurs", "Didactique de l'anglais", "EFL"],
    link: "https://particip-action.com/wp-content/uploads/2025/05/TAP-LO.pdf",
    type: "article",
    featured: false,
  },
];

const typeStyle: Record<Publication["type"], string> = {
  article: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  communication:
    "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300",
};

const ITEMS_PER_PAGE = 6;

// Construit une liste de pages avec ellipses : ex. [1, "…", 4, 5, 6, "…", 12]
function buildPageList(current: number, total: number): (number | "dots")[] {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const pages = new Set<number>([1, total, current]);
  if (current - 1 > 1) pages.add(current - 1);
  if (current + 1 < total) pages.add(current + 1);

  const sorted = Array.from(pages).sort((a, b) => a - b);
  const result: (number | "dots")[] = [];

  sorted.forEach((page, index) => {
    if (index > 0) {
      const prev = sorted[index - 1];
      if (page - prev === 2) {
        result.push(prev + 1);
      } else if (page - prev > 2) {
        result.push("dots");
      }
    }
    result.push(page);
  });

  return result;
}

const PublicationsSection: React.FC = () => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState<"all" | "featured">("all");
  const [currentPage, setCurrentPage] = useState(1);
  const sectionRef = useRef<HTMLDivElement>(null);

  const filteredPublications = useMemo(
    () =>
      activeFilter === "all"
        ? publications
        : publications.filter((publication) => publication.featured),
    [activeFilter],
  );

  const totalPages = Math.max(
    1,
    Math.ceil(filteredPublications.length / ITEMS_PER_PAGE),
  );

  const paginatedPublications = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredPublications.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredPublications, currentPage]);

  // Réinitialise la page quand le filtre change
  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter]);

  const goToPage = (page: number) => {
    const clamped = Math.min(Math.max(page, 1), totalPages);
    setCurrentPage(clamped);
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const pageList = buildPageList(currentPage, totalPages);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-16 sm:py-20 bg-white dark:bg-gray-900 scroll-mt-24"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("publications.title")}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t("publications.intro")}
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
              {t("publications.all")}
            </button>
            <button
              onClick={() => setActiveFilter("featured")}
              className={`px-7 py-3.5 rounded-full text-sm font-medium transition-colors ${
                activeFilter === "featured"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700"
              }`}
            >
              {t("publications.featured")}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {paginatedPublications.map((publication) => (
            <div
              key={publication.id}
              className="flex flex-col bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div className="p-5 sm:p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span
                    className={`text-xs font-medium px-2.5 py-1 rounded-[4px] ${typeStyle[publication.type]}`}
                  >
                    {t(`publications.type.${publication.type}`)}
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
                    {t("publications.withAuthors", {
                      authors: publication.coAuthors.join(", "),
                    })}
                  </p>
                )}

                <div className="flex flex-wrap gap-2 mb-6">
                  {publication.keywords.map((keyword, index) => (
                    <span
                      key={index}
                      className="text-xs font-medium px-2.5 py-0.5 rounded-[4px] bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
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
                      <FileText size={16} className="mr-1" />{" "}
                      {t("publications.read")}
                      <ExternalLink size={14} className="ml-1" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <nav
            aria-label={t("publications.filterAria")}
            className="mt-14 flex flex-col items-center gap-4"
          >
            <div className="flex items-center gap-2">
              <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                aria-label={t("publications.prev")}
              >
                <ChevronLeft size={18} />
              </button>

              {pageList.map((item, index) =>
                item === "dots" ? (
                  <span
                    key={`dots-${index}`}
                    className="w-10 h-10 flex items-center justify-center text-gray-400 dark:text-gray-500 select-none"
                  >
                    …
                  </span>
                ) : (
                  <button
                    key={item}
                    onClick={() => goToPage(item)}
                    aria-current={item === currentPage ? "page" : undefined}
                    className={`w-10 h-10 flex items-center justify-center rounded-full text-sm font-medium transition-all duration-200 ${
                      item === currentPage
                        ? "bg-blue-500 text-white shadow-md shadow-blue-500/30 scale-105"
                        : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`}
                  >
                    {item}
                  </button>
                ),
              )}

              <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                aria-label="Page suivante"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-600 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent transition-all duration-200"
              >
                <ChevronRight size={18} />
              </button>
            </div>

            <p className="text-xs text-gray-500 dark:text-gray-400">
              {t("publications.pagination", {
                current: currentPage,
                total: totalPages,
                count: filteredPublications.length,
              })}
            </p>
          </nav>
        )}
      </div>
    </section>
  );
};

export default PublicationsSection;
