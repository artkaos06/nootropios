import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Politique de Confidentialité | Nootropios',
  description: 'Politique de confidentialité de Nootropios.com. Découvrez comment nous protégeons vos données personnelles conformément au RGPD.',
  alternates: { canonical: 'https://nootropios.com/politique-confidentialite' },
};

export default function PolitiqueConfidentialite() {
  return (
    <main className="min-h-screen bg-gray-50">
      <header className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-white/80 hover:text-white mb-4 inline-block">← Accueil</Link>
          <h1 className="text-3xl font-bold">Politique de Confidentialité</h1>
        </div>
      </header>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <article className="bg-white rounded-xl shadow-md p-8 prose max-w-none">
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Dernière mise à jour :</strong> Février 2026
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Collecte des données</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Nootropios.com peut collecter des données personnelles lorsque vous utilisez notre site :
            adresse email (si vous vous inscrivez à notre newsletter), données de navigation (via des cookies analytiques),
            et informations transmises via le formulaire de contact. Nous ne collectons aucune donnée de santé.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Utilisation des données</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Les données collectées sont utilisées pour : améliorer l&apos;expérience utilisateur sur le site,
            envoyer des informations pertinentes (si vous avez consenti à recevoir notre newsletter),
            analyser le trafic et les performances du site, et répondre à vos demandes de contact.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Cookies</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Le site utilise des cookies techniques nécessaires au fonctionnement du site et des cookies analytiques
            (Google Analytics) pour mesurer l&apos;audience. Vous pouvez configurer votre navigateur pour refuser
            les cookies. La désactivation des cookies analytiques n&apos;affecte pas votre navigation sur le site.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Vos droits (RGPD)</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :
            droit d&apos;accès, de rectification, d&apos;effacement, de limitation du traitement, de portabilité
            et d&apos;opposition. Pour exercer ces droits, contactez-nous à : contact@nootropios.com.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Conservation des données</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Les données personnelles sont conservées pour une durée maximale de 3 ans à compter de votre dernier
            contact avec Nootropios. Les données analytiques sont anonymisées après 26 mois.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Contact</h2>
          <p className="text-gray-700 leading-relaxed">
            Pour toute question relative à la protection de vos données personnelles, vous pouvez nous contacter
            à l&apos;adresse : contact@nootropios.com ou via notre <Link href="/contact/" className="text-indigo-600 hover:underline">formulaire de contact</Link>.
          </p>
        </article>
      </div>
    </main>
  );
}
