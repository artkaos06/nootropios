import type { Metadata } from 'next';
import Link from 'next/link';
import { getWebPageSchema, getBreadcrumbSchema, getOrganizationSchema, getFAQSchema } from '@/lib/schema';
import EEATSignal from '@/components/EEATSignal';

export const metadata: Metadata = {
  title: 'Comparatifs Nootropiques & Boosters 2026 : Guides VS | Nootropios',
  description: 'Comparaisons détaillées entre nootropiques et boosters de testostérone. Ashwagandha vs Rhodiola, Tongkat Ali vs Fenugrec, Bacopa vs Ginkgo et plus.',
  keywords: [
    'comparatif nootropiques',
    'ashwagandha vs rhodiola',
    'tongkat ali vs fenugrec',
    'bacopa vs ginkgo',
    'lion\'s mane vs bacopa',
    'créatine vs caféine cognition',
    'meilleur nootropique comparaison',
  ],
  alternates: { canonical: 'https://www.nootropios.fr/comparatifs/' },
};

const spokeCards = [
  {
    href: '/comparatifs/ashwagandha-vs-rhodiola/',
    emoji: '⚔️',
    title: 'Ashwagandha vs Rhodiola',
    description: 'Deux adaptogènes majeurs face à face. Cortisol, énergie, testostérone : lequel choisir selon vos objectifs ?',
  },
  {
    href: '/comparatifs/tongkat-ali-vs-fenugrec/',
    emoji: '🆚',
    title: 'Tongkat Ali vs Fenugrec',
    description: 'Les deux boosters de testostérone les plus populaires. Mécanismes, études cliniques et recommandations.',
  },
  {
    href: '/comparatifs/bacopa-vs-ginkgo-memoire/',
    emoji: '🧠',
    title: 'Bacopa vs Ginkgo : Mémoire',
    description: 'Mémoire et cognition : bacopa monnieri ou ginkgo biloba ? Analyse des mécanismes et preuves scientifiques.',
  },
  {
    href: '/comparatifs/lion-s-mane-vs-bacopa/',
    emoji: '🍄',
    title: 'Lion\'s Mane vs Bacopa',
    description: 'Neurogenèse vs consolidation mnésique. Deux approches complémentaires de la santé cérébrale.',
  },
  {
    href: '/comparatifs/creatine-vs-cafeine-cognition/',
    emoji: '⚡',
    title: 'Créatine vs Caféine : Cognition',
    description: 'Deux molécules très étudiées pour la performance mentale. Comparaison des mécanismes, durée d\'action et synergies.',
  },
  {
    href: '/comparatifs/maca-vs-tongkat-ali-libido/',
    emoji: '🔥',
    title: 'Maca vs Tongkat Ali : Libido',
    description: 'Deux plantes phares pour la libido et la vitalité sexuelle. Mécanismes hormonaux, études cliniques et recommandations.',
  },
  {
    href: '/comparatifs/ksm-66-vs-sensoril/',
    emoji: '🏷️',
    title: 'KSM-66 vs Sensoril',
    description: 'Deux extraits brevetés d\'ashwagandha face à face. Concentration en withanolides, études et usages optimaux.',
  },
  {
    href: '/comparatifs/ubiquinol-vs-ubiquinone/',
    emoji: '🔋',
    title: 'Ubiquinol vs Ubiquinone',
    description: 'Les deux formes de CoQ10 comparées. Biodisponibilité, énergie mitochondriale et protection antioxydante.',
  },
  {
    href: '/comparatifs/cordyceps-vs-rhodiola-endurance/',
    emoji: '🏔️',
    title: 'Cordyceps vs Rhodiola : Endurance',
    description: 'Deux adaptogènes pour l\'endurance et la performance physique. VO2max, ATP et résistance à la fatigue.',
  },
  {
    href: '/comparatifs/citicoline-vs-alpha-gpc/',
    emoji: '💊',
    title: 'Citicoline vs Alpha-GPC',
    description: 'Les deux meilleures sources de choline comparées. Acétylcholine, neuroprotection et performance cognitive.',
  },
];

