import { use } from "react";
import type { Icard } from "../../Types/Techcard";


interface TechlistProps {
  cardPromise: Promise<Icard []>;
}

const Techlist = ({ cardPromise }: TechlistProps) => {
    const Techlist = use(cardPromise)
  console.log(Techlist,'techlist');

  return (
    <div>
      
    </div>
  );
};

export default Techlist;