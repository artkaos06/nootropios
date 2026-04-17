import type { Metadata } from 'next';
import Link from 'next/link';
import { getWebPageSchema, getBreadcrumbSchema, getOrganizationSchema, getFAQSchema } from '@/lib/schema';
import EEATSignal from '@/components/EEATSignal';

export const metadata: Metadata = {
  title: 'Stacks & Protocoles Nootropiques | Nootropios',
  description: 'Protocoles de stacking nootropiques et boosters. Combinaisons optimales pour concentration, testostérone, anti-stress, sommeil et débutants.',
  keywords: [
    'stack nootropique',
    'protocole nootropique',
    'stack concentration',
    'stack testostérone',
    'protocole débutant nootropiques',
    'stack anti-stress',
    'stack sommeil récupération',
    'combinaison nootropiques',
    'stacking suppléments',
  ],
  alternates: { canonical: 'https://www.nootropios.fr/stacks-protocoles/' },
};

const spokeCards = [
  {
    href: '/stacks-protocoles/stack-concentration-travail/',
    emoji: '🎯',
    title: 'Stack Concentration & Travail',
    description: 'Le protocole optimal pour le deep work et la productivité. Caféine + L-théanine, citicoline, bacopa et timing d\'administration.',
  },
  {
    href: '/stacks-protocoles/stack-testosterone-naturelle/',
    emoji: '💪',
    title: 'Stack Testostérone Naturelle',
    description: 'Le protocole hormonal complet. Tongkat ali, zinc, magnésium, vitamine D3 et fenugrec : dosages, cycles et synergie optimale.',
  },
  {
    href: '/stacks-protocoles/protocole-debutant-nootropiques/',
    emoji: '🚀',
    title: 'Protocole Débutant Nootropiques',
    description: 'Commencez en toute sécurité avec notre guide pas à pas. Introduction progressive, dosages minimaux et montée en charge sur 12 semaines.',
  },
  {
    href: '/stacks-protocoles/stack-anti-stress-anxiete/',
    emoji: '🧘',
    title: 'Stack Anti-Stress & Anxiété',
    description: 'Ashwagandha, L-théanine, magnésium et rhodiola : le protocole pour réduire l\'anxiété et retrouver un calme durable sans somnolence.',
  },
  {
    href: '/stacks-protocoles/stack-sommeil-recuperation/',
    emoji: '🌙',
    title: 'Stack Sommeil & Récupération',
    description: 'Optimisez la qualité de votre sommeil et votre récupération. Magnésium, glycine, ashwagandha et mélatonine : protocole complet.',
  },
  {
    href: '/stacks-protocoles/stack-energie-matinale/',
    emoji: '☀️',
    title: 'Stack Énergie Matinale',
    description: 'Protocole morning routine : caféine + L-tyrosine + rhodiola + vitamines B. Démarrez la journée avec focus et énergie durable.',
  },
  {
    href: '/stacks-protocoles/stack-longevite-anti-age/',
    emoji: '🧬',
    title: 'Stack Longévité & Anti-Âge',
    description: 'CoQ10 + oméga-3 + curcumine + lion\'s mane. Protocole neuroprotection, mitochondries et vieillissement cérébral.',
  },
  {
    href: '/stacks-protocoles/stack-sport-performance/',
    emoji: '🏆',
    title: 'Stack Sport & Performance',
    description: 'Créatine + rhodiola + L-carnitine + magnésium. Protocole pré-entraînement, récupération et endurance pour athlètes naturels.',
  },
  {
    href: '/stacks-protocoles/stack-humeur-motivation/',
    emoji: '🎯',
    title: 'Stack Humeur & Motivation',
    description: 'L-tyrosine + mucuna + rhodiola + oméga-3. Protocole dopamine naturel pour retrouver motivation et bien-être.',
  },
  {
    href: '/stacks-protocoles/stack-immunite-hiver/',
    emoji: '🛡️',
    title: 'Stack Immunité Hiver',
    description: 'Vitamine D + zinc + vitamine C + échinacée + probiotiques. Protocole défenses naturelles pour la saison froide.',
  },
];

