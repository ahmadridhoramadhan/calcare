import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";

import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";

import Calculator from "./pages/Calculator";
import TambahDataAnak from "./pages/TambahDataAnak";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

function App() {
  const location = useLocation()

  return (
    <div className='flex flex-col min-h-screen overflow-hidden container mx-auto'>
      <Header />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/TambahDataAnak" element={<TambahDataAnak />} />

          {/* auth */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

        </Routes>
      </AnimatePresence>

      <Footer />
    </div>
  );
}

export default App;
