import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact | Nootropios',
  description: 'Contactez l\'équipe Nootropios pour vos questions sur les nootropiques et boosters de testostérone. Nous répondons sous 48h.',
  alternates: { canonical: 'https://nootropios.com/contact' },
};

export default function Contact() {
  return (
    <main className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-white/80 hover:text-white mb-4 inline-block">← Accueil</Link>
          <h1 className="text-4xl font-bold mb-4">Contactez-nous</h1>
          <p className="text-xl opacity-95">Une question sur les nootropiques ou les boosters de testostérone ? Notre équipe vous répond.</p>
        </div>
      </header>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Envoyez-nous un message</h2>
            <p className="text-gray-700 mb-6">
              Vous pouvez nous contacter par email à l&apos;adresse suivante :
            </p>
            <a href="mailto:contact@nootropios.com" className="text-indigo-600 font-semibold text-lg hover:underline">
              contact@nootropios.com
            </a>
            <p className="text-gray-600 mt-4 text-sm">
              Nous nous efforçons de répondre à tous les messages sous 48 heures ouvrées.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Informations utiles</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900">Questions sur les suppléments</h3>
                <p className="text-gray-600 text-sm">Consultez nos guides détaillés dans chaque catégorie avant de nous contacter. Vous y trouverez probablement votre réponse.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Partenariats et presse</h3>
                <p className="text-gray-600 text-sm">Pour les demandes de partenariat ou les demandes presse, merci de préciser l&apos;objet dans votre email.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Signaler une erreur</h3>
                <p className="text-gray-600 text-sm">Si vous repérez une information inexacte dans nos articles, n&apos;hésitez pas à nous le signaler. La rigueur scientifique est notre priorité.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
