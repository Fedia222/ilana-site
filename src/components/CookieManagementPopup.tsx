import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { Cookie, Shield, BarChart3, Megaphone } from "lucide-react";

const COOKIE_PREFERENCES_KEY = "cookie-preferences";

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

interface CookieManagementPopupProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const defaultPreferences: CookiePreferences = {
  essential: true, // Always required
  analytics: false,
  marketing: false,
  functional: false,
};

const CookieManagementPopup = ({ open, onOpenChange }: CookieManagementPopupProps) => {
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);

  useEffect(() => {
    const saved = localStorage.getItem(COOKIE_PREFERENCES_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setPreferences({ ...defaultPreferences, ...parsed, essential: true });
      } catch {
        setPreferences(defaultPreferences);
      }
    }
  }, [open]);

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem(COOKIE_PREFERENCES_KEY, JSON.stringify(prefs));
    localStorage.setItem("cookie-consent", "customized");
    onOpenChange(false);
  };

  const handleAcceptAll = () => {
    const allAccepted: CookiePreferences = {
      essential: true,
      analytics: true,
      marketing: true,
      functional: true,
    };
    setPreferences(allAccepted);
    savePreferences(allAccepted);
  };

  const handleRefuseAll = () => {
    const allRefused: CookiePreferences = {
      essential: true, // Essential cookies cannot be refused
      analytics: false,
      marketing: false,
      functional: false,
    };
    setPreferences(allRefused);
    savePreferences(allRefused);
  };

  const handleSavePreferences = () => {
    savePreferences(preferences);
  };

  const updatePreference = (key: keyof CookiePreferences, value: boolean) => {
    if (key === "essential") return; // Essential cookies cannot be disabled
    setPreferences((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto text-xs md:text-base">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <Cookie className="h-5 w-5 text-taupe" />
            Gestion des Cookies
          </DialogTitle>
          <DialogDescription className="text-left">
            Ce site utilise des cookies pour améliorer votre expérience de navigation,
            analyser le trafic et personnaliser le contenu. Vous pouvez choisir quels
            cookies vous acceptez.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Information Section */}
          <div className="bg-muted/50 rounded-lg p-4 text-sm text-muted-foreground">
            <h4 className="font-medium text-foreground mb-2">Qu'est-ce qu'un cookie ?</h4>
            <p>
              Un cookie est un petit fichier texte stocké sur votre appareil lorsque vous
              visitez un site web. Il permet au site de mémoriser vos actions et
              préférences (connexion, langue, taille de police, etc.) pendant une période
              donnée.
            </p>
          </div>

          {/* Cookie Categories */}
          <div className="space-y-4">
            {/* Essential Cookies */}
            <div className="flex items-start justify-between p-4 border rounded-lg bg-background">
              <div className="flex gap-3">
                <Shield className="h-5 w-5 text-taupe mt-0.5 shrink-0" />
                <div className="space-y-1">
                  <Label className="text-base font-medium">Cookies Essentiels</Label>
                  <p className="text-sm text-muted-foreground">
                    Ces cookies sont nécessaires au fonctionnement du site. Ils permettent
                    la navigation et l'utilisation des fonctionnalités de base (sécurité,
                    accessibilité). Ils ne peuvent pas être désactivés.
                  </p>
                  <p className="text-xs text-muted-foreground/70 italic">
                    Durée de conservation : Session ou jusqu'à 12 mois
                  </p>
                </div>
              </div>
              <Switch checked={true} disabled className="mt-1" />
            </div>

            {/* Analytics Cookies */}
            <div className="flex items-start justify-between p-4 border rounded-lg bg-background">
              <div className="flex gap-3">
                <BarChart3 className="h-5 w-5 text-taupe mt-0.5 shrink-0" />
                <div className="space-y-1">
                  <Label className="text-base font-medium">Cookies d'Analyse</Label>
                  <p className="text-sm text-muted-foreground">
                    Ces cookies nous aident à comprendre comment les visiteurs utilisent
                    notre site en collectant des informations anonymes sur les pages
                    visitées, le temps passé et les interactions.
                  </p>
                  <p className="text-xs text-muted-foreground/70 italic">
                    Données collectées : Pages vues, durée de visite, source de trafic
                  </p>
                  <p className="text-xs text-muted-foreground/70 italic">
                    Durée de conservation : Jusqu'à 24 mois
                  </p>
                </div>
              </div>
              <Switch
                checked={preferences.analytics}
                onCheckedChange={(checked) => updatePreference("analytics", checked)}
                className="mt-1"
              />
            </div>

            {/* Marketing Cookies */}
            <div className="flex items-start justify-between p-4 border rounded-lg bg-background">
              <div className="flex gap-3">
                <Megaphone className="h-5 w-5 text-taupe mt-0.5 shrink-0" />
                <div className="space-y-1">
                  <Label className="text-base font-medium">Cookies Publicitaires</Label>
                  <p className="text-sm text-muted-foreground">
                    Ces cookies sont utilisés pour afficher des publicités pertinentes en
                    fonction de vos centres d'intérêt. Ils peuvent être partagés avec des
                    partenaires publicitaires tiers.
                  </p>
                  <p className="text-xs text-muted-foreground/70 italic">
                    Tiers concernés : Réseaux publicitaires, plateformes sociales
                  </p>
                  <p className="text-xs text-muted-foreground/70 italic">
                    Durée de conservation : Jusqu'à 13 mois
                  </p>
                </div>
              </div>
              <Switch
                checked={preferences.marketing}
                onCheckedChange={(checked) => updatePreference("marketing", checked)}
                className="mt-1"
              />
            </div>

            {/* Functional Cookies */}
            <div className="flex items-start justify-between p-4 border rounded-lg bg-background">
              <div className="flex gap-3">
                <Cookie className="h-5 w-5 text-taupe mt-0.5 shrink-0" />
                <div className="space-y-1">
                  <Label className="text-base font-medium">Cookies Fonctionnels</Label>
                  <p className="text-sm text-muted-foreground">
                    Ces cookies permettent de mémoriser vos préférences et choix
                    (langue, région, personnalisation) pour vous offrir une expérience
                    plus personnalisée.
                  </p>
                  <p className="text-xs text-muted-foreground/70 italic">
                    Durée de conservation : Jusqu'à 12 mois
                  </p>
                </div>
              </div>
              <Switch
                checked={preferences.functional}
                onCheckedChange={(checked) => updatePreference("functional", checked)}
                className="mt-1"
              />
            </div>
          </div>

          {/* Legal Information */}
          <div className="text-xs text-muted-foreground space-y-2 border-t pt-4">
            <p>
              <strong>Vos droits :</strong> Conformément au RGPD et à la loi Informatique
              et Libertés, vous disposez d'un droit d'accès, de rectification, de
              suppression et de portabilité de vos données.
            </p>
            <p>
              Pour plus d'informations sur la gestion de vos données personnelles,
              consultez notre{" "}
              <Link
                to="/politique-de-confidentialite"
                className="text-taupe hover:underline"
                onClick={() => onOpenChange(false)}
              >
                Politique de confidentialité
              </Link>
              .
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2 border-t">
          <Button
            variant="outline"
            onClick={handleRefuseAll}
            className="flex-1"
          >
            Tout refuser
          </Button>
          <Button
            variant="outline"
            onClick={handleSavePreferences}
            className="flex-1"
          >
            Enregistrer mes préférences
          </Button>
          <Button
            variant="hero"
            onClick={handleAcceptAll}
            className="flex-1"
          >
            Tout accepter
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CookieManagementPopup;