export default function ComparatifsHub() {
  const webPageSchema = getWebPageSchema({
    title: 'Comparatifs Nootropiques & Boosters de Testostérone 2026',
    description: 'Comparaisons détaillées entre nootropiques et boosters de testostérone. Études cliniques, mécanismes et recommandations personnalisées.',
    url: 'https://www.nootropios.fr/comparatifs/',
  });
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Accueil', url: 'https://www.nootropios.fr' },
    { name: 'Comparatifs', url: 'https://www.nootropios.fr/comparatifs/' },
  ]);
  const organizationSchema = getOrganizationSchema();
  const faqSchema = getFAQSchema([
    {
      question: 'Pourquoi comparer les nootropiques entre eux ?',
      answer: 'Comparer les nootropiques permet de choisir la substance la mieux adaptée à vos objectifs spécifiques. Chaque nootropique agit sur des mécanismes biologiques différents : l\'ashwagandha cible le cortisol et l\'axe HPA, la rhodiola rosea agit sur les enzymes MAO et le métabolisme énergétique, le bacopa monnieri renforce les connexions synaptiques. Comprendre ces différences vous aide à personnaliser votre stack et à éviter les redondances. Nos comparatifs s\'appuient sur les études cliniques randomisées et les méta-analyses pour des recommandations fondées sur la science.',
    },
    {
      question: 'Peut-on combiner deux nootropiques comparés plutôt que d\'en choisir un seul ?',
      answer: 'Oui, dans de nombreux cas, combiner deux nootropiques est plus efficace que d\'en choisir un seul, grâce à la synergie entre mécanismes complémentaires. Par exemple, l\'ashwagandha et la rhodiola rosea ciblent le stress par des voies différentes et se potentialisent mutuellement. Le bacopa monnieri et le lion\'s mane agissent sur des aspects distincts de la santé cérébrale. La clé est d\'introduire chaque substance séparément, avec 2 semaines d\'intervalle, pour évaluer votre tolérance individuelle avant de les combiner dans un stack.',
    },
    {
      question: 'Quel est le critère le plus important pour choisir un nootropique ?',
      answer: 'Le critère le plus important est l\'adéquation entre le mécanisme d\'action du nootropique et votre objectif personnel. Si votre priorité est la réduction du stress, un adaptogène comme l\'ashwagandha ou la rhodiola sera plus pertinent. Pour la mémoire à long terme, le bacopa monnieri est le plus documenté. Pour la neurogenèse et la santé cérébrale à long terme, le lion\'s mane est le choix optimal. Les études cliniques, la qualité de l\'extrait et votre réponse individuelle sont les trois facteurs à considérer dans votre décision.',
    },
    {
      question: 'Les comparatifs tiennent-ils compte des effets secondaires ?',
      answer: 'Absolument. Chaque comparatif détaille le profil de sécurité des deux substances comparées, incluant les effets secondaires fréquents, les contre-indications, les interactions médicamenteuses et les précautions d\'emploi. Le rapport bénéfice-risque est un critère essentiel de nos recommandations. Par exemple, le ginkgo biloba interagit avec les anticoagulants tandis que le bacopa monnieri est généralement mieux toléré. Ces différences de sécurité peuvent orienter votre choix, surtout si vous prenez des médicaments ou avez des conditions de santé particulières.',
    },
  ]);

  return (
    <main className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Gradient Header */}
      <header className="bg-gradient-to-r from-teal-600 via-cyan-600 to-teal-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <nav className="text-teal-200 text-sm mb-6">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Comparatifs</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Comparatifs Nootropiques &amp; Boosters 2026
          </h1>
          <p className="text-xl opacity-95 max-w-3xl mx-auto">
            Des <strong>comparaisons détaillées</strong> entre les <strong>nootropiques</strong> et <strong>boosters de testostérone</strong> les plus populaires. Mécanismes, <strong>études cliniques</strong>, dosages et recommandations personnalisées.
          </p>
        </div>
      </header>

      {/* EEAT Signal */}
      <div className="max-w-4xl mx-auto px-4 mt-8">
        <EEATSignal
          source="Nootropios"
          lastUpdated="Février 2026"
          method="Analyse comparative basée sur les études cliniques et méta-analyses publiées"
          colorScheme="teal"
        />
      </div>

      {/* Answer Capsule */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-teal-50 border-l-4 border-teal-500 p-6 rounded-r-lg">
          <p className="text-gray-800 leading-relaxed">
            Choisir le bon <strong>nootropique</strong> ou <strong>booster de testostérone</strong> parmi les dizaines de substances disponibles peut sembler complexe. Chaque complément agit sur des <strong>mécanismes biologiques</strong> distincts : modulation du <strong>cortisol</strong>, stimulation de la <strong>neurogenèse</strong>, soutien de l&apos;axe <strong>hypothalamo-hypophyso-gonadique</strong> ou optimisation du <strong>métabolisme énergétique</strong> cérébral.
          </p>
          <p className="text-gray-800 leading-relaxed mt-3">
            Nos comparatifs analysent chaque paire de substances selon cinq critères : <strong>mécanisme d&apos;action</strong>, <strong>preuves scientifiques</strong>, <strong>profil de sécurité</strong>, <strong>délai d&apos;action</strong> et <strong>synergie potentielle</strong>. L&apos;objectif n&apos;est pas simplement de désigner un &laquo; gagnant &raquo;, mais de vous aider à identifier la substance la mieux adaptée à vos objectifs personnels et à votre profil.
          </p>
          <p className="text-gray-800 leading-relaxed mt-3">
            Dans de nombreux cas, la meilleure stratégie est de <strong>combiner</strong> deux substances complémentaires dans un <strong>stack</strong> bien dosé. Nos guides vous indiquent quand et comment associer les <strong>nootropiques naturels</strong> pour maximiser les bénéfices grâce à la <strong>synergie</strong> entre mécanismes d&apos;action différents, tout en minimisant les risques d&apos;<strong>interactions</strong>.
          </p>
        </div>
      </section>

      {/* Spoke Card Grid */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">Nos Comparatifs Détaillés</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Explorez nos analyses comparatives pour faire le meilleur choix selon vos objectifs. Chaque guide couvre les <strong>études cliniques</strong>, les dosages et les recommandations.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {spokeCards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition border-t-4 border-teal-500 group"
            >
              <div className="text-4xl mb-4">{card.emoji}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-teal-600 transition">{card.title}</h3>
              <p className="text-gray-600 mb-4">{card.description}</p>
              <span className="text-teal-600 font-semibold">Lire le comparatif &rarr;</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Comment utiliser nos comparatifs</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Chaque <strong>comparatif</strong> est structuré de manière identique pour faciliter votre prise de décision. Nous commençons par une présentation des deux substances, suivie d&apos;une analyse détaillée de leurs <strong>mécanismes d&apos;action</strong> respectifs. Les <strong>études cliniques</strong> pertinentes sont citées avec leurs résultats chiffrés, vous permettant de juger de la solidité des preuves scientifiques.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Nous comparons ensuite les <strong>dosages optimaux</strong>, les <strong>effets secondaires</strong> potentiels et les <strong>interactions</strong> connues. Un tableau récapitulatif vous donne une vision d&apos;ensemble rapide. Enfin, nos recommandations personnalisées vous orientent vers la substance la plus adaptée en fonction de vos objectifs spécifiques : <strong>gestion du stress</strong>, <strong>amélioration de la mémoire</strong>, <strong>optimisation hormonale</strong> ou <strong>performance cognitive</strong> au quotidien.
        </p>
        <p className="text-gray-700 leading-relaxed">
          N&apos;oubliez pas que la réponse individuelle varie d&apos;une personne à l&apos;autre. Les facteurs génétiques, le niveau de stress, l&apos;alimentation et le mode de vie influencent l&apos;efficacité de chaque <strong>nootropique</strong>. Nos comparatifs vous donnent les informations nécessaires pour faire un choix éclairé, mais la meilleure approche reste de tester personnellement les substances en commençant par des doses faibles et en documentant vos ressentis. Consultez nos <Link href="/stacks-protocoles/" className="text-teal-600 hover:text-teal-800 underline">guides de stacks et protocoles</Link> pour des recommandations de combinaisons optimales.
        </p>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Questions Fréquentes sur les Comparatifs</h2>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Pourquoi comparer les nootropiques entre eux ?</h3>
              <p className="text-gray-700 leading-relaxed">
                Comparer les <strong>nootropiques</strong> permet de choisir la substance la mieux adaptée à vos objectifs. Chaque nootropique agit sur des <strong>mécanismes biologiques</strong> différents : l&apos;<strong>ashwagandha</strong> cible le <strong>cortisol</strong> et l&apos;axe HPA, la <strong>rhodiola rosea</strong> agit sur les enzymes MAO, le <strong>bacopa monnieri</strong> renforce les connexions synaptiques. Comprendre ces différences vous aide à personnaliser votre <strong>stack</strong> et à éviter les redondances.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Peut-on combiner deux nootropiques comparés plutôt que d&apos;en choisir un seul ?</h3>
              <p className="text-gray-700 leading-relaxed">
                Oui, dans de nombreux cas, combiner deux <strong>nootropiques</strong> est plus efficace que d&apos;en choisir un seul, grâce à la <strong>synergie</strong> entre mécanismes complémentaires. Par exemple, l&apos;<strong>ashwagandha</strong> et la <strong>rhodiola</strong> ciblent le stress par des voies différentes. Le <strong>bacopa</strong> et le <strong>lion&apos;s mane</strong> agissent sur des aspects distincts de la santé cérébrale. Introduisez chaque substance séparément, avec 2 semaines d&apos;intervalle.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quel est le critère le plus important pour choisir un nootropique ?</h3>
              <p className="text-gray-700 leading-relaxed">
                Le critère le plus important est l&apos;adéquation entre le <strong>mécanisme d&apos;action</strong> du nootropique et votre objectif. Pour le <strong>stress</strong>, un <strong>adaptogène</strong> comme l&apos;ashwagandha ou la rhodiola est plus pertinent. Pour la <strong>mémoire</strong>, le bacopa monnieri est le plus documenté. Pour la <strong>neurogenèse</strong>, le lion&apos;s mane est optimal. Les <strong>études cliniques</strong>, la qualité de l&apos;extrait et votre réponse individuelle sont les trois facteurs clés.
              </p>
            </div>
            <div className="pb-2">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Les comparatifs tiennent-ils compte des effets secondaires ?</h3>
              <p className="text-gray-700 leading-relaxed">
                Absolument. Chaque comparatif détaille le <strong>profil de sécurité</strong> des deux substances, incluant les <strong>effets secondaires</strong>, les contre-indications et les <strong>interactions médicamenteuses</strong>. Le rapport bénéfice-risque est un critère essentiel. Par exemple, le <strong>ginkgo biloba</strong> interagit avec les anticoagulants tandis que le <strong>bacopa</strong> est généralement mieux toléré. Ces différences peuvent orienter votre choix.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="max-w-4xl mx-auto px-4 py-8 pb-16">
        <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Prêt à Créer Votre Stack Optimal ?</h2>
          <p className="text-lg mb-6 opacity-95">
            Après avoir identifié les substances qui vous conviennent, découvrez comment les combiner efficacement.
          </p>
          <Link
            href="/stacks-protocoles/"
            className="bg-white text-teal-700 px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition inline-block"
          >
            Voir les Stacks &amp; Protocoles
          </Link>
        </div>
      </section>
    </main>
  );
}
