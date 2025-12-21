import Layout from "@/components/Layout";
import logoTete from "@/assets/logo-tete.png";

const MentionsLegales = () => {
  return (
    <Layout>
      <div className="py-12 md:py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Logo centered */}
          <div className="flex justify-center mb-8">
            <img src={logoTete} alt="Logo Ilana Sidoun" className="w-16 h-16 md:w-20 md:h-20 opacity-80" />
          </div>

          <h1 className="font-heading text-3xl md:text-4xl text-foreground mb-8 text-center">
            Mentions Légales
          </h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-8 text-xs md:text-base">
            {/* Introduction légale */}
            <section>
              <p>
                En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance 
                dans l'économie numérique, il est précisé aux utilisateurs du site internet{" "}
                <a 
                  href="https://ilanapsy.fr" 
                  className="text-taupe hover:text-foreground underline underline-offset-2 transition-colors"
                >
                  https://ilanapsy.fr
                </a>{" "}
                l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi :
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Éditeur du site</h2>
              <p>
                <strong>Ilana Sidoun</strong><br />
                Thérapeute et Psychanalyste Clinicienne<br />
                36 Avenue de la République<br />
                92130 Issy-les-Moulineaux, France<br />
                Téléphone : +33 6 22 95 90 80<br />
                Email : ilana.sidoun@gmail.com
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Identification de l'entreprise</h2>
              <p>
                <strong>Entreprise Individuelle Ilana Sidoun EI</strong><br />
                SIREN : 944 967 207<br />
                Adresse postale : 8 parc de la Bérengère, 92210 Saint-Cloud, France
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Hébergement</h2>
              <p>
                Ce site est hébergé par OVHcloud.<br />
                Pour plus d'informations, veuillez vous rendre sur https://us.ovhcloud.com
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Propriété intellectuelle</h2>
              <p>
                L'ensemble du contenu de ce site (textes, images, graphismes, logo, icônes, etc.) 
                est la propriété exclusive d'Ilana Sidoun, à l'exception des marques, logos ou 
                contenus appartenant à d'autres sociétés partenaires ou auteurs.
              </p>
              <p>
                Toute reproduction, distribution, modification, adaptation, retransmission ou 
                publication, même partielle, de ces différents éléments est strictement interdite 
                sans l'accord exprès par écrit d'Ilana Sidoun.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Responsabilité</h2>
              <p>
                Les informations contenues sur ce site sont aussi précises que possible et le site 
                est périodiquement remis à jour, mais peut toutefois contenir des inexactitudes, 
                des omissions ou des lacunes.
              </p>
              <p>
                Ilana Sidoun ne pourra être tenue responsable des dommages directs et indirects 
                causés au matériel de l'utilisateur, lors de l'accès au site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Données personnelles</h2>
              <p>
                Conformément à la loi{" "}
                <a 
                  href="https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000886460"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-taupe hover:text-foreground underline underline-offset-2 transition-colors"
                >
                  « Informatique et Libertés »
                </a>{" "}
                du 6 janvier 1978 modifiée et au Règlement Général sur la Protection des Données (RGPD), 
                vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux 
                données personnelles vous concernant.
              </p>
              <p>
                Pour exercer ce droit, veuillez nous contacter à l'adresse email : 
                ilana.sidoun@gmail.com
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Cookies</h2>
              <p>
                Ce site peut utiliser des cookies pour améliorer votre expérience de navigation. 
                Les cookies sont de petits fichiers texte stockés sur votre ordinateur qui nous 
                permettent de vous reconnaître lors de vos visites ultérieures.
              </p>
              <p>
                Vous pouvez choisir de désactiver les cookies dans les paramètres de votre 
                navigateur, ou modifier vos préférences directement sur le site en cliquant sur{" "}
                <button
                  onClick={() => {
                    const event = new CustomEvent('openCookieManagement');
                    window.dispatchEvent(event);
                  }}
                  className="text-taupe hover:text-foreground underline underline-offset-2 transition-colors cursor-pointer"
                >
                  Gestion des cookies
                </button>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Utilisation des moyens de contact</h2>
              <p>
                Toute utilisation abusive des formulaires de contact, du téléphone ou de l'adresse 
                email mis à disposition sur ce site est strictement interdite. Cela inclut, sans 
                s'y limiter, l'envoi de messages à caractère injurieux, diffamatoire, raciste, 
                discriminatoire, menaçant, ou constituant du harcèlement.
              </p>
              <p>
                En cas de mauvaise utilisation de ces moyens de contact, Ilana Sidoun se réserve 
                le droit d'engager la responsabilité civile et/ou pénale de l'utilisateur concerné.
              </p>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MentionsLegales;
