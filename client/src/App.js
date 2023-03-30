import react from "react";
import { Header } from "./components/Global/Header";
import { Navbar } from "./components/Global/Navbar";
import { Home } from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
