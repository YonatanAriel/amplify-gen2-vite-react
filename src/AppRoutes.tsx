import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Yonatan from "./pages/Yonatan";
import Yaron from "./pages/Yaron";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/yonatan" element={<Yonatan />} />
      <Route path="/yaron" element={<Yaron />} />
    </Routes>
  );
}
export default AppRoutes;
