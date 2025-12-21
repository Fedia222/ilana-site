import { useState } from "react";
import { Link } from "react-router-dom";
import logoTete from "@/assets/logo-tete.png";
import CookieManagementPopup from "./CookieManagementPopup";

const Footer = () => {
  const [cookiePopupOpen, setCookiePopupOpen] = useState(false);

  return (
    <>
      <footer className="py-8 md:py-12 bg-foreground text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <img 
              src={logoTete} 
              alt="Logo Ilana Sidoun" 
              className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 opacity-70 invert"
            />
            <h3 className="font-heading text-lg md:text-xl tracking-[0.2em] uppercase mb-1 md:mb-2">
              Ilana Sidoun
            </h3>
            <p className="text-primary-foreground/70 text-xs md:text-sm mb-4 md:mb-6">
              Thérapeute et Psychanalyste Clinicienne à Issy-les-Moulineaux
            </p>
            <div className="flex flex-wrap justify-center gap-3 md:gap-6 text-xs md:text-sm text-primary-foreground/60">
              <Link to="/mentions-legales" className="hover:text-primary-foreground transition-colors">
                Mentions légales
              </Link>
              <span className="hidden md:inline">|</span>
              <Link to="/politique-de-confidentialite" className="hover:text-primary-foreground transition-colors">
                Politique de confidentialité
              </Link>
              <span className="hidden md:inline">|</span>
              <button 
                onClick={() => setCookiePopupOpen(true)}
                className="hover:text-primary-foreground transition-colors"
              >
                Gestion des cookies
              </button>
            </div>
            <p className="mt-4 md:mt-6 text-[10px] md:text-xs text-primary-foreground/50">
              © {new Date().getFullYear()} Ilana Sidoun. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
      
      <CookieManagementPopup 
        open={cookiePopupOpen} 
        onOpenChange={setCookiePopupOpen} 
      />
    </>
  );
};

export default Footer;
