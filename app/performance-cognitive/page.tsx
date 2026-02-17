import type { Metadata } from 'next';
import Link from 'next/link';
import { getWebPageSchema, getBreadcrumbSchema, getOrganizationSchema, getFAQSchema } from '@/lib/schema';
import EEATSignal from '@/components/EEATSignal';

export const metadata: Metadata = {
  title: 'Performance Cognitive : Optimisez Votre Cerveau',
  description: 'Améliorez concentration, mémoire et clarté mentale. Stratégies, suppléments et exercices pour optimiser vos capacités cognitives.',
  keywords: [
    'performance cognitive',
    'améliorer concentration',
    'booster mémoire',
    'clarté mentale',
    'brouillard cérébral',
    'neuroplasticité',
    'nootropiques étudiants',
    'optimisation cognitive',
    'fonctions cognitives',
  ],
  alternates: { canonical: 'https://nootropios.com/performance-cognitive' },
};

const spokeCards = [
  {
    href: '/performance-cognitive/ameliorer-concentration-naturellement/',
    emoji: '🎯',
    title: 'Améliorer Sa Concentration',
    description: 'Techniques, suppléments et habitudes pour renforcer votre focus. Du deep work à la supplémentation en passant par la gestion des distractions.',
  },
  {
    href: '/performance-cognitive/booster-memoire-travail/',
    emoji: '🧩',
    title: 'Booster Sa Mémoire de Travail',
    description: 'La mémoire de travail est la clé de l\'intelligence fluide. Exercices, suppléments et stratégies pour l\'optimiser au quotidien.',
  },
  {
    href: '/performance-cognitive/clarte-mentale-brouillard-cerebral/',
    emoji: '☁️',
    title: 'Clarté Mentale & Brouillard Cérébral',
    description: 'Comprenez les causes du brain fog et découvrez les solutions naturelles pour retrouver une pensée claire et fluide.',
  },
  {
    href: '/performance-cognitive/neuroplasticite-exercices/',
    emoji: '🔄',
    title: 'Neuroplasticité : Exercices Pratiques',
    description: 'Exploitez la capacité de votre cerveau à se recâbler. Protocoles concrets pour stimuler la neurogenèse et former de nouvelles connexions.',
  },
  {
    href: '/performance-cognitive/nootropiques-etudiants-examens/',
    emoji: '📚',
    title: 'Nootropiques pour Étudiants & Examens',
    description: 'Les meilleurs suppléments et stratégies pour les étudiants. Concentration, mémorisation et gestion du stress en période d\'examens.',
  },
  {
    href: '/performance-cognitive/cafeine-l-theanine-synergie/',
    emoji: '☕',
    title: 'Caféine + L-Théanine : Le Stack #1',
    description: 'La synergie nootropique la plus étudiée. Focus sans nervosité, ratio 1:2 optimal et protocole quotidien complet.',
  },
  {
    href: '/performance-cognitive/sommeil-memoire-consolidation/',
    emoji: '💤',
    title: 'Sommeil & Consolidation Mnésique',
    description: 'Comment les phases de sommeil consolident vos apprentissages. Sommeil profond, REM, hippocampe et optimisation.',
  },
  {
    href: '/performance-cognitive/meditation-cerveau-benefices/',
    emoji: '🧘',
    title: 'Méditation & Cerveau',
    description: 'Neuroplasticité, réduction du cortisol et épaississement cortical. Les bénéfices cognitifs prouvés par la neuro-imagerie.',
  },
  {
    href: '/performance-cognitive/alimentation-cerveau-nutrition/',
    emoji: '🥗',
    title: 'Alimentation & Cerveau',
    description: 'Nutrition optimale pour la cognition. Régime MIND, polyphénols, glucose cérébral et micronutriments essentiels.',
  },
  {
    href: '/performance-cognitive/sport-bdnf-cognition/',
    emoji: '🏋️',
    title: 'Sport, BDNF & Cognition',
    description: 'L\'exercice physique stimule le BDNF et la neurogenèse. Cardio vs HIIT vs musculation : quel impact sur le cerveau ?',
  },
];

