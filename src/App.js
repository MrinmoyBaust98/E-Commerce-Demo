import "./App.css";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductReview from "./components/ProductReview/ProductReview";
import Inventory from "./components/Inventory/Inventory";
import NotFound from "./components/PageNotFound/NotFound";
import PlaceOder from "./components/PlaceOder/PlaceOder";

function App() {
  return (
    <div>
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
          <Route
            exact
            path="/inventory"
            element={<Inventory></Inventory>}
          ></Route>
          <Route
            exact
            path="/PlaceOder"
            element={<PlaceOder></PlaceOder>}
          ></Route>
          <Route exact path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
