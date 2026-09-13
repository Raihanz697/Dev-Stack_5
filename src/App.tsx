import { Suspense, useState } from "react"
import Banner from "./components/Banner"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Techlist from "./components/techlist/Techlist"
import type { Icard } from "./Types/Techcard"
import Sidebar from "./components/Sidebar"
import { toast ,  ToastContainer } from "react-toastify"

const cardFetch = async () :Promise<Icard []> =>{
  const res =await fetch('/data.json')
  const data = await res.json();
  return data;
}

function App() {
  const [cardPromise] = useState(() => cardFetch());
  const [stack, setStack] = useState<Icard[]>([]);   

  const handleAddToStack = (card: Icard) => {
    const isAlreadyAdded = stack.some((item) => item.id === card.id);

    if (isAlreadyAdded) {
      toast.warning(`${card.name} Already added!`);
      return;
    }

    setStack((prev) => [...prev, card]);
    toast.success(`${card.name} Technology added!`);
  };

  const handleRemove = (id: string) => {
    const removed = stack.find((item) => item.id === id);
    setStack((prev) => prev.filter((item) => item.id !== id));
    if (removed) toast.info(`${removed.name} Technology removed!`);
  };

  const handleRemoveAll = () => {
    setStack([]);
    toast.error("All technologies removed from your stack.");
  };

  return (
    <>

    <Navbar />
    <Banner />


    <main className="container mx-auto flex flex-col lg:flex-row gap-8 px-6 py-10 items-start">
        <div className="flex-1">
          <Suspense fallback={<h2>Loading...</h2>}>
            <Techlist
              cardPromise={cardPromise}
              stack ={stack}
              onAddToStack={handleAddToStack}
            />
          </Suspense>
        </div>

        <div className="lg:w-80 shrink-0">
          <Sidebar
            stack={stack}
            onRemove={handleRemove}
            onRemoveAll={handleRemoveAll} />
        </div>
      </main>

    <Footer />
    <ToastContainer position="top-right" autoClose={3000} />
    </>
  )
}

export default App
