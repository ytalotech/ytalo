import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Localization from "./components/Localization";
import Menu from "./components/Menu";
import Services from "./components/Services";

import './styles/main.css';

function App() {
  return (
    <div className="App">
      <Menu />
      {/* <Services /> */}
      <Contact />
      {/* <Localization /> */}
      <Footer />
    </div>
  )
}

export default App
