import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Cookie } from "lucide-react";
import CookieManagementPopup from "./CookieManagementPopup";

const COOKIE_CONSENT_KEY = "cookie-consent";

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setShowBanner(false);
  };

  const handleRefuse = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "refused");
    setShowBanner(false);
  };

  const handlePopupClose = (open: boolean) => {
    setPopupOpen(open);
    // If popup was closed and consent was set, hide banner
    if (!open && localStorage.getItem(COOKIE_CONSENT_KEY)) {
      setShowBanner(false);
    }
  };

  if (!showBanner) return null;

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background border-t border-border shadow-elevated animate-in slide-in-from-bottom-5 duration-300">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <Cookie className="h-5 w-5 text-taupe shrink-0 hidden sm:block" />
              <p className="text-sm text-muted-foreground">
                Ce site utilise des cookies pour améliorer votre expérience.{" "}
                <button
                  onClick={() => setPopupOpen(true)}
                  className="text-taupe hover:underline font-medium"
                >
                  Personnaliser
                </button>
              </p>
            </div>
            <div className="flex gap-3 shrink-0">
              <Button
                variant="outline"
                size="sm"
                onClick={handleRefuse}
                className="text-xs"
              >
                Refuser
              </Button>
              <Button
                variant="hero"
                size="sm"
                onClick={handleAccept}
                className="text-xs"
              >
                Accepter
              </Button>
            </div>
          </div>
        </div>
      </div>

      <CookieManagementPopup open={popupOpen} onOpenChange={handlePopupClose} />
    </>
  );
};

export default CookieConsent;
