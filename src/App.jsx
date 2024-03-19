import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import Home from "./Pages/HomePage";
import Palette from "./Pages/Palette";
import Popular from "./Pages/Popular";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Palette />} />
        <Route path="/popular" element={<Popular />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
