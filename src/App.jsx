import "./App.css";
import Charts from "./components/Charts/Charts";
// import DaisyNav from "./components/DaisyNav/DaisyNav";
import Navbar from "./components/Navbar/Navbar";

import PriceOptions from "./components/PriceOptions/PriceOptions";

function App() {
  return (
    <>
      <Navbar></Navbar>
      {/* <DaisyNav></DaisyNav> */}
      <h1 className="text-7xl bg-rose-300 text-white">Vite + React</h1>
      <PriceOptions></PriceOptions>
      <Charts></Charts>
    </>
  );
}

export default App;
