import { CardSpotlight } from "@/components/ui/card-spotlight";

export function CardSpotlightDemo() {
  const cardData = [
    {
      title: "Perte de revenus",
      description: "Impact sur la rentabilité",
      steps: [
        "72 000 MAD/an perdus (estimation)",
        "Calcul: 2 ordonnances perdues/jour × 100 MAD",
        "Clients repartent insatisfaits",
        "Perte de confiance en votre pharmacie",
      ],
      footer: "Une perte sèche de 6 000 MAD/mois sur des ventes manquées.",
    },
    {
      title: "Temps gaspillé",
      description: "Gestion et organisation",
      steps: [
        "1h/jour gaspillée par votre équipe",
        "Temps perdu à justifier le manque de stock",
        "Files d'attente et stress au comptoir",
        "Gestion des conflits clients",
      ],
      footer: "Moins d'efficacité quotidienne pour toute l'équipe officinale.",
    },
    {
      title: "Perte du monopole",
      description: "Croissance et Parapharmacie",
      steps: [
        "Stock de parapharmacie dormant",
        "Patients achètent les produits ailleurs",
        "Chiffre d'affaires sous-exploité",
        "Aucune stratégie d'engagement client",
      ],
      footer: "Résultat : Panier moyen faible et visites irrégulières.",
    },
  ];

  return (
    <div className="flex flex-wrap gap-8 justify-center items-stretch py-10">
      {cardData.map((card, index) => (
        <CardSpotlight key={index} className="w-96 h-auto min-h-96">
          <p className="text-xl font-bold relative z-20 mt-2 text-white">
            {card.title}
          </p>
          <div className="text-neutral-200 mt-4 relative z-20">
            <span className="text-blue-400 font-medium text-sm uppercase tracking-wider">
              {card.description}
            </span>
            <ul className="list-none mt-4 space-y-2">
              {card.steps.map((step, stepIndex) => (
                <Step key={stepIndex} title={step} />
              ))}
            </ul>
          </div>
          <p className="text-neutral-400 mt-6 relative z-20 text-sm border-t border-neutral-800 pt-4">
            {card.footer}
          </p>
        </CardSpotlight>
      ))}
    </div>
  );
}

// --- Helper Components ---

const Step = ({ title }: { title: string }) => {
  return (
    <li className="flex gap-2 items-start">
      <CheckIcon />
      <p className="text-neutral-100 text-sm">{title}</p>
    </li>
  );
};

const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5 text-red-500 mt-0.5 shrink-0" 
    >
      {/* Note: I changed color to text-red-500 to match the 'Pain Point' theme, 
          change back to text-blue-500 if you prefer positive checks. */}
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
        fill="currentColor"
        strokeWidth="0"
      />
    </svg>
  );
};