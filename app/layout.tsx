import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Nootropios — Nootropiques & Boosters de Testostérone',
    template: '%s | Nootropios',
  },
  description: 'Guide expert des nootropiques et boosters de testostérone naturels en France. Études cliniques, dosages, stacks et protocoles.',
  keywords: ['nootropiques', 'boosters de testostérone', 'performance cognitive', 'suppléments naturels', 'nootropique France'],
  metadataBase: new URL('https://nootropios.com'),
  alternates: { canonical: 'https://nootropios.com' },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Nootropios',
  },
};

const hubs = [
  { href: '/nootropiques-naturels/', label: 'Nootropiques' },
  { href: '/boosters-testosterone/', label: 'Testostérone' },
  { href: '/performance-cognitive/', label: 'Cognition' },
  { href: '/energie-vitalite/', label: 'Énergie' },
  { href: '/stacks-protocoles/', label: 'Stacks' },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-gray-50 text-gray-900 antialiased">
        <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <Link href="/" className="text-xl font-bold text-indigo-600">
              Nootropios
            </Link>
            <div className="hidden md:flex items-center gap-6">
              {hubs.map((hub) => (
                <Link
                  key={hub.href}
                  href={hub.href}
                  className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition"
                >
                  {hub.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        {children}

        <footer className="bg-gray-900 text-gray-400 py-12 px-4 mt-16">
          <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-bold mb-3">Nootropios</h3>
              <p className="text-sm">Guide expert des nootropiques et boosters de testostérone naturels en France.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Explorer</h4>
              <ul className="space-y-2 text-sm">
                {hubs.map((hub) => (
                  <li key={hub.href}>
                    <Link href={hub.href} className="hover:text-white transition">{hub.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Informations</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/a-propos/" className="hover:text-white transition">À propos</Link></li>
                <li><Link href="/contact/" className="hover:text-white transition">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Légal</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/mentions-legales/" className="hover:text-white transition">Mentions légales</Link></li>
                <li><Link href="/politique-confidentialite/" className="hover:text-white transition">Confidentialité</Link></li>
              </ul>
            </div>
          </div>
          <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-gray-800 text-sm text-center">
            &copy; {new Date().getFullYear()} Nootropios. Tous droits réservés.
          </div>
        </footer>
      </body>
    </html>
  );
}
