import type { Metadata } from 'next';
import Link from 'next/link';
import { getOrganizationSchema, getWebSiteSchema, getFAQSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Nootropios — Nootropiques & Boosters de Testostérone Naturels',
  description: 'Guide expert des nootropiques et boosters de testostérone naturels en France. Études cliniques, dosages optimaux, stacks et protocoles personnalisés.',
  keywords: ['nootropiques', 'boosters de testostérone', 'nootropique naturel', 'performance cognitive', 'suppléments France'],
  alternates: { canonical: 'https://nootropios.com' },
};

const hubCards = [
  {
    href: '/nootropiques-naturels/',
    emoji: '🧠',
    title: 'Nootropiques Naturels',
    description: 'Ashwagandha, Bacopa, Lion\'s Mane, Rhodiola... Découvrez les substances qui boostent votre cerveau naturellement.',
    color: 'border-emerald-500',
    textColor: 'text-emerald-600',
  },
  {
    href: '/boosters-testosterone/',
    emoji: '💪',
    title: 'Boosters de Testostérone',
    description: 'Tongkat Ali, Tribulus, Zinc, Fenugrec... Les meilleurs boosters de testostérone validés par la science.',
    color: 'border-red-500',
    textColor: 'text-red-600',
  },
  {
    href: '/performance-cognitive/',
    emoji: '🎯',
    title: 'Performance Cognitive',
    description: 'Concentration, mémoire, clarté mentale. Stratégies et suppléments pour optimiser vos capacités intellectuelles.',
    color: 'border-indigo-500',
    textColor: 'text-indigo-600',
  },
  {
    href: '/energie-vitalite/',
    emoji: '⚡',
    title: 'Énergie & Vitalité',
    description: 'Créatine, CoQ10, adaptogènes. Combattez la fatigue et retrouvez une énergie durable au quotidien.',
    color: 'border-orange-500',
    textColor: 'text-orange-600',
  },
  {
    href: '/stacks-protocoles/',
    emoji: '🔬',
    title: 'Stacks & Protocoles',
    description: 'Combinaisons optimales, dosages, cycles. Des protocoles complets pour chaque objectif.',
    color: 'border-purple-500',
    textColor: 'text-purple-600',
  },
];