export default function StacksProtocolesHub() {
  const webPageSchema = getWebPageSchema({
    title: 'Stacks & Protocoles Nootropiques',
    description: 'Protocoles de stacking optimaux pour chaque objectif. Concentration, testostérone, anti-stress, sommeil et guide débutant.',
    url: 'https://www.nootropios.fr/stacks-protocoles/',
  });
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Accueil', url: 'https://www.nootropios.fr' },
    { name: 'Stacks & Protocoles', url: 'https://www.nootropios.fr/stacks-protocoles/' },
  ]);
  const organizationSchema = getOrganizationSchema();
  const faqSchema = getFAQSchema([
    {
      question: 'Qu\'est-ce qu\'un stack de nootropiques ?',
      answer: 'Un stack de nootropiques est une combinaison de deux ou plusieurs substances prises ensemble pour obtenir des effets synergiques supérieurs à chaque substance prise isolément. Le stack le plus connu est la combinaison caféine (100 mg) + L-théanine (200 mg), où la L-théanine élimine la nervosité de la caféine tout en renforçant la concentration. Les stacks avancés peuvent combiner 3 à 5 substances ciblant différents systèmes de neurotransmetteurs pour un effet complet. La clé est de comprendre les mécanismes d\'action de chaque composant pour éviter les redondances et les interactions négatives.',
    },
    {
      question: 'Comment construire son premier stack de nootropiques ?',
      answer: 'La règle fondamentale est de commencer simple et d\'ajouter progressivement. Semaines 1 à 2 : démarrez avec une seule substance (caféine + L-théanine ou ashwagandha selon votre objectif). Semaines 3 à 4 : si tout se passe bien, ajoutez un second composant. Semaines 5 à 8 : évaluez les résultats et ajustez les dosages. Ne dépassez jamais 4 substances actives simultanément en tant que débutant. Documentez vos ressentis quotidiennement pour identifier les effets de chaque ajout. Privilégiez les extraits standardisés de marques reconnues et respectez toujours les dosages validés par les études cliniques.',
    },
    {
      question: 'Les stacks de nootropiques sont-ils sûrs à long terme ?',
      answer: 'Les stacks composés de nootropiques naturels aux dosages recommandés présentent un bon profil de sécurité à long terme, d\'après les données disponibles. Cependant, la prudence impose de faire des pauses cycliques : 8 semaines de cure suivies de 1 à 2 semaines de pause pour la plupart des substances. Certains nootropiques comme le bacopa monnieri et le lion\'s mane peuvent être pris en continu. Les adaptogènes (ashwagandha, rhodiola) bénéficient de cycles pour maintenir leur efficacité. Consultez un professionnel de santé si vous prenez des médicaments pour vérifier l\'absence d\'interactions.',
    },
    {
      question: 'Quel budget prévoir pour un stack de nootropiques ?',
      answer: 'Le budget dépend de la complexité du stack. Un stack de base (caféine + L-théanine) coûte 10 à 15 euros par mois. Un stack intermédiaire (ashwagandha + bacopa + lion\'s mane) revient à 30 à 50 euros par mois avec des extraits de qualité. Un stack complet de testostérone (tongkat ali + zinc + magnésium + vitamine D3 + fenugrec) coûte 40 à 60 euros par mois. Privilégiez toujours la qualité des extraits standardisés plutôt que le prix. Les formes brevetées (KSM-66, LJ100, Testofen) garantissent des concentrations vérifiées en principes actifs.',
    },
  ]);

  return (
    <main className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Gradient Header */}
      <header className="bg-gradient-to-r from-purple-600 via-violet-600 to-purple-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <nav className="text-purple-200 text-sm mb-6">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Stacks &amp; Protocoles</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Stacks &amp; Protocoles Nootropiques
          </h1>
          <p className="text-xl opacity-95 max-w-3xl mx-auto">
            Des <strong>combinaisons optimales</strong> et des <strong>protocoles complets</strong> pour chaque objectif. Concentration, testostérone, anti-stress, sommeil et guide débutant.
          </p>
        </div>
      </header>

      {/* EEAT Signal */}
      <div className="max-w-4xl mx-auto px-4 mt-8">
        <EEATSignal
          source="Nootropios"
          lastUpdated="Février 2026"
          method="Protocoles basés sur les études cliniques et la pharmacologie"
          colorScheme="purple"
        />
      </div>

      {/* Answer Capsule */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
          <p className="text-gray-800 leading-relaxed">
            Le <strong>stacking</strong> est l&apos;art de combiner plusieurs <strong>nootropiques</strong> ou <strong>suppléments</strong> pour obtenir des effets <strong>synergiques</strong> supérieurs à chaque substance prise individuellement. Un bon <strong>stack</strong> cible différents mécanismes d&apos;action : <strong>neurotransmetteurs</strong>, <strong>neuroprotection</strong>, <strong>énergie mitochondriale</strong> et <strong>régulation hormonale</strong>, pour un résultat global optimisé.
          </p>
          <p className="text-gray-800 leading-relaxed mt-3">
            Nos <strong>protocoles</strong> sont conçus selon trois principes fondamentaux. Premièrement, chaque composant doit avoir une <strong>justification scientifique</strong> claire basée sur des essais cliniques. Deuxièmement, les <strong>dosages</strong> sont calibrés pour maximiser les synergies sans risque d&apos;interaction. Troisièmement, les <strong>cycles</strong> (périodes de cure et de pause) sont planifiés pour maintenir l&apos;efficacité et prévenir la tolérance.
          </p>
          <p className="text-gray-800 leading-relaxed mt-3">
            Que vous soyez un <strong>débutant complet</strong> cherchant un point de départ sûr ou un utilisateur avancé souhaitant optimiser son <strong>stack existant</strong>, nos guides détaillent chaque protocole étape par étape. Chaque stack inclut les <strong>dosages précis</strong>, le <strong>timing d&apos;administration</strong>, la <strong>durée des cycles</strong> et les <strong>alternatives</strong> possibles selon votre sensibilité et vos objectifs.
          </p>
        </div>
      </section>

      {/* Spoke Card Grid */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">Nos Protocoles de Stacking</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Choisissez le <strong>protocole</strong> adapté à votre objectif. Chaque stack est détaillé avec dosages, timing et cycles.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {spokeCards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition border-t-4 border-purple-500 group"
            >
              <div className="text-4xl mb-4">{card.emoji}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-purple-600 transition">{card.title}</h3>
              <p className="text-gray-600 mb-4">{card.description}</p>
              <span className="text-purple-600 font-semibold">Voir le protocole &rarr;</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Detailed Content Section */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Les principes du stacking efficace</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Un <strong>stack de nootropiques</strong> efficace repose sur la compréhension des <strong>mécanismes d&apos;action</strong> de chaque composant. L&apos;objectif est de cibler des voies biochimiques complémentaires pour obtenir un effet supérieur à la somme des parties. Par exemple, le stack <strong>caféine + L-théanine</strong> fonctionne parce que la caféine bloque les récepteurs d&apos;adénosine (effet stimulant) tandis que la L-théanine augmente l&apos;activité alpha cérébrale (effet relaxant), produisant une <strong>concentration calme et soutenue</strong>.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Les <strong>protocoles avancés</strong> combinent typiquement trois à cinq substances ciblant différents systèmes. Un stack cognitif complet pourrait inclure : un modulateur <strong>cholinergique</strong> (citicoline), un amplificateur de <strong>neuroplasticité</strong> (lion&apos;s mane), un <strong>adaptogène</strong> (ashwagandha) et un support <strong>dopaminergique</strong> (L-tyrosine). Chaque couche renforce les autres sans compétition sur les mêmes récepteurs.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Le <strong>timing d&apos;administration</strong> est tout aussi important que le choix des substances. Certains nootropiques sont plus efficaces le matin (caféine, L-tyrosine, rhodiola), d&apos;autres le soir (magnésium, glycine, ashwagandha). La <strong>cyclisation</strong> est essentielle pour éviter la tolérance : la plupart des substances bénéficient de 8 semaines de cure suivies de 1 à 2 semaines de pause. Nos protocoles détaillent le <strong>calendrier complet</strong> pour chaque stack.
        </p>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Questions Fréquentes sur les Stacks &amp; Protocoles</h2>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Qu&apos;est-ce qu&apos;un stack de nootropiques ?</h3>
              <p className="text-gray-700 leading-relaxed">
                Un <strong>stack de nootropiques</strong> est une combinaison de substances prises ensemble pour des effets <strong>synergiques</strong>. Le stack le plus connu est <strong>caféine</strong> (100 mg) + <strong>L-théanine</strong> (200 mg), où la L-théanine élimine la nervosité de la caféine tout en renforçant la concentration. Les stacks avancés combinent 3 à 5 substances ciblant différents systèmes de <strong>neurotransmetteurs</strong>. La clé est de comprendre les mécanismes d&apos;action pour éviter les redondances.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Comment construire son premier stack de nootropiques ?</h3>
              <p className="text-gray-700 leading-relaxed">
                Commencez simple et ajoutez progressivement. <strong>Semaines 1-2</strong> : une seule substance (caféine + L-théanine ou ashwagandha). <strong>Semaines 3-4</strong> : ajoutez un second composant. <strong>Semaines 5-8</strong> : évaluez et ajustez. Ne dépassez pas 4 substances actives simultanément en tant que <strong>débutant</strong>. Documentez vos ressentis quotidiennement. Privilégiez les <strong>extraits standardisés</strong> de marques reconnues et respectez les <strong>dosages</strong> validés cliniquement.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Les stacks de nootropiques sont-ils sûrs à long terme ?</h3>
              <p className="text-gray-700 leading-relaxed">
                Les stacks de <strong>nootropiques naturels</strong> aux dosages recommandés ont un bon profil de sécurité. La prudence impose des <strong>pauses cycliques</strong> : 8 semaines de cure, 1 à 2 semaines de pause. Le <strong>bacopa monnieri</strong> et le <strong>lion&apos;s mane</strong> peuvent être pris en continu. Les <strong>adaptogènes</strong> (ashwagandha, rhodiola) bénéficient de cycles pour maintenir leur efficacité. Consultez un professionnel de santé si vous prenez des médicaments.
              </p>
            </div>
            <div className="pb-2">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quel budget prévoir pour un stack de nootropiques ?</h3>
              <p className="text-gray-700 leading-relaxed">
                Un <strong>stack de base</strong> (caféine + L-théanine) coûte 10 à 15 euros par mois. Un <strong>stack intermédiaire</strong> (ashwagandha + bacopa + lion&apos;s mane) revient à 30 à 50 euros. Un <strong>stack testostérone</strong> complet coûte 40 à 60 euros par mois. Privilégiez la qualité des <strong>extraits standardisés</strong> (KSM-66, LJ100, Testofen) plutôt que le prix. Les formes brevetées garantissent des concentrations vérifiées en <strong>principes actifs</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="max-w-4xl mx-auto px-4 py-8 pb-16">
        <div className="bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Construisez Votre Stack Idéal</h2>
          <p className="text-lg mb-6 opacity-95">
            Explorez nos guides détaillés de nootropiques naturels et boosters pour choisir les composants de votre stack.
          </p>
          <Link
            href="/nootropiques-naturels/"
            className="bg-white text-purple-700 px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition inline-block"
          >
            Explorer les Nootropiques Naturels
          </Link>
        </div>
      </section>
    </main>
  );
}
