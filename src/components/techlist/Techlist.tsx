
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

    <div className="container mx-auto  px-6 py-10">
      <div className="text-center pb-8 font-inter">
        <h2 className="font-extrabold text-2xl text-left sm:text-3xl md:text-4xl whitespace-normal">
  Explore the <span className="bg-linear-to-r from-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">Technologies</span>
</h2>
<p className="text-[#6B7280] pt-2 text-left  text-sm sm:text-base">
  Pick one technology per category to build your ideal stack.
</p>
      </div>

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
   </div> 
  );
};

export default Techlist;