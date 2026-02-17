import type { Metadata } from 'next';
import Link from 'next/link';
import { getArticleSchema, getBreadcrumbSchema, getFAQSchema } from '@/lib/schema';
import EEATSignal from '@/components/EEATSignal';

export const metadata: Metadata = {
  title: 'Alimentation et Cerveau : Nutrition Optimale pour la Cognition | Nootropios',
  description:
    'Alimentation et cerveau : les meilleurs aliments pour la mémoire, la concentration et la neuroprotection. Régime MIND, polyphénols, glucose cérébral et micronutriments.',
  keywords: [
    'alimentation cerveau',
    'nutrition cognitive',
    'aliments mémoire',
    'régime MIND',
    'polyphénols cerveau',
    'glucose cérébral',
    'alimentation concentration',
    'brain food',
  ],
  alternates: {
    canonical: 'https://nootropios.com/performance-cognitive/alimentation-cerveau-nutrition',
  },
};

export default function AlimentationCerveauNutrition() {
  const articleSchema = getArticleSchema({
    title: 'Alimentation et Cerveau : Nutrition Optimale pour la Cognition',
    description:
      'Alimentation et cerveau : les meilleurs aliments pour la mémoire, la concentration et la neuroprotection. Régime MIND, polyphénols, glucose cérébral et micronutriments.',
    url: 'https://nootropios.com/performance-cognitive/alimentation-cerveau-nutrition',
    datePublished: '2026-02-01',
    dateModified: '2026-02-15',
    keywords: [
      'alimentation cerveau',
      'nutrition cognitive',
      'aliments mémoire',
      'régime MIND',
      'polyphénols cerveau',
      'glucose cérébral',
      'alimentation concentration',
      'brain food',
    ],
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Accueil', url: 'https://nootropios.com' },
    { name: 'Performance Cognitive', url: 'https://nootropios.com/performance-cognitive' },
    {
      name: 'Alimentation et Cerveau',
      url: 'https://nootropios.com/performance-cognitive/alimentation-cerveau-nutrition',
    },
  ]);

  const faqSchema = getFAQSchema([
    {
      question: 'Quels sont les meilleurs aliments pour le cerveau ?',
      answer:
        'Les meilleurs aliments pour le cerveau sont les poissons gras (saumon, sardines, maquereau) riches en oméga-3 DHA, les myrtilles et baies riches en anthocyanines, les noix (notamment les noix de Grenoble riches en acide alpha-linolénique), les œufs (source de choline), les légumes à feuilles vertes (épinards, kale riches en folate et lutéine), le chocolat noir (flavanols de cacao), le curcuma (curcumine anti-inflammatoire) et les légumineuses (source de glucose complexe et de fer). Ces aliments fournissent les nutriments essentiels à la neurotransmission, à la neuroprotection et à l\'énergie cérébrale.',
    },
    {
      question: 'Le glucose est-il vraiment le seul carburant du cerveau ?',
      answer:
        'Non. Le cerveau utilise principalement le glucose (environ 120 g/jour, soit 20 % de l\'énergie corporelle totale), mais il peut aussi utiliser les corps cétoniques (bêta-hydroxybutyrate) comme carburant alternatif, notamment pendant le jeûne ou un régime cétogène. Les corps cétoniques sont en fait un carburant plus efficace que le glucose pour certaines fonctions neuronales, produisant moins de stress oxydatif. Cependant, le cerveau ne peut pas utiliser les acides gras directement car ils ne traversent pas la barrière hémato-encéphalique.',
    },
    {
      question: 'Le régime MIND réduit-il vraiment le risque de déclin cognitif ?',
      answer:
        'Oui. L\'étude MIND (Morris et al., 2015) portant sur 923 participants suivis pendant 4,7 ans a montré que le régime MIND réduisait le risque de maladie d\'Alzheimer de 53 % chez ceux qui le suivaient rigoureusement et de 35 % chez ceux qui le suivaient modérément. Le régime MIND combine les éléments du régime méditerranéen et du régime DASH en se concentrant sur 10 catégories d\'aliments bénéfiques pour le cerveau (légumes verts, baies, noix, poisson, huile d\'olive) et 5 catégories à limiter (viande rouge, beurre, fromage, pâtisseries, fritures).',
    },
    {
      question: 'Les compléments alimentaires peuvent-ils remplacer une bonne alimentation ?',
      answer:
        'Non, les compléments ne peuvent pas remplacer une alimentation équilibrée. Les aliments contiennent des milliers de composés bioactifs (polyphénols, fibres, micronutriments) qui agissent en synergie, un effet impossible à reproduire avec des gélules. Les compléments sont utiles pour combler des carences spécifiques (oméga-3 DHA si peu de poisson, vitamine B12 pour les végétaliens, fer en cas de carence documentée) ou pour obtenir des doses thérapeutiques de certains composés (curcumine, magnésium). L\'approche optimale est : alimentation de qualité + compléments ciblés.',
    },
    {
      question: 'Le jeûne intermittent est-il bénéfique pour le cerveau ?',
      answer:
        'Oui, le jeûne intermittent (16:8 ou 5:2) a montré des bénéfices cognitifs dans plusieurs études. Il stimule la production de BDNF (facteur neurotrophique), active l\'autophagie (nettoyage cellulaire), augmente la sensibilité à l\'insuline cérébrale et favorise la production de corps cétoniques. L\'étude de Mattson et al. (2018) a montré que le jeûne intermittent améliorait la mémoire et l\'apprentissage chez l\'humain. Cependant, il ne convient pas à tous : les personnes souffrant de troubles alimentaires, les femmes enceintes et les diabétiques doivent éviter cette approche.',
    },
  ]);

  return (
    <main className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Gradient Header */}
      <header className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <nav className="text-blue-200 text-sm mb-6">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span className="mx-2">/</span>
            <Link href="/performance-cognitive/" className="hover:text-white">Performance Cognitive</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Alimentation et Cerveau</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Alimentation et Cerveau : Nutrition Optimale pour la Cognition
          </h1>
          <p className="text-xl opacity-95 max-w-3xl mx-auto">
            Les <strong>aliments</strong> qui nourrissent votre <strong>cerveau</strong> : <strong>oméga-3</strong>, polyphénols, micronutriments essentiels et le <strong>régime MIND</strong> validé pour la neuroprotection.
          </p>
        </div>
      </header>

      {/* EEAT Signal */}
      <div className="max-w-4xl mx-auto px-4 mt-8">
        <EEATSignal
          source="Nootropios"
          lastUpdated="Février 2026"
          method="Analyse basée sur les études MIND (Morris 2015), PREDIMED (Valls-Pedret 2015) et les méta-analyses en neuronutrition"
          colorScheme="blue"
        />
      </div>

      {/* Answer Capsule */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
          <p className="text-gray-800 leading-relaxed">
            Le <strong>cerveau</strong> représente seulement 2 % du poids corporel mais consomme 20 % de l&apos;énergie totale. Cette demande métabolique exceptionnelle rend la <strong>nutrition cérébrale</strong> déterminante pour la performance cognitive. Les <strong>oméga-3 DHA</strong> constituent 40 % des acides gras du cortex et sont essentiels à la fluidité membranaire et à la <strong>neurotransmission</strong>. Les <strong>polyphénols</strong> (myrtilles, cacao, curcuma) protègent les neurones du stress oxydatif et améliorent le flux sanguin cérébral.
          </p>
          <p className="text-gray-800 leading-relaxed mt-3">
            Le <strong>régime MIND</strong>, combinaison du régime méditerranéen et du régime DASH, a démontré une réduction du risque d&apos;<strong>Alzheimer</strong> de 53 % dans l&apos;étude de Morris et al. (2015). Ce régime privilégie les <strong>légumes verts</strong>, les baies, les noix, le poisson et l&apos;huile d&apos;olive, tout en limitant les aliments pro-inflammatoires comme les viandes transformées, les sucres raffinés et les graisses saturées.
          </p>
          <p className="text-gray-800 leading-relaxed mt-3">
            Les <strong>micronutriments</strong> jouent un rôle critique souvent sous-estimé. Le <strong>fer</strong> transporte l&apos;oxygène vers le cerveau, le <strong>zinc</strong> module la plasticité synaptique, la <strong>vitamine B12</strong> maintient la gaine de myéline et le <strong>magnésium</strong> régule plus de 300 réactions enzymatiques cérébrales. Des carences même légères en ces nutriments suffisent à compromettre la concentration, la mémoire et la <strong>clarté mentale</strong>.
          </p>
        </div>
      </section>

      {/* Section 1 */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Le cerveau : un organe métaboliquement exigeant</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Le <strong>cerveau humain</strong> est l&apos;organe le plus énergivore du corps. Avec ses 86 milliards de neurones et ses 100 000 milliards de synapses, il consomme environ 120 grammes de <strong>glucose</strong> par jour, soit 20 % de l&apos;énergie métabolique totale alors qu&apos;il ne représente que 2 % de la masse corporelle. Cette disproportion énergétique reflète le coût considérable de la <strong>neurotransmission</strong> : chaque potentiel d&apos;action nécessite le pompage actif d&apos;ions sodium et potassium à travers les membranes neuronales, un processus extrêmement gourmand en ATP.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Le <strong>glucose</strong> est le carburant principal du cerveau, mais pas le seul. En situation de jeûne prolongé (plus de 12-16 heures), le foie produit des <strong>corps cétoniques</strong> (bêta-hydroxybutyrate, acétoacétate) qui traversent la barrière hémato-encéphalique et peuvent fournir jusqu&apos;à 60 % des besoins énergétiques cérébraux. Les corps cétoniques sont en fait un carburant plus &laquo;&nbsp;propre&nbsp;&raquo; que le glucose, produisant moins de <strong>radicaux libres</strong> et de stress oxydatif. C&apos;est pourquoi le <strong>jeûne intermittent</strong> et le régime cétogène montrent des bénéfices cognitifs dans certaines études.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          La <strong>barrière hémato-encéphalique</strong> (BHE) est un filtre sélectif qui protège le cerveau des toxines circulantes mais qui limite aussi l&apos;accès de nombreux nutriments. Seules les petites molécules lipophiles et les substrats disposant de transporteurs spécifiques peuvent la traverser. Le glucose utilise les transporteurs GLUT1, les acides aminés (précurseurs des neurotransmetteurs) utilisent les transporteurs LAT1, et les <strong>oméga-3 DHA</strong> utilisent le transporteur Mfsd2a. Cette sélectivité explique pourquoi la forme chimique des compléments nutritionnels est si importante pour leur efficacité cérébrale.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Le cerveau est aussi exceptionnellement vulnérable au <strong>stress oxydatif</strong>. Il consomme 20 % de l&apos;oxygène corporel, génère d&apos;importantes quantités de radicaux libres et possède relativement peu de défenses antioxydantes intrinsèques. Les <strong>membranes neuronales</strong>, riches en acides gras polyinsaturés (DHA), sont particulièrement sensibles à la peroxydation lipidique. C&apos;est pourquoi les antioxydants alimentaires &mdash; <strong>polyphénols</strong>, vitamines C et E, sélénium &mdash; jouent un rôle neuroprotecteur si important. Une alimentation riche en antioxydants n&apos;est pas un luxe mais une nécessité pour maintenir l&apos;intégrité des circuits neuronaux.
        </p>
      </section>

      {/* Section 2 */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Macronutriments et cognition</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Les <strong>acides gras oméga-3</strong>, en particulier le <strong>DHA</strong> (acide docosahexaénoïque), sont le macronutriment le plus critique pour le cerveau. Le DHA constitue 40 % des acides gras polyinsaturés du cortex cérébral et 60 % de ceux de la rétine. Il maintient la fluidité des <strong>membranes neuronales</strong>, essentielle à la vitesse de transmission synaptique et à l&apos;insertion correcte des récepteurs de neurotransmetteurs. Les sources alimentaires les plus riches sont les poissons gras d&apos;eau froide : saumon, sardines, maquereau, hareng. Pour en savoir plus, consultez notre guide complet sur les <Link href="/nootropiques-naturels/omega-3-dha-cerveau/" className="text-blue-600 hover:text-blue-800">oméga-3 DHA et le cerveau</Link>.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Les <strong>protéines</strong> alimentaires fournissent les acides aminés précurseurs des principaux neurotransmetteurs. Le <strong>tryptophane</strong> (présent dans la dinde, les œufs, le fromage) est le précurseur de la <strong>sérotonine</strong>, régulateur de l&apos;humeur et du sommeil. La <strong>tyrosine</strong> (viande, poisson, soja) est le précurseur de la <strong>dopamine</strong> et de la noradrénaline, neurotransmetteurs de la motivation et de l&apos;attention. La choline (œufs, foie, soja) est le précurseur de l&apos;<strong>acétylcholine</strong>, essentielle à la mémoire et à l&apos;apprentissage. Un apport protéique insuffisant compromet directement la synthèse de ces neurotransmetteurs.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Les <strong>glucides</strong> influencent la cognition via la régulation de la <strong>glycémie</strong>. Le cerveau est extrêmement sensible aux fluctuations du glucose sanguin. Une hypoglycémie (chute rapide après un pic glycémique) provoque fatigue mentale, difficulté de concentration et irritabilité. Les glucides complexes à <strong>index glycémique bas</strong> (flocons d&apos;avoine, légumineuses, patates douces) fournissent un apport régulier de glucose au cerveau, maintenant une performance cognitive stable. À l&apos;inverse, les sucres raffinés provoquent des pics et des crashes glycémiques préjudiciables au focus.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Les <strong>graisses saturées</strong> et les acides gras trans ont un impact négatif documenté sur la cognition. L&apos;étude PREDIMED-PLUS (2020) a montré que la consommation excessive de graisses saturées était associée à une accélération du <strong>déclin cognitif</strong> chez les personnes âgées. Les graisses saturées augmentent la neuroinflammation, réduisent la production de <strong>BDNF</strong> et altèrent la signalisation de l&apos;insuline cérébrale. L&apos;huile d&apos;olive extra-vierge, riche en oléocanthal (un anti-inflammatoire naturel), est la graisse de choix pour la <strong>neuroprotection</strong>.
        </p>
      </section>

      {/* Section 3 */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Micronutriments essentiels : fer, zinc, B12 et magnésium</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Le <strong>fer</strong> est indispensable au transport de l&apos;oxygène vers le cerveau via l&apos;<strong>hémoglobine</strong>. Une carence en fer, même subclinique (ferritine &lt; 30 ng/mL), réduit significativement les capacités cognitives : attention, mémoire de travail et vitesse de traitement. L&apos;OMS estime que 25 % de la population mondiale est carencée en fer, ce qui en fait la carence nutritionnelle la plus répandue. Les femmes en âge de procréer, les végétariens et les sportifs d&apos;endurance sont particulièrement à risque. Les sources alimentaires incluent la viande rouge, les lentilles, les épinards et le boudin noir. L&apos;absorption est augmentée par la <strong>vitamine C</strong> et inhibée par le thé et le café pris pendant les repas. Pour approfondir ce sujet, consultez notre guide sur le <Link href="/energie-vitalite/fer-energie-carence/" className="text-blue-600 hover:text-blue-800">fer, l&apos;énergie et les carences</Link>.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Le <strong>zinc</strong> est concentré dans l&apos;hippocampe et le cortex préfrontal, où il joue un rôle critique dans la <strong>plasticité synaptique</strong> et la signalisation neuronale. Le zinc module les récepteurs NMDA (N-méthyl-D-aspartate), essentiels à la potentialisation à long terme (LTP), le mécanisme cellulaire de la mémoire et de l&apos;apprentissage. Une carence en zinc altère la neurogenèse hippocampique, la mémoire spatiale et la <strong>régulation de l&apos;humeur</strong>. Les meilleures sources alimentaires sont les huîtres (la source la plus riche), la viande de bœuf, les graines de courge et les pois chiches.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          La <strong>vitamine B12</strong> (cobalamine) est essentielle à la synthèse de la <strong>myéline</strong>, la gaine isolante qui entoure les axones neuronaux et permet la transmission rapide des signaux nerveux. Un déficit en B12 provoque une démyélinisation progressive, entraînant des troubles cognitifs, des pertes de mémoire et, dans les cas sévères, une démence réversible. Les végétaliens sont systématiquement carencés sans supplémentation car la B12 n&apos;est présente naturellement que dans les produits animaux (viande, poisson, œufs, produits laitiers). Le dosage de la B12 sérique est insuffisant : le marqueur le plus sensible est l&apos;<strong>acide méthylmalonique</strong> (MMA) urinaire.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Le <strong>magnésium</strong> intervient dans plus de 300 réactions enzymatiques cérébrales, incluant la production d&apos;ATP, la synthèse de neurotransmetteurs et la régulation des récepteurs NMDA. La forme <strong>magnésium L-thréonate</strong> (Magtein) est la seule forme ayant démontré une capacité à traverser la barrière hémato-encéphalique et à augmenter les niveaux de magnésium cérébral, améliorant la <strong>mémoire</strong> et la plasticité synaptique dans l&apos;étude de Bhatt et al. (2020). Le magnésium bisglycinate est une alternative bien tolérée pour l&apos;effet systémique. La carence en magnésium touche environ 50 % de la population occidentale en raison de l&apos;appauvrissement des sols et de la consommation de produits transformés.
        </p>
      </section>

      {/* Section 4 */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Régime MIND et régime méditerranéen</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Le <strong>régime MIND</strong> (Mediterranean-DASH Intervention for Neurodegenerative Delay) a été développé par la nutritionniste <strong>Martha Clare Morris</strong> à l&apos;Université Rush de Chicago. Il combine les éléments les plus neuroprotecteurs du régime méditerranéen et du régime DASH (Dietary Approaches to Stop Hypertension) en un modèle alimentaire spécifiquement optimisé pour la <strong>santé cérébrale</strong>. L&apos;étude fondatrice de Morris et al. (2015), portant sur 923 participants suivis pendant 4,7 ans, a montré que le régime MIND réduisait le risque de <strong>maladie d&apos;Alzheimer</strong> de 53 % chez les adhérents stricts et de 35 % chez les adhérents modérés.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Le régime MIND identifie <strong>10 catégories d&apos;aliments bénéfiques</strong> : légumes à feuilles vertes (au moins 6 portions/semaine), autres légumes (au moins 1 portion/jour), <strong>baies</strong> (au moins 2 portions/semaine, en particulier myrtilles et fraises), noix (au moins 5 portions/semaine), huile d&apos;olive (comme graisse principale), céréales complètes (3 portions/jour), poisson (au moins 1 fois/semaine), légumineuses (4 portions/semaine), volaille (2 fois/semaine) et vin (1 verre/jour, bien que ce point soit débattu).
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Il identifie aussi <strong>5 catégories à limiter</strong> : viande rouge (moins de 4 portions/semaine), beurre et margarine (moins d&apos;une cuillère à soupe/jour), fromage (moins d&apos;une portion/semaine), pâtisseries et sucreries (moins de 5 portions/semaine) et aliments frits / <strong>fast-food</strong> (moins d&apos;une fois/semaine). Ces aliments sont pro-inflammatoires et augmentent le <strong>stress oxydatif</strong> cérébral, accélérant le vieillissement neuronal.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Le <strong>régime méditerranéen</strong> classique a également montré des bénéfices cognitifs majeurs. L&apos;étude PREDIMED de <strong>Valls-Pedret et al. (2015)</strong>, un essai clinique randomisé sur 447 participants, a démontré que le régime méditerranéen enrichi en huile d&apos;olive extra-vierge ou en noix améliorait significativement la <strong>mémoire</strong> et les fonctions exécutives par rapport au régime faible en graisses. Le mécanisme passe par la réduction de la <strong>neuroinflammation</strong>, l&apos;amélioration du flux sanguin cérébral et le maintien de l&apos;intégrité de la barrière hémato-encéphalique.
        </p>
      </section>

      {/* Section 5 */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Polyphénols et antioxydants cérébraux</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Les <strong>polyphénols</strong> sont des composés bioactifs présents dans les fruits, les légumes, le thé, le cacao et le vin rouge. Plus de 8 000 polyphénols différents ont été identifiés, classés en flavonoïdes, acides phénoliques, stilbènes et lignanes. Leur rôle dans la <strong>neuroprotection</strong> est considérable : ils neutralisent les radicaux libres, réduisent la neuroinflammation, améliorent le flux sanguin cérébral et stimulent la production de <strong>BDNF</strong>. Certains traversent la barrière hémato-encéphalique et exercent des effets directs sur les neurones.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Les <strong>anthocyanines</strong> des myrtilles sont parmi les polyphénols les plus étudiés pour la cognition. L&apos;étude de <strong>Krikorian et al. (2010)</strong> a montré que la consommation quotidienne de jus de myrtilles pendant 12 semaines améliorait la <strong>mémoire</strong> chez des adultes âgés présentant des troubles cognitifs légers. Les anthocyanines traversent la barrière hémato-encéphalique, s&apos;accumulent dans l&apos;hippocampe et le cortex préfrontal, et stimulent la signalisation du <strong>BDNF</strong> et la neurogenèse. L&apos;étude de <strong>Whyte et al. (2021)</strong> a confirmé ces effets chez des adultes jeunes et en bonne santé.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Les <strong>flavanols du cacao</strong> (chocolat noir à 70 % minimum) améliorent le flux sanguin cérébral en stimulant la production d&apos;oxyde nitrique (NO) endothélial. L&apos;étude de <strong>Brickman et al. (2014)</strong> a démontré qu&apos;une supplémentation en flavanols de cacao (900 mg/jour) pendant 3 mois améliorait la fonction du <strong>gyrus denté</strong> de l&apos;hippocampe, mesurée par IRM fonctionnelle, inversant l&apos;équivalent de 20 à 30 ans de <strong>déclin mnésique</strong> lié à l&apos;âge. La <strong>curcumine</strong>, le principe actif du curcuma, est un autre polyphénol neuroprotecteur puissant. Pour en savoir plus, consultez notre article sur la <Link href="/nootropiques-naturels/curcumine-cerveau/" className="text-blue-600 hover:text-blue-800">curcumine et le cerveau</Link>.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Le <strong>resvératrol</strong> (raisin, vin rouge, baies) et l&apos;<strong>EGCG</strong> (épigallocatéchine gallate, thé vert) complètent l&apos;arsenal polyphénolique. Le resvératrol active les <strong>sirtuines</strong> (SIRT1), des protéines de longévité impliquées dans la maintenance neuronale et la résistance au stress oxydatif. L&apos;EGCG, le polyphénol le plus abondant du thé vert, traverse la BHE et a montré des effets neuroprotecteurs en réduisant l&apos;agrégation de la protéine bêta-amyloïde et en stimulant la <strong>neurogenèse</strong>. Un apport quotidien diversifié en polyphénols provenant de sources variées est la meilleure stratégie pour une neuroprotection optimale.
        </p>
      </section>

      {/* Section 6 */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Plan alimentaire type pour le cerveau</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Petit-déjeuner cérébral (7 h-8 h) :</strong> Flocons d&apos;avoine complets (glucose à libération lente) avec des <strong>myrtilles</strong> (anthocyanines), des noix de Grenoble (oméga-3 ALA) et des graines de lin moulues (lignanes). Deux œufs brouillés (choline, 300 mg par œuf) ou un smoothie vert avec épinards (folate), banane (tryptophane) et <strong>poudre de cacao</strong> cru (flavanols). Thé vert matcha (L-théanine + EGCG + caféine) ou café noir (antioxydants + caféine). Ce petit-déjeuner fournit un apport énergétique stable au cerveau pendant 4 à 5 heures.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Déjeuner neuroprotecteur (12 h-13 h) :</strong> Salade composée de légumes à feuilles vertes (épinards, roquette, mâche) riches en <strong>lutéine</strong> et folate. <strong>Saumon</strong> grillé (DHA, astaxanthine) ou sardines (DHA + calcium). Avocat (acide oléique, vitamine E). Huile d&apos;olive extra-vierge en assaisonnement (oléocanthal anti-inflammatoire). Lentilles ou pois chiches (fer végétal, zinc, fibres). Curcuma avec poivre noir (curcumine + pipérine pour augmenter l&apos;absorption de 2 000 %). Ce repas riche en <strong>acides gras bénéfiques</strong> et en antioxydants nourrit le cerveau sans provoquer de somnolence post-prandiale.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Collation cognitive (15 h-16 h) :</strong> Une poignée de <strong>noix</strong> mélangées (noix de Grenoble, amandes, noix du Brésil pour le sélénium). Un carré de <strong>chocolat noir</strong> à 85 % (flavanols de cacao). Un fruit frais (pomme, kiwi ou orange pour la vitamine C). Cette collation stabilise la glycémie pendant le creux d&apos;après-midi et fournit des <strong>polyphénols</strong> et des micronutriments neuroprotecteurs sans excès calorique.
        </p>
        <p className="text-gray-700 leading-relaxed">
          <strong>Dîner pro-sommeil (19 h-20 h) :</strong> Volaille (dinde ou poulet, riche en <strong>tryptophane</strong>, précurseur de la sérotonine et de la mélatonine) ou poisson. Légumes crucifères (brocoli, chou-fleur) riches en sulforaphane neuroprotecteur. Patate douce (glucose complexe, vitamine A). Riz complet ou quinoa (magnésium, vitamines B). Tisane de camomille (apigénine, agoniste GABA) en fin de repas. Le dîner doit être plus léger que le déjeuner et consommé au moins 2 à 3 heures avant le coucher pour optimiser la qualité du <strong>sommeil</strong> et la consolidation mnésique nocturne.
        </p>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Questions Fréquentes sur l&apos;Alimentation et le Cerveau</h2>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quels sont les meilleurs aliments pour le cerveau ?</h3>
              <p className="text-gray-700 leading-relaxed">
                Les <strong>poissons gras</strong> (saumon, sardines) riches en <strong>oméga-3 DHA</strong>, les <strong>myrtilles</strong> (anthocyanines), les <strong>noix</strong> de Grenoble, les œufs (<strong>choline</strong>), les légumes à feuilles vertes (folate, lutéine), le <strong>chocolat noir</strong> (flavanols), le curcuma (<strong>curcumine</strong>) et les légumineuses (fer, zinc, glucose complexe).
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Le glucose est-il vraiment le seul carburant du cerveau ?</h3>
              <p className="text-gray-700 leading-relaxed">
                Non. Le cerveau utilise principalement le <strong>glucose</strong> (120 g/jour), mais il peut aussi utiliser les <strong>corps cétoniques</strong> comme carburant alternatif pendant le jeûne. Les corps cétoniques sont un carburant plus &laquo;&nbsp;propre&nbsp;&raquo;, produisant moins de <strong>stress oxydatif</strong>. Le cerveau ne peut pas utiliser les acides gras directement.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Le régime MIND réduit-il vraiment le risque de déclin cognitif ?</h3>
              <p className="text-gray-700 leading-relaxed">
                Oui. L&apos;étude de <strong>Morris et al. (2015)</strong> sur 923 participants a montré que le <strong>régime MIND</strong> réduisait le risque d&apos;<strong>Alzheimer</strong> de 53 % chez les adhérents stricts. Il combine 10 catégories d&apos;aliments bénéfiques (<strong>légumes verts</strong>, baies, noix, poisson, huile d&apos;olive) et 5 catégories à limiter.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Les compléments alimentaires peuvent-ils remplacer une bonne alimentation ?</h3>
              <p className="text-gray-700 leading-relaxed">
                Non. Les aliments contiennent des milliers de composés bioactifs agissant en <strong>synergie</strong>. Les <strong>compléments</strong> sont utiles pour combler des carences spécifiques (<strong>oméga-3</strong>, <strong>B12</strong>, fer, magnésium) ou obtenir des doses thérapeutiques. L&apos;approche optimale est : alimentation de qualité + compléments ciblés.
              </p>
            </div>
            <div className="pb-2">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Le jeûne intermittent est-il bénéfique pour le cerveau ?</h3>
              <p className="text-gray-700 leading-relaxed">
                Oui, le <strong>jeûne intermittent</strong> (16:8 ou 5:2) stimule la production de <strong>BDNF</strong>, active l&apos;<strong>autophagie</strong> et favorise les corps cétoniques. L&apos;étude de <strong>Mattson et al. (2018)</strong> a montré des améliorations de la mémoire. Cependant, il ne convient pas aux personnes souffrant de troubles alimentaires, aux femmes enceintes ni aux diabétiques.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="max-w-4xl mx-auto px-4 py-8 pb-16">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Complétez Votre Nutrition Cérébrale avec les Bons Compléments</h2>
          <p className="text-lg mb-6 opacity-95">
            Découvrez nos protocoles combinant alimentation optimale et nootropiques ciblés pour maximiser votre performance cognitive au quotidien.
          </p>
          <Link
            href="/stacks-protocoles/"
            className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition inline-block"
          >
            Découvrir les Stacks &amp; Protocoles
          </Link>
        </div>
      </section>
    </main>
  );
}
