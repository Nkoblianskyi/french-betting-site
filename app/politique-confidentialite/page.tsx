import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Politique de Confidentialité</h1>
          <p className="text-lg text-gray-600 mb-8">Dernière mise à jour : 4 septembre 2025</p>

          <div className="prose prose-lg max-w-none text-gray-600 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
              <p>
                La présente Politique de Confidentialité décrit la façon dont lesportenfrance.com ("nous", "notre" ou
                "nos") collecte, utilise et protège vos informations personnelles lorsque vous utilisez notre site web
                et nos services. Nous nous engageons à protéger votre vie privée et à respecter la réglementation
                française et européenne en matière de protection des données (RGPD).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Responsable du traitement</h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <p>
                  <strong>Raison sociale :</strong> lesportenfrance.com SARL
                </p>
                
                <p>
                  <strong>Email :</strong> privacy@lesportenfrance.com
                </p>
                
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Données collectées</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Données collectées automatiquement</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Adresse IP et informations de géolocalisation</li>
                    <li>Type de navigateur et système d'exploitation</li>
                    <li>Pages visitées et temps passé sur le site</li>
                    <li>Référent (site web d'où vous venez)</li>
                    <li>Cookies et technologies similaires</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Données fournies volontairement</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Informations de contact (email, nom) si vous nous contactez</li>
                    <li>Préférences de communication</li>
                    <li>Commentaires et retours d'expérience</li>
                    <li>Informations d'inscription à notre newsletter</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Finalités du traitement</h2>
              <p className="mb-4">Nous utilisons vos données personnelles pour les finalités suivantes :</p>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Fonctionnement du site web</h3>
                  <p>Assurer le bon fonctionnement de notre site et améliorer l'expérience utilisateur.</p>
                  <p className="text-sm text-gray-500">
                    <strong>Base légale :</strong> Intérêt légitime
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Analyse et statistiques</h3>
                  <p>Analyser l'utilisation du site pour améliorer nos services et contenus.</p>
                  <p className="text-sm text-gray-500">
                    <strong>Base légale :</strong> Intérêt légitime
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Communication</h3>
                  <p>Répondre à vos questions et vous envoyer des informations sur nos services.</p>
                  <p className="text-sm text-gray-500">
                    <strong>Base légale :</strong> Consentement ou intérêt légitime
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Conformité légale</h3>
                  <p>Respecter nos obligations légales et réglementaires.</p>
                  <p className="text-sm text-gray-500">
                    <strong>Base légale :</strong> Obligation légale
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Partage des données</h2>
              <p className="mb-4">Nous pouvons partager vos données avec :</p>

              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>Partenaires bookmakers :</strong> Lorsque vous cliquez sur nos liens d'affiliation, certaines
                  données peuvent être partagées pour le suivi des conversions (conformément à leurs politiques de
                  confidentialité)
                </li>
                <li>
                  <strong>Prestataires de services :</strong> Hébergement web, analyse de données, services de
                  communication (sous contrat de sous-traitance RGPD)
                </li>
                <li>
                  <strong>Autorités compétentes :</strong> Si requis par la loi ou pour protéger nos droits légitimes
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Durée de conservation</h2>
              <p className="mb-4">Nous conservons vos données personnelles pendant les durées suivantes :</p>

              <ul className="list-disc list-inside space-y-1">
                <li>
                  <strong>Données de navigation :</strong> 25 mois maximum
                </li>
                <li>
                  <strong>Données de contact :</strong> 3 ans après le dernier contact
                </li>
                <li>
                  <strong>Cookies :</strong> Selon les durées spécifiées dans notre politique de cookies
                </li>
                <li>
                  <strong>Données légales :</strong> Selon les obligations légales applicables
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Vos droits</h2>
              <p className="mb-4">Conformément au RGPD, vous disposez des droits suivants :</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Droit d'accès</h3>
                  <p className="text-sm">Obtenir une copie de vos données personnelles</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Droit de rectification</h3>
                  <p className="text-sm">Corriger des données inexactes ou incomplètes</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Droit à l'effacement</h3>
                  <p className="text-sm">Demander la suppression de vos données</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Droit d'opposition</h3>
                  <p className="text-sm">Vous opposer au traitement de vos données</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Droit à la portabilité</h3>
                  <p className="text-sm">Récupérer vos données dans un format structuré</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Droit de limitation</h3>
                  <p className="text-sm">Limiter le traitement de vos données</p>
                </div>
              </div>

              <div className="mt-6 bg-french-blue rounded-lg p-6 text-white">
                <h3 className="font-semibold mb-2">Comment exercer vos droits ?</h3>
                <p className="mb-2">
                  Pour exercer vos droits, contactez-nous à : <strong>privacy@lesportenfrance.com</strong>
                </p>
                <p className="text-sm">
                  Nous vous répondrons dans un délai d'un mois. Vous avez également le droit de déposer une plainte
                  auprès de la CNIL.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Sécurité des données</h2>
              <p>
                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données
                personnelles contre la perte, l'utilisation abusive, l'accès non autorisé, la divulgation, l'altération
                ou la destruction. Ces mesures incluent le chiffrement SSL, l'authentification sécurisée et des audits
                de sécurité réguliers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Modifications</h2>
              <p>
                Nous pouvons modifier cette Politique de Confidentialité à tout moment. Les modifications importantes
                seront notifiées sur notre site web. Nous vous encourageons à consulter régulièrement cette page pour
                rester informé de nos pratiques en matière de confidentialité.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact</h2>
              <p>
                Pour toute question concernant cette Politique de Confidentialité ou le traitement de vos données
                personnelles, contactez notre Délégué à la Protection des Données :
              </p>
              <div className="mt-4 bg-gray-50 rounded-lg p-4">
                <p>
                  <strong>Email :</strong> dpo@lesportenfrance.com
                </p>
                
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
