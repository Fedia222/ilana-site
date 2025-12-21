import { Button } from "@/components/ui/button";
import ilanaProfile from "@/assets/ilana-profile.png";
import logoTete from "@/assets/logo-tete.png";

const CALENDLY_URL = "https://calendly.com/ilana-sidoun/consultation-individuelle";

const HeroSection = () => {
  return (
    <section id="hero" className="bg-hero py-10 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        {/* Logo centered - mobile only */}
        <div className="flex justify-center mb-8 md:hidden">
          <img src={logoTete} alt="Logo Ilana Sidoun" className="w-16 h-16 opacity-80" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text content */}
          <div className="opacity-0 animate-fade-up order-1 md:order-1">
            <h1 className="font-heading text-2xl md:text-5xl lg:text-6xl text-foreground leading-tight text-balance">
              Offrez-vous un espace pour mieux vous comprendre.
            </h1>
            <p className="mt-4 md:mt-8 text-sm md:text-lg text-muted-foreground leading-relaxed max-w-xl">
              Consulter c'est un premier pas vers le mieux-être. Dès maintenant réservez vos 
              thérapies individuelles personnalisées basées sur une approche intégrative avec 
              une thérapeute diplômée.
            </p>
            <div className="mt-6 md:mt-10">
              <Button variant="hero" size="lg" asChild className="text-xs md:text-sm">
                <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                  Prendre rendez-vous
                </a>
              </Button>
            </div>
          </div>

          {/* Portrait - desktop only */}
          <div className="hidden md:flex justify-center md:justify-end opacity-0 animate-scale-in animation-delay-200">
            <div className="relative">
              <div className="w-96 h-96 rounded-full overflow-hidden border-8 border-background shadow-elevated bg-[#d4e5d4]">
                <img
                  src={ilanaProfile}
                  alt="Ilana Sidoun, Thérapeute et Psychanalyste Clinicienne à Issy-les-Moulineaux"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
