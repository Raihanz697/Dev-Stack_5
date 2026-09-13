
import { use } from "react";
import type { Icard } from "../../Types/Techcard";
import Techcard from "./Techcard";


interface TechlistProps {
  cardPromise: Promise<Icard[]>;
  stack: Icard[];                        
  onAddToStack: (card: Icard) => void;
}

const Techlist = ({ cardPromise, stack, onAddToStack }: TechlistProps) => {
    const cards = use (cardPromise)
  

  return (
     <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cards.map((card) => (
        <Techcard
          key={card.id}
          card={card}
          stack={stack}                    
          onAddToStack={onAddToStack}        
        />
      ))}
    </section>
  );
};

export default Techlist;