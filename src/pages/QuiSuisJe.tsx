import Layout from "@/components/Layout";
import { GraduationCap, Heart, AlertTriangle, Briefcase, ExternalLink } from "lucide-react";
import ilanaProfile from "@/assets/ilana-profile.png";
import logoTete from "@/assets/logo-tete.png";

const experiences = [
  "Accompagnement en IME (Institut Médico-Éducatif) auprès d'enfants autistes",
  "Travail en FAM (Foyer d'Accueil Médicalisé) avec des adultes autistes et personnes âgées non-entendantes",
  "Suivi de public LGBTQIA+ et des troubles identitaires associés",
  "Accompagnement de jeunes en recherche d'emploi",
  "Soutien aux femmes victimes d'abus dans leurs relations",
  "Évaluation des personnes souffrant de troubles de l'estime de soi et de dysphories corporelles",
  "Mise en place de suivis en anglais et de suivis non-verbaux (pictogrammes, makaton)",
  "Élaboration d'ateliers d'art et de musico-thérapie pour enfants et adultes avec et sans handicap",
];

const QuiSuisJe = () => {
  return (
    <Layout>
      <div className="py-8 md:py-12">
        <div className="container mx-auto px-6">

          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col items-center mb-8">
              <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-background shadow-elevated mb-6 bg-[#d4e5d4]">
                <img
                  src={ilanaProfile}
                  alt="Ilana Sidoun"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground text-center">
                Qui suis-je ?
              </h1>
              <p className="mt-4 text-muted-foreground text-center text-sm md:text-base">
                Ilana SIDOUN
              </p>
              <p className="text-muted-foreground text-center text-sm md:text-base">
                Thérapeute et Psychanalyste Clinicienne
              </p>
            </div>

            {/* Parcours et expériences */}
            <div className="bg-background p-6 md:p-10 rounded-lg mb-8 border border-border/50 shadow-soft">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-5 h-5 text-accent-foreground" />
                </div>
                <h2 className="font-heading text-xl md:text-2xl text-foreground">Parcours et expériences</h2>
              </div>
              
              {/* Grille de bulles */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {experiences.map((exp, index) => {
                  const colors = [
                    'bg-sage-light',
                    'bg-accent/50',
                    'bg-olive/20',
                    'bg-taupe/15',
                    'bg-sage-light',
                    'bg-accent/50',
                    'bg-olive/20',
                    'bg-taupe/15',
                  ];
                  return (
                    <div
                      key={index}
                      className={`${colors[index]} px-5 py-4 rounded-2xl text-foreground text-sm md:text-base hover:scale-[1.02] hover:shadow-md transition-all duration-300 text-center`}
                    >
                      {exp}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Médoucine link */}
            <div className="mt-6 text-center">
              <p className="text-muted-foreground text-sm md:text-base">
                Vous pouvez également me retrouver sur Médoucine en{" "}
                <a
                  href="https://www.medoucine.com/consultation/issy-les-moulineaux/ilana-sidoun/22717"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-olive hover:text-foreground transition-colors underline inline-flex items-center gap-1"
                >
                  cliquant ici
                  <ExternalLink className="w-3 h-3" />
                </a>
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-background p-6 rounded-lg border border-border/50 shadow-soft">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg text-foreground mb-2">Formation</h3>
                    <p className="text-muted-foreground text-sm">
                      Licence en psychologie de l'Université de Paris - René Descartes
                    </p>
                    <p className="text-muted-foreground text-sm mt-1">
                      Master en psychologie clinique, psychopathologie et psychothérapie mention 
                      psychologie transculturelle de l'Université Sigmund Freud de Vienne
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-background p-6 rounded-lg border border-border/50 shadow-soft">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <Heart className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg text-foreground mb-2">Certifications</h3>
                    <ul className="text-muted-foreground text-sm space-y-1">
                      <li>• Stratégies d'Enseignement TEACCH</li>
                      <li>• Particularités sensorielles chez les adultes avec TSA</li>
                      <li>• Évaluation fonctionnelle PFA-SBT</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-background p-6 rounded-lg border border-border/50 shadow-soft">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-5 h-5 text-destructive" />
                </div>
                <div>
                  <h3 className="font-heading text-lg text-foreground mb-2">Informations importantes</h3>
                  <p className="text-muted-foreground text-sm">
                    Ne peux pas délivrer d'ordonnances de médicaments. Pratique d'accompagnement 
                    en dehors des cadres médicaux réglementés.
                  </p>
                  <p className="text-destructive text-sm font-medium mt-2">
                    En cas d'urgence, veuillez appeler le 112.
                  </p>
                </div>
              </div>
            </div>

            {/* Logo at bottom */}
            <div className="flex justify-center mt-12">
              <img src={logoTete} alt="Logo Ilana Sidoun" className="w-16 h-16 md:w-20 md:h-20 opacity-80" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default QuiSuisJe;
