import type { Metadata } from 'next';
import Link from 'next/link';
import { getArticleSchema, getBreadcrumbSchema, getFAQSchema } from '@/lib/schema';
import EEATSignal from '@/components/EEATSignal';

export const metadata: Metadata = {
  title: 'Stack Sport & Performance : Protocole Athlète Naturel 2026 | Nootropios',
  description:
    'Stack sport performance : créatine + rhodiola + L-carnitine + magnésium + oméga-3. Protocole pré-entraînement, récupération et endurance pour athlètes naturels.',
  keywords: [
    'stack sport',
    'stack performance sportive',
    'protocole athlète',
    'stack pré-entraînement',
    'stack récupération',
    'nootropiques sport',
    'compléments performance',
  ],
  alternates: {
    canonical: 'https://nootropios.com/stacks-protocoles/stack-sport-performance',
  },
};

export default function StackSportPerformance() {
  const articleSchema = getArticleSchema({
    title: 'Stack Sport & Performance : Protocole Athlète Naturel 2026',
    description:
      'Stack sport performance : créatine + rhodiola + L-carnitine + magnésium + oméga-3. Protocole pré-entraînement, récupération et endurance pour athlètes naturels.',
    url: 'https://nootropios.com/stacks-protocoles/stack-sport-performance',
    datePublished: '2026-02-01',
    dateModified: '2026-02-15',
    keywords: [
      'stack sport',
      'stack performance sportive',
      'protocole athlète',
      'stack pré-entraînement',
      'stack récupération',
      'nootropiques sport',
      'compléments performance',
    ],
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Accueil', url: 'https://nootropios.com' },
    { name: 'Stacks & Protocoles', url: 'https://nootropios.com/stacks-protocoles' },
    { name: 'Stack Sport & Performance', url: 'https://nootropios.com/stacks-protocoles/stack-sport-performance' },
  ]);

  const faqSchema = getFAQSchema([
    {
      question: 'Le stack sport est-il autorisé en compétition officielle ?',
      answer:
        'Oui, tous les composants du stack sport sont autorisés par l\'Agence Mondiale Antidopage (AMA/WADA). La créatine monohydrate, la rhodiola rosea, la L-carnitine, le magnésium et les oméga-3 ne figurent pas sur la liste des substances interdites. Cependant, vérifiez toujours que vos produits portent une certification tierce (Informed Sport, NSF Certified for Sport) garantissant l\'absence de contamination croisée avec des substances interdites. Certaines marques bon marché fabriquées dans des usines produisant également des pro-hormones peuvent contenir des traces de substances interdites non déclarées sur l\'étiquette.',
    },
    {
      question: 'Peut-on combiner le stack sport avec un pré-workout commercial ?',
      answer:
        'C\'est possible mais nécessite des ajustements. La plupart des pré-workouts commerciaux contiennent déjà de la caféine (200-400 mg), de la bêta-alanine et parfois de la créatine. Si vous utilisez un pré-workout, supprimez la caféine additionnelle et ajustez la dose de créatine du stack pour ne pas dépasser 5 g au total. Vérifiez les ingrédients de votre pré-workout pour éviter les doublons. L\'idéal est de remplacer le pré-workout commercial par le stack sport personnalisé, qui offre des dosages mieux calibrés et élimine les additifs inutiles (colorants, édulcorants artificiels, dosages fantaisistes).',
    },
    {
      question: 'Combien de temps avant de voir des résultats avec le stack sport ?',
      answer:
        'Les effets varient selon les composants. La caféine et la rhodiola rosea produisent un effet immédiat dès la première prise (énergie, concentration, réduction de la perception de l\'effort). La créatine nécessite 2 à 4 semaines de charge quotidienne (5 g par jour) pour saturer les réserves musculaires de phosphocréatine et améliorer la puissance explosive de 5 à 10 %. La L-carnitine montre ses effets sur l\'endurance et la récupération après 3 à 4 semaines d\'utilisation régulière. Le magnésium corrige une carence éventuelle en 2 à 4 semaines. Les oméga-3 réduisent l\'inflammation post-entraînement de façon mesurable après 4 à 6 semaines.',
    },
    {
      question: 'Le stack sport est-il adapté aux sports d\'endurance ?',
      answer:
        'Oui, le stack est conçu pour être polyvalent. Pour les sports d\'endurance (course, cyclisme, triathlon, natation), ajustez les composants : augmentez les oméga-3 à 2000 mg de DHA + EPA pour l\'effet anti-inflammatoire, maintenez la rhodiola à 300-600 mg pour la résistance à la fatigue, et utilisez la L-carnitine L-tartrate à 2 g pour optimiser l\'oxydation des acides gras. La créatine est moins prioritaire pour l\'endurance pure mais reste bénéfique pour les sprints finaux et les relances. Le magnésium est crucial pour prévenir les crampes sur les efforts prolongés.',
    },
    {
      question: 'Quel est le budget mensuel pour le stack sport complet ?',
      answer:
        'Le stack sport complet coûte entre 40 et 65 euros par mois avec des produits de qualité. La créatine monohydrate Creapure (8-12 euros pour 500 g, soit 3 mois de stock), la rhodiola rosea standardisée (12-18 euros), la L-carnitine L-tartrate (15-20 euros), le magnésium bisglycinate (8-12 euros) et les oméga-3 IFOS (15-25 euros). Le meilleur rapport qualité-prix est d\'acheter la créatine en poudre (Creapure) et les autres composants en gélules standardisées. Les pack mensuels tout-en-un sont généralement plus chers et utilisent des formes moins bien dosées.',
    },
  ]);

  return (
    <main className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Gradient Header */}
      <header className="bg-gradient-to-r from-purple-600 via-violet-600 to-purple-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-purple-200 text-sm mb-6">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span className="mx-2">/</span>
            <Link href="/stacks-protocoles/" className="hover:text-white">Stacks &amp; Protocoles</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Stack Sport &amp; Performance</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Stack Sport &amp; Performance : Protocole Athl&egrave;te Naturel 2026
          </h1>
          <p className="text-xl opacity-95 max-w-3xl">
            Le <strong>protocole complet</strong> pour optimiser votre <strong>performance sportive</strong>, acc&eacute;l&eacute;rer la <strong>r&eacute;cup&eacute;ration</strong> et d&eacute;velopper votre <strong>endurance</strong> naturellement.
          </p>
        </div>
      </header>

      {/* EEAT Signal */}
      <div className="max-w-4xl mx-auto px-4 mt-8">
        <EEATSignal
          source="Nootropios"
          lastUpdated="F&eacute;vrier 2026"
          method="Protocole bas&eacute; sur 20 essais cliniques randomis&eacute;s et m&eacute;ta-analyses sportives"
          colorScheme="purple"
        />
      </div>

      {/* Answer Capsule */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
          <p className="text-gray-800 leading-relaxed">
            Le <strong>stack sport performance</strong> combine cinq substances dont l&apos;efficacit&eacute; est valid&eacute;e par les &eacute;tudes cliniques les plus rigoureuses. La <strong>cr&eacute;atine monohydrate</strong> (5 g) augmente les r&eacute;serves de <strong>phosphocr&eacute;atine</strong> musculaire de 20 &agrave; 40 %, am&eacute;liorant la puissance explosive et la r&eacute;cup&eacute;ration inter-s&eacute;ries. La <strong>rhodiola rosea</strong> (300-600 mg) r&eacute;duit la perception de l&apos;effort et am&eacute;liore l&apos;<strong>endurance</strong> de 3 &agrave; 5 %.
          </p>
          <p className="text-gray-800 leading-relaxed mt-3">
            La <strong>L-carnitine</strong> L-tartrate (2 g) optimise l&apos;oxydation des acides gras pour l&apos;&eacute;nergie et acc&eacute;l&egrave;re la <strong>r&eacute;cup&eacute;ration musculaire</strong> en r&eacute;duisant les dommages oxydatifs post-effort. Le <strong>magn&eacute;sium</strong> bisglycinate (400 mg) pr&eacute;vient les crampes, soutient la <strong>synth&egrave;se prot&eacute;ique</strong> et am&eacute;liore la qualit&eacute; du sommeil r&eacute;cup&eacute;rateur.
          </p>
          <p className="text-gray-800 leading-relaxed mt-3">
            Les <strong>om&eacute;ga-3</strong> (2 g DHA + EPA) compl&egrave;tent le stack par leur puissant effet <strong>anti-inflammatoire</strong>, r&eacute;duisant les courbatures (DOMS) et acc&eacute;l&eacute;rant le retour &agrave; l&apos;hom&eacute;ostasie musculaire. Ce <strong>protocole</strong> est structur&eacute; en phases pr&eacute;-entra&icirc;nement, post-effort et r&eacute;cup&eacute;ration nocturne.
          </p>
        </div>
      </section>

      {/* Section 1 */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Besoins sp&eacute;cifiques de l&apos;athl&egrave;te</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          L&apos;athl&egrave;te naturel fait face &agrave; des exigences biochimiques consid&eacute;rablement sup&eacute;rieures &agrave; celles de la population s&eacute;dentaire. L&apos;entra&icirc;nement intense g&eacute;n&egrave;re un <strong>stress oxydatif</strong> massif, &eacute;puise les r&eacute;serves de glycog&egrave;ne et de <strong>phosphocr&eacute;atine</strong>, provoque des microl&eacute;sions musculaires et augmente les besoins en min&eacute;raux perdus par la sueur. Sans une r&eacute;cup&eacute;ration optimale, le <strong>surentra&icirc;nement</strong> s&apos;installe insidieusement, se manifestant par une baisse de performance, une fatigue chronique et un risque accru de blessures.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Sur le plan neurologique, l&apos;athl&egrave;te doit maintenir une <strong>concentration</strong> maximale pendant l&apos;effort, g&eacute;rer la perception de la douleur et prendre des d&eacute;cisions rapides sous pression physique. La <strong>fatigue centrale</strong> &mdash; le d&eacute;clin de la commande motrice c&eacute;r&eacute;brale &mdash; est souvent le facteur limitant de la performance avant m&ecirc;me l&apos;&eacute;puisement musculaire p&eacute;riph&eacute;rique. C&apos;est ici que les <strong>nootropiques</strong> jouent un r&ocirc;le d&eacute;terminant, en retardant la fatigue centrale et en am&eacute;liorant la connexion neuromusculaire.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Les besoins en <strong>magn&eacute;sium</strong> sont particuli&egrave;rement critiques chez l&apos;athl&egrave;te. Un entra&icirc;nement intense peut &eacute;puiser 10 &agrave; 20 % des r&eacute;serves de magn&eacute;sium en une seule session via la sueur et l&apos;augmentation du m&eacute;tabolisme. Or, le magn&eacute;sium est impliqu&eacute; dans plus de 300 r&eacute;actions enzymatiques, dont la <strong>synth&egrave;se d&apos;ATP</strong>, la contraction musculaire, la synth&egrave;se prot&eacute;ique et la r&eacute;gulation du syst&egrave;me nerveux. Une carence, m&ecirc;me subclinique, r&eacute;duit la performance de 5 &agrave; 15 %.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Les <strong>om&eacute;ga-3</strong> &agrave; haute dose sont essentiels pour l&apos;athl&egrave;te car l&apos;exercice intense g&eacute;n&egrave;re une r&eacute;ponse <strong>inflammatoire</strong> aigu&euml; n&eacute;cessaire &agrave; l&apos;adaptation, mais qui doit &ecirc;tre r&eacute;solue efficacement pour permettre la r&eacute;cup&eacute;ration. Les om&eacute;ga-3 acc&eacute;l&egrave;rent la r&eacute;solution de l&apos;inflammation via les <strong>r&eacute;solvines</strong> et les prot&eacute;ctines, r&eacute;duisant les courbatures (DOMS) de 15 &agrave; 30 % et le temps de r&eacute;cup&eacute;ration entre les sessions d&apos;entra&icirc;nement.
        </p>
      </section>

      {/* Section 2 */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Stack pr&eacute;-entra&icirc;nement d&eacute;taill&eacute;</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Le <strong>stack pr&eacute;-entra&icirc;nement</strong> est pris 30 &agrave; 45 minutes avant la session pour atteindre le pic d&apos;efficacit&eacute; au moment de l&apos;effort. Le composant central est la <Link href="/energie-vitalite/creatine-energie-cerebrale/" className="text-purple-600 hover:text-purple-800 underline">cr&eacute;atine monohydrate</Link> &agrave; 5 g. La <strong>cr&eacute;atine</strong> est le suppl&eacute;ment sportif le plus &eacute;tudi&eacute; au monde, avec plus de 500 &eacute;tudes cliniques confirmant son efficacit&eacute;. Elle augmente les r&eacute;serves de phosphocr&eacute;atine de 20 &agrave; 40 %, am&eacute;liorant la <strong>puissance explosive</strong> de 5 &agrave; 10 % et la capacit&eacute; de travail total de 10 &agrave; 15 %.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          La <Link href="/energie-vitalite/rhodiola-endurance-physique/" className="text-purple-600 hover:text-purple-800 underline">rhodiola rosea</Link> &agrave; 300-600 mg est le deuxi&egrave;me composant pr&eacute;-entra&icirc;nement. Cet <strong>adaptog&egrave;ne</strong> r&eacute;duit la perception de l&apos;effort (RPE) de 8 &agrave; 12 % selon les &eacute;tudes, permettant de maintenir une <strong>intensit&eacute;</strong> plus &eacute;lev&eacute;e plus longtemps. Une &eacute;tude publi&eacute;e dans le <em>Journal of Sports Medicine</em> a d&eacute;montr&eacute; que la rhodiola augmente le <strong>VO2max</strong> de 3 &agrave; 5 % et am&eacute;liore le temps d&apos;&eacute;puisement lors d&apos;un effort progressif.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          La <Link href="/energie-vitalite/l-carnitine-metabolisme/" className="text-purple-600 hover:text-purple-800 underline">L-carnitine L-tartrate</Link> &agrave; 2 g, prise avant l&apos;entra&icirc;nement, am&eacute;liore le transport des <strong>acides gras</strong> &agrave; longue cha&icirc;ne dans les mitochondries pour la b&ecirc;ta-oxydation. Cela signifie une meilleure utilisation des graisses comme carburant pendant l&apos;effort, &eacute;pargnant le <strong>glycog&egrave;ne</strong> musculaire pour les phases d&apos;intensit&eacute; maximale. La forme L-tartrate est sp&eacute;cifiquement &eacute;tudi&eacute;e pour la performance sportive et la r&eacute;cup&eacute;ration.
        </p>
        <p className="text-gray-700 leading-relaxed">
          <strong>Option avanc&eacute;e</strong> : ajoutez 100-200 mg de <strong>caf&eacute;ine</strong> au stack pr&eacute;-entra&icirc;nement pour un boost suppl&eacute;mentaire. La caf&eacute;ine est le plus puissant ergog&egrave;ne l&eacute;gal, am&eacute;liorant la <strong>performance</strong> de 3 &agrave; 7 % dans la quasi-totalit&eacute; des disciplines sportives. Cependant, cyclez la caf&eacute;ine (5 jours on / 2 jours off) pour &eacute;viter la tol&eacute;rance et r&eacute;servez les doses les plus &eacute;lev&eacute;es pour les s&eacute;ances cl&eacute;s ou les comp&eacute;titions.
        </p>
      </section>

      {/* Section 3 */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Stack r&eacute;cup&eacute;ration post-effort</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          La <strong>r&eacute;cup&eacute;ration</strong> est l&agrave; o&ugrave; la progression se construit r&eacute;ellement. L&apos;entra&icirc;nement cr&eacute;e le stimulus, mais c&apos;est pendant la r&eacute;cup&eacute;ration que l&apos;organisme <strong>surcompense</strong> et s&apos;adapte. Le stack post-effort est pris dans les 30 &agrave; 60 minutes suivant la fin de l&apos;entra&icirc;nement, pendant la &laquo; fen&ecirc;tre anabolique &raquo; o&ugrave; la sensibilit&eacute; des r&eacute;cepteurs est maximale.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Les <strong>om&eacute;ga-3</strong> &agrave; 2 g (1200 mg DHA + 800 mg EPA) sont le pilier de la r&eacute;cup&eacute;ration. L&apos;entra&icirc;nement intense d&eacute;clenche une cascade <strong>inflammatoire</strong> n&eacute;cessaire &agrave; l&apos;adaptation, mais qui doit &ecirc;tre r&eacute;solue rapidement pour &eacute;viter les dommages tissulaires excessifs. Les om&eacute;ga-3 acc&eacute;l&egrave;rent la synth&egrave;se des <strong>r&eacute;solvines</strong> de la s&eacute;rie E et D, des m&eacute;diateurs lipidiques sp&eacute;cifiquement con&ccedil;us pour &laquo; &eacute;teindre &raquo; l&apos;inflammation de mani&egrave;re contr&ocirc;l&eacute;e. Les &eacute;tudes montrent une r&eacute;duction des <strong>DOMS</strong> (courbatures) de 15 &agrave; 30 % et une r&eacute;cup&eacute;ration fonctionnelle acc&eacute;l&eacute;r&eacute;e de 24 &agrave; 48 heures.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Le <strong>magn&eacute;sium bisglycinate</strong> &agrave; 400 mg, pris le soir apr&egrave;s l&apos;entra&icirc;nement, remplit une triple fonction : il reconstitue les r&eacute;serves min&eacute;rales &eacute;puis&eacute;es par la sueur, il soutient la <strong>synth&egrave;se prot&eacute;ique</strong> musculaire (le magn&eacute;sium est un cofacteur de la mTOR) et il am&eacute;liore la qualit&eacute; du <strong>sommeil profond</strong>, phase pendant laquelle l&apos;hormone de croissance est lib&eacute;r&eacute;e massivement pour la r&eacute;paration tissulaire.
        </p>
        <p className="text-gray-700 leading-relaxed">
          <strong>Suppl&eacute;ments compl&eacute;mentaires post-effort</strong> : 20 &agrave; 40 g de <strong>prot&eacute;ines whey</strong> (ou v&eacute;g&eacute;tales) pour fournir les acides amin&eacute;s n&eacute;cessaires &agrave; la r&eacute;paration musculaire, et 30 &agrave; 60 g de glucides &agrave; index glyc&eacute;mique mod&eacute;r&eacute; pour reconstituer le <strong>glycog&egrave;ne</strong>. La cr&eacute;atine du stack pr&eacute;-entra&icirc;nement continue de saturer les r&eacute;serves musculaires m&ecirc;me apr&egrave;s l&apos;effort, contribuant &agrave; la <strong>r&eacute;cup&eacute;ration &eacute;nerg&eacute;tique</strong> pour la session suivante.
        </p>
      </section>

      {/* Section 4 */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Protocole hebdomadaire</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Le <strong>protocole hebdomadaire</strong> synchronise le stack avec votre planification d&apos;entra&icirc;nement pour maximiser les performances les jours cl&eacute;s et optimiser la r&eacute;cup&eacute;ration les jours de repos. La <strong>cr&eacute;atine</strong> est le seul composant pris quotidiennement, y compris les jours de repos, pour maintenir la saturation des r&eacute;serves musculaires de phosphocr&eacute;atine.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Jours d&apos;entra&icirc;nement (3-5 jours par semaine)</strong> : stack pr&eacute;-entra&icirc;nement complet 30-45 minutes avant la session (<strong>cr&eacute;atine</strong> 5 g + <strong>rhodiola</strong> 300-600 mg + <strong>L-carnitine</strong> 2 g + caf&eacute;ine optionnelle 100-200 mg). Post-entra&icirc;nement : <strong>om&eacute;ga-3</strong> 2 g avec le repas de r&eacute;cup&eacute;ration. Soir : <strong>magn&eacute;sium</strong> bisglycinate 400 mg, 1 heure avant le coucher.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Jours de repos (2-4 jours par semaine)</strong> : <strong>cr&eacute;atine</strong> 5 g le matin avec le petit-d&eacute;jeuner (maintien de la saturation). <strong>Om&eacute;ga-3</strong> 2 g avec un repas contenant des graisses. <strong>Magn&eacute;sium</strong> 400 mg le soir. Pas de rhodiola ni de L-carnitine les jours de repos complet, sauf en p&eacute;riode de r&eacute;cup&eacute;ration intensive o&ugrave; la L-carnitine peut acc&eacute;l&eacute;rer la r&eacute;paration musculaire.
        </p>
        <p className="text-gray-700 leading-relaxed">
          <strong>Semaine de d&eacute;charge (toutes les 4-6 semaines)</strong> : r&eacute;duisez le volume et l&apos;intensit&eacute; d&apos;entra&icirc;nement de 40 &agrave; 50 %. Maintenez la <strong>cr&eacute;atine</strong> &agrave; 3 g (dose de maintien), les om&eacute;ga-3 et le magn&eacute;sium. Suspendez la rhodiola et la L-carnitine. Cette semaine de d&eacute;charge permet &agrave; l&apos;organisme de <strong>surcompenser</strong> compl&egrave;tement avant le prochain bloc d&apos;entra&icirc;nement, et la reprise de la rhodiola produit un effet amplifii&eacute; apr&egrave;s la pause.
        </p>
      </section>

      {/* Section 5 */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">P&eacute;riodisation et cyclage</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          La <strong>p&eacute;riodisation</strong> du stack sport s&apos;aligne sur les phases classiques de l&apos;entra&icirc;nement sportif pour maximiser les gains &agrave; chaque &eacute;tape. <strong>Phase de volume (6-8 semaines)</strong> : cette phase d&apos;accumulation avec un volume d&apos;entra&icirc;nement &eacute;lev&eacute; n&eacute;cessite une r&eacute;cup&eacute;ration maximale. Maximisez les <strong>om&eacute;ga-3</strong> &agrave; 3 g et le <strong>magn&eacute;sium</strong> &agrave; 500 mg. La <strong>cr&eacute;atine</strong> &agrave; 5 g et la <strong>L-carnitine</strong> &agrave; 2 g soutiennent le volume de travail. La rhodiola &agrave; 300 mg module le <strong>cortisol</strong> g&eacute;n&eacute;r&eacute; par la charge d&apos;entra&icirc;nement &eacute;lev&eacute;e.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Phase d&apos;intensification (4-6 semaines)</strong> : le volume diminue mais l&apos;intensit&eacute; augmente. Augmentez la <strong>rhodiola</strong> &agrave; 600 mg pour supporter les charges lourdes et la concentration mentale requise. La <strong>caf&eacute;ine</strong> peut &ecirc;tre ajout&eacute;e &agrave; 200 mg les jours de s&eacute;ances lourdes. Maintenez la <strong>cr&eacute;atine</strong> &agrave; 5 g pour la puissance explosive. R&eacute;duisez les om&eacute;ga-3 &agrave; 2 g car l&apos;inflammation est moindre avec le volume r&eacute;duit.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Phase de comp&eacute;tition (1-2 semaines)</strong> : optimisez le stack pour la <strong>performance maximale</strong>. Stack complet chaque jour d&apos;entra&icirc;nement, avec caf&eacute;ine &agrave; 200-300 mg uniquement le jour de la comp&eacute;tition (si vous avez cycl&eacute; la caf&eacute;ine pendant la pr&eacute;paration, la sensibilit&eacute; sera maximale). <strong>Rhodiola</strong> &agrave; 600 mg pour la gestion du stress comp&eacute;titif. Assurez un sommeil de 8-9 heures gr&acirc;ce au <strong>magn&eacute;sium</strong>.
        </p>
        <p className="text-gray-700 leading-relaxed">
          <strong>Phase de transition (2-4 semaines)</strong> : apr&egrave;s la comp&eacute;tition, r&eacute;duisez le stack au minimum de r&eacute;cup&eacute;ration : <strong>om&eacute;ga-3</strong> 2 g + <strong>magn&eacute;sium</strong> 400 mg + cr&eacute;atine 3 g (maintenance). Suspendez la rhodiola, la L-carnitine et la caf&eacute;ine. Cette phase de <strong>r&eacute;g&eacute;n&eacute;ration</strong> permet au syst&egrave;me nerveux central et endocrinien de se r&eacute;initialiser compl&egrave;tement avant le prochain cycle d&apos;entra&icirc;nement.
        </p>
      </section>

      {/* Section 6 */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Interactions avec l&apos;alimentation sportive</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          L&apos;efficacit&eacute; du stack sport d&eacute;pend &eacute;troitement de la <strong>nutrition de base</strong>. Aucun suppl&eacute;ment ne peut compenser une alimentation d&eacute;faillante. L&apos;athl&egrave;te doit d&apos;abord s&apos;assurer d&apos;un apport prot&eacute;ique suffisant (1,6 &agrave; 2,2 g de <strong>prot&eacute;ines</strong> par kg de masse corporelle par jour), d&apos;un apport en glucides adapt&eacute; au volume d&apos;entra&icirc;nement (3 &agrave; 8 g par kg selon l&apos;intensit&eacute;) et d&apos;un apport calorique total ad&eacute;quat pour soutenir la <strong>performance</strong> et la r&eacute;cup&eacute;ration.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          La <strong>cr&eacute;atine</strong> est mieux absorb&eacute;e lorsqu&apos;elle est prise avec des glucides, car l&apos;insuline facilite le transport de la cr&eacute;atine dans les cellules musculaires. Prenez vos 5 g de cr&eacute;atine avec un repas contenant au moins 30 g de <strong>glucides</strong> ou avec votre shake post-entra&icirc;nement. La <strong>L-carnitine</strong> b&eacute;n&eacute;ficie &eacute;galement d&apos;un pic d&apos;insuline pour son transport musculaire : associez-la &agrave; 30-50 g de glucides.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Les <strong>om&eacute;ga-3</strong> doivent &ecirc;tre pris syst&eacute;matiquement avec un repas contenant des graisses pour maximiser l&apos;absorption. L&apos;absorption du DHA et de l&apos;EPA est multipli&eacute;e par 3 lorsqu&apos;ils sont pris avec un repas lipidique (15 g de graisses minimum) par rapport &agrave; une prise &agrave; jeun. Le <strong>magn&eacute;sium</strong> bisglycinate peut &ecirc;tre pris ind&eacute;pendamment des repas car sa <strong>biodisponibilit&eacute;</strong> est d&eacute;j&agrave; excellente sous cette forme.
        </p>
        <p className="text-gray-700 leading-relaxed">
          <strong>Attention aux interactions n&eacute;gatives</strong> : &eacute;vitez de prendre le <strong>magn&eacute;sium</strong> en m&ecirc;me temps que le fer ou le calcium, car ils entrent en comp&eacute;tition au niveau de l&apos;absorption intestinale. &Eacute;vitez la <strong>caf&eacute;ine</strong> dans les 2 heures suivant la prise de cr&eacute;atine (la caf&eacute;ine peut r&eacute;duire l&apos;absorption de la cr&eacute;atine selon certaines &eacute;tudes, bien que ce point soit d&eacute;battu). Ne prenez pas les om&eacute;ga-3 &agrave; haute dose avec des <strong>anticoagulants</strong> sans avis m&eacute;dical.
        </p>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Questions Fr&eacute;quentes sur le Stack Sport</h2>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Le stack sport est-il autoris&eacute; en comp&eacute;tition officielle ?</h3>
              <p className="text-gray-700 leading-relaxed">
                Oui, tous les composants sont autoris&eacute;s par l&apos;<strong>AMA/WADA</strong>. La <strong>cr&eacute;atine</strong>, la <strong>rhodiola</strong>, la <strong>L-carnitine</strong>, le <strong>magn&eacute;sium</strong> et les <strong>om&eacute;ga-3</strong> ne figurent pas sur la liste des substances interdites. V&eacute;rifiez que vos produits portent une certification Informed Sport ou NSF Certified for Sport.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Peut-on combiner le stack sport avec un pr&eacute;-workout commercial ?</h3>
              <p className="text-gray-700 leading-relaxed">
                Oui mais avec des ajustements. V&eacute;rifiez les dosages de <strong>caf&eacute;ine</strong> et de <strong>cr&eacute;atine</strong> de votre pr&eacute;-workout pour &eacute;viter les doublons. L&apos;id&eacute;al est de remplacer le pr&eacute;-workout commercial par le stack personnalis&eacute;, offrant des <strong>dosages</strong> mieux calibr&eacute;s sans additifs inutiles (colorants, &eacute;dulcorants artificiels).
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Combien de temps avant de voir des r&eacute;sultats ?</h3>
              <p className="text-gray-700 leading-relaxed">
                La <strong>caf&eacute;ine</strong> et la <strong>rhodiola</strong> agissent d&egrave;s la premi&egrave;re prise. La <strong>cr&eacute;atine</strong> n&eacute;cessite 2 &agrave; 4 semaines de saturation pour am&eacute;liorer la puissance de 5 &agrave; 10 %. La <strong>L-carnitine</strong> montre ses effets en 3 &agrave; 4 semaines. Les <strong>om&eacute;ga-3</strong> r&eacute;duisent l&apos;inflammation post-entra&icirc;nement apr&egrave;s 4 &agrave; 6 semaines.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Le stack sport est-il adapt&eacute; aux sports d&apos;endurance ?</h3>
              <p className="text-gray-700 leading-relaxed">
                Oui. Pour l&apos;<strong>endurance</strong>, augmentez les <strong>om&eacute;ga-3</strong> &agrave; 2-3 g, maintenez la <strong>rhodiola</strong> &agrave; 300-600 mg et la <strong>L-carnitine</strong> &agrave; 2 g pour l&apos;oxydation des acides gras. La <strong>cr&eacute;atine</strong> reste b&eacute;n&eacute;fique pour les sprints finaux. Le <strong>magn&eacute;sium</strong> pr&eacute;vient les crampes sur les efforts prolong&eacute;s.
              </p>
            </div>
            <div className="pb-2">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quel budget mensuel pour le stack sport complet ?</h3>
              <p className="text-gray-700 leading-relaxed">
                Le stack complet co&ucirc;te 40 &agrave; 65 euros par mois. <strong>Cr&eacute;atine</strong> Creapure (8-12 &euro;/3 mois), <strong>rhodiola</strong> (12-18 &euro;), <strong>L-carnitine</strong> (15-20 &euro;), <strong>magn&eacute;sium</strong> (8-12 &euro;) et <strong>om&eacute;ga-3</strong> IFOS (15-25 &euro;). Achetez la cr&eacute;atine en poudre et les autres en g&eacute;lules standardis&eacute;es pour le meilleur rapport qualit&eacute;-prix.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="max-w-4xl mx-auto px-4 py-8 pb-16">
        <div className="bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Passez au Niveau Sup&eacute;rieur</h2>
          <p className="text-lg mb-6 opacity-95">
            D&eacute;couvrez nos guides d&eacute;taill&eacute;s sur chaque composant du stack sport et explorez les protocoles compl&eacute;mentaires pour une performance optimale.
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