export default function HomePage() {
  const organizationSchema = getOrganizationSchema();
  const webSiteSchema = getWebSiteSchema();
  const faqSchema = getFAQSchema([
    {
      question: 'Qu\'est-ce qu\'un nootropique ?',
      answer: 'Un nootropique est une substance naturelle ou synthétique qui améliore les fonctions cognitives comme la mémoire, la concentration, la motivation et la clarté mentale. Le terme a été inventé par le Dr Corneliu Giurgea en 1972. Les nootropiques naturels incluent l\'ashwagandha, le bacopa monnieri, le lion\'s mane et la rhodiola rosea. Ils agissent sur les neurotransmetteurs (dopamine, acétylcholine, sérotonine) pour optimiser les performances cérébrales de manière sûre et progressive.',
    },
    {
      question: 'Les boosters de testostérone naturels sont-ils efficaces ?',
      answer: 'Oui, plusieurs boosters de testostérone naturels ont démontré leur efficacité dans des essais cliniques contrôlés. Le tongkat ali (Eurycoma longifolia) peut augmenter la testostérone libre de 15 à 37 % selon les études. L\'ashwagandha KSM-66 a montré une augmentation de 17 % de la testostérone chez les hommes en 8 semaines. Le zinc, la vitamine D3 et le magnésium sont des cofacteurs essentiels de la synthèse hormonale. L\'efficacité dépend du dosage correct et de la durée de supplémentation.',
    },
    {
      question: 'Les nootropiques sont-ils légaux en France ?',
      answer: 'La grande majorité des nootropiques naturels sont légaux en France et vendus comme compléments alimentaires. L\'ashwagandha, le bacopa monnieri, la rhodiola rosea, le lion\'s mane, le ginkgo biloba, la L-théanine et la créatine sont tous en vente libre. Certains nootropiques synthétiques comme le modafinil nécessitent une ordonnance médicale. La DHEA est en vente libre en France mais réglementée dans d\'autres pays européens. Consultez toujours la réglementation de l\'ANSES pour les dernières mises à jour.',
    },
    {
      question: 'Comment choisir le bon complément pour ses besoins ?',
      answer: 'Le choix dépend de votre objectif principal. Pour la concentration : le stack caféine + L-théanine est le point de départ idéal. Pour la mémoire : le bacopa monnieri (300 mg/jour minimum, 8 semaines). Pour le stress : l\'ashwagandha KSM-66 (600 mg/jour). Pour la testostérone : tongkat ali + zinc + vitamine D3. Commencez toujours par une seule substance, observez pendant 2 semaines, puis ajoutez progressivement. Consultez nos guides détaillés pour chaque substance et nos protocoles de stacking.',
    },
  ]);

  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <header className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Nootropiques & Boosters de Testostérone
          </h1>
          <p className="text-xl md:text-2xl opacity-95 mb-4">
            Le guide francophone de référence pour optimiser vos performances cognitives et hormonales
          </p>
          <p className="text-lg opacity-85 max-w-2xl mx-auto">
            Analyses basées sur les <strong>études cliniques</strong>, dosages précis, stacks personnalisés et protocoles complets.
          </p>
        </div>
      </header>

      {/* Hub Cards */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Explorez Nos Guides</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Chaque guide est structuré selon la méthode sémantique avec des données cliniques, des dosages précis et des protocoles actionnables.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hubCards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className={`bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition border-t-4 ${card.color}`}
            >
              <div className="text-4xl mb-4">{card.emoji}</div>
              <h3 className="text-2xl font-bold mb-3">{card.title}</h3>
              <p className="text-gray-600 mb-4">{card.description}</p>
              <span className={`${card.textColor} font-semibold`}>Découvrir →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Answer Capsule */}
      <section className="max-w-4xl mx-auto px-4 pb-16">
        <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-lg">
          <p className="text-gray-800 leading-relaxed">
            Les <strong>nootropiques</strong> et les <strong>boosters de testostérone naturels</strong> représentent deux axes complémentaires de l&apos;<strong>optimisation des performances</strong> humaines. Alors que les nootropiques ciblent la <strong>cognition</strong> — mémoire, concentration, clarté mentale — les boosters hormonaux agissent sur l&apos;<strong>énergie</strong>, la <strong>masse musculaire</strong> et la <strong>vitalité masculine</strong>.
          </p>
          <p className="text-gray-800 leading-relaxed mt-3">
            Les études publiées dans le <em>Journal of the International Society of Sports Nutrition</em> montrent que <strong>72 % des hommes</strong> de plus de 40 ans présentent au moins un marqueur de baisse hormonale, tandis que la demande pour les <strong>suppléments cognitifs</strong> a augmenté de 45 % en France entre 2022 et 2025.
          </p>
          <p className="text-gray-800 leading-relaxed mt-3">
            Nootropios vous guide à travers les <strong>données cliniques</strong>, les <strong>dosages validés</strong> par la recherche et les <strong>protocoles de stacking</strong> pour chaque objectif — de l&apos;étudiant en période d&apos;examens à l&apos;homme de 45 ans cherchant à retrouver sa <strong>vitalité</strong>.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 pb-16">
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Questions Fréquentes</h2>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Qu&apos;est-ce qu&apos;un nootropique ?</h3>
              <p className="text-gray-700 leading-relaxed">
                Un <strong>nootropique</strong> est une substance naturelle ou synthétique qui améliore les <strong>fonctions cognitives</strong> comme la mémoire, la concentration, la motivation et la clarté mentale. Le terme a été inventé par le Dr Corneliu Giurgea en 1972. Les <strong>nootropiques naturels</strong> incluent l&apos;<strong>ashwagandha</strong>, le <strong>bacopa monnieri</strong>, le <strong>lion&apos;s mane</strong> et la <strong>rhodiola rosea</strong>.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Les boosters de testostérone naturels sont-ils efficaces ?</h3>
              <p className="text-gray-700 leading-relaxed">
                Oui, plusieurs <strong>boosters de testostérone</strong> naturels ont démontré leur efficacité dans des essais cliniques. Le <strong>tongkat ali</strong> peut augmenter la testostérone libre de 15 à 37 %. L&apos;<strong>ashwagandha KSM-66</strong> montre une augmentation de 17 % en 8 semaines. Le <strong>zinc</strong>, la <strong>vitamine D3</strong> et le <strong>magnésium</strong> sont des cofacteurs essentiels.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Les nootropiques sont-ils légaux en France ?</h3>
              <p className="text-gray-700 leading-relaxed">
                La majorité des <strong>nootropiques naturels</strong> sont légaux en France et vendus comme <strong>compléments alimentaires</strong>. L&apos;ashwagandha, le bacopa, la rhodiola, le lion&apos;s mane, le ginkgo, la <strong>L-théanine</strong> et la <strong>créatine</strong> sont en vente libre. Certains nootropiques synthétiques nécessitent une ordonnance.
              </p>
            </div>
            <div className="pb-2">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Comment choisir le bon complément ?</h3>
              <p className="text-gray-700 leading-relaxed">
                Le choix dépend de votre objectif. Pour la <strong>concentration</strong> : caféine + L-théanine. Pour la <strong>mémoire</strong> : bacopa monnieri. Pour le <strong>stress</strong> : ashwagandha KSM-66. Pour la <strong>testostérone</strong> : tongkat ali + zinc + vitamine D3. Commencez par une seule substance et observez pendant 2 semaines avant d&apos;ajouter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 pb-16">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Commencez Votre Optimisation</h2>
          <p className="text-lg mb-6 opacity-95">Découvrez les nootropiques et boosters adaptés à votre profil et vos objectifs.</p>
          <Link
            href="/stacks-protocoles/"
            className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition inline-block"
          >
            Explorer les Protocoles
          </Link>
        </div>
      </section>
    </main>
  );
}
