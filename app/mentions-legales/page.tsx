import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Mentions Légales | Nootropios',
  description: 'Mentions légales du site Nootropios.com. Informations sur l\'éditeur, l\'hébergeur et les conditions d\'utilisation.',
  alternates: { canonical: 'https://nootropios.com/mentions-legales' },
};

export default function MentionsLegales() {
  return (
    <main className="min-h-screen bg-gray-50">
      <header className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-white/80 hover:text-white mb-4 inline-block">← Accueil</Link>
          <h1 className="text-3xl font-bold">Mentions Légales</h1>
        </div>
      </header>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <article className="bg-white rounded-xl shadow-md p-8 prose max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Éditeur du site</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Le site Nootropios.com est édité par [Nom de la société], [forme juridique] au capital de [montant] euros,
            immatriculée au Registre du Commerce et des Sociétés de [ville] sous le numéro [numéro RCS].
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Siège social :</strong> [Adresse complète]<br />
            <strong>Directeur de la publication :</strong> [Nom du directeur]<br />
            <strong>Email :</strong> contact@nootropios.com
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Hébergeur</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Le site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Propriété intellectuelle</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            L&apos;ensemble des contenus présents sur le site Nootropios.com (textes, images, graphismes, logo, icônes)
            sont protégés par le droit d&apos;auteur et le droit de la propriété intellectuelle. Toute reproduction,
            représentation, modification, publication ou adaptation de tout ou partie des éléments du site est interdite
            sans l&apos;autorisation écrite préalable de l&apos;éditeur.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Avertissement santé</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Les informations publiées sur Nootropios.com sont fournies à titre informatif uniquement et ne constituent
            en aucun cas un avis médical. Les compléments alimentaires ne se substituent pas à une alimentation variée
            et équilibrée ni à un mode de vie sain. Consultez toujours un professionnel de santé avant de commencer
            toute supplémentation. Les résultats individuels peuvent varier.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Liens hypertextes</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Le site peut contenir des liens vers d&apos;autres sites internet. Nootropios n&apos;exerce aucun contrôle
            sur ces sites et décline toute responsabilité quant à leur contenu.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Droit applicable</h2>
          <p className="text-gray-700 leading-relaxed">
            Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français
            seront seuls compétents.
          </p>
        </article>
      </div>
    </main>
  );
}
