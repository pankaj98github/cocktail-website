import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import SearchBox from "./components/SearchBox";
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Layout>
                <SearchBox />
                <HomePage />
              </Layout>
            </>
          }
        />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
