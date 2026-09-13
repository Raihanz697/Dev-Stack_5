import { Suspense } from "react"
import Banner from "./components/Banner"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Techlist from "./components/techlist/Techlist"
import type { Icard } from "./Types/Techcard"

const cardFetch = async () :Promise<Icard []> =>{
  const res =await fetch('/data.json')
  const data = await res.json();
  return data;
}

function App() {
 const cardPromise = cardFetch();

  return (
    <>

    <Navbar />
    <Banner />
    <Suspense fallback={<h2>Loading...</h2>}>
    <Techlist cardPromise = {cardPromise} />
    </Suspense>
    <Footer />
    </>
  )
}

export default App
