import Highlights from "./components/Highlights";
import { Landing } from "./components/Landing";
import Nav from "./components/Nav";


function App() {
  return (
    <div className="App">
      <header>
        <Nav/>
        <Landing/>
        <Highlights/>
      </header>
    </div>
  );
}

export default App;
