import Layout from "@/components/Layout";
import logoTete from "@/assets/logo-tete.png";

const PolitiqueConfidentialite = () => {
  return (
    <Layout>
      <div className="py-12 md:py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Logo centered */}
          <div className="flex justify-center mb-8">
            <img src={logoTete} alt="Logo Ilana Sidoun" className="w-16 h-16 md:w-20 md:h-20 opacity-80" />
          </div>

          <h1 className="font-heading text-3xl md:text-4xl text-foreground mb-8 text-center">
            Politique de Confidentialité
          </h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-8 text-xs md:text-base">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Introduction</h2>
              <p>
                La présente politique de confidentialité décrit comment Ilana Sidoun collecte, 
                utilise et protège les informations personnelles que vous nous fournissez 
                lorsque vous utilisez ce site web.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Responsable du traitement des données</h2>
              <p>
                Le responsable du traitement des données collectées sur ce site est :
              </p>
              <p>
                <strong>Ilana Sidoun</strong><br />
                Entreprise Individuelle Ilana Sidoun EI<br />
                SIREN : 944 967 207<br />
                8 parc de la Bérengère, 92210 Saint-Cloud, France<br />
                Email : ilana.sidoun@gmail.com<br />
                Téléphone : +33 6 22 95 90 80
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Collecte des données</h2>
              <p>
                Nous collectons des informations lorsque vous remplissez le formulaire de contact 
                sur notre site. Les informations collectées incluent :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Votre nom et prénom</li>
                <li>Votre adresse email</li>
                <li>Votre numéro de téléphone</li>
                <li>Le contenu de votre message</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Utilisation des données</h2>
              <p>
                Les informations que nous collectons sont utilisées uniquement pour :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Répondre à vos demandes de contact</li>
                <li>Vous fournir des informations sur nos services</li>
                <li>Planifier des rendez-vous</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Partage des données</h2>
              <p>
                Vos données personnelles sont strictement confidentielles et ne seront jamais 
                vendues, louées ou cédées à des tiers sans votre consentement explicite, 
                sauf dans les cas suivants :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Pour répondre à une obligation légale</li>
                <li>Pour protéger nos droits ou la sécurité de nos utilisateurs</li>
              </ul>
              <p className="mt-4">
                En cas de recours à des sous-traitants (par exemple : hébergeur, prestataires techniques), 
                ceux-ci sont soumis à une obligation stricte de confidentialité et traitent vos données 
                conformément à nos instructions et au Règlement Général sur la Protection des Données (RGPD).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Protection des données</h2>
              <p>
                Nous mettons en œuvre une variété de mesures de sécurité pour préserver la 
                sécurité de vos informations personnelles. Vos informations personnelles sont 
                contenues derrière des réseaux sécurisés et ne sont accessibles que par un 
                nombre limité de personnes qui ont des droits d'accès spéciaux.
              </p>
              <p>
                Toutefois, nous vous informons qu'aucune transmission de données sur Internet 
                n'est totalement sécurisée. Bien que nous nous efforcions de protéger vos 
                informations personnelles, nous ne pouvons garantir une sécurité absolue des 
                données transmises vers notre site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Durée de conservation des données</h2>
              <p>
                Vos données personnelles sont conservées pendant la durée nécessaire à la 
                réalisation des finalités pour lesquelles elles ont été collectées, et 
                conformément aux obligations légales en vigueur. Les données issues du 
                formulaire de contact sont conservées pendant une durée maximale de 3 ans 
                à compter de notre dernier échange.
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
                navigateur, mais cela peut affecter certaines fonctionnalités du site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Vos droits</h2>
              <p>
                Conformément au RGPD, vous disposez des droits suivants concernant vos données 
                personnelles :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Droit d'accès à vos données</li>
                <li>Droit de rectification</li>
                <li>Droit à l'effacement</li>
                <li>Droit à la limitation du traitement</li>
                <li>Droit à la portabilité des données</li>
                <li>Droit d'opposition</li>
              </ul>
              <p className="mt-4">
                Pour exercer ces droits, veuillez nous contacter à : ilana.sidoun@gmail.com
              </p>
              <p>
                Vous disposez également du droit d'introduire une réclamation auprès de la 
                Commission Nationale de l'Informatique et des Libertés (CNIL) si vous estimez 
                que le traitement de vos données personnelles n'est pas conforme à la réglementation.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Modifications de la politique de confidentialité</h2>
              <p>
                Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. 
                Toute modification sera publiée sur cette page avec une date de mise à jour. Nous vous 
                encourageons à consulter régulièrement cette page pour rester informé de nos pratiques 
                en matière de protection des données.
              </p>
              <p className="mt-4">
                <em>Dernière mise à jour : Décembre 2025</em>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Contact</h2>
              <p>
                Pour toute question concernant cette politique de confidentialité, vous pouvez 
                nous contacter :
              </p>
              <p>
                <strong>Ilana Sidoun</strong><br />
                Email : ilana.sidoun@gmail.com<br />
                Téléphone : +33 6 22 95 90 80
              </p>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PolitiqueConfidentialite;
