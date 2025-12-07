

import { FlippingCard } from "@/components/ui/flipping-card";
import { GooeyText } from "@/components/ui/gooey-text-morphing";
interface CardData {
  id: string;
  front: {
    imageSrc: string;
    imageAlt: string;
    title: string;
    description: string;
  };
  back: {
    description: string;
    buttonText: string;
  };
}

// Data split into two distinct batches
const problemsData: CardData[] = [
  {
    id: "problem-revenue",
    front: {
      imageSrc: "/assets/unhappy-client.jpg",
      imageAlt: "Revenue Loss",
      title: "Perte de Revenus",
      description: "72 000 MAD/an perdus à cause des ruptures et ordonnances manquées.",
    },
    back: {
      description: "Si seulement 2 ordonnances sont perdues par jour, vous perdez 6 000 MAD/mois. Les clients insatisfaits ne reviennent plus.",
      buttonText: "Calculer mes pertes",
    },
  },
  {
    id: "problem-time",
    front: {
      imageSrc: "/assets/pharmacist-surcharged.jpg",
      imageAlt: "Time wasted",
      title: "Temps Gaspillé",
      description: "1h/jour perdue à gérer le stress au comptoir et les manques de stock.",
    },
    back: {
      description: "Votre équipe s'épuise à justifier les manques. Les files d'attente s'allongent, créant un environnement de travail stressant.",
      buttonText: "Libérer mon équipe",
    },
  },
  {
    id: "problem-monopoly",
    front: {
      imageSrc: "/assets/stagnant-stock.jpg",
      imageAlt: "Stagnant growth",
      title: "Croissance Stagnante",
      description: "La parapharmacie dort pendant que vos patients achètent ailleurs.",
    },
    back: {
      description: "Sans stratégie d'engagement, le panier moyen reste faible. Vos concurrents en ligne capturent vos parts de marché.",
      buttonText: "Reprendre l'avantage",
    },
  },
];

const solutionsData: CardData[] = [
  {
    id: "solution-accessibility",
    front: {
      imageSrc: "/assets/commander.jpg",
      imageAlt: "Digital Access",
      title: "Accessibilité Digitale",
      description: "Recevez les commandes directement sur votre canal en ligne dédié.",
    },
    back: {
      description: "Les patients commandent à distance. Moins d'appels, moins d'allers-retours, et une traçabilité complète de chaque vente.",
      buttonText: "Activer le canal",
    },
  },
  {
    id: "solution-automation",
    front: {
      imageSrc: "/assets/automatiser.jpg",
      imageAlt: "AI Automation",
      title: "Automatisation IA",
      description: "Préparez les commandes sans stress avec l'assistance intelligente.",
    },
    back: {
      description: "Validez et préparez les commandes efficacement. Votre équipe retrouve du temps pour le conseil patient de qualité.",
      buttonText: "Automatiser mon stock",
    },
  },
  {
    id: "solution-loyalty",
    front: {
      imageSrc: "/assets/consulter.jpg",
      imageAlt: "Customer Loyalty",
      title: "Fidélisation Active",
      description: "Améliorez la satisfaction et boostez les points fidélité.",
    },
    back: {
      description: "Le patient gagne en satisfaction. Incorporez des rappels et prévisions automatiques pour pérenniser vos ventes.",
      buttonText: "Fidéliser maintenant",
    },
  },
];

export default function SolutionsGrid() {
  return (

    <>
    <GooeyText
        texts={["Pharmac IA n", "Résout", "Vos", "Problèmes"]}
        morphTime={2}
        cooldownTime={0.7}
        className="font-bold py-10"
      />

    <div className="flex flex-col items-center p-8 space-y-16">
      {/* SECTION 1: PROBLEMATIQUE */}
      <section className="w-full max-w-6xl py-10">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problemsData.map((card) => (
            <FlippingCard
              key={card.id}
              width={340}
              height={400}
              frontContent={<GenericCardFront data={card.front} />}
              backContent={<GenericCardBack data={card.back} />}
            />
          ))}
        </div>
      </section>
  </div>

  <GooeyText
        texts={["Comment", "Pharmac IA n", "Aide"]}
        morphTime={2}
        cooldownTime={1}
        className="font-bold py-10 pt-20 font-orbitron"
      />

  <div className="flex flex-col items-center p-8 space-y-16">
    <section className="w-full max-w-6xl py-10 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {solutionsData.map((card) => (
          <FlippingCard
            key={card.id}
            width={340}
            height={400}
            frontContent={<GenericCardFront data={card.front} />}
            backContent={<GenericCardBack data={card.back} />}
          />
        ))}
      </div>
    </section>
  </div>
      {/* SECTION 2: SOLUTION */}

    </>
  );
}

function GenericCardFront({ data }: { data: CardData["front"] }) {
  return (
    <div className="flex flex-col h-full w-full p-4">
      <img
        src={data.imageSrc}
        alt={data.imageAlt}
        className="w-full h-auto object-cover flex-grow min-h-0 rounded-md"
      />
      <div className="p-2">
        <h3 className="text-base font-semibold mt-2">{data.title}</h3>
        <p className="text-[13.5px] mt-2 text-muted-foreground leading-snug">
          {data.description}
        </p>
      </div>
    </div>
  );
}

function GenericCardBack({ data }: { data: CardData["back"] }) {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full p-6 text-center">
      <p className="text-[14px] leading-relaxed text-muted-foreground mb-auto">
        {data.description}
      </p>
      <button className="mt-6 bg-foreground text-background px-4 py-2 rounded-md text-[13.5px] w-full font-medium transition-transform hover:scale-[1.02]">
        {data.buttonText}
      </button>
    </div>
  );
}
