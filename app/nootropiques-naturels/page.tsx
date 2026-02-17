import type { Metadata } from 'next';
import Link from 'next/link';
import { getWebPageSchema, getBreadcrumbSchema, getOrganizationSchema, getFAQSchema } from '@/lib/schema';
import EEATSignal from '@/components/EEATSignal';

export const metadata: Metadata = {
  title: 'Nootropiques Naturels : Guide Complet 2026 | Nootropios',
  description: 'Découvrez les meilleurs nootropiques naturels : ashwagandha, bacopa, rhodiola, lion\'s mane, ginkgo. Études cliniques, dosages et avis experts.',
  keywords: [
    'nootropiques naturels',
    'nootropique naturel',
    'ashwagandha avis',
    'bacopa monnieri',
    'rhodiola rosea',
    'lion\'s mane',
    'ginkgo biloba',
    'suppléments cognitifs naturels',
    'booster cerveau naturel',
  ],
  alternates: { canonical: 'https://nootropios.com/nootropiques-naturels' },
};

const spokeCards = [
  {
    href: '/nootropiques-naturels/ashwagandha-avis/',
    emoji: '🌿',
    title: 'Ashwagandha : Avis & Guide',
    description: 'Adaptogène majeur pour le stress, le cortisol et la testostérone. Dosages KSM-66, études cliniques et retours utilisateurs.',
  },
  {
    href: '/nootropiques-naturels/bacopa-monnieri-guide/',
    emoji: '🧠',
    title: 'Bacopa Monnieri : Guide Complet',
    description: 'Mémoire, apprentissage et neuroprotection. Le nootropique ayurvédique le plus étudié avec plus de 20 essais cliniques.',
  },
  {
    href: '/nootropiques-naturels/rhodiola-rosea-bienfaits/',
    emoji: '🏔️',
    title: 'Rhodiola Rosea : Bienfaits',
    description: 'Adaptogène anti-fatigue et anti-stress. Améliorez vos performances physiques et cognitives sous pression.',
  },
  {
    href: '/nootropiques-naturels/lion-s-mane-champignon/',
    emoji: '🍄',
    title: 'Lion\'s Mane : Champignon Cognitif',
    description: 'Le champignon de la neuroplasticité. Stimule le NGF et le BDNF pour la régénération neuronale et la clarté mentale.',
  },
  {
    href: '/nootropiques-naturels/ginkgo-biloba-memoire/',
    emoji: '🌳',
    title: 'Ginkgo Biloba & Mémoire',
    description: 'Circulation cérébrale, mémoire et protection antioxydante. L\'un des plus anciens remèdes cognitifs au monde.',
  },
  {
    href: '/nootropiques-naturels/l-theanine-relaxation/',
    emoji: '🍵',
    title: 'L-Théanine : Relaxation & Focus',
    description: 'L\'acide aminé du thé vert pour la relaxation sans somnolence. Synergie avec la caféine, ondes alpha et concentration calme.',
  },
  {
    href: '/nootropiques-naturels/curcumine-cerveau/',
    emoji: '🟡',
    title: 'Curcumine & Cerveau',
    description: 'Anti-inflammatoire cérébral puissant et neuroprotecteur. Biodisponibilité (Longvida, Meriva), BDNF et études cliniques.',
  },
  {
    href: '/nootropiques-naturels/omega-3-dha-cerveau/',
    emoji: '🐟',
    title: 'Oméga-3 DHA & Cerveau',
    description: '60 % des lipides cérébraux sont des acides gras. Le DHA est essentiel pour la mémoire, la neuroprotection et la santé mentale.',
  },
  {
    href: '/nootropiques-naturels/mucuna-pruriens-dopamine/',
    emoji: '🫘',
    title: 'Mucuna Pruriens & Dopamine',
    description: 'Source naturelle de L-DOPA, précurseur direct de la dopamine. Motivation, humeur et soutien de la testostérone.',
  },
  {
    href: '/nootropiques-naturels/phosphatidylserine-memoire/',
    emoji: '🧬',
    title: 'Phosphatidylsérine & Mémoire',
    description: 'Phospholipide clé des membranes neuronales. Réduction du cortisol, amélioration de la mémoire et soutien cognitif global.',
  },
];

