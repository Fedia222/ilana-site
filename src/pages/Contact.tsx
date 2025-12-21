import Layout from "@/components/Layout";
import ContactSection from "@/components/ContactSection";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoTete from "@/assets/logo-tete.png";

const Contact = () => {
  const handleDownload = (imagePath: string, fileName: string) => {
    const link = document.createElement('a');
    link.href = imagePath;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Layout>
      <div className="pt-8">
        {/* Logo centered */}
        <div className="flex justify-center mb-4">
          <img src={logoTete} alt="Logo Ilana Sidoun" className="w-16 h-16 md:w-20 md:h-20 opacity-80" />
        </div>

        <ContactSection />
        
        {/* Cartes de visite */}
        <section className="py-12 bg-sage-light">
          <div className="container mx-auto px-6">
            <h2 className="font-heading text-2xl md:text-3xl text-foreground mb-8 text-center">
              Mes cartes de visite
            </h2>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center max-w-3xl mx-auto">
              <div className="bg-background p-4 rounded-lg shadow-soft">
                <img 
                  src="/images/carte-visite-1.png" 
                  alt="Carte de visite Ilana Sidoun - Recto"
                  className="w-64 md:w-72 h-auto rounded"
                />
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="w-full mt-3"
                  onClick={() => handleDownload('/images/carte-visite-1.png', 'carte-visite-ilana-sidoun-1.png')}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Télécharger
                </Button>
              </div>
              <div className="bg-background p-4 rounded-lg shadow-soft">
                <img 
                  src="/images/carte-visite-2.png" 
                  alt="Carte de visite Ilana Sidoun - Verso"
                  className="w-64 md:w-72 h-auto rounded"
                />
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="w-full mt-3"
                  onClick={() => handleDownload('/images/carte-visite-2.png', 'carte-visite-ilana-sidoun-2.png')}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Télécharger
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Contact;
