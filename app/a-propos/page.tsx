import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'À Propos de Nootropios | Nootropios',
  description: 'Découvrez la mission de Nootropios : démocratiser l\'accès aux informations scientifiques sur les nootropiques et boosters de testostérone en France.',
  alternates: { canonical: 'https://nootropios.com/a-propos' },
};

export default function APropos() {
  return (
    <main className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-white/80 hover:text-white mb-4 inline-block">← Accueil</Link>
          <h1 className="text-4xl font-bold mb-4">À Propos de Nootropios</h1>
          <p className="text-xl opacity-95">La référence francophone pour les nootropiques et l&apos;optimisation hormonale</p>
        </div>
      </header>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <article className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Notre mission</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Nootropios est né d&apos;un constat simple : les informations fiables sur les <strong>nootropiques</strong> et les <strong>boosters de testostérone</strong> sont rares en français. La plupart des ressources disponibles sont soit des traductions approximatives de contenus anglophones, soit des pages commerciales biaisées par des conflits d&apos;intérêt.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Notre mission est de fournir des <strong>analyses objectives</strong>, basées sur les <strong>études cliniques</strong> et les <strong>méta-analyses</strong> publiées dans les revues scientifiques à comité de lecture. Chaque affirmation sur Nootropios est sourcée et vérifiable.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Notre approche</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Nous suivons une méthodologie rigoureuse pour chaque substance que nous analysons :
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
            <li>Revue systématique des études cliniques disponibles sur PubMed et Cochrane</li>
            <li>Analyse des dosages utilisés dans les essais contrôlés randomisés</li>
            <li>Vérification de la légalité en France auprès de l&apos;ANSES et de la DGCCRF</li>
            <li>Évaluation du rapport bénéfice/risque pour chaque profil d&apos;utilisateur</li>
            <li>Mise à jour régulière en fonction des nouvelles publications scientifiques</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Indépendance</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Nootropios est un site d&apos;information indépendant. Nous pouvons utiliser des liens d&apos;affiliation pour financer notre activité, mais nos analyses et recommandations ne sont jamais influencées par des considérations commerciales. Lorsqu&apos;un produit ne fonctionne pas selon les données scientifiques, nous le disons clairement.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Avertissement</h2>
          <p className="text-gray-700 leading-relaxed">
            Les informations publiées sur Nootropios ne remplacent en aucun cas l&apos;avis d&apos;un professionnel de santé. Consultez toujours votre médecin avant de commencer une supplémentation, en particulier si vous suivez un traitement médical ou si vous avez des conditions de santé préexistantes.
          </p>
        </article>
      </div>
    </main>
  );
}