export default function PerformanceCognitiveHub() {
  const webPageSchema = getWebPageSchema({
    title: 'Performance Cognitive : Optimisez Votre Cerveau',
    description: 'Stratégies, suppléments et exercices pour améliorer concentration, mémoire et clarté mentale.',
    url: 'https://nootropios.com/performance-cognitive',
  });
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Accueil', url: 'https://nootropios.com' },
    { name: 'Performance Cognitive', url: 'https://nootropios.com/performance-cognitive' },
  ]);
  const organizationSchema = getOrganizationSchema();
  const faqSchema = getFAQSchema([
    {
      question: 'Comment améliorer ses performances cognitives naturellement ?',
      answer: 'L\'optimisation cognitive repose sur quatre piliers fondamentaux. Premièrement, le sommeil de qualité (7 à 9 heures) est le facteur le plus impactant sur la mémoire et la concentration. Deuxièmement, l\'exercice physique régulier augmente le BDNF de 30 à 40 %, favorisant la neuroplasticité. Troisièmement, une alimentation riche en oméga-3, en antioxydants et en polyphénols protège les neurones. Quatrièmement, les nootropiques naturels comme le bacopa monnieri, la L-théanine et le lion\'s mane complètent ces fondamentaux en ciblant des mécanismes spécifiques de la performance cérébrale.',
    },
    {
      question: 'Qu\'est-ce que le brouillard cérébral et comment s\'en débarrasser ?',
      answer: 'Le brouillard cérébral (brain fog) est un état de confusion mentale caractérisé par des difficultés de concentration, des trous de mémoire et un ralentissement cognitif. Ses causes principales sont le manque de sommeil, le stress chronique, les carences nutritionnelles (fer, B12, vitamine D), la neuroinflammation et les déséquilibres hormonaux. Pour le combattre, commencez par optimiser votre sommeil et gérer votre stress avec l\'ashwagandha (600 mg/jour). Le lion\'s mane (500 mg, 2 fois/jour) réduit la neuroinflammation. Vérifiez vos niveaux de fer, de B12 et de vitamine D par une prise de sang.',
    },
    {
      question: 'Les nootropiques sont-ils efficaces pour les examens ?',
      answer: 'Oui, certains nootropiques améliorent significativement les performances lors des examens. Le stack caféine (100 mg) + L-théanine (200 mg) améliore la vigilance et la concentration sans nervosité, avec un effet immédiat. Le bacopa monnieri (300 mg/jour) renforce la consolidation mnésique mais nécessite 8 semaines de cure préalable. La rhodiola rosea (400 mg) combat la fatigue mentale et le stress lié aux examens. L\'idéal est de commencer la supplémentation 2 à 3 mois avant la période d\'examens pour bénéficier des effets cumulatifs du bacopa et de la rhodiola.',
    },
    {
      question: 'La neuroplasticité peut-elle être stimulée à tout âge ?',
      answer: 'Oui, la neuroplasticité persiste tout au long de la vie, même si elle ralentit avec l\'âge. Le cerveau adulte produit encore de nouveaux neurones dans l\'hippocampe (neurogenèse) et peut former de nouvelles connexions synaptiques. L\'exercice aérobique est le stimulant le plus puissant du BDNF (brain-derived neurotrophic factor). L\'apprentissage de nouvelles compétences, la méditation et les exercices de mémoire de travail renforcent les circuits neuronaux. Côté suppléments, le lion\'s mane stimule le NGF, le bacopa favorise la ramification dendritique et les oméga-3 maintiennent la fluidité membranaire.',
    },
  ]);

  return (
    <main className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Gradient Header */}
      <header className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <nav className="text-blue-200 text-sm mb-6">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Performance Cognitive</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Performance Cognitive : Optimisez Votre Cerveau
          </h1>
          <p className="text-xl opacity-95 max-w-3xl mx-auto">
            Stratégies, <strong>suppléments</strong> et exercices validés par la science pour améliorer votre <strong>concentration</strong>, votre <strong>mémoire</strong> et votre <strong>clarté mentale</strong> au quotidien.
          </p>
        </div>
      </header>

      {/* EEAT Signal */}
      <div className="max-w-4xl mx-auto px-4 mt-8">
        <EEATSignal
          source="Nootropios"
          lastUpdated="Février 2026"
          method="Analyse basée sur les neurosciences cognitives et essais cliniques"
          colorScheme="blue"
        />
      </div>

      {/* Answer Capsule */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
          <p className="text-gray-800 leading-relaxed">
            La <strong>performance cognitive</strong> englobe l&apos;ensemble des capacités mentales qui déterminent votre efficacité intellectuelle : <strong>concentration</strong>, <strong>mémoire de travail</strong>, <strong>vitesse de traitement</strong>, <strong>flexibilité cognitive</strong> et <strong>clarté mentale</strong>. Ces fonctions reposent sur un réseau complexe de <strong>neurotransmetteurs</strong> (dopamine, acétylcholine, noradrénaline) et de facteurs neurotrophiques (BDNF, NGF).
          </p>
          <p className="text-gray-800 leading-relaxed mt-3">
            L&apos;optimisation cognitive ne se limite pas aux <strong>suppléments</strong>. Elle repose sur quatre piliers : un <strong>sommeil</strong> de qualité (7 à 9 heures), l&apos;<strong>exercice physique</strong> régulier (qui augmente le BDNF de 30 à 40 %), une <strong>alimentation</strong> riche en nutriments cérébraux et les <strong>nootropiques</strong> ciblés pour combler les lacunes spécifiques.
          </p>
          <p className="text-gray-800 leading-relaxed mt-3">
            Que vous soyez <strong>étudiant</strong> en période d&apos;examens, <strong>professionnel</strong> cherchant à maximiser votre productivité ou <strong>senior</strong> souhaitant préserver vos facultés, les approches que nous détaillons dans nos guides sont adaptables à chaque profil. L&apos;<strong>evidence-based</strong> est notre standard : chaque recommandation s&apos;appuie sur des <strong>études cliniques</strong> publiées dans des revues à comité de lecture.
          </p>
        </div>
      </section>

      {/* Spoke Card Grid */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">Guides de Performance Cognitive</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Explorez nos guides pour chaque dimension de la <strong>performance cognitive</strong>. Stratégies actionnables, suppléments validés et exercices pratiques.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {spokeCards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition border-t-4 border-indigo-500 group"
            >
              <div className="text-4xl mb-4">{card.emoji}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-indigo-600 transition">{card.title}</h3>
              <p className="text-gray-600 mb-4">{card.description}</p>
              <span className="text-indigo-600 font-semibold">Lire le guide &rarr;</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Detailed Content Section */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Les fondements de l&apos;optimisation cognitive</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          La <strong>performance cognitive</strong> est déterminée par l&apos;interaction entre votre <strong>génétique</strong>, votre <strong>environnement</strong> et vos <strong>habitudes</strong> quotidiennes. Les neurosciences modernes ont identifié les leviers les plus efficaces pour optimiser chacune de ces dimensions. Le <strong>sommeil profond</strong> est le moment où le cerveau consolide les apprentissages et élimine les déchets métaboliques via le système glymphatique, un processus découvert en 2012.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          La <strong>dopamine</strong> joue un rôle central dans la motivation et la concentration. Sa production peut être optimisée par l&apos;exposition à la lumière matinale, l&apos;exercice physique, la <strong>L-tyrosine</strong> et le <strong>mucuna pruriens</strong>. L&apos;<strong>acétylcholine</strong>, neurotransmetteur de la mémoire et de l&apos;apprentissage, est soutenue par la <strong>citicoline</strong> (CDP-choline) et l&apos;<strong>alpha-GPC</strong>. Le <strong>GABA</strong>, neurotransmetteur inhibiteur, est essentiel pour filtrer les distractions et maintenir le focus.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Au-delà des neurotransmetteurs, les <strong>facteurs neurotrophiques</strong> comme le <strong>BDNF</strong> et le <strong>NGF</strong> déterminent la capacité du cerveau à former de nouvelles connexions et à s&apos;adapter. L&apos;exercice aérobique est le stimulant naturel le plus puissant du BDNF, tandis que le <strong>lion&apos;s mane</strong> est le seul supplément ayant démontré une stimulation directe du NGF dans des études humaines. Cette approche multimodale est la clé d&apos;une <strong>optimisation cognitive</strong> durable.
        </p>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Questions Fréquentes sur la Performance Cognitive</h2>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Comment améliorer ses performances cognitives naturellement ?</h3>
              <p className="text-gray-700 leading-relaxed">
                L&apos;optimisation cognitive repose sur quatre piliers. Le <strong>sommeil de qualité</strong> (7 à 9 heures) est le facteur le plus impactant sur la mémoire. L&apos;<strong>exercice physique</strong> régulier augmente le BDNF de 30 à 40 %, favorisant la <strong>neuroplasticité</strong>. Une <strong>alimentation</strong> riche en oméga-3 et antioxydants protège les neurones. Les <strong>nootropiques naturels</strong> comme le bacopa, la L-théanine et le lion&apos;s mane complètent ces fondamentaux en ciblant des mécanismes spécifiques.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Qu&apos;est-ce que le brouillard cérébral et comment s&apos;en débarrasser ?</h3>
              <p className="text-gray-700 leading-relaxed">
                Le <strong>brouillard cérébral</strong> (brain fog) est un état de confusion mentale avec difficultés de concentration et trous de mémoire. Ses causes : manque de <strong>sommeil</strong>, stress chronique, carences (<strong>fer</strong>, B12, vitamine D) et <strong>neuroinflammation</strong>. Pour le combattre : optimisez votre sommeil, gérez le stress avec l&apos;<strong>ashwagandha</strong> (600 mg/jour), prenez du <strong>lion&apos;s mane</strong> (500 mg, 2 fois/jour) contre la neuroinflammation et vérifiez vos niveaux de fer et B12.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Les nootropiques sont-ils efficaces pour les examens ?</h3>
              <p className="text-gray-700 leading-relaxed">
                Oui, certains <strong>nootropiques</strong> améliorent les performances aux examens. Le stack <strong>caféine</strong> (100 mg) + <strong>L-théanine</strong> (200 mg) améliore la vigilance sans nervosité, avec un effet immédiat. Le <strong>bacopa monnieri</strong> (300 mg/jour) renforce la mémorisation mais nécessite 8 semaines de cure préalable. La <strong>rhodiola rosea</strong> (400 mg) combat la fatigue mentale et le stress. Commencez la supplémentation 2 à 3 mois avant les examens.
              </p>
            </div>
            <div className="pb-2">
              <h3 className="text-xl font-bold text-gray-900 mb-3">La neuroplasticité peut-elle être stimulée à tout âge ?</h3>
              <p className="text-gray-700 leading-relaxed">
                Oui, la <strong>neuroplasticité</strong> persiste toute la vie. Le cerveau adulte produit encore de nouveaux neurones dans l&apos;hippocampe. L&apos;<strong>exercice aérobique</strong> est le stimulant le plus puissant du <strong>BDNF</strong>. L&apos;apprentissage de nouvelles compétences, la <strong>méditation</strong> et les exercices de mémoire de travail renforcent les circuits neuronaux. Côté suppléments, le <strong>lion&apos;s mane</strong> stimule le NGF, le <strong>bacopa</strong> favorise la ramification dendritique et les <strong>oméga-3</strong> maintiennent la fluidité membranaire.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="max-w-4xl mx-auto px-4 py-8 pb-16">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Libérez le Potentiel de Votre Cerveau</h2>
          <p className="text-lg mb-6 opacity-95">
            Découvrez les nootropiques naturels et les protocoles optimisés pour votre profil cognitif.
          </p>
          <Link
            href="/nootropiques-naturels/"
            className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition inline-block"
          >
            Explorer les Nootropiques Naturels
          </Link>
        </div>
      </section>
    </main>
  );
}
