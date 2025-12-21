import { useState } from "react";
import { GraduationCap, Heart, AlertTriangle, ChevronDown, ChevronUp } from "lucide-react";
import ilanaProfile from "@/assets/ilana-profile.png";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  const isMobile = useIsMobile();
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="about" className="py-12 md:py-28 bg-sage-light">
      <div className="container mx-auto px-4 md:px-6">

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          {/* Content */}
          <div className="opacity-0 animate-fade-up">
            <h2 className="font-heading text-2xl md:text-4xl lg:text-5xl text-foreground mb-6 md:mb-8 text-center md:text-left">
              Qui suis-je ?
            </h2>

            <div className="space-y-4 md:space-y-6 text-muted-foreground leading-relaxed text-sm md:text-base mt-6">
              <p>
                Diplômée d'un Master of Science (MSc) en psychologie clinique, psychopathologie et psychothérapie de l'Université Sigmund Freud de Vienne,
                j'accompagne des patients de tous âges dans une pratique fondée sur l'écoute, la parole et le respect
                du rythme subjectif de chacun.
              </p>
              
              {/* Mobile: Collapsible content */}
              {isMobile ? (
                <>
                  {showMore && (
                    <>
                      <p>
                        Mon parcours professionnel et universitaire a été marqué par un engagement profond en faveur de
                        l'accessibilité aux soins psychiques, en accompagnant des personnes issues de groupes marginalisés ou
                        vulnérables — notamment des personnes LGBTQIA+ et TSA. Je suis formée en TEACCH, ABA, ainsi qu'aux TCC
                        dans un contexte professionnel et éducatif.
                      </p>
                      <p>
                        Ces expériences ont nourri ma sensibilité clinique et mon intérêt pour les périodes de transition
                        développementale, telles que l'adolescence ou l'entrée dans l'âge adulte. Mon approche accorde une
                        attention particulière à la singularité de chaque parcours, au contexte social et culturel du ou des
                        patients, ainsi qu'aux nouvelles formes de souffrance psychique émergentes à l'ère numérique.
                      </p>
                      <p>Au plaisir de vous rencontrer.</p>
                      <p className="font-heading text-foreground">
                        Ilana SIDOUN,
                        <br />
                        Thérapeute et Psychanalyste Clinicienne
                      </p>
                    </>
                  )}
                  <Button
                    variant="ghost"
                    onClick={() => setShowMore(!showMore)}
                    className="w-full flex items-center justify-center gap-2 text-olive hover:text-foreground"
                  >
                    {showMore ? (
                      <>
                        Réduire <ChevronUp className="w-4 h-4" />
                      </>
                    ) : (
                      <>
                        En savoir plus <ChevronDown className="w-4 h-4" />
                      </>
                    )}
                  </Button>
                </>
              ) : (
                <>
                  <p>
                    Mon parcours professionnel et universitaire a été marqué par un engagement profond en faveur de
                    l'accessibilité aux soins psychiques, en accompagnant des personnes issues de groupes marginalisés ou
                    vulnérables — notamment des personnes LGBTQIA+ et TSA. Je suis formée en TEACCH, ABA, ainsi qu'aux TCC
                    dans un contexte professionnel et éducatif.
                  </p>
                  <p>
                    Ces expériences ont nourri ma sensibilité clinique et mon intérêt pour les périodes de transition
                    développementale, telles que l'adolescence ou l'entrée dans l'âge adulte. Mon approche accorde une
                    attention particulière à la singularité de chaque parcours, au contexte social et culturel du ou des
                    patients, ainsi qu'aux nouvelles formes de souffrance psychique émergentes à l'ère numérique.
                  </p>
                  <p>Au plaisir de vous rencontrer.</p>
                  <p className="font-heading text-foreground">
                    Ilana SIDOUN,
                    <br />
                    Thérapeute et Psychanalyste Clinicienne
                  </p>
                </>
              )}
            </div>
          </div>

          {/* Credentials */}
          <div className="space-y-4 md:space-y-6 opacity-0 animate-fade-up animation-delay-200">
            <div className="bg-background p-4 md:p-6 rounded-lg border border-border/50 shadow-soft">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-4 h-4 md:w-5 md:h-5 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-heading text-base md:text-lg text-foreground mb-1">Formation</h3>
                  <p className="text-muted-foreground text-xs md:text-sm">
                    Licence en psychologie de l'Université de Paris - René Descartes
                  </p>
                  <p className="text-muted-foreground text-xs md:text-sm mt-1">
                    Master en psychologie clinique, psychopathologie et psychothérapie mention psychologie
                    transculturelle de l'Université Sigmund Freud de Vienne
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-background p-4 md:p-6 rounded-lg border border-border/50 shadow-soft">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                  <Heart className="w-4 h-4 md:w-5 md:h-5 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-heading text-base md:text-lg text-foreground mb-1">Certifications</h3>
                  <ul className="text-muted-foreground text-xs md:text-sm space-y-1">
                    <li>• Mise en Œuvre des Stratégies d'Enseignement Comportementales et Développementales TEACCH</li>
                    <li>• Particularités sensorielles chez les adultes avec TSA</li>
                    <li>• Évaluation fonctionnelle pratique et entraînement basé sur la technique PFA-SBT</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-background p-4 md:p-6 rounded-lg border border-border/50 shadow-soft">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-4 h-4 md:w-5 md:h-5 text-destructive" />
                </div>
                <div>
                  <h3 className="font-heading text-base md:text-lg text-foreground mb-1">Informations importantes</h3>
                  <p className="text-muted-foreground text-xs md:text-sm">
                    Ne peux pas délivrer d'ordonnances de médicaments. Pratique d'accompagnement en dehors des cadres
                    médicaux réglementés.
                  </p>
                  <p className="text-destructive text-xs md:text-sm font-medium mt-2">
                    En cas d'urgence, veuillez appeler le 112.
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
