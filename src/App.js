import "./App.css";
import "./index.css";
import Books from "./components/Books";
import Challenge1 from "./components/Challenge1-2";
import Steps from "./components/Steps";
import Datecounter from "./components/Datecounter";
import Fleshcards from "./components/Fleshcards";

export default function App() {
  return (
    <div>
      <h2>Challeng 1 and 2</h2>
      <Challenge1 />
      {/* <Books /> */}
      <h2>Steps</h2>
      <Steps />
      <h2>Data Counter</h2>
      <Datecounter />
      <h2>Fleshcards</h2>
      <Fleshcards />
    </div>
  );
}
