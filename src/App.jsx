import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./components/pages/HomePage";
import RegisterPage from "./components/pages/RegisterPage";
import LoginPage from "./components/pages/LoginPage";
import VenuePage from "./components/pages/VenuePage";
import "bootstrap/dist/css/bootstrap.min.css";
import BookVenue from "./components/venues/BookVenues";
import BookedVenues from "./components/venues/BookedVenues";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/RegisterPage" element={<RegisterPage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/venues/:id" element={<VenuePage />} />
        <Route path="/book-venue/:id" element={<BookVenue />} />
        <Route path="/booked-venues" element={<BookedVenues />} />
      </Route>
    </Routes>
  );
}

export default App;