export default function NootropiquesNaturelsHub() {
  const webPageSchema = getWebPageSchema({
    title: 'Nootropiques Naturels : Guide Complet 2026',
    description: 'Découvrez les meilleurs nootropiques naturels validés par la science. Ashwagandha, bacopa, rhodiola, lion\'s mane et ginkgo biloba.',
    url: 'https://nootropios.com/nootropiques-naturels',
  });
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Accueil', url: 'https://nootropios.com' },
    { name: 'Nootropiques Naturels', url: 'https://nootropios.com/nootropiques-naturels' },
  ]);
  const organizationSchema = getOrganizationSchema();
  const faqSchema = getFAQSchema([
    {
      question: 'Quel est le meilleur nootropique naturel pour commencer ?',
      answer: 'Le meilleur nootropique naturel pour les débutants est l\'ashwagandha KSM-66, dosé à 600 mg par jour. Cet adaptogène réduit le cortisol de 27 % en moyenne et améliore la résistance au stress en seulement 8 semaines, selon une étude publiée dans le Journal of the American Nutraceutical Association. Son profil de sécurité est excellent avec très peu d\'effets secondaires rapportés. En alternative, le stack caféine (100 mg) + L-théanine (200 mg) offre des résultats immédiats sur la concentration et la vigilance sans les effets négatifs du café seul.',
    },
    {
      question: 'Les nootropiques naturels ont-ils des effets secondaires ?',
      answer: 'Les nootropiques naturels présentent généralement un excellent profil de sécurité lorsqu\'ils sont pris aux dosages recommandés. L\'ashwagandha peut provoquer de légers troubles digestifs chez certaines personnes. Le bacopa monnieri est parfois associé à des nausées en début de cure, qui disparaissent en prenant le complément avec un repas. Le ginkgo biloba peut interagir avec les anticoagulants. La rhodiola rosea est déconseillée en cas de trouble bipolaire. Il est essentiel de respecter les dosages, de consulter un professionnel de santé en cas de traitement médicamenteux et de faire des pauses cycliques.',
    },
    {
      question: 'Combien de temps faut-il pour ressentir les effets des nootropiques naturels ?',
      answer: 'Le délai varie selon la substance. Les effets de la caféine + L-théanine sont immédiats, en 30 à 60 minutes. L\'ashwagandha et la rhodiola rosea montrent des résultats significatifs en 2 à 4 semaines d\'utilisation continue. Le bacopa monnieri nécessite 8 à 12 semaines pour un effet optimal sur la mémoire, car il agit par un mécanisme de neuroplasticité progressive. Le lion\'s mane requiert 4 à 8 semaines pour la stimulation du NGF. La patience est clé : les nootropiques naturels agissent en profondeur sur la biochimie cérébrale plutôt qu\'en surface.',
    },
    {
      question: 'Peut-on combiner plusieurs nootropiques naturels ensemble ?',
      answer: 'Oui, la combinaison de nootropiques naturels, appelée stacking, est une pratique courante et souvent bénéfique grâce aux effets synergiques. Un stack classique pour la cognition associe le bacopa monnieri (300 mg) avec le lion\'s mane (500 mg) et la L-théanine (200 mg). Pour le stress et la performance, l\'ashwagandha (600 mg) se combine bien avec la rhodiola rosea (400 mg). La règle d\'or est de ne jamais introduire plus d\'une substance à la fois, d\'attendre 2 semaines entre chaque ajout et de documenter vos ressentis pour identifier ce qui fonctionne pour vous.',
    },
  ]);

  return (
    <main className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Gradient Header */}
      <header className="bg-gradient-to-r from-green-600 via-emerald-600 to-green-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <nav className="text-green-200 text-sm mb-6">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Nootropiques Naturels</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Nootropiques Naturels : Guide Complet 2026
          </h1>
          <p className="text-xl opacity-95 max-w-3xl mx-auto">
            Les <strong>substances naturelles</strong> les plus efficaces pour optimiser votre <strong>cerveau</strong>, validées par la recherche scientifique. Ashwagandha, bacopa, rhodiola, lion&apos;s mane et ginkgo biloba.
          </p>
        </div>
      </header>

      {/* EEAT Signal */}
      <div className="max-w-4xl mx-auto px-4 mt-8">
        <EEATSignal
          source="Nootropios"
          lastUpdated="Février 2026"
          method="Analyse basée sur les études cliniques et méta-analyses publiées"
          colorScheme="green"
        />
      </div>

      {/* Answer Capsule */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
          <p className="text-gray-800 leading-relaxed">
            Les <strong>nootropiques naturels</strong> sont des substances d&apos;origine végétale, fongique ou aminoacide qui améliorent les <strong>fonctions cognitives</strong> sans les risques des molécules synthétiques. Ils agissent sur les <strong>neurotransmetteurs</strong> (dopamine, acétylcholine, sérotonine, GABA), la <strong>neuroplasticité</strong> et la <strong>neuroprotection</strong> pour offrir des bénéfices durables sur la mémoire, la concentration et la clarté mentale.
          </p>
          <p className="text-gray-800 leading-relaxed mt-3">
            Parmi les plus étudiés, l&apos;<strong>ashwagandha</strong> réduit le cortisol et améliore la résistance au stress, le <strong>bacopa monnieri</strong> renforce la mémoire à long terme, la <strong>rhodiola rosea</strong> combat la fatigue mentale, le <strong>lion&apos;s mane</strong> stimule la production de facteur de croissance nerveuse (NGF) et le <strong>ginkgo biloba</strong> optimise la circulation cérébrale.
          </p>
          <p className="text-gray-800 leading-relaxed mt-3">
            Contrairement aux stimulants classiques, ces <strong>adaptogènes</strong> et <strong>nootropiques végétaux</strong> travaillent en synergie avec la biochimie de votre organisme. Ils ne provoquent ni dépendance ni tolérance et leurs effets se renforcent avec le temps. La clé réside dans le choix du bon <strong>dosage</strong>, de la bonne <strong>forme galénique</strong> et d&apos;un <strong>protocole de cure</strong> adapté à vos objectifs personnels.
          </p>
        </div>
      </section>

      {/* Spoke Card Grid */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">Guides des Nootropiques Naturels</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Explorez nos guides détaillés pour chaque <strong>nootropique naturel</strong>. Dosages, études cliniques, effets secondaires et protocoles optimaux.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {spokeCards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition border-t-4 border-emerald-500 group"
            >
              <div className="text-4xl mb-4">{card.emoji}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-emerald-600 transition">{card.title}</h3>
              <p className="text-gray-600 mb-4">{card.description}</p>
              <span className="text-emerald-600 font-semibold">Lire le guide &rarr;</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Detailed Content Section */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Pourquoi choisir des nootropiques naturels ?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Le marché des <strong>compléments alimentaires cognitifs</strong> en France a connu une croissance de 45 % entre 2022 et 2025, selon les données de Synadiet. Cette tendance reflète une prise de conscience croissante : il est possible d&apos;améliorer ses <strong>performances mentales</strong> sans recourir aux médicaments. Les <strong>nootropiques naturels</strong> offrent une approche progressive et durable, en ciblant les mécanismes fondamentaux de la <strong>santé cérébrale</strong>.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Les <strong>adaptogènes</strong> comme l&apos;ashwagandha et la rhodiola régulent l&apos;axe hypothalamo-hypophyso-surrénalien (HPA), réduisant le <strong>cortisol</strong> chronique qui altère la mémoire et la concentration. Les champignons médicinaux comme le <strong>lion&apos;s mane</strong> stimulent directement la production de <strong>facteurs neurotrophiques</strong> (NGF et BDNF), favorisant la création de nouvelles connexions neuronales et la <strong>neuroplasticité</strong>.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Le <strong>bacopa monnieri</strong>, utilisé depuis plus de 3 000 ans en médecine ayurvédique, a fait l&apos;objet de plus de 20 essais cliniques randomisés démontrant son efficacité sur la <strong>consolidation mnésique</strong>. Le <strong>ginkgo biloba</strong>, quant à lui, améliore la microcirculation cérébrale et la <strong>protection antioxydante</strong> des neurones, ce qui en fait un allié précieux pour les personnes de plus de 50 ans.
        </p>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Questions Fréquentes sur les Nootropiques Naturels</h2>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quel est le meilleur nootropique naturel pour commencer ?</h3>
              <p className="text-gray-700 leading-relaxed">
                Le meilleur <strong>nootropique naturel</strong> pour les débutants est l&apos;<strong>ashwagandha KSM-66</strong>, dosé à 600 mg par jour. Cet <strong>adaptogène</strong> réduit le cortisol de 27 % en moyenne et améliore la résistance au stress en seulement 8 semaines. Son profil de sécurité est excellent avec très peu d&apos;effets secondaires rapportés. En alternative, le stack <strong>caféine</strong> (100 mg) + <strong>L-théanine</strong> (200 mg) offre des résultats immédiats sur la concentration et la vigilance.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Les nootropiques naturels ont-ils des effets secondaires ?</h3>
              <p className="text-gray-700 leading-relaxed">
                Les <strong>nootropiques naturels</strong> présentent généralement un excellent profil de sécurité lorsqu&apos;ils sont pris aux dosages recommandés. L&apos;<strong>ashwagandha</strong> peut provoquer de légers troubles digestifs chez certaines personnes. Le <strong>bacopa monnieri</strong> est parfois associé à des nausées en début de cure, qui disparaissent en le prenant avec un repas. Le <strong>ginkgo biloba</strong> peut interagir avec les anticoagulants. Il est essentiel de respecter les dosages et de consulter un professionnel de santé en cas de traitement médicamenteux.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Combien de temps faut-il pour ressentir les effets des nootropiques naturels ?</h3>
              <p className="text-gray-700 leading-relaxed">
                Le délai varie selon la substance. Les effets de la <strong>caféine + L-théanine</strong> sont immédiats, en 30 à 60 minutes. L&apos;<strong>ashwagandha</strong> et la <strong>rhodiola rosea</strong> montrent des résultats significatifs en 2 à 4 semaines d&apos;utilisation continue. Le <strong>bacopa monnieri</strong> nécessite 8 à 12 semaines pour un effet optimal sur la mémoire, car il agit par un mécanisme de <strong>neuroplasticité progressive</strong>. Le <strong>lion&apos;s mane</strong> requiert 4 à 8 semaines pour la stimulation du NGF.
              </p>
            </div>
            <div className="pb-2">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Peut-on combiner plusieurs nootropiques naturels ensemble ?</h3>
              <p className="text-gray-700 leading-relaxed">
                Oui, la combinaison de <strong>nootropiques naturels</strong>, appelée <strong>stacking</strong>, est une pratique courante et bénéfique grâce aux effets synergiques. Un stack classique associe le <strong>bacopa monnieri</strong> (300 mg) avec le <strong>lion&apos;s mane</strong> (500 mg) et la <strong>L-théanine</strong> (200 mg). Pour le stress, l&apos;<strong>ashwagandha</strong> (600 mg) se combine bien avec la <strong>rhodiola rosea</strong> (400 mg). La règle d&apos;or est de ne jamais introduire plus d&apos;une substance à la fois.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="max-w-4xl mx-auto px-4 py-8 pb-16">
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Prêt à Booster Votre Cerveau Naturellement ?</h2>
          <p className="text-lg mb-6 opacity-95">
            Découvrez nos protocoles de stacking et nos guides détaillés pour chaque nootropique naturel.
          </p>
          <Link
            href="/stacks-protocoles/"
            className="bg-white text-green-700 px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition inline-block"
          >
            Voir les Stacks &amp; Protocoles
          </Link>
        </div>
      </section>
    </main>
  );
}
