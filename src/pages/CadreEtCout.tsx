import Layout from "@/components/Layout";
import { MapPin, Euro, CheckCircle, Clock, CreditCard, Train, Mail, Phone, Video, Bus, ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoTete from "@/assets/logo-tete.png";
import { useState } from "react";

const CALENDLY_URL = "https://calendly.com/ilana-sidoun/consultation-individuelle";

const cabinetImages = [
  { src: "/images/cabinet-1.jpg", alt: "Entrée du cabinet" },
  { src: "/images/cabinet-2.jpg", alt: "Salle de consultation" },
  { src: "/images/cabinet-3.jpg", alt: "Plaque du cabinet" },
];

const CadreEtCout = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? cabinetImages.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev === cabinetImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <Layout>
      <div className="py-8 md:py-12">
        <div className="container mx-auto px-6">

          <div className="max-w-5xl mx-auto">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-8 text-center">
              Cadre et Coût
            </h1>

            {/* Avantages du suivi thérapeutique - NOW FIRST */}
            <div className="mt-8 bg-sage-light p-6 md:p-10 rounded-lg">
              <h2 className="font-heading text-xl md:text-2xl text-foreground mb-6 text-center">
                Les avantages d'un suivi thérapeutique
              </h2>
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-olive flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground text-sm md:text-base">
                    Un espace d'écoute bienveillant et sans jugement
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-olive flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground text-sm md:text-base">
                    Une meilleure compréhension de vos émotions et comportements
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-olive flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground text-sm md:text-base">
                    Des outils concrets pour gérer le stress et l'anxiété
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-olive flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground text-sm md:text-base">
                    Un accompagnement adapté à votre rythme et vos besoins
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-olive flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground text-sm md:text-base">
                    Un travail en profondeur sur les causes de vos difficultés
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-olive flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground text-sm md:text-base">
                    Une confidentialité absolue de vos échanges
                  </p>
                </div>
              </div>
            </div>
            
            {/* Grid: Lieu d'accueil + Tarif side by side */}
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              {/* Lieu d'accueil */}
              <div className="bg-background p-6 md:p-8 rounded-lg border border-border/50 shadow-soft">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <h2 className="font-heading text-xl md:text-2xl text-foreground">Lieu d'accueil</h2>
                </div>
                <div className="space-y-4 text-muted-foreground text-sm md:text-base">
                  <p>
                    Je vous accueille dans un cabinet chaleureux et confidentiel situé au :
                  </p>
                  <p className="font-medium text-foreground">
                    36 avenue de la République<br />
                    92130 Issy-les-Moulineaux
                  </p>
                  <p>
                    L'espace est pensé pour favoriser un climat de confiance et de sérénité, 
                    essentiel au travail thérapeutique.
                  </p>
                  
                  <div className="flex items-start gap-2 pt-2">
                    <Train className="w-4 h-4 text-olive flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-foreground">Transports en commun</p>
                      <p>Métro Ligne 12 - Arrêt Mairie d'Issy</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Bus className="w-4 h-4 text-olive flex-shrink-0 mt-1" />
                    <div>
                      <p>Bus 123, 169, 190, 290, 323</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tarif */}
              <div className="bg-background p-6 md:p-8 rounded-lg border border-border/50 shadow-soft">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                    <Euro className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <h2 className="font-heading text-xl md:text-2xl text-foreground">Tarif</h2>
                </div>
                <div className="text-center mb-6">
                  <span className="font-heading text-2xl md:text-3xl text-foreground">60€</span>
                  <span className="text-muted-foreground ml-2 text-sm md:text-base">/ séance</span>
                </div>
                <div className="space-y-3 text-muted-foreground text-sm md:text-base">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>Durée : 45 à 50 minutes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CreditCard className="w-4 h-4" />
                    <span>Paiement : espèces, virement, Revolut, Sumeria</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Visioconférence - below Lieu d'accueil */}
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-background p-6 md:p-8 rounded-lg border border-border/50 shadow-soft">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                    <Video className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <h2 className="font-heading text-xl md:text-2xl text-foreground">Visioconférence</h2>
                </div>
                <div className="space-y-4 text-muted-foreground text-sm md:text-base">
                  <p>
                    Les consultations sont également possibles <strong className="text-foreground">par visioconférence</strong>{" "}
                    pour ceux qui le souhaitent ou ne peuvent se déplacer.
                  </p>
                  <p>
                    Pour prendre rendez-vous en visioconférence, merci de me contacter directement :
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-olive" />
                      <a href="tel:+33622959080" className="text-foreground hover:text-taupe transition-colors">
                        +33 6 22 95 90 80 (SMS)
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-olive" />
                      <a href="mailto:ilana.sidoun@gmail.com" className="text-foreground hover:text-taupe transition-colors">
                        ilana.sidoun@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Plan d'accès - small, below Tarif */}
              <div className="bg-background p-4 md:p-6 rounded-lg border border-border/50 shadow-soft">
                <h3 className="font-heading text-lg text-foreground mb-4 text-center">
                  Plan d'accès
                </h3>
                <div className="aspect-video rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2627.5071147339897!2d2.270127776561714!3d48.82302057132832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67ae8d3b8d5e7%3A0x8a3a2e3b5c8f9d0a!2s36%20Avenue%20de%20la%20R%C3%A9publique%2C%2092130%20Issy-les-Moulineaux!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Plan d'accès au cabinet"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Cabinet photos gallery */}
            <div className="mt-12">
              <h2 className="font-heading text-xl md:text-2xl text-foreground mb-6 text-center">
                Le cabinet
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                {cabinetImages.map((image, index) => (
                  <div
                    key={index}
                    className="aspect-[4/3] rounded-lg overflow-hidden shadow-soft cursor-pointer"
                    onClick={() => openLightbox(index)}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12 text-center">
              <Button variant="hero" size="lg" asChild>
                <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                  Prendre rendez-vous
                </a>
              </Button>
            </div>

            {/* Logo at bottom */}
            <div className="flex justify-center mt-12">
              <img src={logoTete} alt="Logo Ilana Sidoun" className="w-16 h-16 md:w-20 md:h-20 opacity-80" />
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            aria-label="Fermer"
          >
            <X className="w-8 h-8" />
          </button>
          
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-4 text-white hover:text-gray-300 transition-colors z-10"
            aria-label="Image précédente"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          
          <img
            src={cabinetImages[currentImageIndex].src}
            alt={cabinetImages[currentImageIndex].alt}
            className="max-w-[90vw] max-h-[85vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-4 text-white hover:text-gray-300 transition-colors z-10"
            aria-label="Image suivante"
          >
            <ChevronRight className="w-10 h-10" />
          </button>
          
          <div className="absolute bottom-4 text-white text-sm">
            {currentImageIndex + 1} / {cabinetImages.length}
          </div>
        </div>
      )}
    </Layout>
  );
};

export default CadreEtCout;
