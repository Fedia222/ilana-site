import Layout from "@/components/Layout";
import { User, Users, Heart, Brain, Smile, Shield, Globe, Home, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoTete from "@/assets/logo-tete.png";

const CALENDLY_URL = "https://calendly.com/ilana-sidoun/consultation-individuelle";

const publics = [
  { icon: User, label: "Problématiques adultes" },
  { icon: Users, label: "Enfants et adolescents" },
  { icon: Heart, label: "Personnes LGBTQIA+" },
  { icon: Brain, label: "Troubles neurodéveloppementaux" },
  { icon: Smile, label: "Jeunes en difficultés" },
  { icon: Shield, label: "Victimes d'abus ou de violences relationnelles" },
];

const Accompagnements = () => {
  return (
    <Layout>
      <div className="py-8 md:py-12">
        <div className="container mx-auto px-6">
          {/* Logo centered */}
          <div className="flex justify-center mb-8">
            <img src={logoTete} alt="Logo Ilana Sidoun" className="w-16 h-16 md:w-20 md:h-20 opacity-80" />
          </div>

          <div className="max-w-4xl mx-auto">
            <h1 className="font-heading text-2xl md:text-4xl lg:text-5xl text-foreground mb-8 text-center">
              <span className="block">Pas de jugement,</span>
              <span className="block">Pas d'à priori,</span>
              <span className="block">Pas d'opinions reçues</span>
            </h1>

            <div className="bg-sage-light p-6 md:p-10 rounded-lg mb-12">
              <div className="space-y-4 text-muted-foreground leading-relaxed text-sm md:text-base">
                <p>
                  Chaque personne qui pousse la porte de mon cabinet est unique, avec son histoire, 
                  ses questionnements et ses ressources propres. C'est pourquoi je construis un espace 
                  thérapeutique sur-mesure, adapté à chaque patient.
                </p>
                <p>
                  Mon approche repose sur l'écoute active, le respect du rythme de chacun et 
                  l'absence totale de jugement. Ensemble, nous créons un cadre sécurisant où 
                  vous pouvez explorer vos pensées, vos émotions et vos comportements en toute liberté.
                </p>
                <p>
                  Que vous traversiez une période de crise, que vous cherchiez à mieux vous comprendre 
                  ou que vous souhaitiez simplement un espace pour vous exprimer, je vous accompagne 
                  avec bienveillance et professionnalisme.
                </p>
              </div>
            </div>

            {/* English consultations banner */}
            <div className="bg-olive/10 border-2 border-olive/30 p-6 md:p-8 rounded-lg mb-6">
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-olive/20 flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 md:w-7 md:h-7 text-olive" />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="font-heading text-lg md:text-xl text-foreground mb-1">
                    Consultations disponibles en anglais
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base">
                    All sessions can be conducted entirely in English.
                  </p>
                </div>
              </div>
            </div>

            {/* Home visits banner */}
            <div className="bg-accent/30 border-2 border-accent/50 p-6 md:p-8 rounded-lg mb-12">
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-accent/40 flex items-center justify-center flex-shrink-0">
                  <Home className="w-6 h-6 md:w-7 md:h-7 text-accent-foreground" />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="font-heading text-lg md:text-xl text-foreground mb-1">
                    Visites à domicile possibles
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base">
                    Uniquement pour les personnes âgées ne pouvant se déplacer ou les personnes souffrant de TSA avec troubles du comportement. Pour toute demande, veuillez me contacter au <a href="tel:+33622959080" className="text-foreground hover:underline font-medium">06 22 95 90 80</a>.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="font-heading text-xl md:text-2xl text-foreground mb-8 text-center">
              Publics accompagnés
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {publics.map((item, index) => (
                <div 
                  key={index}
                  className="bg-background p-5 md:p-6 rounded-lg border border-border/50 shadow-soft flex items-center gap-4"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <p className="text-foreground text-sm md:text-base font-medium">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-12 text-center">
              <Button variant="hero" size="lg" asChild>
                <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                  Prendre rendez-vous
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Accompagnements;
