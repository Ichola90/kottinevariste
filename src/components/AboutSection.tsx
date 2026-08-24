import React from "react";
import { Calendar, Award, Briefcase, BookOpen } from "lucide-react";
import { useTranslation } from "react-i18next";

interface CareerMilestone {
  id: number;
  period: string;
  institution: string;
  role: string;
  description: string;
}

// ⚠️ Le grade CAMES (Maître de Conférences), l'institution (UAC) et le doctorat
// (Doctorat Unique, UAC, 2016, Didactique de la Langue Anglaise) sont confirmés
// par le document de parcours transmis. L'année de promotion au grade de Maître
// de Conférences et les détails du poste de Maître Assistant restent à valider
// par Dr Kottin avant publication.
const careerMilestones: CareerMilestone[] = [
  {
    id: 1,
    period: "2025-Présent",
    institution: "Université d'Abomey-Calavi (UAC), Bénin",
    role: "Maître de Conférences des universités (CAMES), Didactique des langues (anglais)",
    description:
      "Promotion au grade CAMES de Maître de Conférences. Enseignement, recherche et encadrement en didactique de l'anglais langue étrangère (EFL), avec une expertise reconnue en ingénierie de la formation, conception de curricula et consultance auprès d'institutions éducatives et d'ONG.",
  },
  {
    id: 2,
    period: "2020-2025",
    institution: "Université d'Abomey-Calavi (UAC), Bénin",
    role: "Maître Assistant en Anglais",
    description:
      "Enseignements en Didactique de l'Anglais, Méthodologie de la Recherche et Techniques d'Expression Orale, intégrant le jeu de rôle, le théâtre-processus et l'approche par tâches (Task-Based Language Teaching) pour développer les compétences communicatives des étudiants.",
  },
  {
    id: 3,
    period: "2016",
    institution: "Université d'Abomey-Calavi (UAC), Bénin",
    role: "Doctorat Unique, Didactique de la Langue Anglaise",
    description:
      "Soutenance d'un Doctorat Unique consacré au Task-Based Language Teaching, au jeu de rôle et aux techniques dramatiques au service du développement de la compétence pragmatique en anglais langue étrangère, posant les bases d'une pédagogie créative et contextualisée.",
  },
];

const AboutSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-16 sm:py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-10 sm:gap-16">
          <div className="lg:w-2/5">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t("about.title")}
            </h2>

            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              {t("about.intro1")}
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              {t("about.intro2")}
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              {t("about.intro3")}
            </p>

            <div className="grid grid-cols-2 gap-4 sm:gap-6 mt-8">
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center">
                <div className="text-xl sm:text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                  MC
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">
                  {t("about.stats.grade")}
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center">
                <div className="text-xl sm:text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                  UAC
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">
                  {t("about.stats.institution")}
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center">
                <div className="text-xl sm:text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                  EFL
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">
                  {t("about.stats.field")}
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center">
                <div className="text-xl sm:text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                  2016
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">
                  {t("about.stats.doctorate")}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-3/5 mt-10 lg:mt-0 w-full">
            <h3 className="text-xl sm:text-2xl font-bold mb-8 text-center lg:text-left">
              {t("about.academicPath")}
            </h3>

            <div className="space-y-10">
              {careerMilestones.map((milestone) => (
                <div
                  key={milestone.id}
                  className="relative pl-8 before:absolute before:left-[7px] before:top-[6px] before:bottom-[-16px] before:w-[1px] before:bg-gray-300 dark:before:bg-gray-700 last:before:hidden"
                >
                  <div className="absolute left-0 top-1 w-3.5 h-3.5 rounded-full bg-blue-500"></div>

                  <div className="flex items-center mb-2">
                    <Calendar
                      size={16}
                      className="text-gray-500 dark:text-gray-400 mr-2 shrink-0"
                    />
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {milestone.period}
                    </span>
                  </div>

                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {milestone.role}
                  </h4>
                  <div className="flex items-center mb-2">
                    <Briefcase
                      size={16}
                      className="text-gray-500 dark:text-gray-400 mr-2 shrink-0"
                    />
                    <span className="text-gray-700 dark:text-gray-300">
                      {milestone.institution}
                    </span>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400">
                    {milestone.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center lg:text-left">
                {t("about.education")}
              </h3>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  <Award
                    size={20}
                    className="text-blue-600 dark:text-blue-400 mr-2 shrink-0"
                  />
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {t("about.degree")}
                  </h4>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-1">
                  Université d'Abomey-Calavi (UAC), 2016
                </p>

                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center mb-3">
                    <BookOpen
                      size={20}
                      className="text-blue-600 dark:text-blue-400 mr-2 shrink-0"
                    />
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {t("nav.publications")}
                    </h4>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    {t("about.publicationsLink")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
