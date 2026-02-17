import type { Metadata } from 'next';
import Link from 'next/link';
import { getWebPageSchema, getBreadcrumbSchema, getOrganizationSchema, getFAQSchema } from '@/lib/schema';
import EEATSignal from '@/components/EEATSignal';

export const metadata: Metadata = {
  title: 'Énergie & Vitalité : Retrouvez Votre Potentiel',
  description: 'Combattez la fatigue avec des solutions naturelles : créatine, CoQ10, adaptogènes, fer. Retrouvez une énergie durable et optimisez votre vitalité.',
  keywords: [
    'énergie vitalité',
    'combattre fatigue naturellement',
    'créatine énergie',
    'CoQ10 mitochondries',
    'adaptogènes fatigue',
    'carence fer énergie',
    'rhodiola endurance',
    'énergie durable',
    'vitalité suppléments',
  ],
  alternates: { canonical: 'https://nootropios.com/energie-vitalite' },
};

const spokeCards = [
  {
    href: '/energie-vitalite/creatine-energie-cerebrale/',
    emoji: '⚡',
    title: 'Créatine & Énergie Cérébrale',
    description: 'La créatine n\'est pas que pour les muscles. Découvrez son rôle crucial dans la production d\'ATP cérébral et la performance cognitive.',
  },
  {
    href: '/energie-vitalite/coq10-mitochondries/',
    emoji: '🔋',
    title: 'CoQ10 & Mitochondries',
    description: 'Le coenzyme Q10 est essentiel à la chaîne de transport d\'électrons mitochondriale. Dosages, formes et bénéfices sur l\'énergie cellulaire.',
  },
  {
    href: '/energie-vitalite/adaptogenes-fatigue-chronique/',
    emoji: '🌿',
    title: 'Adaptogènes & Fatigue Chronique',
    description: 'Ashwagandha, rhodiola, éleuthérocoque : les adaptogènes qui combattent la fatigue en régulant l\'axe du stress et le cortisol.',
  },
  {
    href: '/energie-vitalite/fer-energie-carence/',
    emoji: '🩸',
    title: 'Fer, Énergie & Carence',
    description: 'La carence en fer est la cause de fatigue la plus fréquente en France. Dépistage, formes de supplémentation et protocole de correction.',
  },
  {
    href: '/energie-vitalite/rhodiola-endurance-physique/',
    emoji: '🏃',
    title: 'Rhodiola & Endurance Physique',
    description: 'L\'adaptogène de la performance physique. Comment la rhodiola rosea améliore l\'endurance, réduit la fatigue et accélère la récupération.',
  },
  {
    href: '/energie-vitalite/vitamines-b-energie/',
    emoji: '💊',
    title: 'Vitamines B & Énergie',
    description: 'Le complexe B est essentiel au métabolisme énergétique. B12, B6, folate : formes actives, carences fréquentes et dosages.',
  },
  {
    href: '/energie-vitalite/l-carnitine-metabolisme/',
    emoji: '🔥',
    title: 'L-Carnitine & Métabolisme',
    description: 'Transport des acides gras vers les mitochondries. ALCAR pour le cerveau, L-carnitine tartrate pour le sport.',
  },
  {
    href: '/energie-vitalite/magnesium-formes-guide/',
    emoji: '✨',
    title: 'Magnésium : Guide des Formes',
    description: 'Bisglycinate, thréonate, taurate, citrate : quelle forme choisir selon vos objectifs ? Sommeil, stress, sport et cognition.',
  },
  {
    href: '/energie-vitalite/ginseng-panax-energie/',
    emoji: '🌿',
    title: 'Ginseng Panax & Énergie',
    description: 'Le roi des adaptogènes. Ginsénosides, énergie, cognition, immunité. L\'adaptogène royal pour la vitalité globale.',
  },
  {
    href: '/energie-vitalite/tyrosine-dopamine-energie/',
    emoji: '⚡',
    title: 'L-Tyrosine & Dopamine',
    description: 'Précurseur de la dopamine et de la noradrénaline. Focus sous stress, énergie mentale et performances sous pression.',
  },
];

