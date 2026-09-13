import type { Icard } from "../../Types/Techcard";

interface TechcardProps {
  card: Icard;
  stack: Icard[];
  onAddToStack: (card: Icard) => void;
}

const badgeStyles: Record<string, string> = {
  Popular: "bg-sky-100 text-sky-600",
  Versatile: "bg-emerald-100 text-emerald-600",
  Fast: "bg-orange-100 text-orange-600",
  Cache: "bg-pink-100 text-pink-600",
};

const Techcard = ({ card, stack, onAddToStack }: TechcardProps) => {
  const isAdded = stack.some((item) => item.id === card.id);

  return (
    
    <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">

      <div className="flex items-start justify-between">
        <img src={card.icon} alt={card.name} className="h-10 w-10" />
        <span
          className={`text-xs font-semibold px-3 py-1 rounded-full ${badgeStyles[card.badge]
            }`}
        >
          {card.badge}
        </span>
      </div>

      <h3 className="text-xl font-bold text-[#0F172A] mt-3">{card.name}</h3>

      <p className="text-sm text-[#64748B] leading-relaxed mt-1.5">
        {card.description}
      </p>


      <div className="flex items-center flex-wrap gap-3 mt-4">
        <span className="bg-slate-100 text-[#64748B] text-xs font-medium px-3 py-1 rounded-full">
          {card.category}
        </span>
        <span className="text-xs font-medium text-[#64748B]">
          {card.difficulty}
        </span>
        <span className="ml-auto flex items-center gap-1 text-sm font-semibold text-[#0F172A]">
          <span className="text-amber-400">★</span>
          {card.rating.toFixed(1)}
        </span>
      </div>

      <button
        onClick={() => onAddToStack(card)}
        disabled={isAdded}
        className={`mt-5 w-full rounded-xl py-3 text-sm font-semibold  transition-colors ${isAdded
            ? "bg-slate-200 text-[#64748B] cursor-not-allowed"
            : "bg-slate-900 text-white hover:bg-black"
          }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
};

export default Techcard;