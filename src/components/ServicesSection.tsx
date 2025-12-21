import { User, Users, Sparkles, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import ilanaProfile from "@/assets/ilana-profile.png";

const services = [
  {
    icon: User,
    title: "Thérapie individuelle",
    description:
      "Un espace sécurisé et confidentiel dédié à l'écoute et au soutien. Elle vous permet d'explorer vos difficultés personnelles, de mieux comprendre vos émotions et vos comportements, et de travailler à un mieux-être psychologique. Chaque accompagnement est adapté à votre rythme et à votre situation, dans le respect de votre singularité. Nous chercherons des solutions sur-mesure aux problématiques que vous souhaiterez aborder, tout en tenant compte de vos envies et de vos limites.",
  },
  {
    icon: Users,
    title: "Accompagnement adolescents",
    description:
      "L'adolescence est marquée par des périodes de transitions intense, notamment la puberté. Au sein de celles-ci, nous pouvons retrouver des questionnements sur l'identité, des bouleversements émotionnels, des troubles relationnels, une confiance en soi déficitaire et d'autres problématiques émergentes à l'ère du numérique pouvant engendrer des souffrances. J'accueille les adolescents dans le but de leur offrir un espace contenant et sécurisant où ils peuvent exprimer leurs préoccupations en toute confiance.",
  },
  {
    icon: Sparkles,
    title: "Gestion des émotions et comportements problèmes",
    description:
      "Un accompagnement spécialisé basé sur les théories cognitivo-comportementales pour vous aider à mieux comprendre et gérer vos émotions, identifier les mécanismes sous-jacent à vos comportements ou habitudes qui vous perturbent et développer des stratégies adaptées pour retrouver un équilibre au quotidien.",
  },
];

const TRUNCATE_LENGTH = 150;

const ServicesSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const isMobile = useIsMobile();

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="services" className="py-12 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Mobile: Portrait above Votre Psy à Issy */}
        {isMobile && (
          <div className="flex justify-center mb-8 opacity-0 animate-scale-in">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-background shadow-elevated bg-[#d4e5d4]">
              <img
                src={ilanaProfile}
                alt="Ilana Sidoun, Thérapeute et Psychanalyste Clinicienne à Issy-les-Moulineaux"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        )}

        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16 opacity-0 animate-fade-up">
          <h2 className="font-heading text-2xl md:text-4xl lg:text-5xl text-foreground">
            Votre Psy à Issy
          </h2>
          <p className="mt-4 md:mt-6 text-muted-foreground text-sm md:text-lg leading-relaxed">
            Située au coeur de la ville, j'accompagne isséens et isséennes pour que vous puissiez 
            donner du sens à ce que vous traversez, mieux vous comprendre et retrouver une paix intérieure.
          </p>
          <p className="mt-4 text-muted-foreground text-sm md:text-lg leading-relaxed">
            Chaque parcours est singulier, et la relation thérapeutique est au cœur de mon 
            engagement. Ensemble, nous construirons l'accompagnement adapté à vos besoins.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-12">
          {services.map((service, index) => {
            const isExpanded = expandedIndex === index;
            const shouldTruncate = service.description.length > TRUNCATE_LENGTH;
            const displayText = isExpanded || !shouldTruncate
              ? service.description
              : `${service.description.slice(0, TRUNCATE_LENGTH)}...`;

            return (
              <div
                key={service.title}
                className={`group p-6 md:p-8 rounded-lg bg-card border border-border/50 hover:shadow-elevated hover:scale-[1.02] hover:bg-accent/30 transition-all duration-300 cursor-pointer opacity-0 animate-fade-up`}
                style={{ animationDelay: `${(index + 1) * 150}ms` }}
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-sage-light flex items-center justify-center mb-4 md:mb-6 group-hover:bg-accent transition-colors duration-300">
                  <service.icon className="w-5 h-5 md:w-6 md:h-6 text-accent-foreground" />
                </div>
                <h3 className="font-heading text-lg md:text-2xl text-foreground mb-3 md:mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  {displayText}
                </p>
                {shouldTruncate && (
                  <button
                    onClick={() => toggleExpand(index)}
                    className="mt-3 flex items-center gap-1 text-olive hover:text-foreground transition-colors text-sm font-medium"
                  >
                    {isExpanded ? (
                      <>
                        Voir moins <ChevronUp className="w-4 h-4" />
                      </>
                    ) : (
                      <>
                        Voir la suite <ChevronDown className="w-4 h-4" />
                      </>
                    )}
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