export default function EnergieVitaliteHub() {
  const webPageSchema = getWebPageSchema({
    title: 'Énergie & Vitalité : Retrouvez Votre Potentiel',
    description: 'Solutions naturelles pour combattre la fatigue et retrouver une énergie durable. Créatine, CoQ10, adaptogènes et protocoles.',
    url: 'https://nootropios.com/energie-vitalite',
  });
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Accueil', url: 'https://nootropios.com' },
    { name: 'Énergie & Vitalité', url: 'https://nootropios.com/energie-vitalite' },
  ]);
  const organizationSchema = getOrganizationSchema();
  const faqSchema = getFAQSchema([
    {
      question: 'Pourquoi suis-je toujours fatigué malgré un bon sommeil ?',
      answer: 'Une fatigue persistante malgré un sommeil suffisant peut avoir plusieurs causes. La plus fréquente en France est la carence en fer, touchant 25 % des femmes en âge de procréer et 5 % des hommes. La carence en vitamine D (80 % des Français en hiver), en magnésium ou en vitamine B12 peut aussi être en cause. Le dysfonctionnement mitochondrial, aggravé par le stress chronique et la sédentarité, réduit la production d\'ATP cellulaire. Un bilan sanguin complet (ferritine, 25-OH vitamine D, B12, TSH) est recommandé pour identifier les carences sous-jacentes.',
    },
    {
      question: 'La créatine est-elle utile pour l\'énergie mentale ?',
      answer: 'Oui, la créatine est un puissant booster de l\'énergie cérébrale. Le cerveau utilise 20 % de l\'énergie totale du corps et dépend fortement du système phosphocréatine-ATP. Une supplémentation en créatine monohydrate (5 g/jour) augmente les réserves de phosphocréatine cérébrale de 5 à 15 %, améliorant les performances cognitives sous stress et fatigue mentale. Les études montrent des améliorations significatives de la mémoire de travail et de la vitesse de traitement, en particulier lors de privation de sommeil ou de tâches cognitives prolongées.',
    },
    {
      question: 'Quels sont les meilleurs suppléments contre la fatigue chronique ?',
      answer: 'Le protocole anti-fatigue de base inclut : le CoQ10 (200 mg d\'ubiquinol) pour optimiser la production mitochondriale d\'ATP, l\'ashwagandha KSM-66 (600 mg) pour réguler le cortisol et réduire la fatigue liée au stress, le magnésium bisglycinate (400 mg) pour les réactions énergétiques enzymatiques, et la vitamine D3 (4000 UI en hiver) comme cofacteur métabolique essentiel. Si les analyses sanguines révèlent une ferritine basse (inférieure à 30 ng/mL), la supplémentation en fer bisglycinate est prioritaire car aucun autre supplément ne compensera cette carence.',
    },
    {
      question: 'Comment les adaptogènes combattent-ils la fatigue ?',
      answer: 'Les adaptogènes combattent la fatigue en régulant l\'axe hypothalamo-hypophyso-surrénalien (HPA), qui gère la réponse au stress. Le stress chronique entraîne une surproduction de cortisol qui épuise les réserves énergétiques et perturbe le sommeil. L\'ashwagandha réduit le cortisol de 27 % en 8 semaines. La rhodiola rosea augmente l\'efficacité du transport d\'oxygène et améliore l\'endurance de 17 %. L\'éleuthérocoque (ginseng sibérien) renforce la résistance au stress physique et mental. Ces plantes n\'agissent pas comme des stimulants mais restaurent l\'équilibre énergétique de l\'organisme.',
    },
  ]);

  return (
    <main className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Gradient Header */}
      <header className="bg-gradient-to-r from-orange-500 via-amber-500 to-orange-700 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <nav className="text-orange-200 text-sm mb-6">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Énergie &amp; Vitalité</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Énergie &amp; Vitalité : Retrouvez Votre Potentiel
          </h1>
          <p className="text-xl opacity-95 max-w-3xl mx-auto">
            Combattez la <strong>fatigue</strong> et retrouvez une <strong>énergie durable</strong> avec des solutions naturelles validées par la science. Créatine, CoQ10, adaptogènes et protocoles complets.
          </p>
        </div>
      </header>

      {/* EEAT Signal */}
      <div className="max-w-4xl mx-auto px-4 mt-8">
        <EEATSignal
          source="Nootropios"
          lastUpdated="Février 2026"
          method="Analyse basée sur la biochimie mitochondriale et études cliniques"
          colorScheme="orange"
        />
      </div>

      {/* Answer Capsule */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
          <p className="text-gray-800 leading-relaxed">
            L&apos;<strong>énergie cellulaire</strong> est produite par les <strong>mitochondries</strong>, véritables centrales énergétiques présentes dans chaque cellule de votre organisme. Le processus de <strong>phosphorylation oxydative</strong> convertit les nutriments en <strong>ATP</strong> (adénosine triphosphate), la monnaie énergétique universelle du corps. Quand ce système est perturbé par le stress, les carences ou le vieillissement, la <strong>fatigue chronique</strong> s&apos;installe.
          </p>
          <p className="text-gray-800 leading-relaxed mt-3">
            Les solutions naturelles ciblent chaque maillon de la chaîne énergétique. La <strong>créatine</strong> reconstitue les réserves de <strong>phosphocréatine</strong> pour un accès rapide à l&apos;ATP. Le <strong>CoQ10</strong> (coenzyme Q10) est un cofacteur essentiel du complexe III de la <strong>chaîne respiratoire mitochondriale</strong>. Les <strong>adaptogènes</strong> régulent le cortisol qui, en excès chronique, inhibe la production d&apos;énergie.
          </p>
          <p className="text-gray-800 leading-relaxed mt-3">
            En France, la fatigue est le premier motif de consultation en médecine générale. Les <strong>carences nutritionnelles</strong> en <strong>fer</strong>, <strong>magnésium</strong>, <strong>vitamine D</strong> et <strong>vitamine B12</strong> sont les causes les plus fréquentes et les plus faciles à corriger. Un bilan sanguin ciblé est le point de départ indispensable de toute démarche d&apos;<strong>optimisation énergétique</strong>. Nos guides détaillent les protocoles pour chaque situation.
          </p>
        </div>
      </section>

      {/* Spoke Card Grid */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">Guides Énergie &amp; Vitalité</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Explorez nos guides pour chaque dimension de l&apos;<strong>énergie</strong> et de la <strong>vitalité</strong>. Suppléments, protocoles et stratégies pour une énergie durable.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {spokeCards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition border-t-4 border-amber-500 group"
            >
              <div className="text-4xl mb-4">{card.emoji}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-amber-600 transition">{card.title}</h3>
              <p className="text-gray-600 mb-4">{card.description}</p>
              <span className="text-amber-600 font-semibold">Lire le guide &rarr;</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Detailed Content Section */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">La science de l&apos;énergie : comprendre la fatigue pour mieux la combattre</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          La <strong>fatigue chronique</strong> est un signal d&apos;alarme qui indique un déséquilibre dans vos systèmes énergétiques. Chaque cellule de votre corps contient entre 500 et 2 000 <strong>mitochondries</strong> qui produisent collectivement environ 40 kg d&apos;ATP par jour. Quand cette machinerie ralentit, les organes les plus gourmands en énergie sont les premiers touchés : le <strong>cerveau</strong> (20 % de l&apos;énergie totale), le <strong>coeur</strong> et les <strong>muscles</strong>.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Le <strong>stress chronique</strong> est l&apos;ennemi principal de votre énergie. Un cortisol élevé en permanence détourne les ressources métaboliques vers la réponse de survie, au détriment de la récupération et de la production d&apos;énergie. Les <strong>adaptogènes</strong> comme l&apos;ashwagandha et la rhodiola rosea aident à rompre ce cercle vicieux en normalisant l&apos;axe HPA (hypothalamo-hypophyso-surrénalien).
        </p>
        <p className="text-gray-700 leading-relaxed">
          Les <strong>micronutriments</strong> jouent un rôle fondamental dans la production d&apos;énergie. Le <strong>fer</strong> transporte l&apos;oxygène vers les cellules via l&apos;hémoglobine. Le <strong>magnésium</strong> est cofacteur de plus de 600 réactions enzymatiques dont la synthèse d&apos;ATP. La <strong>vitamine D3</strong> régule l&apos;expression de gènes impliqués dans le métabolisme énergétique. Le <strong>CoQ10</strong>, dont les niveaux diminuent naturellement après 40 ans, est indispensable au fonctionnement optimal de la chaîne respiratoire mitochondriale.
        </p>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Questions Fréquentes sur l&apos;Énergie et la Vitalité</h2>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Pourquoi suis-je toujours fatigué malgré un bon sommeil ?</h3>
              <p className="text-gray-700 leading-relaxed">
                Une fatigue persistante malgré un sommeil suffisant peut avoir plusieurs causes. La plus fréquente est la <strong>carence en fer</strong>, touchant 25 % des femmes et 5 % des hommes en France. La <strong>carence en vitamine D</strong> (80 % des Français en hiver), en <strong>magnésium</strong> ou en <strong>vitamine B12</strong> peut aussi être en cause. Le <strong>dysfonctionnement mitochondrial</strong>, aggravé par le stress chronique, réduit la production d&apos;<strong>ATP</strong>. Un bilan sanguin complet est recommandé.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">La créatine est-elle utile pour l&apos;énergie mentale ?</h3>
              <p className="text-gray-700 leading-relaxed">
                Oui, la <strong>créatine</strong> est un puissant booster de l&apos;<strong>énergie cérébrale</strong>. Le cerveau utilise 20 % de l&apos;énergie totale du corps et dépend du système phosphocréatine-ATP. Une supplémentation en <strong>créatine monohydrate</strong> (5 g/jour) augmente les réserves de phosphocréatine cérébrale de 5 à 15 %, améliorant les performances cognitives sous stress et lors de <strong>privation de sommeil</strong>. Les améliorations touchent la mémoire de travail et la vitesse de traitement.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quels sont les meilleurs suppléments contre la fatigue chronique ?</h3>
              <p className="text-gray-700 leading-relaxed">
                Le protocole anti-fatigue de base inclut : le <strong>CoQ10</strong> (200 mg d&apos;ubiquinol) pour la production d&apos;ATP, l&apos;<strong>ashwagandha</strong> (600 mg) pour le cortisol, le <strong>magnésium bisglycinate</strong> (400 mg) pour les réactions enzymatiques, et la <strong>vitamine D3</strong> (4000 UI en hiver). Si la <strong>ferritine</strong> est basse (sous 30 ng/mL), le <strong>fer bisglycinate</strong> est prioritaire car aucun autre supplément ne compensera cette carence.
              </p>
            </div>
            <div className="pb-2">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Comment les adaptogènes combattent-ils la fatigue ?</h3>
              <p className="text-gray-700 leading-relaxed">
                Les <strong>adaptogènes</strong> combattent la fatigue en régulant l&apos;axe <strong>HPA</strong> (hypothalamo-hypophyso-surrénalien). Le stress chronique entraîne une surproduction de <strong>cortisol</strong> qui épuise les réserves énergétiques. L&apos;<strong>ashwagandha</strong> réduit le cortisol de 27 % en 8 semaines. La <strong>rhodiola rosea</strong> augmente l&apos;efficacité du transport d&apos;oxygène et l&apos;endurance de 17 %. Ils ne sont pas des stimulants mais restaurent l&apos;<strong>équilibre énergétique</strong> de l&apos;organisme.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="max-w-4xl mx-auto px-4 py-8 pb-16">
        <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Retrouvez une Énergie Durable</h2>
          <p className="text-lg mb-6 opacity-95">
            Découvrez les adaptogènes et suppléments énergétiques adaptés à votre profil et vos besoins.
          </p>
          <Link
            href="/stacks-protocoles/"
            className="bg-white text-orange-700 px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition inline-block"
          >
            Voir les Stacks &amp; Protocoles
          </Link>
        </div>
      </section>
    </main>
  );
}
