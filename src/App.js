import "./App.css";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductReview from "./components/ProductReview/ProductReview";
import Inventory from "./components/Inventory/Inventory";
import NotFound from "./components/PageNotFound/NotFound";
import PlaceOder from "./components/PlaceOder/PlaceOder";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import AuthProvider from "./context/AuthProvider";
import ProtectRouter from "./components/ProtectRouter/ProtectRouter";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Routes>
            <Route exact path="/shop" element={<Shop></Shop>}></Route>
            <Route exact path="/" element={<Shop></Shop>}></Route>
            <Route
              exact
              path="/productReview"
              element={<ProductReview></ProductReview>}
            ></Route>
            <Route element={<ProtectRouter />}>
              <Route exact path="/inventory" element={<Inventory />}></Route>
              <Route exact path="/PlaceOder" element={<PlaceOder />}></Route>
            </Route>

            <Route exact path="/login" element={<Login></Login>}></Route>
            <Route
              exact
              path="/register"
              element={<Register></Register>}
            ></Route>
            <Route exact path="*" element={<NotFound></NotFound>}></Route>
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
