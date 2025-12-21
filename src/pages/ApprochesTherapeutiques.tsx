import Layout from "@/components/Layout";
import { Brain, Lightbulb, Target, Users, MessageCircle, Repeat } from "lucide-react";
import logoTete from "@/assets/logo-tete.png";

const ApprochesTherapeutiques = () => {
  return (
    <Layout>
      <div className="py-12 md:py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <img 
                src={logoTete} 
                alt="Logo Ilana Sidoun" 
                className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-6 opacity-80"
              />
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
                Approches Thérapeutiques
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
                Mon approche intégrative combine les fondements de la psychanalyse avec les 
                outils pratiques des thérapies cognitivo-comportementales.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
              {/* Psychanalyse */}
              <div className="bg-background p-6 md:p-8 rounded-lg border border-border/50 shadow-soft">
                <h2 className="font-heading text-xl md:text-2xl text-foreground mb-6 flex items-center gap-3">
                  <Brain className="w-6 h-6 text-taupe" />
                  La Psychanalyse
                </h2>
                <div className="space-y-6">
                  <div className="border-l-2 border-taupe pl-4">
                    <div className="flex items-start gap-3 mb-2">
                      <MessageCircle className="w-5 h-5 text-olive flex-shrink-0 mt-0.5" />
                      <h3 className="font-heading text-base md:text-lg text-foreground">L'écoute et la parole libre</h3>
                    </div>
                    <p className="text-muted-foreground text-sm md:text-base ml-8">
                      La psychanalyse offre un espace où la parole peut se déployer librement, 
                      sans jugement. Cette écoute attentive permet d'accéder à des contenus 
                      inconscients qui influencent nos comportements et nos émotions.
                    </p>
                  </div>

                  <div className="border-l-2 border-taupe pl-4">
                    <div className="flex items-start gap-3 mb-2">
                      <Lightbulb className="w-5 h-5 text-olive flex-shrink-0 mt-0.5" />
                      <h3 className="font-heading text-base md:text-lg text-foreground">La compréhension des mécanismes inconscients</h3>
                    </div>
                    <p className="text-muted-foreground text-sm md:text-base ml-8">
                      En explorant votre histoire personnelle et vos expériences passées, 
                      nous pouvons identifier les schémas répétitifs et les blocages qui 
                      entravent votre épanouissement actuel.
                    </p>
                  </div>

                  <div className="border-l-2 border-taupe pl-4">
                    <div className="flex items-start gap-3 mb-2">
                      <Users className="w-5 h-5 text-olive flex-shrink-0 mt-0.5" />
                      <h3 className="font-heading text-base md:text-lg text-foreground">La relation thérapeutique</h3>
                    </div>
                    <p className="text-muted-foreground text-sm md:text-base ml-8">
                      Le lien qui se crée entre le patient et le thérapeute constitue un 
                      outil thérapeutique majeur. Cette relation de confiance permet 
                      d'expérimenter de nouveaux modes relationnels.
                    </p>
                  </div>
                </div>
              </div>

              {/* TCC */}
              <div className="bg-background p-6 md:p-8 rounded-lg border border-border/50 shadow-soft">
                <h2 className="font-heading text-xl md:text-2xl text-foreground mb-6 flex items-center gap-3">
                  <Target className="w-6 h-6 text-taupe" />
                  L'Approche TCC
                </h2>
                <p className="text-muted-foreground mb-6 text-sm md:text-base">
                  Les Thérapies Cognitivo-Comportementales
                </p>
                <div className="space-y-6">
                  <div className="border-l-2 border-olive pl-4">
                    <div className="flex items-start gap-3 mb-2">
                      <Brain className="w-5 h-5 text-taupe flex-shrink-0 mt-0.5" />
                      <h3 className="font-heading text-base md:text-lg text-foreground">L'identification des pensées automatiques</h3>
                    </div>
                    <p className="text-muted-foreground text-sm md:text-base ml-8">
                      Les TCC permettent de repérer les pensées négatives automatiques 
                      qui génèrent de l'anxiété ou de la tristesse, et d'apprendre à 
                      les remettre en question de manière rationnelle.
                    </p>
                  </div>

                  <div className="border-l-2 border-olive pl-4">
                    <div className="flex items-start gap-3 mb-2">
                      <Repeat className="w-5 h-5 text-taupe flex-shrink-0 mt-0.5" />
                      <h3 className="font-heading text-base md:text-lg text-foreground">La modification des comportements</h3>
                    </div>
                    <p className="text-muted-foreground text-sm md:text-base ml-8">
                      En comprenant le lien entre pensées, émotions et comportements, 
                      vous pouvez progressivement modifier les réactions inadaptées 
                      et développer des réponses plus saines.
                    </p>
                  </div>

                  <div className="border-l-2 border-olive pl-4">
                    <div className="flex items-start gap-3 mb-2">
                      <Target className="w-5 h-5 text-taupe flex-shrink-0 mt-0.5" />
                      <h3 className="font-heading text-base md:text-lg text-foreground">Des outils pratiques et concrets</h3>
                    </div>
                    <p className="text-muted-foreground text-sm md:text-base ml-8">
                      Les TCC proposent des exercices et des techniques que vous pouvez 
                      appliquer au quotidien : relaxation, exposition progressive, 
                      restructuration cognitive, gestion du stress.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Approche intégrative */}
            <div className="mt-12 bg-sage-light p-6 md:p-10 rounded-lg text-center">
              <h2 className="font-heading text-xl md:text-2xl text-foreground mb-4">
                Une approche intégrative
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto text-sm md:text-base">
                En combinant ces deux approches, je propose un accompagnement sur mesure qui 
                s'adapte à vos besoins spécifiques. La psychanalyse permet un travail en 
                profondeur sur les causes de vos difficultés, tandis que les TCC offrent des 
                outils concrets pour gérer les symptômes au quotidien.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ApprochesTherapeutiques;
