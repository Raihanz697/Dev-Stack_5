// import { IoClose } from "react-icons/io5";


// import type { Icard } from "../Types/Techcard";

// interface SidebarProps {
//   stack: Icard[];
//   onRemove: (id: string) => void;
//   onRemoveAll: () => void;
// }

// const Sidebar = ({ stack, onRemove, onRemoveAll }: SidebarProps) => {
//   return (
//     <aside className="card bg-base-100 border border-slate-200 p-5 h-fit">
//       <h3 className="font-bold text-lg">Your Stack</h3>
//       <p className="text-sm text-slate-500 mb-4">
//         {stack.length} {stack.length === 1 ? "Technology" : "Technologies"}{" "}
//         Selected
//       </p>

//       {stack.length === 0 ? (
//         <p className="text-sm text-slate-400 text-center py-6 border border-dashed rounded-lg">
//           Your stack is empty.
//         </p>
//       ) : (
//         <ul className="space-y-3">
//           {stack.map((item) => (
//             <li
//               key={item.id}
//               className="flex items-center gap-3 bg-slate-50 rounded-lg p-3"
//             >
//               <img src={item.icon} alt={item.name} className="h-8 w-8" />
//               <div className="flex-1">
//                 <p className="text-sm font-semibold">{item.name}</p>
//                 <p className="text-xs text-slate-400">{item.category}</p>
//               </div>
//               <button
//                 onClick={() => onRemove(item.id)}
//                 aria-label={`Remove ${item.name}`}
//               >
//                 <IoClose />
//               </button>
//             </li>
//           ))}
//         </ul>
//       )}

//       {stack.length > 0 && (
//         <button
//           onClick={onRemoveAll}
//           className="btn btn-outline w-full mt-4 rounded-lg"
//         >
//           Remove All
//         </button>
//       )}
//     </aside>
//   );
// };

// export default Sidebar;






import { IoClose } from "react-icons/io5";
import type { Icard } from "../Types/Techcard";

interface SidebarProps {
  stack: Icard[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

const Sidebar = ({ stack, onRemove, onRemoveAll }: SidebarProps) => {
  return (
    <aside className="card bg-base-100 border border-slate-200 p-5 h-fit">
      <h3 className="font-bold text-lg">Your Stack</h3>
      <p className="text-sm text-slate-500 mb-4">
        {stack.length} {stack.length === 1 ? "Technology" : "Technologies"}{" "}
        Selected
      </p>

      {stack.length === 0 ? (
        <p className="text-sm text-slate-400 text-center py-6 border border-dashed rounded-lg">
          Your stack is empty.
        </p>
      ) : (
        <ul className="space-y-3">
          {stack.map((item) => (
            <li
              key={item.id}
              className="flex items-center gap-3 bg-slate-50 rounded-lg p-3"
            >
              <img src={item.icon} alt={item.name} className="h-8 w-8" />
              <div className="flex-1">
                <p className="text-sm font-semibold">{item.name}</p>
                <p className="text-xs text-slate-400">{item.category}</p>
              </div>
              <button
                onClick={() => onRemove(item.id)}
                aria-label={`Remove ${item.name}`}
              >
                <IoClose />
              </button>
            </li>
          ))}
        </ul>
      )}

      {stack.length > 0 && (
        <button
          onClick={onRemoveAll}
          className="btn btn-outline w-full mt-4 rounded-lg"
        >
          Remove All
        </button>
      )}
    </aside>
  );
};

export default Sidebar;