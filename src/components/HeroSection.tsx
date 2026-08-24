import React, { useEffect, useRef, useState } from "react";
import { ArrowDown, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

const HeroSection: React.FC = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // déclenche les animations d'entrée après le premier rendu
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const handlePointerMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    // position relative au centre, normalisée entre -1 et 1
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setPointer({ x, y });
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      onMouseMove={handlePointerMove}
      className="hero-kottin relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800"
    >
      {/* Formes en fond, avec parallaxe légère au mouvement de souris */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-16 -left-10 w-72 h-72 sm:w-96 sm:h-96 rounded-full blur-3xl opacity-20 bg-blue-400 dark:bg-blue-600 mix-blend-multiply dark:mix-blend-soft-light transition-transform duration-300 ease-out motion-reduce:!transform-none"
        style={{
          transform: `translate(${pointer.x * 14}px, ${pointer.y * 10}px)`,
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 -right-16 w-80 h-80 sm:w-[28rem] sm:h-[28rem] rounded-full blur-3xl opacity-20 bg-indigo-400 dark:bg-indigo-600 mix-blend-multiply dark:mix-blend-soft-light transition-transform duration-300 ease-out motion-reduce:!transform-none"
        style={{
          transform: `translate(${pointer.x * -18}px, ${pointer.y * 14}px)`,
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/3 w-64 h-64 rounded-full blur-3xl opacity-20 bg-purple-400 dark:bg-purple-600 mix-blend-multiply dark:mix-blend-soft-light transition-transform duration-300 ease-out motion-reduce:!transform-none"
        style={{
          transform: `translate(${pointer.x * 10}px, ${pointer.y * -8}px)`,
        }}
      />

      {/* Filigrane : lignes de cahier discrètes, ancrage thématique (pédagogie) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04] dark:opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, transparent, transparent 42px, currentColor 43px)",
        }}
      />

      <div className="container relative mx-auto px-4 sm:px-6">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-8">
          {/* Colonne texte */}
          <div className="lg:w-1/2 w-full">
            <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
              <h1
                className={`reveal reveal-2 ${mounted ? "is-in" : ""} font-display text-4xl sm:text-5xl md:text-6xl lg:text-[3.2rem] font-medium leading-[1.05] text-gray-900 dark:text-white mb-6 relative`}
              >
                <span className="block">{t("hero.title")}</span>
                <span className="relative inline-block bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
                  {t("hero.name")}
                  <span
                    aria-hidden
                    className="hand-note absolute -top-3 sm:-top-3 left-[92%] sm:left-full sm:ml-3 whitespace-nowrap text-base sm:text-lg text-rose-500 dark:text-rose-400 rotate-[-6deg] select-none"
                  >
                    {t("hero.role")}
                  </span>
                </span>
              </h1>

              <p
                className={`reveal reveal-3 ${mounted ? "is-in" : ""} text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4`}
              >
               
                <span className="underline-draw relative inline-block font-medium text-gray-900 dark:text-white">
                  {t("hero.description")}
                  <svg
                    aria-hidden
                    className="underline-svg absolute left-0 -bottom-1 w-full h-2"
                    viewBox="0 0 200 10"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M2 7 C 40 2, 80 9, 120 5 S 180 3, 198 6"
                      fill="none"
                      stroke="#6366F1"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>{" "}
                &middot; {t("hero.specialty")}
              </p>
              {/* 
              <p
                className={`reveal reveal-3 ${mounted ? "is-in" : ""} text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-9`}
              >
                Enseignant-chercheur, ingénieur de la formation et encadreur
                scientifique, spécialiste du Task-Based Language Teaching, du
                jeu de rôle et des techniques dramatiques au service de la
                compétence pragmatique, de l&apos;ingénierie didactique et de
                l&apos;innovation pédagogique.
              </p> */}

              <div
                className={`reveal reveal-4 ${mounted ? "is-in" : ""} flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-3 sm:gap-4`}
              >
                <a
                  href="#projects"
                  className="btn-magnetic group w-full sm:w-auto text-center px-7 py-3.5 rounded-full font-medium bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg hover:shadow-xl transition-all"
                >
                  {t("hero.ctaProjects")}
                </a>
                <a
                  href="#contact"
                  className="btn-magnetic w-full sm:w-auto inline-flex items-center justify-center gap-2 text-center px-7 py-3.5 rounded-full font-medium border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
                >
                  <Mail size={17} />
                  {t("hero.ctaContact")}
                </a>
              </div>
            </div>
          </div>

          {/* Colonne portrait */}
          <div
            className={`reveal reveal-2 ${mounted ? "is-in" : ""} lg:w-1/2 flex justify-center w-full`}
          >
            <div className="relative w-full max-w-xs sm:max-w-sm">
              {/* Anneau pointillé rotatif, façon tampon institutionnel */}
              <svg
                aria-hidden
                className="badge-spin absolute -inset-4 sm:-inset-6 w-[calc(100%+2rem)] h-[calc(100%+2rem)] sm:w-[calc(100%+3rem)] sm:h-[calc(100%+3rem)] text-indigo-500 dark:text-indigo-400"
                viewBox="0 0 200 200"
              >
                <defs>
                  <path
                    id="badgeCircle"
                    d="M 100,100 m -92,0 a 92,92 0 1,1 184,0 a 92,92 0 1,1 -184,0"
                  />
                </defs>
                <circle
                  cx="100"
                  cy="100"
                  r="92"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeDasharray="1 7"
                  strokeLinecap="round"
                />
                <text
                  fontSize="7"
                  letterSpacing="2.5"
                  fill="currentColor"
                  className="font-medium uppercase"
                >
                  <textPath href="#badgeCircle" startOffset="2%">
                    Dr &middot; KOTTIN &middot; Assogba &middot; Evariste,
                    &middot; Maître &middot; de &middot; Conférences &middot;
                    des &middot; Universités &middot; (CAMES) &middot;
                  </textPath>
                </text>
              </svg>

              <div className="relative rounded-full p-1.5 bg-gradient-to-br from-blue-500/40 via-transparent to-indigo-600/30">
                <img
                  src={`${import.meta.env.BASE_URL}images/kottin-evariste.png`}
                  alt="Dr KOTTIN Assogba Evariste"
                  width={384}
                  height={384}
                  className="rounded-full w-full aspect-square object-cover border-4 border-white dark:border-gray-900 shadow-2xl shadow-indigo-900/10"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Indicateur de défilement */}
        <a
          href="#projects"
          aria-label={t("hero.scrollToPublications")}
          className={`reveal reveal-4 ${mounted ? "is-in" : ""} hidden md:flex absolute bottom-2 left-1/2 -translate-x-1/2 flex-col items-center gap-1.5 text-gray-400 dark:text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors`}
        >
          <span className="text-[10px] tracking-[0.2em] uppercase">
            {t("hero.scroll")}
          </span>
          <ArrowDown size={18} className="scroll-bounce" />
        </a>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,450;9..144,560&family=Caveat:wght@600&display=swap');

        .font-display { font-family: 'Fraunces', 'Georgia', serif; font-optical-sizing: auto; }
        .hand-note { font-family: 'Caveat', cursive; }

        .reveal {
          opacity: 0;
          transform: translateY(18px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .reveal.is-in { opacity: 1; transform: translateY(0); }
        .reveal-1.is-in { transition-delay: 0.05s; }
        .reveal-2.is-in { transition-delay: 0.15s; }
        .reveal-3.is-in { transition-delay: 0.25s; }
        .reveal-4.is-in { transition-delay: 0.4s; }

        .underline-svg path {
          stroke-dasharray: 260;
          stroke-dashoffset: 260;
          animation: drawLine 0.9s ease-out 0.75s forwards;
        }
        @keyframes drawLine { to { stroke-dashoffset: 0; } }

        .hand-note {
          opacity: 0;
          transform: rotate(-6deg) scale(0.85);
          animation: notePop 0.5s cubic-bezier(0.22, 1, 0.36, 1) 1.05s forwards;
        }
        @keyframes notePop {
          to { opacity: 1; transform: rotate(-6deg) scale(1); }
        }

        .badge-spin { animation: badgeSpin 32s linear infinite; transition: animation-play-state 0.2s; }
        .relative:hover > .badge-spin { animation-play-state: paused; }

        @keyframes badgeSpin { to { transform: rotate(360deg); } }

        .scroll-bounce { animation: scrollBounce 1.8s ease-in-out infinite; }
        @keyframes scrollBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }

        .btn-magnetic { transition: transform 0.25s ease, box-shadow 0.25s ease, opacity 0.25s ease; }
        .btn-magnetic:hover { transform: translateY(-2px) scale(1.015); opacity: 0.95; }
        .btn-magnetic:active { transform: translateY(0) scale(0.98); }

        @media (prefers-reduced-motion: reduce) {
          .reveal, .underline-svg path, .hand-note, .badge-spin, .scroll-bounce, .btn-magnetic {
            animation: none !important;
            transition: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
