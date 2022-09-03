import { Routes, Route } from "react-router-dom";
import './App.css';
import { Layout } from "./components/layout/Layout";
import Home from "./components/Home";
import About from "./components/About";
import FAQ from "./components/FAQ";
import { NotFound } from "./components/NotFound";
import { Tour } from "./components/Tour";
import { TourList } from "./components/TourList";
import { Tourpage1 } from "./components/Tourpage1";
import { Tourpage2 } from "./components/Tourpage2";
import { TourDetail } from "./components/TourDetail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="tour" element={<Tour />} >
            <Route index element={<TourList />} />
            <Route path="Tourpage1" element={<Tourpage1 />} />
            <Route path="Tourpage2" element={<Tourpage2 />} />
            <Route path=":Id" element={<TourDetail />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
