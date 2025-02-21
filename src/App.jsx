import "./App.css";
import Home from "./components/main1/Home";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <main>
        <Home />
      </main>
    </>
  );
}

export default App;
