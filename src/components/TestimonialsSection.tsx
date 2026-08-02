import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  institution: string;
  text: string;
  avatar: string;
}

// ⚠️ PLACEHOLDERS — À REMPLACER PAR DR KOTTIN
// Ces témoignages sont des exemples vides à compléter avec de vrais retours
// (collègues, co-auteurs, étudiants...). Ne pas publier tel quel.
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "[Nom du collègue à ajouter]",
    role: "[Fonction à préciser]",
    institution: "[Institution à préciser]",
    text: "[Témoignage à compléter par Dr Kottin — retour d'un collègue ou co-auteur sur une collaboration de recherche]",
    avatar: `${import.meta.env.BASE_URL}images/testimonial-placeholder-1.jpg`
  },
  {
    id: 2,
    name: "[Nom de l'étudiant(e) à ajouter]",
    role: "[Niveau / filière à préciser]",
    institution: "Université d'Abomey-Calavi",
    text: "[Témoignage à compléter par Dr Kottin — retour d'un(e) étudiant(e) sur son enseignement]",
    avatar: `${import.meta.env.BASE_URL}images/testimonial-placeholder-2.jpg`
  },
  {
    id: 3,
    name: "[Nom du co-auteur à ajouter]",
    role: "[Fonction à préciser]",
    institution: "[Institution à préciser]",
    text: "[Témoignage à compléter par Dr Kottin — retour sur une publication ou communication commune]",
    avatar: `${import.meta.env.BASE_URL}images/testimonial-placeholder-3.jpg`
  }
];

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Témoignages</h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Retours de collègues, co-auteurs et étudiants sur mes travaux de recherche et mon enseignement.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="hidden sm:block absolute -top-10 -right-10 w-20 h-20 text-blue-400 dark:text-blue-500 opacity-20">
            <Quote size={80} />
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-6 sm:p-8 md:p-12 relative z-10">
            <div className="flex flex-col md:flex-row items-center text-center md:text-left">
              <div className="mb-6 md:mb-0 md:mr-8">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-4 border-blue-100 dark:border-blue-900 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <img
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                  />
                </div>
              </div>

              <div className="flex-1">
                <p className="text-gray-700 dark:text-gray-300 italic mb-6 leading-relaxed">
                  "{testimonials[currentIndex].text}"
                </p>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{testimonials[currentIndex].name}</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {testimonials[currentIndex].role} — {testimonials[currentIndex].institution}
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex
                      ? 'bg-blue-600'
                      : 'bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600'
                  }`}
                  aria-label={`Aller au témoignage ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-12 space-x-4">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Témoignage précédent"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Témoignage suivant"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;