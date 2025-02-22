import "./App.css";
import ExploreCourses from "./components/courses/ExploreCourses";
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
      <section>
        <ExploreCourses />
      </section>
    </>
  );
}

export default App;
