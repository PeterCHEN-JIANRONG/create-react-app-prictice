import { Routes, Route, Outlet } from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import About from "./components/About";
import FAQ from "./components/FAQ";
import { NotFound } from "./components/NotFound";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

function Layout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="faq" element={<FAQ />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
