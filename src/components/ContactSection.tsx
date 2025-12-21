import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const CALENDLY_URL = "https://calendly.com/ilana-sidoun/consultation-individuelle";

const ContactSection = () => {
  return (
    <section id="contact" className="py-12 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16 opacity-0 animate-fade-up">
          <h2 className="font-heading text-2xl md:text-4xl lg:text-5xl text-foreground">
            Prendre contact
          </h2>
          <p className="mt-4 md:mt-6 text-muted-foreground text-sm md:text-lg">
            N'hésitez pas à me contacter pour prendre rendez-vous ou pour toute 
            question concernant mes consultations.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
          <div className="text-center p-4 md:p-6 rounded-lg bg-card border border-border/50 opacity-0 animate-fade-up animation-delay-100">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-sage-light flex items-center justify-center mx-auto mb-3 md:mb-4">
              <MapPin className="w-4 h-4 md:w-5 md:h-5 text-accent-foreground" />
            </div>
            <h3 className="font-heading text-sm md:text-lg text-foreground mb-1 md:mb-2">Adresse</h3>
            <p className="text-muted-foreground text-xs md:text-sm">
              36 Avenue de la République<br />
              Issy-les-Moulineaux
            </p>
          </div>

          <div className="text-center p-4 md:p-6 rounded-lg bg-card border border-border/50 opacity-0 animate-fade-up animation-delay-200">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-sage-light flex items-center justify-center mx-auto mb-3 md:mb-4">
              <Phone className="w-4 h-4 md:w-5 md:h-5 text-accent-foreground" />
            </div>
            <h3 className="font-heading text-sm md:text-lg text-foreground mb-1 md:mb-2">Téléphone</h3>
            <p className="text-muted-foreground text-xs md:text-sm">
              +33 6 22 95 90 80
            </p>
          </div>

          <div className="text-center p-4 md:p-6 rounded-lg bg-card border border-border/50 opacity-0 animate-fade-up animation-delay-300">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-sage-light flex items-center justify-center mx-auto mb-3 md:mb-4">
              <Mail className="w-4 h-4 md:w-5 md:h-5 text-accent-foreground" />
            </div>
            <h3 className="font-heading text-sm md:text-lg text-foreground mb-1 md:mb-2">Email</h3>
            <p className="text-muted-foreground text-xs md:text-sm break-all">
              ilana.sidoun@gmail.com
            </p>
          </div>

          <div className="text-center p-4 md:p-6 rounded-lg bg-card border border-border/50 opacity-0 animate-fade-up animation-delay-400">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-sage-light flex items-center justify-center mx-auto mb-3 md:mb-4">
              <Clock className="w-4 h-4 md:w-5 md:h-5 text-accent-foreground" />
            </div>
            <h3 className="font-heading text-sm md:text-lg text-foreground mb-1 md:mb-2">Horaires</h3>
            <p className="text-muted-foreground text-xs md:text-sm">
              Lun - Ven : 9h - 20h30<br />
              Sam : Sur RDV
            </p>
          </div>
        </div>

        <div className="text-center opacity-0 animate-fade-up animation-delay-500">
          <Button variant="hero" size="lg" asChild className="text-xs md:text-sm">
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
              Prendre rendez-vous en ligne
            </a>
          </Button>
          <p className="mt-3 md:mt-4 text-xs md:text-sm text-muted-foreground">
            Consultations en cabinet ou par visioconférence
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
