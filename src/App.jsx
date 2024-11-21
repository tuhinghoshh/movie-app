import "./App.css";
import HomePages from "./home/HomePages";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SinglePage from "./components/watch/SinglePage";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/singlepage/:id" element={<SinglePage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
