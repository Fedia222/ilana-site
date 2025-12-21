import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logoTete from "@/assets/logo-tete.png";

const CALENDLY_URL = "https://calendly.com/ilana-sidoun/consultation-individuelle";

const navItems = [
  { label: "Accueil", path: "/" },
  { label: "Accompagnements", path: "/accompagnements" },
  { label: "Cadre et Coût", path: "/cadre-et-cout" },
  { label: "Qui suis-je ?", path: "/qui-suis-je" },
  { label: "Approches Thérapeutiques", path: "/approches-therapeutiques" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Top bar - NOT sticky (desktop only) */}
      <div className="hidden md:block border-b border-border/50 bg-background">
        <div className="container mx-auto px-6 py-3">
          <p className="text-sm text-muted-foreground text-center">
            Consultations en présentiel et par visioconférence.{" "}
            <Link
              to="/cadre-et-cout"
              className="text-taupe hover:text-foreground underline underline-offset-2 transition-colors"
            >
              En savoir plus
            </Link>
          </p>
        </div>
      </div>

      {/* Navigation - NOT sticky (desktop only) */}
      <nav className="hidden md:block border-b border-border/50 bg-background">
        <div className="container mx-auto px-6">
          <ul className="flex flex-wrap items-center justify-center gap-2 lg:gap-6 py-4">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`text-xs lg:text-sm uppercase tracking-wider transition-colors px-2 py-1 ${
                    location.pathname === item.path
                      ? "text-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Sticky header - Name, subtitle, and RDV button */}
      <header className="w-full sticky top-0 z-50 bg-background shadow-sm">
        <div className="container mx-auto px-4 md:px-6 py-3 md:py-4">
          <div className="flex items-center justify-between">
            {/* Mobile menu button */}
            <div className="md:hidden">
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Menu className="h-4 w-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-64">
                  <div className="flex items-center gap-2 mb-6">
                    <img src={logoTete} alt="Logo" className="w-8 h-8 opacity-70" />
                    <span className="font-heading text-sm text-foreground">Ilana Sidoun</span>
                  </div>
                  <nav className="flex flex-col gap-2">
                    {navItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`text-sm uppercase tracking-wider transition-colors py-2 ${
                          location.pathname === item.path
                            ? "text-foreground font-medium"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>
            </div>

            {/* Center content - shifted slightly to the right */}
            <div className="flex-1 flex justify-center pl-4 md:pl-6 md:translate-x-[57px]">
              <Link to="/" className="text-center">
                <h2 className="font-heading text-lg md:text-2xl tracking-[0.2em] md:tracking-[0.3em] text-foreground uppercase">
                  Ilana Sidoun
                </h2>
                <p className="mt-0.5 md:mt-1 text-[10px] md:text-sm text-muted-foreground tracking-wide">
                  Psychologie · Psychanalyse · TCC
                </p>
              </Link>
            </div>

            {/* RDV button */}
            <Button
              variant="hero"
              size="sm"
              asChild
              className="text-[10px] md:text-xs px-3 md:px-8 py-2 md:py-4 h-auto"
            >
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                <span className="hidden sm:inline">Prendre RDV</span>
                <span className="sm:hidden">RDV</span>
              </a>
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
